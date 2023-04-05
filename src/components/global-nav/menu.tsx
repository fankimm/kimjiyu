import Link from "next/link";
import styles from "@/styles/GlobalNav.module.css";
export default function Menu() {
  const menuList = [
    {
      link: "150x150",
      name: "150x150",
    },
    {
      link: "about",
      name: "ABOUT",
    },
    {
      link: "contact",
      name: "CONTATCT",
    },
  ];
  return (
    <div className={styles.menu}>
      {menuList.map((menu) => {
        return (
          <Link key={menu.name} href={menu.link}>
            {menu.name}
          </Link>
        );
      })}
    </div>
  );
}
