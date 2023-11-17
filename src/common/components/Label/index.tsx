import classNames from 'classnames';
import styles from './styles.module.css';

interface Props {
  htmlFor?: string;
  required?: boolean;
  children?: React.ReactNode;
}

const Label = ({ htmlFor, required = false, children }: Props) => {
  return (
    <label
      className={classNames(styles.label, required ? styles.required : null)}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

export default Label;