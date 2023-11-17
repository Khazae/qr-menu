import classNames from "classnames";
import Button from "../../../../common/components/Button";
import styles from "./styles.module.css";

interface Props {
  onClick?: () => void;
}

const CreateEventButton = ({ onClick }: Props) => {
  return (
    <Button className={styles.button} onClick={onClick}>
      <i className={classNames("bx bx-plus-circle", styles.icon)} />
      Создать юзера
    </Button>
  );
};

export default CreateEventButton;
