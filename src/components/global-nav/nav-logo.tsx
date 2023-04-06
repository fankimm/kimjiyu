import Link from "next/link";
import styles from "../../styles/GlobalNav.module.css";
export default function Logo() {
  const birth = new Date("2018-02-08");
  const today = new Date();
  const diff = today.getFullYear() - birth.getFullYear();
  return (
    <Link href="/" className={styles.logo}>
      <div className={styles.logoName}>KIM JIYU</div>
      <div className={styles.logoDescription}>MAN {diff} YEARS OLD</div>
    </Link>
  );
}
