import { lazy, memo, Suspense } from 'react'
import Link from 'next/link'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import SocialMedia from './pages/SocialMedia'

import scss from '@/app/scss/components/header.module.scss'

const Video = lazy(() => import('./pages/Video'))

const Header = () => {
    return (
        <section className={scss.header} id='header'>

            <Suspense fallback={<div>Carregando ...</div>}>
                <div className={scss.video}>
                    <Video name='header' aspect='4x3' />
                </div>
            </Suspense>

            <OverlayTrigger overlay={<Tooltip>Acessar a área Sobre mim</Tooltip>} placement="top">
                <Link href='#about' rel='navegacao' className={'seta_navegacao bottom'} aria-label="Acessar a área Sobre mim" title='Acessar a área Sobre mim'></Link>
            </OverlayTrigger>

            <SocialMedia urlGit={process.env.NEXT_PUBLIC_GITHUB_URL} urlLinkedin={process.env.NEXT_PUBLIC_LINKEDIN_URL} color='#c4fd67' />

            <h1 data-text="FRONTEND DEVELOPER">FRONTEND <br />DEVELOPER</h1>

        </section>
    )
}

export default memo(Header)