'use client'

import Link from 'next/link'
import TransitionURL from '@/components/utils/TransitionURL'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { memo } from 'react'

const Site = ({...props}) => {
    // props somente leitura
    return (
        <>
            <OverlayTrigger overlay={<Tooltip>Ver projetos</Tooltip>} placement="bottom">
                <Link href={`#${props.scssAnchorUp}`} className={'seta_navegacao top'} aria-label={`Acessando o ${props.scssAnchorDown}`}></Link>
            </OverlayTrigger>

            <OverlayTrigger overlay={<Tooltip>Ver projetos</Tooltip>} placement="top">
                <Link href={`#${props.scssAnchorDown}`} className={'seta_navegacao bottom'} aria-label={`Acessando o ${props.scssAnchorDown}`}></Link>
            </OverlayTrigger>

            <div className={`${props.scssBox} ${props.scssSide}`} id={`site${props.scssPos}`}>
                <div className={props.scssBoxPosition}>
                    <span>0{props.scssPos}</span>
                </div>
                <h2>
                    <TransitionURL href={`cases/${props.slug}`} label={`${props.titulo}`} />
                </h2>
                <div className={props.scssPrint}></div>
            </div>
        </>
    )
}

export default memo(Site)