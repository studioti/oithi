import Col from 'react-bootstrap/Col'
import Logo from './Logo'
import { useEffect, useState } from 'react'
import { Skeleton } from "@/components/ui/skeleton"

const API_EMPRESAS = `${process.env.NEXT_PUBLIC_API_URL}worked`

export default function Worked({...props}) {

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
                                loading && 
                                <>
                                    <Skeleton className="h-[100px] w-[100px] rounded-full m-2" />
                                    <Skeleton className="h-[100px] w-[100px] rounded-full m-2" />
                                    <Skeleton className="h-[100px] w-[100px] rounded-full m-2" />
                                    <Skeleton className="h-[100px] w-[100px] rounded-full m-2" />
                                    <Skeleton className="h-[100px] w-[100px] rounded-full m-2" />
                                    <Skeleton className="h-[100px] w-[100px] rounded-full m-2" />
                                    <Skeleton className="h-[100px] w-[100px] rounded-full m-2" />
                                    <Skeleton className="h-[100px] w-[100px] rounded-full m-2" />
                                    <Skeleton className="h-[100px] w-[100px] rounded-full m-2" />
                                    <Skeleton className="h-[100px] w-[100px] rounded-full m-2" />
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
