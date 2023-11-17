import Card from "../../../../common/components/Card";
import CardLoading from "../../../../common/components/Card/CardLoading";
import { Menu } from "../../../../entities/menu";
import styles from "./styles.module.css";

interface Props {
  menu?: Menu[];
  loading?: boolean;
  error?: Error | null;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MenuCards = ({ menu = [], loading = false, error = null }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.items}>
        {loading && <CardLoading />}

        {menu.length > 0 &&
          !loading &&
          menu.map((el) => (
            <div className={styles.content} key={el.name}>
              <h3 className={styles.title}>{el.name}</h3>
              <div className={styles.cardItems}>
                {el.data.map((card) => (
                  <div className={styles.cardItem} key={card.id}>
                    <Card
                      className={styles.cardStyle}
                      key={card.name}
                      title={card.name}
                      desc={card.description}
                      price={card.price}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MenuCards;
