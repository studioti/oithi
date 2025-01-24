'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap  from 'gsap'

export default function Cursor() {

    const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

    gsap.config({
        autoSleep: 60,
        force3D: false,
        nullTargetWarn: false,
        units: { left: "%", top: "%", rotation: "rad" },
    })

    const cursorRef = useRef<HTMLDivElement>(null)
    const followRef = useRef<HTMLDivElement>(null)

    const moveCursor = (e: MouseEvent): void => {
        gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: .3
        })
        gsap.to(followRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: .4
        })
    }

    useIsomorphicLayoutEffect( () => {

        const mouse = document.getElementById('mouse')
        const url = document.querySelectorAll('a')

        const onMouseEnter = () => {
            // gsap.to(mouse, {scale: 1.5})
        }
        const onMouseLeave = () => {
            gsap.to(mouse, {scale: 1})
        }

        gsap.set(cursorRef, {})
        gsap.set(followRef, {})

        window.addEventListener('mousemove', moveCursor)
        
        url.forEach( (item) => {
            item.addEventListener('mouseenter', onMouseEnter)
            item.addEventListener('mouseleave', onMouseLeave)
        })

    }, [])

    return (
        <>
            <div ref={cursorRef} className='cursor' id='mouse'></div>
            {/* <div ref={followRef} className='f-cursor'></div> */}
        </>
    )
}