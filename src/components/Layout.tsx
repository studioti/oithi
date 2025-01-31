import { lazy, memo, Suspense } from 'react'

const Header = lazy(() => import('./Header'))
const Footer = lazy(() => import('./Footer'))

const Layout = ({...props}) => {
    return (
        <>
            {/* header */}
            <Suspense fallback={<div>Carregando ...</div>}>
                <Header />
            </Suspense>

            {/* slot container pages */}
            {props.children}
            
            {/* footer */}
            <Suspense fallback={<div>Carregando ...</div>}>
                <Footer />
            </Suspense>
        </>
    )
}

export default memo(Layout)