import type { AppProps } from 'next/app'
import '../src/scss/globals.scss'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../services/queryClient'
 
export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>
    )
}