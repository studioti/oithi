import Figure from 'react-bootstrap/Figure'

export default function Logo({...props}) {
    // props somente leitura
    return (
        <>
            <Figure>
                <Figure.Image
                    alt={props.alt}
                    src={`${props.path}/${props.name}.png`}
                    width={props.size}
                />
            </Figure>
        </>
    )
}