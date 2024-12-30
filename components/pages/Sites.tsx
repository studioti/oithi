import { lazy, Suspense } from 'react'
const Site = lazy(() => import('./projects/Site'))
import scss from '../../src/scss/components/sites.module.scss'

export default function Sites() {
    return (
        <>
            <Suspense fallback={<div>Carregando ...</div>}>
                <section className={`${scss.sites} ${scss.reserva}`}>
                    <Site scssName='sites' scssPos='1' scssSide={scss.left} scssAnchorUp='projects' scssAnchorDown='site2' scssBox={scss.box} scssBoxPosition={scss.position} scssPrint={scss.print} />
                </section>
                <section className={`${scss.sites} ${scss.potencial}`}>
                    <Site scssName='sites' scssPos='2' scssSide={scss.right} scssAnchorUp='site1' scssAnchorDown='site3' scssBox={scss.box} scssBoxPosition={scss.position} scssPrint={scss.print} />
                </section>
                <section className={`${scss.sites} ${scss.cardapio}`}>
                    <Site scssName='sites' scssPos='3' scssSide={scss.left} scssAnchorUp='site2' scssAnchorDown='site4' scssBox={scss.box} scssBoxPosition={scss.position} scssPrint={scss.print} />
                </section>
                <section className={`${scss.sites} ${scss.wavoleibol}`}>
                    <Site scssName='sites' scssPos='4' scssSide={scss.right} scssAnchorUp='site3' scssAnchorDown='site5' scssBox={scss.box} scssBoxPosition={scss.position} scssPrint={scss.print} />
                </section>
                <section className={`${scss.sites} ${scss.primora}`}>
                    <Site scssName='sites' scssPos='5' scssSide={scss.left} scssAnchorUp='site4' scssAnchorDown='site6' scssBox={scss.box} scssBoxPosition={scss.position} scssPrint={scss.print} />
                </section>
                <section className={`${scss.sites} ${scss.fgv}`}>
                    <Site scssName='sites' scssPos='6' scssSide={scss.right} scssAnchorUp='site5' scssAnchorDown='site7' scssBox={scss.box} scssBoxPosition={scss.position} scssPrint={scss.print} />
                </section>
                <section className={`${scss.sites} ${scss.blindex}`}>
                    <Site scssName='sites' scssPos='7' scssSide={scss.left} scssAnchorUp='site6' scssAnchorDown='footer' scssBox={scss.box} scssBoxPosition={scss.position} scssPrint={scss.print} />
                </section>
            </Suspense>
        </>
    )
}