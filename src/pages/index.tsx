import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Card from "@/components/card";
import Image from "next/image";
import { useState } from "react";
import Modal from "@/components/modal";

export default function Home() {
  const [modalVisible, setmodalVisible] = useState(false);
  const [currentFileName, setcurrentFileName] = useState("");
  const arr = [];
  for (let i = 0; i < 72; i++) {
    arr.push({ filename: `${i}.jpg` });
  }
  return (
    <>
      <Head>
        <title>KIM JIYU</title>
        <meta name="description" content="Draw by Kim Jiyu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.galleryContainer}>
          {arr.map((item) => (
            <Card key={item.filename}>
              <Image
                src={"/gallery/" + item.filename}
                width={200}
                height={200}
                alt="gal"
                onClick={() => {
                  setcurrentFileName(item.filename);
                  setmodalVisible(true);
                }}
              ></Image>
            </Card>
          ))}
        </div>
        <Modal visible={modalVisible} setVisible={setmodalVisible}>
          <Image
            src={"/gallery/" + currentFileName}
            width={600}
            height={600}
            alt="gal"
            onClick={() => {
              setcurrentFileName(currentFileName);
              setmodalVisible(true);
            }}
          ></Image>
        </Modal>
      </main>
    </>
  );
}
