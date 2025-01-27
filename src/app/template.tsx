'use client'

import { transitionPageIn } from '@/components/utils/TransitionPage'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

import scss from '@/app/scss/components/template.module.scss'
import ScrollProgress from '@/components/utils/motion/ScrollProgress'

export default function Template({children}: {children: React.ReactNode}) {
    const router = usePathname()

    useEffect( () => {
        transitionPageIn(router)
    }, [router])

    return (
        <>
            <div>
                <ScrollProgress />
                <div id='box-1' className={`${scss.template} box min-h-screen bg-neutral-950 fixed top-0 left-0 w-1/4`}>
                    <span>{router == '/' ? 2 : 'C'}</span>
                </div>
                <div id='box-2' className={`${scss.template} box min-h-screen bg-neutral-950 fixed top-0 left-1/4 w-1/4`}>
                <span>{router == '/' ? 0 : 'A'}</span>
                </div>
                <div id='box-3' className={`${scss.template} box min-h-screen bg-neutral-950 fixed top-0 left-2/4 w-1/4`}>
                <span>{router == '/' ? 2 : 'S'}</span>
                </div>
                <div id='box-4' className={`${scss.template} box min-h-screen bg-neutral-950 fixed top-0 left-3/4 w-1/4`}>
                <span>{router == '/' ? 5 : 'E'}</span>
                </div>
                {children}
            </div>
        </>
    )
}