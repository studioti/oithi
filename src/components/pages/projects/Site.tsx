'use client'

import Link from 'next/link'
import TransitionURL from '@/components/utils/TransitionURL'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { memo, Suspense } from 'react'

const Site = ({...props}) => {
    // props somente leitura
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
                            <source	srcSet={`/sites/bg-${props.slug}.webp`} type="image/webp"></source>
                            <img src={`/sites/bg-${props.slug}.jpg`} alt={`${props.titulo}`} title={`${props.titulo}`} aria-label={`Case ${props.titulo}`}></img>
                        </picture>
                    </div>

                    {/* index case */}
                    <div className={props.scssBoxPosition}>
                        <span>0{props.scssPos}</span>
                    </div>

                    {/* print mobile case */}
                    <div className={props.scssPrint}>
                        <picture>
                            <source	srcSet={`/sites/bg-${props.slug}-print.avif`} type="image/avif"></source>
                            <source	srcSet={`/sites/bg-${props.slug}-print.webp`} type="image/webp"></source>
                            <img src={`/sites/bg-${props.slug}-print.jpg`} alt={`${props.titulo}`} title={`${props.titulo}`} aria-label={`Case ${props.titulo}`}></img>
                        </picture>
                    </div>
                </div>
            </Suspense>
        </>
    )
}

export default memo(Site)