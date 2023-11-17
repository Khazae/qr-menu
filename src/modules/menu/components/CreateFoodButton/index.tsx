import classNames from "classnames";
import Button from "../../../../common/components/Button";
import styles from "./styles.module.css";

interface Props {
  onClick?: () => void;
}

const CreateFoodButton = ({ onClick = () => {} }: Props) => {
  return (
    <Button className={styles.button} onClick={onClick}>
      <i className={classNames("bx bx-plus-circle", styles.icon)} />
      Добавить позицию
    </Button>
  );
};

export default CreateFoodButton;
