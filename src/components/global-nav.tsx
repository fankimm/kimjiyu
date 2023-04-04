import styles from "@/styles/GlobalNav.module.css";
import Link from "next/link";
const GlobalNav = () => {
  const birth = new Date("2018-02-08");
  const today = new Date()
  const diff = today.getFullYear() - birth.getFullYear()
  return (
    <nav className={styles.globalNav}>
      <Link href="/" className={styles.logo}>
        <div>KIM JIYU</div>
        <div className={styles.logoDescription}>MAN {diff} YEARS OLD</div>
      </Link>
      <div className={styles.menu}>
        <Link href="/">ABOUT</Link>
        <Link href="/">CONTACT</Link>
      </div>
    </nav>
  );
};

export default GlobalNav;
