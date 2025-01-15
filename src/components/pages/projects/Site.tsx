'use client'

import Link from 'next/link'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

export default function Site({...props}) {
    // props somente leitura
    return (
        <>
            <OverlayTrigger overlay={<Tooltip>Ver projetos</Tooltip>} placement="bottom">
                <Link href={`#${props.scssAnchorUp}`} className={'seta_navegacao top'}></Link>
            </OverlayTrigger>

            <OverlayTrigger overlay={<Tooltip>Ver projetos</Tooltip>} placement="top">
                <Link href={`#${props.scssAnchorDown}`} className={'seta_navegacao bottom'}></Link>
            </OverlayTrigger>

            <div className={`${props.scssBox} ${props.scssSide}`} id={`site${props.scssPos}`}>
                <div className={props.scssBoxPosition}>
                    <span>0{props.scssPos}</span>
                </div>
                <div className={props.scssPrint}></div>
            </div>
        </>
    )
}