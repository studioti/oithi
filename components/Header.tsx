import Ratio from 'react-bootstrap/Ratio'
import scss from '../src/scss/components/header.module.scss'

export default function Header() {
    return (
        <header className={scss.header}>
            <h1>FRONTEND <br />DEVELOPER</h1>
            <div className={scss.video}>
                <Ratio aspectRatio="16x9">
                    <video src="/video/header.mp4" autoPlay muted loop></video>
                </Ratio>
            </div>
        </header>
    )
}