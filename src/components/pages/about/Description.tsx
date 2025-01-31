import { memo } from 'react'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'

const Description = ({...props}) => {
    // props somente leitura
    return (
        <>
            <Col xs={12} lg={6} className={props.scssDescription}>
                <div className={props.scssBox}>
                    <div>
                        <Figure>
                            <Figure.Image
                                alt={'Thiago Aguiar'}
                                src={'/about/thiago_aguiar.jpg'}
                                fluid
                                roundedCircle
                            />
                        </Figure>                                    
                        <h3>Thiago Aguiar</h3>
                        <p>Thiago é um especialista em tecnologia com 15 anos de experiência em desenvolvimento front-end. Formado em Análise e Desenvolvimento de Sistemas pela FIAP, construiu sua carreira em agências de marketing digital e grandes grupos de mídia em São Paulo.</p>
                        <p className='mb-0'>Com sólida experiência, criou sites, landing pages, interfaces web para sistemas e portais de notícias, além de realizar integrações com APIs e manutenção contínua de projetos. Também atua como freelancer, entregando soluções para clientes e negócios.</p>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default memo(Description)