import styles from "@/styles/150.module.css";
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
      <div className={styles.galleryContainer}>
        {data?.map((item) => (
          <Card key={item.filename} cardContentData={item}>
            <Image
              priority={item.priority ?? false}
              src={"/gallery/" + item.filename}
              fill
              sizes="100%"
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
        visible={modalVisible}
        setVisible={setmodalVisible}
        selectedData={selectedData}
      >
        <Image
          src={"/gallery/" + selectedData?.filename}
          fill
          alt="gal"
          style={{
            objectFit: "contain",
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
