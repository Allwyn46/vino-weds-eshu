import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function DoorLoader() {
    const leftDoor = useRef(null)
    const rightDoor = useRef(null)
    const loader = useRef(null)

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const handleLoad = () => {
            setLoaded(true)
        }

        window.addEventListener('load', handleLoad)

        return () => {
            window.removeEventListener('load', handleLoad)
        }
    }, [])

    useEffect(() => {
        if (!loaded) return

        const tl = gsap.timeline()

        tl.to(leftDoor.current, {
            x: '-100%',
            duration: 2,
            ease: 'power3.inOut',
        })
            .to(
                rightDoor.current,
                {
                    x: '100%',
                    duration: 2,
                    ease: 'power3.inOut',
                },
                '<'
            )
            .to(loader.current, {
                opacity: 0,
                pointerEvents: 'none',
                duration: 0.5,
            })
    }, [loaded])

    return (
        <div ref={loader} className="loader">
            <div ref={leftDoor} className="door left-door" />
            <div ref={rightDoor} className="door right-door" />
        </div>
    )
}
