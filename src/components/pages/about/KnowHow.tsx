'use client'

import { memo } from 'react'
import Col from 'react-bootstrap/Col'
// import Figure from 'react-bootstrap/Figure'

const Knowhow = ({...props}) => {
    // props somente leitura
    return (
        <>
            <Col xs={12} lg={6} className={props.scssKnowhow}>
                <div className={props.scssBox}>
                    <div>
                        <picture>
                            <img src={'/about/knowhow.svg'} alt={'Know-How'} title={'Know-How'} aria-label={'Habilidades'} className='img-fluid'></img>
                        </picture>
                        <h2>Know-How</h2>
                        <ul>
                            <li><strong role="heading" aria-level={2}>Frontend:</strong> Vue.js (Nuxt.js), React.js (Next.js), JavaScript (ES6+), TypeScript, HTML, CSS (SASS), Bootstrap, Tailwind CSS, Styled Components, E+.</li>
                            <li><strong role="heading" aria-level={2}>Performance & SEO:</strong> Técnicas de otimização, código modular e escalável.</li>
                            <li><strong role="heading" aria-level={2}>Versionamento & DevOps:</strong> Git, Git Flow, Conventional Commits, Docker.</li>
                            <li><strong role="heading" aria-level={2}>Design & UX:</strong> Figma, Adobe XD, Mobile First, UI Responsiva e acessível, WCAG 2.1.</li>
                            <li><strong role="heading" aria-level={2}>Metodologias:</strong> Scrum, Kanban, CI/CD, Clean Code, TDD.</li>
                        </ul>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default memo(Knowhow)