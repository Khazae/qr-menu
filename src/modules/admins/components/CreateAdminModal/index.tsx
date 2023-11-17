import { useState } from "react";
import Modal from "../../../../common/components/Modal";
import Input from "../../../../common/components/Input";
import styles from "./styles.module.css";

interface Props {
  visible?: boolean;
  submitLoading?: boolean;
  onSubmit?: (form: Form) => void;
  onClose?: () => void;
}

interface Form {
  email: string;
  name: string;
  password: string;
  position: string;
}

const CreateEventModal = ({
  visible = false,
  submitLoading = false,
  onSubmit = () => ({}),
  onClose = () => ({}),
}: Props) => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    position: "",
  } as Form);

  const handleSubmit = () => {
    onSubmit(form);
  };

  return (
    <Modal
      visible={visible}
      title="Новое событие"
      submitLoading={submitLoading}
      onSubmit={handleSubmit}
      onClose={onClose}
    >
      <form
        onSubmit={(event) => event.preventDefault()}
        className={styles.form}
      >
        <div className={styles.row}>
          <Input
            label="Email"
            required
            placeholder="marat@mail.ru"
            onChange={(email) => setForm({ ...form, email })}
          />
          {/* <Textarea
          label="Описание"
          placeholder="Описание"
          onChange={(description) => setForm({ ...form, description })}
        /> */}
          <Input
            label="Name"
            placeholder="Marat"
            onChange={(name) => setForm({ ...form, name })}
          />
        </div>
        <div className={styles.row}>
          <Input
            label="Password"
            placeholder="***"
            onChange={(password) => setForm({ ...form, password })}
          />
          <Input
            label="Position"
            placeholder="Position"
            onChange={(position) => setForm({ ...form, position })}
          />
        </div>
        {/* 
        <div className={styles.formField}>
          <CustomSelect options={options} onChange={handleSelectChange} />
        </div> */}

        {/* <div className={styles.formField}>
          <Label>Бесплатно/Платно</Label>
          <Select
            defaultValue={EventIsFree.Unknown}
            style={{ width: 220 }}
            onChange={(isFree) => setForm({ ...form, isFree })}
            options={[
              { value: EventIsFree.Free, label: "Бесплатно" },
              { value: EventIsFree.Paid, label: "Платно" },
              { value: EventIsFree.Unknown, label: "Неизвестно" },
            ]}
          />
        </div> */}
      </form>
    </Modal>
  );
};

export default CreateEventModal;
