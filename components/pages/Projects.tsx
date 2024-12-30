import { lazy, Suspense } from 'react'
import Link from 'next/link'
import Ratio from 'react-bootstrap/Ratio'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import scss from '../../src/scss/components/projects.module.scss'

const Video = lazy(() => import('../pages/Video'))

export default function Projects() {
    return (
        <>
            <section className={scss.projects} id='projects'>

                <Suspense fallback={<div>Carregando ...</div>}>
                    <div className={scss.video}>
                        <Video name='projects' aspect='4x3' />
                    </div>
                </Suspense>

                <div className={scss.video}>
                    <Ratio aspectRatio='4x3'>
                        <video autoPlay playsInline muted loop preload="none">
                            <source src="/video/projects.mp4"   type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </Ratio>
                </div>
                
                <OverlayTrigger overlay={<Tooltip>Sobre mim</Tooltip>} placement="bottom">
                    <Link href='#about' className={'seta_navegacao top'}></Link>
                </OverlayTrigger>

                <OverlayTrigger overlay={<Tooltip>Ver projetos</Tooltip>} placement="top">
                    <Link href='#site1' className={'seta_navegacao bottom'}></Link>
                </OverlayTrigger>
                
                <h2>RECENT <br />PROJECTS</h2>

            </section>
        </>
    )
}