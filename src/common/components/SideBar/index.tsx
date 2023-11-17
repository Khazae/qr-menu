import { SideBarItem } from "../../entities/SideBarItem";
import SideBarLink from "./SideBarLink";
import styles from "./styles.module.css";

const SideBar = () => {
  const sideBarItems: SideBarItem[] = [
    {
      name: "Staff",
      icon: "bx-news",
      link: "/",
    },
    {
      name: "Menu",
      icon: "bx bx-purchase-tag-alt",
      link: "/menu",
    },
  ];
  const elements = sideBarItems.map((item, index) => {
    return <SideBarLink key={index} {...item} />;
  });

  return (
    <div className={styles.wrapper}>
      <ul className={styles.links}>{elements}</ul>
    </div>
  );
};

export default SideBar;
