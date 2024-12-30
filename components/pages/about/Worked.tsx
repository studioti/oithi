import Col from 'react-bootstrap/Col'
import Logo from './Logo'

export default function Worked({...props}) {
    // props somente leitura
    return (
        <>
            <Col xs={12} lg={11} xxl={10} className={props.scssWorked}>
                <div className={props.scssBox}>
                    <div>
                        <h3>Trabalhou em:</h3>
                        <div className={props.scssEnterprise}>
                            <Logo path='enterprise' name='abril' size={200} alt='Abril' />
                            <Logo path='enterprise' name='folhasp' size={200} alt='Folha de S.Paulo' />
                            <Logo path='enterprise' name='estadao' size={180} alt='Estadão' />
                            <Logo path='enterprise' name='fgv' size={150} alt='Fundação Getúlio Vargas' />
                            <Logo path='enterprise' name='egcreative' size={100} alt='eg!creative' />
                            <Logo path='enterprise' name='dpto' size={100} alt='DPTO' />
                            <Logo path='enterprise' name='alicewonders' size={100} alt='Alice Wonders' />
                            <Logo path='enterprise' name='potencialtecnologia' size={200} alt='Potencial Tecnologia' />
                            <Logo path='enterprise' name='espiral' size={100} alt='Espiral Interativa' />
                            <Logo path='enterprise' name='w5' size={100} alt='W5 Publicidade' />
                            <Logo path='enterprise' name='maquinarus' size={100} alt='Maquinarus' />
                            <Logo path='enterprise' name='cappuccino' size={100} alt='Cappuccino' />
                            <Logo path='enterprise' name='isobar' size={100} alt='Isobar' />
                            <Logo path='enterprise' name='cvc' size={100} alt='CVC Corp.' />
                        </div>
                    </div>
                </div>
            </Col>
        </>
    )
}