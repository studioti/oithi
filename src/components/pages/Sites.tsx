'use client'

import { lazy, Suspense, useEffect, useState } from 'react'
import scss from '@/app/scss/components/cases/sites.module.scss'

const Site = lazy(() => import('./projects/Site'))
const API_CASES = `${process.env.NEXT_PUBLIC_API_URL}sites`

export default function Sites() {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [sites, setsites] = useState([])

    const getAPISites = async () => {
        try {
            
            setLoading(true)

            const response = await fetch(API_CASES)
            const data = await response.json()

            if(!data) throw 'Problema com a requisição'
            
            setData(data)

            const result = data.cases
            const sites:any = Object.values(result)

            setsites(sites)

            // console.log('response', response)
            // console.log('api sites:', sites)

        } catch (error) {
            console.log(error)

        } finally {
            setLoading(false)

        }
    }

    useEffect( () => {
        getAPISites()
    }, [])
    
    return (
        <>
            <Suspense fallback={<div>Carregando ...</div>}>
                {
                    loading && !data &&
                    <span>Carregando...</span>
                }
                {
                    sites.map( (item, index) => {
                        const size = sites.length
                        return (
                            <section className={`${scss.sites} ${scss[item['nome']]} ${size}`} key={index}>
                                <Site slug={item['nome']} titulo={item['titulo']} scssName='sites' scssPos={item['id']} scssSide={`${scss[item['coluna'] == 'esquerda' ? 'left' : 'right']}`} scssAnchorUp={`${index == 0 ? 'projects' : 'site' + index}`} scssAnchorDown={`${index == size-1 ? 'footer' : 'site' + (index+2)}`} scssBox={scss.box} scssBoxPosition={scss.position} scssPrint={scss.print} />
                            </section>
                        )
                    })
                }
            </Suspense>
        </>
    )
}