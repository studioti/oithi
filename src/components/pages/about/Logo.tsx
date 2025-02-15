import { memo } from 'react'

const Logo = ({...props}) => {
    // props somente leitura
    return (
        <picture>
            <source	srcSet={`${props.path}/${props.name}.webp`} type="image/webp"></source>
            <img src={`${props.path}/${props.name}.png`} alt={props.alt} title={props.title} aria-label={props.title} width={props.size}></img>
        </picture>
    )
}

export default memo(Logo)