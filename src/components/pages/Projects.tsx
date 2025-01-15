import { lazy, Suspense } from 'react'
import Link from 'next/link'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import scss from '../../scss/components/projects.module.scss'

const Video = lazy(() => import('./Video'))

export default function Projects() {
    return (
        <>
            <section className={scss.projects} id='projects'>

                <Suspense fallback={<div>Carregando ...</div>}>
                    <div className={scss.video}>
                        <Video name='projects' aspect='4x3' />
                    </div>
                </Suspense>
                
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