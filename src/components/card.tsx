import styles from "@/styles/Card.module.css";
import React, { ReactNode } from "react";
const Card = (props: { children: ReactNode }) => {
  return <div className={styles.card}>{props.children}</div>;
};
export default Card;
