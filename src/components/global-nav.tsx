import styles from "@/styles/GlobalNav.module.css";
import Link from "next/link";
const GlobalNav = () => {
  return (
    <nav className={styles.globalNav}>
      <Link href="/" className={styles.logo}>
        <div>KIM JIYU</div>
        <div className={styles.logoDescription}>6YEARS OLD</div>
      </Link>
      <div className={styles.menu}>
        <Link href="/">ABOUT</Link>
        <Link href="/">CONTACT</Link>
      </div>
    </nav>
  );
};

export default GlobalNav;
