import Link from "next/link";
import styles from "../../styles/GlobalNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
export default function Logo() {
  const birth = new Date("2018-02-08");
  const today = new Date();
  const diff = today.getFullYear() - birth.getFullYear();
  return (
    <Link href="/" className={styles.logo}>
      <div className={styles.logoName}>KIM JIYU</div>
      <FontAwesomeIcon className={styles.modalLike} icon={faHeart} size="sm" />
      <div className={styles.logoDescription}>MAN {diff} YEARS OLD</div>
    </Link>
  );
}
