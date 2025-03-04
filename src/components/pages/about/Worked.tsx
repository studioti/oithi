import Col from 'react-bootstrap/Col'
import Logo from './Logo'
import { useEffect, useState, memo } from 'react'
import SkeletonUIWorked from '@/components/utils/skeleton/Worked'

const API_EMPRESAS = `${process.env.NEXT_PUBLIC_API_URL}worked`

const Worked = ({...props}) => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [empresas, setEmpresas] = useState([])

    const getAPIEmpresas = async () => {
        try {
            
            setLoading(true)

            const response = await fetch(API_EMPRESAS)
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
            setTimeout(() => {
                setLoading(false)
            }, 3000)
        }
    }

    useEffect( () => {
        getAPIEmpresas()
    }, [])

    return (
        <>
            <Col xs={12} xxl={11} className={props.scssWorked}>
                <div className={props.scssBox}>
                    <div>
                        <h2>Experiências</h2>
                        <div className={props.scssEnterprise}>
                            {
                                loading && 
                                <>
                                    <SkeletonUIWorked />
                                </>
                            }{
                                !loading && data && 
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

export default memo(Worked)