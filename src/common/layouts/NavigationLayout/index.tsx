import { Outlet } from "react-router-dom";
import { store } from "../../../store";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import styles from "./style.module.css";

const NavigationLayout = () => {
  const admin = store.getState().auth.admin;

  return (
    <div className={styles.wrapper}>
      <div className={styles.sideBarWrapper}>
        <SideBar />
      </div>
      <main className={styles.main}>
        <div className="container">
          <Header name={admin?.name} position={"Менеджер Смены"} />
          <div className={styles.content}>
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default NavigationLayout;
