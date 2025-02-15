'use client'

import Link from 'next/link'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import Description from './about/Description'
import Knowhow from './about/KnowHow'
import Worked from './about/Worked'

import scss from '@/app/scss/components/about.module.scss'
import { memo } from 'react'

const About = () => {
    return (
        <>
            <section className={scss.about} id='about'>
                <div className={scss.art}>
                    <span className={scss.p100}></span>
                    <span className={scss.p80}></span>
                    <span className={scss.p60}></span>
                    <span className={scss.p40}></span>
                </div>

                <OverlayTrigger overlay={<Tooltip>Voltar ao início</Tooltip>} placement="bottom">
                    <Link href='#header' className={'seta_navegacao top'} aria-label="Ir para o começo do site"></Link>
                </OverlayTrigger>
                
                <OverlayTrigger overlay={<Tooltip>Projetos recentes</Tooltip>} placement="top">
                    <Link href='#projects' className={'seta_navegacao bottom'} aria-label="Acessar a área de Projetos Recentes"></Link>
                </OverlayTrigger>

                <Container fluid className={scss.content}>
                    <Row className='justify-content-center'>

                        {/* Description */}
                        <Description scssDescription={scss.description} scssBox={scss.box} />
                        
                        {/* Know-How */}
                        <Knowhow scssKnowhow={scss.knowhow} scssBox={scss.box} />
                        
                        {/* Worked */}
                        <Worked scssWorked={scss.worked} scssBox={scss.box} scssEnterprise={scss.enterprise} />

                    </Row>
                </Container>
            </section>
        </>
    )
}

export default memo(About)