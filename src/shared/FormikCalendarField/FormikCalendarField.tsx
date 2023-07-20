import { memo } from "react";
import { Field, ErrorMessage, FieldProps } from "formik";

import DatePicker from "react-datepicker";

import FormikTextError from "shared/FormikTextError";
import styles from "./FormikSelectField.module.scss";

interface FormikSelectFieldProps {
  name: string;  
  label?: string;
  disabled?: boolean;
}

const FormikCalendarField: React.FC<FormikSelectFieldProps> = memo((props) => {
  const {
    name,
    label,
    disabled = false,
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
    console.log('props FIELD', props);
    
      const {form, field } = props;
      const {setFieldValue}=form
      const {value} =field;
    return  <DatePicker
    id={name}
    {...field}
    {...rest}     
    selected={value}
    onChange={(val)=>setFieldValue(name, val)}
      
    />}}
    
      </Field>
      <ErrorMessage name={name} component={FormikTextError} />
    </div>
  );
});

FormikCalendarField.displayName = "FormikCalendarField";

export default FormikCalendarField;
