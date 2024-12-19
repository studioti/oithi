import Meta from '../components/Meta'
import Layout from '../components/Layout'
import scss from "../src/scss/index.module.scss"

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Index() {
    const titulo = 'Oi, Thi Thi!'
    return (
        <>
            <Meta titulo={titulo} bodyClass={scss.index} />
            <Layout>
                <Container>
                    <Row>
                        <Col>header</Col>
                    </Row>
                </Container>
            </Layout>
        </>
    )
}