'use client'

import { memo } from 'react'
import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'

const Knowhow = ({...props}) => {
    // props somente leitura
    return (
        <>
            <Col xs={12} lg={6} className={props.scssKnowhow}>
                <div className={props.scssBox}>
                    <div>
                        <Figure>
                            <Figure.Image
                                alt='Know-How'
                                src='/about/knowhow.svg'
                                fluid
                            />
                        </Figure>
                        <h2>Know-How</h2>
                        <ul>
                            <li><strong>Frontend:</strong> Vue.js (2 e 3) (Nuxt.js), React.js (Next.js), JavaScript (ES6+), TypeScript, HTML5, CSS3 (SASS, LESS), BootstrapVue, React Bootstrap.</li>
                            <li><strong>Performance & SEO:</strong> Técnicas de otimização, código modular e escalável.</li>
                            {/* <li><strong>Integrações e APIs:</strong> REST, GraphQL, consumo eficiente de APIs</li> */}
                            <li><strong>Versionamento & DevOps:</strong> Git, Git Flow, Conventional Commits, Docker.</li>
                            <li><strong>Design & UX:</strong> Figma, Adobe XD, Mobile First, UI Responsiva e acessível, WAI-ARIA, WCAG 2.1.</li>
                            <li><strong>Metodologias:</strong> Scrum, Kanban, CI/CD, Clean Code, TDD.</li>
                        </ul>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default memo(Knowhow)