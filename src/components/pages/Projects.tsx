import { lazy, memo, Suspense } from 'react'
import Link from 'next/link'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

// import scss from '../../scss/components/projects.module.scss'
import scss from '@/app/scss/components/projects.module.scss'

const Video = lazy(() => import('./Video'))

const Projects = () => {
    return (
        <>
            <section className={scss.projects} id='projects' role='projetos recentes'>

                <Suspense fallback={<div>Carregando ...</div>}>
                    <div className={scss.video}>
                        <Video name='projects' aspect='4x3' />
                    </div>
                </Suspense>
                
                <OverlayTrigger overlay={<Tooltip>Sobre mim</Tooltip>} placement="bottom">
                    <Link href='#about' className={'seta_navegacao top'} aria-label="Acessar a área Sobre mim"></Link>
                </OverlayTrigger>

                <OverlayTrigger overlay={<Tooltip>Ver projetos</Tooltip>} placement="top">
                    <Link href='#site1' className={'seta_navegacao bottom'} aria-label="Acessar a área Cases"></Link>
                </OverlayTrigger>

                <picture>
                    <source	srcSet={'/index-projects-mascara-texto.webp'} type="image/webp"></source>
                    <img src={'/index-projects-mascara-texto.png'} alt={'Recent Projects'} title={'Recent Projects'} aria-label={'Cases recentes'}></img>
                </picture>
                
                <h2>RECENT <br />PROJECTS</h2>

            </section>
        </>
    )
}

export default memo(Projects)