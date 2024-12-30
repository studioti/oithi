import React from "react"
import { Helmet } from 'react-helmet'

export default function Meta({...props}) {
    return (
        <Helmet>
            <meta charSet="utf-8" />

            <title>{props.titulo}</title>
            
            <meta name="author" content="Thiago Aguiar" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <meta name="description" content="Thiago é um especialista em tecnologia com 15 anos de experiência em desenvolvimento front-end. Formado em Análise e Desenvolvimento de Sistemas pela FIAP (2009), construiu sua carreira em agências de marketing digital e grandes grupos de mídia em São Paulo. Com sólida experiência, criou sites, landing pages, interfaces web para sistemas, portais de notícias e PWA’s, além de realizar integrações com APIs e manutenção contínua de projetos." />
            <meta name="keywords" content="Frontend, Front-end, Vue JS, Nuxt JS, React JS, Next JS, Git, Profissional de tecnologia, Tecnologia, Web, CSS, HTML, Javascript, Sass, Bootstrap, Desenvolvimento de Sites" />

            <meta httpEquiv="x-ua-compatible" content="ie=edge" />

            <meta property="og:image" content="https://oithi.com.br/thumb.jpg" />
            <meta property="og:title" content="Thiago Aguiar • Front-end Developer" />
            <meta property="og:description" content="Thiago é um especialista em tecnologia com 15 anos de experiência em desenvolvimento front-end. Formado em Análise e Desenvolvimento de Sistemas pela FIAP (2009), construiu sua carreira em agências de marketing digital e grandes grupos de mídia em São Paulo." />
            <meta property="og:url" content="https://oithi.com.br" />

            <link rel="apple-touch-icon"        sizes="57x57"    href="favicon/apple-icon-57x57.png" />
            <link rel="apple-touch-icon"        sizes="60x60"    href="favicon/apple-icon-60x60.png" />
            <link rel="apple-touch-icon"        sizes="72x72"    href="favicon/apple-icon-72x72.png" />
            <link rel="apple-touch-icon"        sizes="76x76"    href="favicon/apple-icon-76x76.png" />
            <link rel="apple-touch-icon"        sizes="114x114"  href="favicon/apple-icon-114x114.png" />
            <link rel="apple-touch-icon"        sizes="120x120"  href="favicon/apple-icon-120x120.png" />
            <link rel="apple-touch-icon"        sizes="144x144"  href="favicon/apple-icon-144x144.png" />
            <link rel="apple-touch-icon"        sizes="152x152"  href="favicon/apple-icon-152x152.png" />
            <link rel="apple-touch-icon"        sizes="180x180"  href="favicon/apple-icon-180x180.png" />

            <link rel="icon" type="image/png"   sizes="192x192"  href="favicon/android-icon-192x192.png" />
            <link rel="icon" type="image/png"   sizes="32x32"    href="favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png"   sizes="96x96"    href="favicon/favicon-96x96.png" />
            <link rel="icon" type="image/png"   sizes="16x16"    href="favicon/favicon-16x16.png" />

            <link rel="icon" type="image/png" sizes="192x192"  href="favicon/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="144x144"  href="favicon/android-icon-144x144.png" />
            <link rel="icon" type="image/png" sizes="96x96"  href="favicon/android-icon-96x96.png" />
            <link rel="icon" type="image/png" sizes="72x72"  href="favicon/android-icon-72x72.png" />
            <link rel="icon" type="image/png" sizes="48x48"  href="favicon/android-icon-48x48.png" />
            <link rel="icon" type="image/png" sizes="36x36"  href="favicon/android-icon-36x36.png" />

            <link rel="icon" href="favicon/favicon.ico" />

            <meta name="msapplication-TileColor" content="#000" />
            <meta name="msapplication-TileImage" content="favicon/ms-icon-144x144.png" />
            <meta name="theme-color" content="#000" />

            <link rel="manifest" href="favicon/manifest.json"></link>

            {/* google fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Ms+Madi&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap" rel="stylesheet" />
            
            <body className={props.bodyClass} />
        </Helmet>
    )
}