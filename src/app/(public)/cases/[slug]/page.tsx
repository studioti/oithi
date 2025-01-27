'use client'

import TransitionURL from "@/components/utils/TransitionURL";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useParams } from 'next/navigation'

export default function Cases() {

    const router = useParams()
    console.log(router.slug)
    
    return (
        <>
            <OverlayTrigger overlay={<Tooltip>Voltar ao início</Tooltip>} placement="bottom">
                <span className={'seta_navegacao top'} aria-label="Ir para o começo do site">
                    <TransitionURL href={'/'} label={''} />
                </span>
            </OverlayTrigger>

            {/* <h1>Cases</h1> */}
            {/* {router} */}
            
        </>
    )
}