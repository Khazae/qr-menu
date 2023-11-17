import { useId } from "react";

import classNames from "classnames";

import styles from "./styles.module.css";
import Label from "../Label";

interface Props {
  value?: string | number;
  type?: "text" | "email" | "password" | "number" | "tel";
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  onChange?: (value: string) => void;
}

const Input = ({
  value,
  type = "text",
  placeholder,
  label,
  required,
  className,
  onChange = () => ({}),
}: Props) => {
  const id = useId();

  return (
    <div>
      {label && (
        <Label htmlFor={id} required={required}>
          {label}
        </Label>
      )}
      <input
        id={id}
        value={value}
        type={type}
        placeholder={placeholder}
        className={classNames(styles.input, className)}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

export default Input;
