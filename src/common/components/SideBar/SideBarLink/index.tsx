import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { SideBarItem } from "../../../entities/SideBarItem";
import styles from "./styles.module.css";

const SideBarLink = ({ name, icon, link }: SideBarItem) => {
  const setActive = ({ isActive }: any) =>
    classNames(styles.link, {
      [styles.linkActive]: isActive,
    });

  return (
    <li className={styles.item}>
      <NavLink to={link} className={setActive}>
        {name}
      </NavLink>
    </li>
  );
};

export default SideBarLink;
