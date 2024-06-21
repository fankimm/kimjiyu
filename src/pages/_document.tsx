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
        <script>(function (co,de,n,but,t,e,r){!n[co]&&(n[co]=function(){
(n[co].q=n[co].q||[]).push(arguments);});e=t.createElement(but);
e.async=true;e.src=de;r=t.getElementsByTagName(but)[0];
r.parentNode.insertBefore(e, r);
})("CodenButter", "https://buttr.dev/butter.js", window, "script", document);
window.CodenButter("boot", { siteId: "derawretzo", auto: true });</script>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
