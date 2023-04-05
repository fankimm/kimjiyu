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
import Head from "next/head";
export default function Home() {
  const [modalVisible, setmodalVisible] = useState(false);
  const [selectedData, setSelectedData] = useState<IData | undefined>();
  const [data, setData] = useState<IData[] | undefined>();
  useEffect(() => {
    setData(db);
  }, []);
  return (
    <>
      <div className={styles.galleryContainer}>
        {data?.map((item) => (
          <>
            <Card key={item.filename}>
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
      <Modal
        visible={modalVisible}
        setVisible={setmodalVisible}
        selectedData={selectedData}
      >
        <Image
          src={"/gallery/" + selectedData?.filename}
          fill
          alt="gal"
          style={{
            objectFit: "scale-down",
            objectPosition: "center",
          }}
          onClick={() => {
            setSelectedData(selectedData);
            setmodalVisible(true);
          }}
        ></Image>
      </Modal>
    </>
  );
}
