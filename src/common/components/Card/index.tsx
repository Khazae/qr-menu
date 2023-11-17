import classNames from "classnames";
import RamenImg from "../../../assets/images/ramen.svg";
import styles from "./styles.module.css";

interface Props {
  title?: string;
  desc?: string;
  price?: number | string;
  className?: string;
}

const Card = ({
  title = "Томатный суп",
  desc = "",
  price = "1200",
  className,
}: Props) => {
  return (
    <div className={classNames(styles.wrapper, className, styles.isLoading)}>
      <img className={styles.image} src={RamenImg} alt="Food image" />
      <h3 className={styles.title}>{title}</h3>
      {desc && <p className={styles.desc}>{desc}</p>}
      <p className={styles.price}>{price}₸</p>
    </div>
  );
};

export default Card;
