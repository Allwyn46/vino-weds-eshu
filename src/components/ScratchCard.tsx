import { useEffect, useRef, useState } from 'react'
import confetti from 'canvas-confetti'

export default function ScratchCard() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const containerRef = useRef<HTMLDivElement | null>(null)

    const [message, setMessage] = useState('THURSDAY, JUN 11, 2026')
    const [isCleared, setIsCleared] = useState(false)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const context = canvas.getContext('2d')
        if (!context) return

        const isSafari = /^((?!chrome|android).)*safari/i.test(
            navigator.userAgent
        )

        let positionX = 0
        let positionY = 0
        let clearDetectionTimeout: number | null = null
        let setImageTimeout: number | null = null

        const devicePixelRatio = window.devicePixelRatio || 1

        const canvasWidth = canvas.offsetWidth * devicePixelRatio
        const canvasHeight = canvas.offsetHeight * devicePixelRatio

        canvas.width = canvasWidth
        canvas.height = canvasHeight

        context.scale(devicePixelRatio, devicePixelRatio)

        // Fill scratch layer
        context.fillStyle = '#000'
        context.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

        context.globalCompositeOperation = 'destination-out'

        const getPosition = (e: PointerEvent) => {
            const rect = canvas.getBoundingClientRect()

            return {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            }
        }

        const plotLine = (
            ctx: CanvasRenderingContext2D,
            x1: number,
            y1: number,
            x2: number,
            y2: number
        ) => {
            const diffX = Math.abs(x2 - x1)
            const diffY = Math.abs(y2 - y1)
            const dist = Math.sqrt(diffX * diffX + diffY * diffY)

            const step = dist / 50

            let i = 0

            while (i < dist) {
                const t = Math.min(1, i / dist)

                const x = x1 + (x2 - x1) * t
                const y = y1 + (y2 - y1) * t

                ctx.beginPath()
                ctx.arc(x, y, 18, 0, Math.PI * 2)
                ctx.fill()

                i += step
            }
        }

        const checkBlackFillPercentage = () => {
            const imageData = context.getImageData(
                0,
                0,
                canvasWidth,
                canvasHeight
            )

            const pixelData = imageData.data

            let transparentPixels = 0

            for (let i = 3; i < pixelData.length; i += 4) {
                if (pixelData[i] === 0) {
                    transparentPixels++
                }
            }

            const clearedPercent =
                (transparentPixels * 100) / (canvasWidth * canvasHeight)

            if (clearedPercent >= 45) {
                setIsCleared(true)

                confetti({
                    particleCount: 100,
                    spread: 90,
                    origin: { y: 0.6 },
                })

                setMessage('🎉 You got a $50 Apple Gift Card!')
            }
        }

        const plot = (e: PointerEvent) => {
            const { x, y } = getPosition(e)

            plotLine(context, positionX, positionY, x, y)

            positionX = x
            positionY = y

            if (isSafari) {
                if (setImageTimeout) {
                    clearTimeout(setImageTimeout)
                }

                setImageTimeout = window.setTimeout(() => {}, 5)
            }
        }

        const handlePointerDown = (e: PointerEvent) => {
            const pos = getPosition(e)

            positionX = pos.x
            positionY = pos.y

            if (clearDetectionTimeout) {
                clearTimeout(clearDetectionTimeout)
            }

            canvas.addEventListener('pointermove', plot)

            const handlePointerUp = () => {
                canvas.removeEventListener('pointermove', plot)

                clearDetectionTimeout = window.setTimeout(() => {
                    checkBlackFillPercentage()
                }, 500)

                window.removeEventListener('pointerup', handlePointerUp)
            }

            window.addEventListener('pointerup', handlePointerUp)
        }

        canvas.addEventListener('pointerdown', handlePointerDown)

        return () => {
            canvas.removeEventListener('pointerdown', handlePointerDown)
        }
    }, [])

    return (
        <div className="scratch-card">
            <div
                ref={containerRef}
                className={`scratch-card-cover-container ${
                    isCleared ? 'clear hidden' : ''
                }`}
            >
                <canvas ref={canvasRef} className="scratch-card-canvas" />
            </div>

            <img
                className="scratch-card-image"
                src="/gift-card.png"
                alt="Gift Card"
            />

            <p className="scratch-card-text">{message}</p>
        </div>
    )
}
