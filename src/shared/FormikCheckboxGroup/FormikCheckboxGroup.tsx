import { memo, Fragment } from "react";
import { Field, ErrorMessage, FieldProps } from "formik";

import FormikTextError from "shared/FormikTextError";
import styles from "./FormikCheckboxGroup.module.scss";

interface FormikCheckboxGroupProps {
  name: string;
  options?: { label: string; value: string }[];
  label?: string;
  disabled?: boolean;
}

const FormikCheckboxGroup: React.FC<FormikCheckboxGroupProps> = memo(
  (props) => {
    const { name, options = [], label, disabled = false, ...rest } = props;
    return (
      <div className={styles.input}>
        {label && <label className={styles.label}>{label}</label>}
        <Field className={styles.field} name={name} {...rest}>
          {(props: FieldProps) => {
            const { field } = props;
            return options.map((option) => (
              <Fragment key={option.label}>
                <input
                  className={styles.input__radio}
                  type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                  disabled={disabled}
                  {...rest}
                />
                <label className={styles.input__label} htmlFor={option.value}>
                  {option.label}
                </label>
              </Fragment>
            ));
          }}
        </Field>
        <ErrorMessage name={name} component={FormikTextError} />
      </div>
    );
  }
);

FormikCheckboxGroup.displayName = "FormikCheckboxGroup";

export default FormikCheckboxGroup;
