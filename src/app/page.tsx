import { lazy, Suspense } from 'react'
import Layout from '../components/Layout'
import { Metadata } from 'next'

const About = lazy(() => import('../components/pages/About'))
const Projects = lazy(() => import('../components/pages/Projects'))
const Sites = lazy(() => import('../components/pages/Sites'))

export const metadata: Metadata = {
    title: 'Home • Thiago Aguiar • Front-end Developer'
}

console.log(process.env.NODE_ENV)

export default function Index() {
    return (
        <>
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
   
// export async function getStaticProps() {
//     return {
//         props: {}
//     }
// }