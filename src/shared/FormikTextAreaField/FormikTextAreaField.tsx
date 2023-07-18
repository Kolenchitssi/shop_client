import { memo } from "react";
import { Field, ErrorMessage } from "formik";

import FormikTextError from "shared/FormikTextError";
import styles from "./FormikTextAreaField.module.scss";

interface FormikTextAreaFieldProps {
  name: string;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
}

const FormikTextAreaField: React.FC<FormikTextAreaFieldProps> = memo(
  (props) => {
    const { name, label, disabled = false, placeholder, ...rest } = props;
    return (
      <div className={styles.input}>
        {label && (
          <label className={styles.label} htmlFor={name}>
            {label}
          </label>
        )}
        <Field
          as="textarea"
          className={styles.field}
          id={name}
          name={name}
          disabled={disabled}
          {...rest}
        />
        <ErrorMessage name={name} component={FormikTextError} />
      </div>
    );
  }
);

FormikTextAreaField.displayName = "FormikTextAreaField";

export default FormikTextAreaField;
