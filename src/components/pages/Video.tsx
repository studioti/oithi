import { memo } from 'react'
import Ratio from 'react-bootstrap/Ratio'

const Video = ({...props}) => {
    // props somente leitura
    return (
        <>
            <Ratio aspectRatio={props.aspect}>
                <video autoPlay playsInline muted loop preload="none">
                    <source src={`/video/${props.name}.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Ratio>
        </>
    )
}

export default memo(Video)