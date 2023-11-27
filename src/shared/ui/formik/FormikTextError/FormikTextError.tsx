import { memo, ReactNode } from "react";

import styles from "./FormikTextError.module.scss";

interface FormikTextErrorProps {
  children?: ReactNode;
}

const FormikTextError: React.FC<FormikTextErrorProps> = memo(({ children }) => {
  return <div className={styles["formik__text-error"]}>{children}</div>;
});

FormikTextError.displayName = "FormikTextError";

export default FormikTextError;
