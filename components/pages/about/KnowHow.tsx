import Col from 'react-bootstrap/Col'
import Figure from 'react-bootstrap/Figure'

export default function Knowhow({...props}) {
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
                        <h3>Know-How</h3>
                        <ul>
                            <li>Vue JS | Nuxt JS, React JS | Next JS, E+</li>
                            <li>Bootstrap, Sass, Mobile First, PWA E+</li>
                            <li>Git, Git Flow, Conventional Commit, E+</li>
                            <li>Metodologias Ágeis, Scrum, Kanbam, E+</li>
                            <li>JIRA, #Slack, Trello, Clockify, E+</li>
                        </ul>
                    </div>
                </div>
            </Col>
        </>
    )
}