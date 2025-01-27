import type { Metadata } from "next"
import { Bebas_Neue, Ms_Madi, Poiret_One, Bungee_Inline, Poppins } from 'next/font/google'

import '@/app/scss/globals.scss'
import scss from "@/app/scss/index.module.scss"
import Cursor from "@/components/utils/Cursor"

const bebasneue = Bebas_Neue({
    subsets: ['latin'],
    display: 'swap',
    weight: "400",
    variable: '--font-bebasneue',
    preload: true
})

const msmadi = Ms_Madi({
    subsets: ['latin'],
    display: 'swap',
    weight: "400",
    variable: '--font-msmadi',
    preload: true
})

const poiretone = Poiret_One({
    subsets: ['latin'],
    display: 'swap',
    weight: "400",
    variable: '--font-poiretone',
    preload: true
})

const bungeeinline = Bungee_Inline({
    subsets: ['latin'],
    display: 'swap',
    weight: "400",
    variable: '--font-bungeeinline',
    preload: true
})

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: "400",
    variable: '--font-roboto',
    preload: true
})

export const metadata: Metadata = {
    description: 'Thiago é um especialista em tecnologia com 15 anos de experiência em desenvolvimento front-end. Formado em Análise e Desenvolvimento de Sistemas pela FIAP (2009), construiu sua carreira em agências de marketing digital e grandes grupos de mídia em São Paulo. Com sólida experiência, criou sites, landing pages, interfaces web para sistemas, portais de notícias e PWA’s, além de realizar integrações com APIs e manutenção contínua de projetos.',
    keywords: 'Frontend, Front-end, Vue JS, Nuxt JS, React JS, Next JS, Git, Profissional de tecnologia, Tecnologia, Web, CSS, HTML, Javascript, Sass, Bootstrap, Desenvolvimento de Sites',
    title: 'Thiago Aguiar • Front-end Developer',
    authors: {
        name: 'Thiago Aguiar'
    },
    openGraph: {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
        title: 'Thiago Aguiar • Front-end Developer',
        description: 'Thiago é um especialista em tecnologia com 15 anos de experiência em desenvolvimento front-end. Formado em Análise e Desenvolvimento de Sistemas pela FIAP (2009), construiu sua carreira em agências de marketing digital e grandes grupos de mídia em São Paulo.',
        images: {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}thumb.jpg`
        }
    },
    icons: [
        {
            rel: 'apple-touch-icon',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}favicon/apple-icon-57x57.png`,
            sizes: '57x57'
        },
        {
            rel: 'apple-touch-icon',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}favicon/apple-icon-60x60.png`,
            sizes: '60x60'
        },
        {
            rel: 'apple-touch-icon',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}favicon/apple-icon-72x72.png`,
            sizes: '72x72'
        },
        {
            rel: 'apple-touch-icon',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}favicon/apple-icon-76x76.png`,
            sizes: '76x76'
        },
        {
            rel: 'apple-touch-icon',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}favicon/apple-icon-114x114.png`,
            sizes: '114x114'
        },
        {
            rel: 'apple-touch-icon',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}favicon/apple-icon-120x120.png`,
            sizes: '120x120'
        },
        {
            rel: 'apple-touch-icon',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}favicon/apple-icon-144x144.png`,
            sizes: '144x144'
        },
        {
            rel: 'apple-touch-icon',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}favicon/apple-icon-152x152.png`,
            sizes: '152x152'
        },
        {
            rel: 'icon',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}favicon/favicon-32x32.png`,
            sizes: '32x32',
            type: "image/png"
        },
        {
            rel: 'icon',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}favicon/favicon-96x96.png`,
            sizes: '96x96',
            type: "image/png"
        },
        {
            rel: 'icon',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}favicon/favicon-16x16.png`,
            sizes: '16x16',
            type: "image/png"
        },
        {
            rel: 'icon',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}favicon/android-icon-192x192.png`,
            sizes: '192x192',
            type: "image/png"
        },
        {
            rel: 'icon',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}favicon/android-icon-144x144.png`,
            sizes: '144x144',
            type: "image/png"
        },
        {
            rel: 'icon',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}favicon/android-icon-96x96.png`,
            sizes: '96x96',
            type: "image/png"
        },
        {
            rel: 'icon',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}favicon/android-icon-72x72.png`,
            sizes: '72x72',
            type: "image/png"
        },
        {
            rel: 'icon',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}favicon/android-icon-48x48.png`,
            sizes: '48x48',
            type: "image/png"
        },
        {
            rel: 'icon',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}favicon/android-icon-36x36.png`,
            sizes: '36x36',
            type: "image/png"
        },
        {
            rel: 'icon',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}favicon/favicon.ico`
        },
        {
            rel: 'manifest',
            url: `${process.env.NEXT_PUBLIC_BASE_URL}favicon/manifest.json`
        }
    ],
    other: {
        icon: "favicon/favicon-32x32.png",
        "mask-icon": "favicon/apple-icon-72x72.png",
        "msapplication-TileColor": "#000000",
        "msapplication-TileImage": "favicon/ms-icon-144x144.png",
        themeColor: '#000000',
        "google-site-verification": 'SUkDocJKfLYqumrzO8cT6dt0AbujY0AECuh0gdmPZHU'
    },
    manifest: `${process.env.NEXT_PUBLIC_BASE_URL}favicon/manifest.json`
}
 
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br" className={`${bebasneue.variable} ${msmadi.variable} ${poiretone.variable} ${bungeeinline.variable} ${poppins.variable}`}>
            <body className={scss.index}>
                <Cursor />
                {children}
            </body>
        </html>
    )
}