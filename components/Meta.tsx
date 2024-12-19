import React from "react"
import { Helmet } from 'react-helmet'

export default function Meta({...props}) {
    return (
        <Helmet>
            <meta charSet="utf-8" />

            <title>{props.titulo}</title>
            
            <meta name="author" content="Thiago Aguiar" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <meta name="description" content="Thiago é um especialista em tecnologia com 15 anos de experiência em desenvolvimento front-end. Formado em Análise e Desenvolvimento de Sistemas pela FIAP (2009), construiu sua carreira em agências de marketing digital e grandes grupos de mídia em São Paulo. Com sólida experiência, criou sites, landing pages, interfaces web para sistemas, portais de notícias e PWA’s, além de realizar integrações com APIs e manutenção contínua de projetos. Thiago também atua como freelancer, entregando soluções para diversos clientes e negócios." />
            <meta name="keywords" content="Frontend, Front-end, Vue JS, Nuxt JS, React JS, Next JS, Git, Profissional de tecnologia, Tecnologia, Web, CSS, HTML, Javascript, Sass, Bootstrap, Desenvolvimento de Sites" />

            <meta httpEquiv="x-ua-compatible" content="ie=edge" />

            <meta property="og:image" content="https://meindicaae.netlify.app/images/logo_og.png" />
            <meta property="og:title" content="" />
            <meta property="og:description" content="" />
            <meta property="og:url" content="oithi.com.br" />

            <link rel="apple-touch-icon"        sizes="57x57"    href="images/favicon/apple-icon-57x57.png" />
            <link rel="apple-touch-icon"        sizes="60x60"    href="images/favicon/apple-icon-60x60.png" />
            <link rel="apple-touch-icon"        sizes="72x72"    href="images/favicon/apple-icon-72x72.png" />
            <link rel="apple-touch-icon"        sizes="76x76"    href="images/favicon/apple-icon-76x76.png" />
            <link rel="apple-touch-icon"        sizes="114x114"  href="images/favicon/apple-icon-114x114.png" />
            <link rel="apple-touch-icon"        sizes="120x120"  href="images/favicon/apple-icon-120x120.png" />
            <link rel="apple-touch-icon"        sizes="144x144"  href="images/favicon/apple-icon-144x144.png" />
            <link rel="apple-touch-icon"        sizes="152x152"  href="images/favicon/apple-icon-152x152.png" />
            <link rel="apple-touch-icon"        sizes="180x180"  href="images/favicon/apple-icon-180x180.png" />

            <link rel="icon" type="image/png"   sizes="192x192"  href="images/favicon/android-icon-192x192.png" />
            <link rel="icon" type="image/png"   sizes="32x32"    href="images/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png"   sizes="96x96"    href="images/favicon/favicon-96x96.png" />
            <link rel="icon" type="image/png"   sizes="16x16"    href="images/favicon/favicon-16x16.png" />

            <link rel="icon" href="/favicon.ico" />

            <meta name="msapplication-TileColor" content="#000" />
            <meta name="msapplication-TileImage" content="images/favicon/ms-icon-144x144.png" />
            <meta name="theme-color" content="#000" />

            {/* google fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Ms+Madi&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet" />
            
            <body className={props.bodyClass} />
        </Helmet>
    )
}