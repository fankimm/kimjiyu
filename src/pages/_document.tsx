import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <title>KIM JIYU</title>
      <Head>
        <meta name="description" content="Drawing by Kim Jiyu" />
        <meta property="og:title" content="KIMJIYU.COM" />
        <meta property="og:description" content="Drawing by Kim Jiyu" />
        <meta property="og:url" content="https://www.kimjiyu.com" />
        <meta
          property="og:image"
          content="https://www.kimjiyu.com/_next/image?url=%2Fgallery%2F2.jpg&w=3840&q=75"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
