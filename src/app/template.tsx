'use client'

import { transitionPageIn } from '@/components/utils/TransitionPage'
import { memo, useEffect } from 'react'
import { usePathname } from 'next/navigation'

import scss from '@/app/scss/components/template.module.scss'
import ScrollProgress from '@/components/utils/motion/ScrollProgress'
import error from 'next/error'

const Template = ({children}: {children: React.ReactNode}) => {
    
    const router = usePathname()
    const pathURL = router.split('/')

    useEffect( () => {
        transitionPageIn(router)
    }, [router])

    return (
        <>
            <ScrollProgress />
            <div id='box-1' className={`${scss.template} box min-h-screen bg-neutral-950 fixed top-0 left-0 w-1/4`}>
                {
                    router === '/'
                    ? <span>2</span>
                    : router === '/lgpd'
                    ? <span>L</span>
                    : pathURL[1] === 'cases'
                    ? <span>C</span>
                    : error
                    ? <span>O</span>
                    : ''
                }
            </div>
            <div id='box-2' className={`${scss.template} box min-h-screen bg-neutral-950 fixed top-0 left-1/4 w-1/4`}>
                {
                    router === '/'
                    ? <span>0</span>
                    : router === '/lgpd'
                    ? <span>G</span>
                    : pathURL[1] === 'cases'
                    ? <span>A</span>
                    : error
                    ? <span>P</span>
                    : ''
                }
            </div>
            <div id='box-3' className={`${scss.template} box min-h-screen bg-neutral-950 fixed top-0 left-2/4 w-1/4`}>
                {
                    router === '/'
                    ? <span>2</span>
                    : router === '/lgpd'
                    ? <span>P</span>
                    : pathURL[1] === 'cases'
                    ? <span>S</span>
                    : error
                    ? <span>S</span>
                    : ''
                }
            </div>
            <div id='box-4' className={`${scss.template} box min-h-screen bg-neutral-950 fixed top-0 left-3/4 w-1/4`}>
                {
                    router === '/'
                    ? <span>5</span>
                    : router === '/lgpd'
                    ? <span>D</span>
                    : pathURL[1] === 'cases'
                    ? <span>E</span>
                    : error
                    ? <span>!</span>
                    : ''
                }
            </div>
            {children}
        </>
    )
}

export default memo(Template)