import Col from 'react-bootstrap/Col'
import Logo from './Logo'
import { useEffect, useState } from 'react'

const API = '/api/worked/'

export default function Worked({...props}) {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [empresas, setEmpresas] = useState([])

    const getAPIEmpresas = async () => {
        try {
            
            setLoading(true)

            const response = await fetch(API)
            const data = await response.json()

            if(!data) throw 'Problema com a requisição'
            
            setData(data)

            const result = data.empresas
            const empresas:any = Object.values(result)

            setEmpresas(empresas)

            // console.log('response', response)
            // console.log('api empresas:', empresas)

        } catch (error) {
            console.log(error)

        } finally {
            setLoading(false)

        }
    }

    useEffect( () => {
        getAPIEmpresas()
    }, [])

    return (
        <>
            <Col xs={12} lg={11} xxl={10} className={props.scssWorked}>
                <div className={props.scssBox}>
                    <div>
                        <h3>Trabalhou em:</h3>
                        <div className={props.scssEnterprise}>
                            {
                                loading && !data &&
                                <span>Carregando...</span>
                            }
                            {
                                empresas.map( (item, index) => {
                                    return <Logo key={index} path='enterprise' name={item['nome']} size={item['tamanho']} alt={item['descricao']} title={item['descricao']} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </Col>
        </>
    )
}