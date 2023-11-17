import classNames from "classnames";
import Button from "../Button";
import styles from "./styles.module.css";

interface Props {
  visible?: boolean;
  title?: string;
  children?: React.ReactNode;
  submitLoading?: boolean;
  onSubmit?: () => void;
  onClose?: () => void;
}

const Modal = ({
  visible = false,
  title = "",
  children,
  submitLoading = false,
  onSubmit = () => ({}),
  onClose = () => ({}),
}: Props) => {
  return visible ? (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <i className={classNames("bx bx-x", styles.closeIcon)} />
          </button>
        </header>
        <main className={styles.content}>{children}</main>
        <footer className={styles.footer}>
          <Button
            loading={submitLoading}
            className={styles.submitButton}
            onClick={onSubmit}
          >
            Сохранить
          </Button>
        </footer>
      </div>
    </div>
  ) : null;
};

export default Modal;
