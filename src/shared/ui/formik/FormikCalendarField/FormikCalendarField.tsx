import { memo } from "react";
import { Field, ErrorMessage, FieldProps } from "formik";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import FormikTextError from "shared/ui/formik/FormikTextError";
import styles from "./FormikCalendarField.module.scss";
import "./FormikCalendarField.scss";

interface FormikSelectFieldProps {
  name: string;
  label?: string;
  disabled?: boolean;
  isClearable?: boolean;
  showIcon?: boolean;
  placeholder?: string;
}

const FormikCalendarField: React.FC<FormikSelectFieldProps> = memo((props) => {
  const {
    name,
    label,
    disabled = false,
    isClearable = true,
    showIcon = false,
    placeholder = "../../....",

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
        className={styles.field}
        id={name}
        name={name}
        disabled={disabled}
        {...rest}
      >
        {(props: FieldProps) => {
          console.log("props FIELD", props);

          const { form, field } = props;
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DatePicker
              showIcon
              id={name}
              isClearable={isClearable}
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
              placeholderText={placeholder}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={FormikTextError} />
    </div>
  );
});

FormikCalendarField.displayName = "FormikCalendarField";

export default FormikCalendarField;
