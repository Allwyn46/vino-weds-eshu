import { useState, useEffect, useRef } from 'react'

interface TimeLeft {
    d: number
    h: number
    m: number
    s: number
}

const Counter = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

    useEffect(() => {
        function updateCountdown() {
            const target = new Date('2026-05-31T10:00:00+05:30')
            const now = new Date()
            const diff = target.getTime() - now.getTime()

            if (diff <= 0) {
                setTimeLeft(null)
                if (intervalRef.current !== null) {
                    clearInterval(intervalRef.current)
                }
                return
            }

            setTimeLeft({
                d: Math.floor(diff / 86400000),
                h: Math.floor((diff % 86400000) / 3600000),
                m: Math.floor((diff % 3600000) / 60000),
                s: Math.floor((diff % 60000) / 1000),
            })
        }

        updateCountdown()
        intervalRef.current = setInterval(updateCountdown, 1000)

        return () => {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current)
            }
        }
    }, [])

    const pad = (n: number) => String(n).padStart(2, '0')

    return (
        <section id="countdown">
            <p className="section-label">✨ Counting Down to</p>
            <h2 className="section-title">The Big Day</h2>
            <div id="countdown-grid" className="countdown-grid">
                {timeLeft === null ? (
                    <p className="celebration-msg">
                        ✨ The celebration has begun! ✨
                    </p>
                ) : (
                    <>
                        <div className="count-card">
                            <div className="count-num">{pad(timeLeft.d)}</div>
                            <div className="count-label">Days</div>
                        </div>
                        <div className="count-card">
                            <div className="count-num">{pad(timeLeft.h)}</div>
                            <div className="count-label">Hours</div>
                        </div>
                        <div className="count-card">
                            <div className="count-num">{pad(timeLeft.m)}</div>
                            <div className="count-label">Minutes</div>
                        </div>
                        <div className="count-card">
                            <div className="count-num">{pad(timeLeft.s)}</div>
                            <div className="count-label">Seconds</div>
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}

export default Counter
