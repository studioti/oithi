import Link from 'next/link'
import { Col, Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import { Metadata } from 'next'

import scss from "../scss/error.module.scss"

export const metadata: Metadata = {
    title: 'Página não encontrada • Thiago Aguiar • Front-end Developer'
}

export default async function NotFound() {
	return (
		<>
			<section className={scss.error}>
				<OverlayTrigger overlay={<Tooltip>Acessar a página inicial</Tooltip>} placement="right">
					<Link href={'/'} className={'seta_navegacao error'} aria-label="Acessar a página inicial"></Link>
				</OverlayTrigger>
				<Container fluid className={scss.content}>
					<Row className='justify-content-center'>
						<Col xs={12} lg={9} className="">
							<h1>404</h1>
							<h2>Ops! Página não encontrada. :(</h2>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	)
}