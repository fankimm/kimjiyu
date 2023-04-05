import styles from "@/styles/Card.module.css";
import React, { ReactNode } from "react";

const Card = (props: { children: ReactNode;  }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContents}>{props.children}</div>
      <div className={styles.cardDiscription}>150x150mm Color paper</div>
    </div>
  );
};
export default Card;
