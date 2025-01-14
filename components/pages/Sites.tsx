import { lazy, Suspense} from 'react'
import { useQuery } from '@tanstack/react-query'
import scss from '../../src/scss/components/sites.module.scss'

const Site = lazy(() => import('./projects/Site'))
const API = '/api/sites/'

export default function Sites() {

    const getSites = async () => {
        
        try {

            const response = await fetch(API)
            const data = await response.json()

            if(!data) throw 'Problema com a requisição'

            const result = data.cases
            const sites:any = Object.values(result)

            // console.log('response', response)
            // console.log('api sites:', sites)

            return sites

        } catch (error) {
            console.log(error)

        } finally {
            // 
        }
    }

    const {data, error, isLoading} = useQuery({
        queryKey: ['sites'],
        queryFn: getSites
    })

    if(error)
        <>
            <div>
                <p>{error.message}</p>
            </div>
        </>
    
    if(data)
        return (
            <>
                <Suspense fallback={<div>Carregando ...</div>}>
                    {
                        isLoading && !data &&
                        <span>Carregando...</span>
                    }
                    {
                        data?.map( (item:any, index:any) => {
                            const size = data.length
                            return (
                                <section className={`${scss.sites} ${scss[item['nome']]} ${size}`} key={index}>
                                    <Site scssName='sites' scssPos={item['id']} scssSide={`${scss[item['coluna'] == 'esquerda' ? 'left' : 'right']}`} scssAnchorUp={`${index == 0 ? 'projects' : 'site' + index}`} scssAnchorDown={`${index == size-1 ? 'footer' : 'site' + (index+2)}`} scssBox={scss.box} scssBoxPosition={scss.position} scssPrint={scss.print} />
                                </section>
                            )
                        })
                    }
                </Suspense>
            </>
        )
}