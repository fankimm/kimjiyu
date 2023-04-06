import styles from "../styles/Home.module.css";
import Card from "@/components/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "@/components/modal";
export interface IData {
  filename: string;
  color?: string;
  author: string;
  canvas: string;
  method: string;
  priority?: boolean;
  liked: string[];
}
import db from "@/json/db.json";
import uuid from "react-uuid";
export default function Home() {
  const [modalVisible, setmodalVisible] = useState(false);
  const [selectedData, setSelectedData] = useState<IData | undefined>();
  const [data, setData] = useState<IData[] | undefined>();
  useEffect(() => {
    const id = localStorage.getItem("id");
    if (!id) {
      localStorage.setItem("id", uuid());
    }
    setData(db);
  }, []);
  return (
    <>
      <div className={styles.galleryContainer}>
        {data?.map((item) => (
          <Card key={item.filename} cardContentData={item}>
            <Image
              className={styles.cardImage}
              priority={item.priority ?? false}
              src={"/gallery/" + item.filename}
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              alt="gal"
              onClick={() => {
                setSelectedData(item);
                setmodalVisible(true);
              }}
            ></Image>
          </Card>
        ))}
      </div>
      <Modal
        data={data}
        setData={setData}
        visible={modalVisible}
        setVisible={setmodalVisible}
        filename={selectedData?.filename || ""}
      >
        <Image
          className={styles.modalImage}
          src={"/gallery/" + selectedData?.filename}
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
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
