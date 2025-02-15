import { memo } from 'react'
import Col from 'react-bootstrap/Col'

const Description = ({...props}) => {
    // props somente leitura
    return (
        <>
            <Col xs={12} lg={6} className={props.scssDescription}>
                <div className={props.scssBox}>
                    <div>
                        <picture>
                            <source	srcSet={'/about/thiago_aguiar.avif'} type="image/avif"></source>
                            <source	srcSet={'/about/thiago_aguiar.webp'} type="image/webp"></source>
                            <img src={'/about/thiago_aguiar.jpg'} alt={'Thiago Aguiar'} title={'Thiago Aguiar'} aria-label={'Foto profissional'} className='img-fluid'></img>
                        </picture>
                        <h2>Thiago Aguiar</h2>
                        <p>Profissional com +10 anos de experiência em desenvolvimento web, especializado em Vue.js, React.js e tecnologias frontend modernas. Expertise na criação de interfaces responsivas, intuitivas e performáticas para empresas e projetos de impacto.</p>
                        <p className='mb-0'>Com sólida experiência, criou sites, landing pages, interfaces web para sistemas e portais de notícias, além de integrações com APIs e CI/CD. Também atua como freelancer, entregando soluções para clientes e negócios.</p>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default memo(Description)