import { ReactNode } from "react";
import styles from "@/styles/Layout.module.css";
export default function Layout(props: { children: ReactNode }) {
  return <div className={styles.main}>{props.children}</div>;
}
