'use client'

import { lazy, Suspense } from 'react'
import Layout from '../components/Layout'
// import { Metadata } from 'next'
import ReactCookieBot from 'react-cookiebot'

const About = lazy(() => import('../components/pages/About'))
const Projects = lazy(() => import('../components/pages/Projects'))
const Sites = lazy(() => import('../components/pages/Sites'))

// export const metadata: Metadata = {
//     title: 'Home • Thiago Aguiar • Front-end Developer'
// }

const domainGroupId = process.env.NEXT_PUBLIC_COOKIEBOT_ID

export default function Index() {
    return (
        <>
            <ReactCookieBot domainGroupId={domainGroupId} language='PT' />
            
            <Layout>

                {/* sobre mim */}
                <Suspense fallback={<div>Carregando ...</div>}>
                    <About />
                </Suspense>

                {/* intro projetos */}
                <Suspense fallback={<div>Carregando ...</div>}>
                    <Projects />
                </Suspense>

                {/* projetos | sites */}
                <Suspense fallback={<div>Carregando ...</div>}>
                    <Sites />
                </Suspense>
            </Layout>
        </>
    )
}