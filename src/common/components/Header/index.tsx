import styles from "./styles.module.css";

interface Props {
  name?: string;
  position?: string;
}

const Header = ({ name, position }: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.userProfile}>
          <h3 className={styles.title}>{name}</h3>
          <span className={styles.desc}>{position}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
