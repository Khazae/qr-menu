import classNames from 'classnames';
import ButtonLoader from './ButtonLoader';
import styles from './styles.module.css';

interface Props {
  htmlType?: 'submit' | 'reset' | 'button';
  loading?: boolean;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  htmlType = 'button',
  loading = false,
  children,
  className,
  onClick = () => ({}),
}: Props) => {
  return (
    <button
      type={htmlType}
      className={classNames(styles.button, className, {
        [styles.disabled]: loading,
      })}
      onClick={onClick}
    >
      {loading ? <ButtonLoader /> : children}
    </button>
  );
};

export default Button;