import { FormEventHandler, useState } from "react";
import Input from "../../../../common/components/Input";
import Button from "../../../../common/components/Button";
import styles from "./styles.module.css";

interface Props {
  loading?: boolean;
  onSubmit?: (values: { email: string; password: string }) => void;
}

const LoginForm = ({ loading = false, onSubmit = () => ({}) }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    onSubmit({
      email,
      password,
    });
  };

  return (
    <div className={styles.form}>
      <h2 className={styles.title}>Войти</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.fieldGroup}>
          <Input
            required={true}
            label="Почта"
            type="email"
            placeholder="Email"
            onChange={(value) => setEmail(value)}
          />
        </div>
        <div className={styles.fieldGroup}>
          <Input
            required={true}
            label="Пароль"
            type="password"
            placeholder="Пароль"
            onChange={(value) => setPassword(value)}
          />
        </div>
        <Button htmlType="submit" className={styles.button} loading={loading}>
          Войти
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
