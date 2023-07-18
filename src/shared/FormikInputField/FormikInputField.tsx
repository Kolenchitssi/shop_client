import { memo } from "react";
import { Field, ErrorMessage } from "formik";

import FormikTextError from "shared/FormikTextError";
import styles from "./FormikInputField.module.scss";

interface FormikInputFieldProps {
  name: string;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
}

const FormikInputField: React.FC<FormikInputFieldProps> = memo((props) => {
  const { name, label, disabled = false, placeholder, ...rest } = props;
  return (
    <div className={styles.input}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <Field
        className={styles.field}
        id={name}
        name={name}
        disabled={disabled}
        {...rest}
      />
      <ErrorMessage name={name} component={FormikTextError} />
    </div>
  );
});

FormikInputField.displayName = "FormikInputField";

export default FormikInputField;
