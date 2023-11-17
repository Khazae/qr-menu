import { useEffect, useState } from "react";
import MenuCards from "../../components/MenuCards";
import styles from "./style.module.css";
import { fetchAllFoods } from "../../../../api/modules/menu/requests/fetchAllFoods";
import { Menu } from "../../../../entities/menu";
import CreateFoodButton from "../../components/CreateFoodButton";
import CreateFoodModal from "../../components/CreateFoodModal";
import classNames from "classnames";

const ListMenuView = () => {
  const [menu, setMenu] = useState<Menu[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null as null | Error);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    loadMenu();
  }, []);

  const loadMenu = async () => {
    setLoading(true);
    try {
      const data = await fetchAllFoods();
      setMenu(data);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Список блюд</h1>
      <div className={styles.items}>
        <CreateFoodModal visible={visible} />
        <section
          className={classNames(styles.menu, {
            [styles.withTransition]: visible,
          })}
        >
          <div className={styles.main}>
            <div className={styles.controls}>
              <CreateFoodButton
                onClick={() => setVisible((prevVisible) => !prevVisible)}
              />
            </div>
            <MenuCards menu={menu} loading={loading} error={error} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ListMenuView;
