'use client'

import TransitionURL from "@/components/utils/TransitionURL"
import { Col, Container, Figure, OverlayTrigger, Row, Tooltip } from "react-bootstrap"
import { useParams } from 'next/navigation'
import scss from '@/app/scss/components/cases/index.module.scss'
import Link from "next/link";
import { memo, Suspense, useEffect, useState } from "react"
import NotFound from "@/app/not-found"

const API_CASES = `${process.env.NEXT_PUBLIC_API_URL}sites`

const Cases = () => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [cases, setCases] = useState([])

    const params = useParams()
    const slug = params.slug

    const getCase = async () => {
        try {
            
            setLoading(true)

            const response = await fetch(API_CASES)
            const data = await response.json()

            if(!data) throw 'Problema com a requisição'
            
            setData(data)

            const result = data.cases
            const cfilter = result.filter((name: { nome: string }) => name.nome == slug)
            const cases:any = Object.values(cfilter)

            setCases(cases)

        } catch (error) {
            console.log(error)
            NotFound()

        } finally {
            setLoading(false)
        }
    }

    useEffect( () => {
        getCase()
    }, [])

    return (
        <>
            <section className={`${scss.case}`} id="cases">

                <OverlayTrigger overlay={<Tooltip>Voltar ao início</Tooltip>} placement="bottom">
                    <span className={'seta_navegacao page'} aria-label="Ir para o começo do site">
                        <TransitionURL href={'/'} label={''} />
                    </span>
                </OverlayTrigger>

                <Suspense fallback={<div>Carregando ...</div>}>
                    {
                        loading && !data &&
                        <span>Carregando...</span>
                    }
                    {
                        cases.map( (item, index) => {
                            return (
                                <div key={index}>

                                    <div className={`${scss.number}`}>
                                        <span>0{item['id']}</span>
                                    </div>

                                    <Container className={`${scss.container} ${item['nome']}`}>
                                        <Row className={`${scss.titulo}`}>
                                            <Col lg={7}>
                                                <h1>{item['titulo']}</h1>
                                            </Col>
                                            <Col lg={5} className={`${scss.quote} d-none d-lg-flex`}>
                                                <div>
                                                    <p className="mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"/></svg></p>
                                                    <p className={`${scss.description}`}>{item['descricao']}</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Figure>
                                                    <Figure.Image
                                                        src={`/sites/bg-${item['nome']}.jpg`}
                                                        aria-label={`${item['descricao']}`}
                                                    />
                                                </Figure>

                                                <h2>Ano</h2>
                                                <p className="mb-4">{item['ano']}</p>

                                                <h2>Tech stack</h2>
                                                <p className="mb-4">{item['techstack']}</p>

                                                <h2>Repositório</h2>
                                                <p className="mb-4"><Link href={`${item['repositorio']}`}>{item['repositorio'] != '' && item['repositorio'] != null ? 'Clique aqui para acessar.' : '---'}</Link></p>

                                                <h2>Site</h2>
                                                <p className="mb-4">
                                                    <Link href={`${item['url']}`} target="_blank">
                                                        {item['url'] != '' && item['url'] != null ? 'Clique aqui para acessar.' : '---'}
                                                    </Link>
                                                </p>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            )
                        })
                    }
                </Suspense>

                <div className={`${scss.pagination}`}>
                    <span className={`${scss.prev}`}>
                        <TransitionURL href={'/'} label={'Página inicial'} />
                    </span>
                    <span className={`${scss.next}`}>
                        <TransitionURL href={'/cases/parceleaqui'} label={'Parcele Aqui'} />
                    </span>
                </div>
            </section>
        </>
    )
}

export default memo(Cases)