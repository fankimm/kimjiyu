import { IData } from "@/pages";
import styles from "../styles/Card.module.css";
import React, { ReactNode } from "react";

const Card = (props: {
  children: ReactNode;
  cardContentData: IData | undefined;
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContents}>{props.children}</div>
      <div className={styles.cardDiscription}>
        <div>{props?.cardContentData?.canvas}</div>
        <div>{`❤︎ ${props?.cardContentData?.liked.length || ""}`}</div>
      </div>
    </div>
  );
};
export default Card;
