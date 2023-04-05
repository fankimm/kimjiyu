import Head from "next/head";
import styles from "@/styles/150.module.css";
import Card from "@/components/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "@/components/modal";
export interface IData {
  filename: string;
  color?: string;
}
import db from "@/json/db.json";
export default function Home() {
  const [modalVisible, setmodalVisible] = useState(false);
  const [selectedData, setSelectedData] = useState<IData | undefined>();
  const [data, setData] = useState<IData[] | undefined>();
  useEffect(() => {
    setData(db);
  }, []);
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
        <div className={styles.galleryContainer}>
          {data?.map((item) => (
            <>
              <Card key={item.filename} >
                <Image
                  src={"/gallery/" + item.filename}
                  fill
                  alt="gal"
                  onClick={() => {
                    setSelectedData(item);
                    setmodalVisible(true);
                  }}
                ></Image>
              </Card>
            </>
          ))}
        </div>
        <Modal visible={modalVisible} setVisible={setmodalVisible} selectedData={selectedData}>
          <Image
            src={"/gallery/" + selectedData?.filename}
            fill
            alt="gal"
            onClick={() => {
              setSelectedData(selectedData);
              setmodalVisible(true);
            }}
          ></Image>
        </Modal>
    </>
  );
}
