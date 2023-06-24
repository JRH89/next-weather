import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <meta charSet="UTF-8" />
        <meta property="og:url" content="https://weather-pal.vercel.app/" />
        <meta property="og:title" content="Weather Pal" />
        <meta property="og:description" content="Weather app made with React, Next, and Tailwind." />
        <meta property="og:image" content="https://weather-pal.vercel.app/images/preview.png" />
        <meta property="url" content="https://weather-pal.vercel.app" />
        <meta property="title" content="Weather Pal" />
        <meta property="description" content="Weather app made with React, Next, and Tailwind." />
        <meta property="image" content="https://weather-pal/images/preview.png" />
        <link type="image/png" rel="shortcut icon" href="hookerhill.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
