import styles from "@/styles/GlobalNav.module.css";
import Link from "next/link";
const GlobalNav = () => {
    return <div className={styles.globalNav}>
      <Link href="/" className={styles.logo}>KIMJIYU.COM</Link>
  </div>;
};

export default GlobalNav;
