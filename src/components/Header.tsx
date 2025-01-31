import { lazy, memo, Suspense } from 'react'
import Link from 'next/link'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import SocialMedia from './pages/SocialMedia'

// import scss from '../scss/components/header.module.scss'
import scss from '@/app/scss/components/header.module.scss'

const Video = lazy(() => import('./pages/Video'))

const Header = () => {
    return (
        <header className={scss.header} id='header'>

            <Suspense fallback={<div>Carregando ...</div>}>
                <div className={scss.video}>
                    <Video name='header' aspect='4x3' />
                </div>
            </Suspense>

            <OverlayTrigger overlay={<Tooltip>Sobre mim</Tooltip>} placement="top">
                <Link href='#about' rel='navegacao' className={'seta_navegacao bottom'} aria-label="Acessar a área Sobre mim"></Link>
            </OverlayTrigger>

            <SocialMedia urlGit={process.env.NEXT_PUBLIC_GITHUB_URL} urlLinkedin={process.env.NEXT_PUBLIC_LINKEDIN_URL} color='#000000' />

            <div className={scss.art}>
                <span className={scss.p100}></span>
                <span className={scss.p80}></span>
                <span className={scss.p60}></span>
                <span className={scss.p40}></span>
            </div>

            <h1>FRONTEND <br />DEVELOPER</h1>

        </header>
    )
}

export default memo(Header)