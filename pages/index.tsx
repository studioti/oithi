import { lazy, Suspense } from 'react'

const About = lazy(() => import('../components/pages/About'))
const Projects = lazy(() => import('../components/pages/Projects'))
const Sites = lazy(() => import('../components/pages/Sites'))

import Meta from '../components/Meta'
import Layout from '../components/Layout'
import scss from "../src/scss/index.module.scss"

const titulo = 'Thiago Aguiar • Front-end Developer'

export default function Index() {
    return (
        <>
            <Meta titulo={titulo} bodyClass={scss.index} />
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
   
export async function getStaticProps() {
    return {
        props: {}
    }
}