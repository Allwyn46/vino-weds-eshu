import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function DoorLoader() {
    const leftDoor = useRef<HTMLDivElement | null>(null)
    const rightDoor = useRef<HTMLDivElement | null>(null)
    const loader = useRef<HTMLDivElement | null>(null)

    const [loaded, setLoaded] = useState(false)
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
        const handleLoad = () => setLoaded(true)

        if (document.readyState === 'complete') {
            handleLoad()
        } else {
            window.addEventListener('load', handleLoad)
        }

        return () => {
            window.removeEventListener('load', handleLoad)
        }
    }, [])

    useEffect(() => {
        if (!loaded) return

        const tl = gsap.timeline()

        tl.to(
            leftDoor.current,
            {
                xPercent: -100,
                duration: 1.8,
                ease: 'power4.inOut',
            },
            0
        )
            .to(
                rightDoor.current,
                {
                    xPercent: 100,
                    duration: 1.8,
                    ease: 'power4.inOut',
                },
                0
            )
            .to(
                loader.current,
                {
                    opacity: 0,
                    duration: 0.4,
                    pointerEvents: 'none',
                    onComplete: () => {
                        setHidden(true)
                    },
                },
                '-=0.2'
            )

        return () => {
            tl.kill()
        }
    }, [loaded])

    if (hidden) return null

    return (
        <div ref={loader} className="loader">
            <div ref={leftDoor} className="door left-door" />
            <div ref={rightDoor} className="door right-door" />
        </div>
    )
}
