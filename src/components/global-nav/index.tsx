import styles from "@/styles/GlobalNav.module.css";
import Menu from "./nav-logo";
import Logo from "./menu";
const GlobalNav = () => {
  
  return (
    <nav className={styles.globalNav}>
      <Logo />
      <Menu />
    </nav>
  );
};

export default GlobalNav;
