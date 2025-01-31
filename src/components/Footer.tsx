import { lazy, memo, Suspense } from 'react'
import Link from 'next/link'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import SocialMedia from './pages/SocialMedia'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import scss from '@/app/scss/components/footer.module.scss'

const Video = lazy(() => import('./pages/Video'))

const Footer = () => {
    return (
        <footer className={scss.footer} id='footer'>

            <Suspense fallback={<div>Carregando ...</div>}>
                <div className={scss.video}>
                    <Video name='footer' aspect='4x3' />
                </div>
            </Suspense>
            
            <SocialMedia urlGit={process.env.NEXT_PUBLIC_GITHUB_URL} urlLinkedin={process.env.NEXT_PUBLIC_LINKEDIN_URL} color='#c4fd67' />

            <OverlayTrigger overlay={<Tooltip>Voltar ao início</Tooltip>} placement="bottom">
                <Link href='#header' className={'seta_navegacao top'} aria-label="Ir para o começo do site"></Link>
            </OverlayTrigger>

            <Container fluid className={scss.content}>
                <Row>
                    <Col xs={12} lg={6} className={scss.left}>
                        <div className={scss.box}>
                            <div>
                                <h2>LET&rsquo;S <br /><u>TALK</u><span>?</span></h2>
                                <h2>GOT A <br /><u>PROJECT</u><span>?</span></h2>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} lg={6} className={scss.right}>
                        <Row className={scss.contact}>
                            <Col xs={12} className={scss.address}>
                                <div className={scss.box}>
                                    <span>SÃO PAULO / SP • BRAZIL</span>
                                </div>
                            </Col>
                            <Col xs={12} className={scss.cta}>
                                <div className={scss.box}>
                                    <Link href='https://wa.me/5511952718004?text=Olá,%20Thiago!%20Tudo%20bem?%20Tenho%20interesse%20em%20te%20contratar!%20Você%20teria%20disponibilidade?' aria-label="Me chame no WhatsApp!">
                                        <span>CALL ME !!!</span>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <div className={scss.coffee}>
                <p>
                    Vamos tomar um <span>café?</span>
                    <svg fill="#db7702" width="65px" height="65px" viewBox="-5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <title>coffee</title>
                    <path d="M12.406 14.75c-0.094-2.094-0.219-3.219-1.469-4.594-1.594-1.781-2.188-3.5-0.875-6.156 0.344 1.781 0.469 3.375 1.719 4.344s2.281 3.594 0.625 6.406zM10.063 14.75c-0.063-1.125-0.125-1.688-0.813-2.469-0.844-0.938-1.188-1.844-0.469-3.281 0.188 0.969 0.219 1.813 0.906 2.313s1.281 1.938 0.375 3.438zM15.719 24.625h5.688c0.344 0 0.469 0.25 0.25 0.531 0 0-2.219 2.844-5.281 2.844h-10.969s-5.281-2.844-5.281-2.844c-0.219-0.281-0.125-0.531 0.219-0.531h5.625c-0.781-0.406-1.938-2.188-1.938-4.406v-4.688h13.688v0.375c0.438-0.375 0.969-0.563 1.531-0.563 0.781 0 2.25 0.813 2.25 2.219 0 2.031-1.344 2.781-2.125 3.313 0 0-1.469 1.156-2.5 2.5-0.344 0.594-0.75 1.063-1.156 1.25zM19.25 16.188c-0.5 0-1.125 0.219-1.531 1.219v2.594c0 0.344-0.031 0.75-0.094 1.094 0.688-0.688 1.5-1.156 1.5-1.156 0.5-0.344 1.5-1 1.5-2.281 0.031-0.906-0.813-1.469-1.375-1.469zM6.406 16.563h-0.875v1.281h0.875v-1.281zM6.406 18.594h-0.875v2.094s0.25 2.813 2.031 3.656c-1.094-1.281-1.156-2.75-1.156-3.656v-2.094z"></path>
                    </svg>
                </p>
            </div>

        </footer>
    )
}

export default memo(Footer)