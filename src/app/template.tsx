'use client'

import { transitionPageIn } from '@/components/utils/TransitionPage'
import { useEffect } from 'react'

import scss from '@/app/scss/components/template.module.scss'

export default function Template({children}: {children: React.ReactNode}) {

    useEffect( () => {
        transitionPageIn()
    }, [])

    return (
        <>
            <div>
                <div id='box-1' className={`${scss.template} box min-h-screen bg-neutral-950 fixed top-0 left-0 w-1/4`}>
                    <span>2</span>
                </div>
                <div id='box-2' className={`${scss.template} box min-h-screen bg-neutral-950 fixed top-0 left-1/4 w-1/4`}>
                    <span>0</span>
                </div>
                <div id='box-3' className={`${scss.template} box min-h-screen bg-neutral-950 fixed top-0 left-2/4 w-1/4`}>
                    <span>2</span>
                </div>
                <div id='box-4' className={`${scss.template} box min-h-screen bg-neutral-950 fixed top-0 left-3/4 w-1/4`}>
                    <span>5</span>
                </div>
                {children}
            </div>
        </>
    )
}