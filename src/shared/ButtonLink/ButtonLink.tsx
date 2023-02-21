import { ReactNode } from "react";
import { omit } from "app/utils/omit";
import styles from "./style.module.scss";

interface ButtonLinkProps {
  className?: string;
  isDisable?: boolean;
  children?: ReactNode;
  [key: string]: any;
}

const ButtonLink: React.FunctionComponent<ButtonLinkProps> = (props) => {
  const { children, className = "", isDisable = false, ...otherProps } = props;
  return (
    <button
      className={`${className} ${styles.button}`}
      disabled={isDisable}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default ButtonLink;
