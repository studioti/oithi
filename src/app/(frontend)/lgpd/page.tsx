'use client'

import TransitionURL from "@/components/utils/TransitionURL"
import { Col, Container, OverlayTrigger, Row, Tooltip } from "react-bootstrap"
import scss from '@/app/scss/components/lgpd/index.module.scss'
import { memo } from "react"

const LGPD = () => {
    return (
        <>
            <section className={`${scss.lgpd}`} id="lgpd">

                <OverlayTrigger overlay={<Tooltip>Voltar ao início</Tooltip>} placement="bottom">
                    <span className={'seta_navegacao page'} aria-label="Ir para o começo do site">
                        <TransitionURL href={'/'} label={''} />
                    </span>
                </OverlayTrigger>

                <div className={`${scss.number}`}>
                    <span>LGPD</span>
                </div>

                <Container className={`${scss.container} ${scss.empty}`}>
                    <Row className={`${scss.titulo}`}>
                        <Col>
                            <h1 className="mb-0">Política de Privacidade</h1>
                            <p className="mb-5">Publicado em: 04/02/2025.</p>
                            
                            <h2>1. Introdução</h2>
                            <p className="mb-5">A GT Mobil Tecnologia está comprometida em proteger a privacidade dos visitantes do site <strong>oithi.com.br</strong>. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as informações pessoais dos usuários, em conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados - LGPD).</p>

                            <h2>2. Coleta de Dados Pessoais</h2>
                            <p>Atualmente, o <strong>oithi.com.br</strong> não coleta dados pessoais dos visitantes de forma direta. No entanto, ao navegar pelo site, algumas informações podem ser coletadas automaticamente por meio de cookies e tecnologias similares, incluindo:</p>
                            <ul className="mb-5">
                                <li>Endereço IP;</li>
                                <li>Tipo de navegador e sistema operacional;</li>
                                <li>Páginas visitadas e tempo de permanência;</li>
                                <li>URLs de referência.</li>
                                <li>Essas informações são utilizadas para fins estatísticos e para melhorar a experiência do usuário no site.</li>
                            </ul>

                            <h2>3. Uso de Cookies e Tecnologias Semelhantes</h2>
                            <p>Cookies são pequenos arquivos de texto armazenados no dispositivo do usuário que ajudam a analisar o tráfego web e personalizar a experiência online. O <strong>oithi.com.br</strong> utiliza cookies para:</p>
                            <ul className="mb-5">
                                <li>Analisar padrões de tráfego no site;</li>
                                <li>Personalizar conteúdo conforme as preferências do usuário;</li>
                                <li>Melhorar a usabilidade e a performance do site.</li>
                                <li>O usuário pode gerenciar ou desativar os cookies diretamente nas configurações do seu navegador. No entanto, a desativação de cookies pode afetar a funcionalidade de algumas partes do site.</li>
                            </ul>
                            
                            <h2>4. Links para Sites Externos</h2>
                            <p className="mb-5">O <strong>oithi.com.br</strong> pode conter links para sites externos, como repositórios no GitHub. Ao acessar esses links, o usuário estará sujeito às políticas de privacidade desses sites externos, que podem diferir desta. Recomenda-se que os usuários leiam as políticas de privacidade de qualquer site externo antes de fornecer quaisquer dados pessoais.</p>
                            
                            <h2>5. Segurança dos Dados</h2>
                            <p className="mb-5">Embora o <strong>oithi.com.br</strong> não colete dados pessoais diretamente, implementamos medidas de segurança para proteger as informações coletadas automaticamente contra acesso não autorizado, alteração ou destruição.</p>
                            
                            <h2>6. Direitos dos Titulares de Dados</h2>
                            <p>De acordo com a LGPD, os usuários têm direitos relacionados aos seus dados pessoais, incluindo:</p>
                            <ul className="mb-5">
                                <li>Confirmação da existência de tratamento;</li>
                                <li>Acesso aos dados;</li>
                                <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                                <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
                                <li>Portabilidade dos dados;</li>
                                <li>Eliminação dos dados pessoais tratados com o consentimento do titular, exceto nas hipóteses previstas em lei;</li>
                                <li>Informação sobre o compartilhamento de dados com terceiros;</li>
                                <li>Revogação do consentimento.</li>
                                <li>Para exercer esses direitos, os usuários podem entrar em contato através do e-mail: diga@oithi.com.br.</li>
                            </ul>
                            
                            <h2>7. Alterações nesta Política de Privacidade</h2>
                            <p className="mb-5">Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças nas práticas de informação. Recomenda-se que os usuários revisem esta política regularmente para se manterem informados sobre como protegemos suas informações.</p>
                            
                            <h2>8. Contato</h2>
                            <p>Em caso de dúvidas ou preocupações sobre esta Política de Privacidade, entre em contato conosco pelo e-mail: diga@oithi.com.br.</p>
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    )
}

export default memo(LGPD)