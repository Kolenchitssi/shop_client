import { memo } from "react";
import { Field, ErrorMessage } from "formik";

import FormikTextError from "shared/ui/formik/FormikTextError";
import styles from "./FormikSelectField.module.scss";

interface FormikSelectFieldProps {
  name: string;
  options?: { label: string; value: string }[];
  label?: string;
  disabled?: boolean;
  placeholder?: string;
}

const FormikSelectField: React.FC<FormikSelectFieldProps> = memo((props) => {
  const {
    name,
    options = [],
    label,
    disabled = false,
    placeholder = "Select",
    ...rest
  } = props;
  return (
    <div className={styles.input}>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <Field
        as="select"
        className={styles.field}
        id={name}
        name={name}
        disabled={disabled}
        placeholder={placeholder}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={FormikTextError} />
    </div>
  );
});

FormikSelectField.displayName = "FormikSelectField";

export default FormikSelectField;
