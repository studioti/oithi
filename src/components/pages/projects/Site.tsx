'use client'

import Link from 'next/link'
import TransitionURL from '@/components/utils/TransitionURL'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { memo, Suspense } from 'react'

const Site = ({...props}) => {
    // props somente leitura

    // fullscreen
    const imgMobileWebp = `/sites/bg-${props.slug}-mobile.webp`
    const imgMobileJPG = `/sites/bg-${props.slug}-mobile.jpg`
    const imgDesktopWebp = `/sites/bg-${props.slug}.webp`
    const imgDesktopJPG = `/sites/bg-${props.slug}.jpg`

    // print
    const imgPrintAVIF = `/sites/bg-${props.slug}-print.avif`
    const imgPrintWebp = `/sites/bg-${props.slug}-print.webp`
    const imgPrintJPG = `/sites/bg-${props.slug}-print.jpg`

    return (
        <>
            <Suspense fallback={<div>Carregando ...</div>}>
                <OverlayTrigger overlay={<Tooltip>Ver projetos</Tooltip>} placement="bottom">
                    <Link href={`#${props.scssAnchorUp}`} className={'seta_navegacao top'} aria-label={`Acessando o ${props.scssAnchorDown}`}></Link>
                </OverlayTrigger>

                <OverlayTrigger overlay={<Tooltip>Ver projetos</Tooltip>} placement="top">
                    <Link href={`#${props.scssAnchorDown}`} className={'seta_navegacao bottom'} aria-label={`Acessando o ${props.scssAnchorDown}`}></Link>
                </OverlayTrigger>

                <div className={`${props.scssBox} ${props.scssSide}`} id={`site${props.scssPos}`}>

                    {/* name case */}
                    <h2>
                        <TransitionURL href={`cases/${props.slug}`} label={`${props.titulo}`} />
                    </h2>

                    {/* bg case */}
                    <div className={`${props.bg}`}>
                        <picture>
                            {/* <source	srcSet={`/sites/bg-${props.slug}.avif`} type="image/avif"></source> */}
                            <source media="(max-width:767px)" srcSet={imgMobileWebp} type="image/webp" />
                            <source media="(max-width:767px)" srcSet={imgMobileJPG} type="image/jpg" />
                            <source	srcSet={imgDesktopWebp} type="image/webp" />
                            <img src={imgDesktopJPG} alt={`${props.titulo}`} title={`${props.titulo}`} aria-label={`${props.titulo}`} />
                        </picture>
                    </div>

                    {/* index case */}
                    <div className={props.scssBoxPosition} role="none">
                        <span>0{props.scssPos}</span>
                    </div>

                    {/* print mobile case */}
                    <div className={props.scssPrint}>
                        <picture>
                            <source	srcSet={imgPrintAVIF} type="image/avif"></source>
                            <source	srcSet={imgPrintWebp} type="image/webp"></source>
                            <img src={imgPrintJPG} alt={`${props.titulo}`} title={`${props.titulo}`} aria-label={`Case ${props.titulo}`}></img>
                        </picture>
                    </div>
                </div>
            </Suspense>
        </>
    )
}

export default memo(Site)