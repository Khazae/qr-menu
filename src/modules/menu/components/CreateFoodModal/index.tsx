import { FormEvent, useState } from "react";
import styles from "./styles.module.css";
import Input from "../../../../common/components/Input";
import Button from "../../../../common/components/Button";

interface Props {
  visible?: boolean;
  submitLoading?: boolean;
  onSubmit?: (form: Form) => void;
  onClose?: () => void;
}

interface Form {
  name: string;
  description: string;
  price: string;
  category_id: string;
}

const CreateFoodModal = ({
  visible = false,
  submitLoading = false,
  onSubmit = () => ({}),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onClose = () => ({}),
}: Props) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category_id: "",
  } as Form);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(form);
  };

  return (
    visible && (
      <section className={styles.createFoodModal}>
        <div className={styles.createFoodContent}>
          <form
            onSubmit={(event) => handleSubmit(event)}
            className={styles.form}
          >
            <div className={styles.content}>
              <h3 className={styles.title}>Добавить позицую</h3>
              <div className={styles.row}>
                <Input
                  label="Название блюда"
                  required
                  placeholder="Борщ"
                  onChange={(name) => setForm({ ...form, name })}
                />

                <Input
                  label="Цена"
                  required
                  placeholder="1000 ₸"
                  onChange={(name) => setForm({ ...form, name })}
                />
              </div>
            </div>

            <Button loading={submitLoading} className={styles.button}>
              Добавить
            </Button>
          </form>
        </div>
      </section>
    )
  );
};

export default CreateFoodModal;
