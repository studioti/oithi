import Col from 'react-bootstrap/Col'
import Logo from './Logo'
import { useQuery } from '@tanstack/react-query'

const API = '/api/worked/'

export default function Worked({...props}) {

    const getEmpresas = async () => {

        try {

            const response = await fetch(API)
            const data = await response.json()

            if(!data) throw 'Problema com a requisição'

            const result = data.empresas
            const empresas:any = Object.values(result)

            // console.log('response', response)
            // console.log('api empresas:', empresas)

            return empresas

        } catch (error) {
            console.log(error)

        }
    }

    const {data, error, isLoading} = useQuery({
        queryKey: ['worked'],
        queryFn: getEmpresas
    })

    if(error)
        <>
            <Col xs={12} lg={11} xxl={10} className={props.scssWorked}>
                <div className={props.scssBox}>
                    <div>
                        <h3>Trabalhou em:</h3>
                        <div className={props.scssEnterprise}>
                            <p>{error.message}</p>
                        </div>
                    </div>
                </div>
            </Col>
        </>

    if(data)
        return (
            <>
                <Col xs={12} lg={11} xxl={10} className={props.scssWorked}>
                    <div className={props.scssBox}>
                        <div>
                            <h3>Trabalhou em:</h3>
                            <div className={props.scssEnterprise}>
                                {
                                    isLoading && !data &&
                                    <span>Carregando...</span>
                                }
                                {
                                    data?.map( (item:any, index:any) => {
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