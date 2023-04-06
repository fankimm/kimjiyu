import styles from "../styles/Home.module.css";
import Card from "@/components/card";
import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "@/components/modal";
export interface IData {
  id: number;
  filename: string;
  color?: string;
  author: string;
  canvas: string;
  method: string;
  priority?: boolean;
  liked: { userId: string }[];
}
import uuid from "react-uuid";
import { createClient } from "@supabase/supabase-js";
export default function Home({ ssrData }: { ssrData: IData[] }) {
  const [modalVisible, setmodalVisible] = useState(false);
  const [selectedData, setSelectedData] = useState<IData | undefined>();
  const [data, setData] = useState<IData[] | undefined>(ssrData);
  useEffect(() => {
    const id = localStorage.getItem("userId");
    if (!id) {
      localStorage.setItem("userId", uuid());
    }
    // setData(db);
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
        id={selectedData?.id || -1}
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

export async function getServerSideProps() {
  let url = "";
  if (process.env.NODE_ENV === "development") {
    url = "http://localhost:3000/api/like";
  }
  if (process.env.NODE_ENV === "production") {
    url = process.env.API_ENDPOINT || "";
  }
  const res = await fetch(url);
  const data = await res.json();
  console.log("data", data);
  return { props: { ssrData: data.data } };
}
