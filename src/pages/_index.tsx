import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
export default function Index() {
  return (
    <>
      <Head>
        <title>KIM JIYU</title>
        <meta name="description" content="Drawing by Kim Jiyu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="KIMJIYU.COM" />
        <meta property="og:description" content="Drawing by Kim Jiyu" />
        <meta property="og:url" content="https://www.kimjiyu.com" />
        <meta
          property="og:image"
          content="https://www.kimjiyu.com/_next/image?url=%2Fgallery%2F2.jpg&w=3840&q=75"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <div>KIM JIYU</div>
          <div>MAN 5 YEARS OLD</div>
        </h1>
        <Image
          src="/assets/main_img.jpg"
          fill
          sizes="100vw"
          alt="main_img"
          style={{
            borderRadius: "10px",
            objectFit: "scale-down",
            objectPosition: "center",
          }}
        ></Image>
      </div>
    </>
  );
}
