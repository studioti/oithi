import type { AppProps } from 'next/app'
import { memo } from 'react'
 
const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Component {...pageProps} />
    )
}

export default memo(App)