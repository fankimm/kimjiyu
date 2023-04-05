import styles from "@/styles/GlobalNav.module.css";
import Logo from "./nav-logo";
import Menu from "./menu";
const GlobalNav = () => {
  return (
    <nav className={styles.globalNav}>
      <Logo />
      {/* <Menu /> */}
    </nav>
  );
};

export default GlobalNav;
