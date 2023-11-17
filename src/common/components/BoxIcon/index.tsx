import classNames from "classnames";

interface Props {
  icon: string;
  className?: string;
  [key: string]: unknown;
}

const BoxIcon = ({ icon, className, ...props }: Props) => {
  return <i className={classNames(`bx ${icon}`, className)} {...props} />;
};

export default BoxIcon;
