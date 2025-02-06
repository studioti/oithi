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
                        <p>Profissional com +10 anos de experiência em desenvolvimento web, especializado em Vue.js, React.js e tecnologias frontend modernas. Expertise na criação de interfaces responsivas, intuitivas e performáticas para empresas e projetos de impacto.</p>
                        <p className='mb-0'>Com sólida experiência, criou sites, landing pages, interfaces web para sistemas e portais de notícias, além de integrações com APIs e CI/CD. Também atua como freelancer, entregando soluções para clientes e negócios.</p>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default memo(Description)