import { memo } from "react";
import FormikInputField from "shared/ui/formik/FormikInputField";
import FormikRadioButtons from "shared/ui/formik/FormikRadioButtons";
import FormikSelectField from "shared/ui/formik/FormikSelectField";
import FormikTextAreaField from "shared/ui/formik/FormikTextAreaField";
import FormikCheckboxGroup from "shared/ui/formik/FormikCheckboxGroup";
import FormikCalendarField from "shared/ui/formik/FormikCalendarField/FormikCalendarField";

enum fieldTypeKeys {
  input = "input",
  textarea = "textarea",
  select = "select",
  checkbox = "checkbox",
  radio = "radio",
  date = "date",
}

type FieldType =
  | "input"
  | "textarea"
  | "select"
  | "checkbox"
  | "radio"
  | "date";

export interface IFormikControlsProps {
  fieldType: FieldType;
  name: string;
  options?: { label: string; value: string }[];
  [key: string]: any;
}

const FormikControls: React.FC<IFormikControlsProps> = memo(
  ({ fieldType, name, options, ...rest }) => {
    switch (fieldType) {
      case fieldTypeKeys.input:
        return <FormikInputField name={name} {...rest} />;
      case fieldTypeKeys.textarea:
        return <FormikTextAreaField name={name} {...rest} />;
      case fieldTypeKeys.select:
        return <FormikSelectField name={name} options={options} {...rest} />;
      case fieldTypeKeys.checkbox:
        return <FormikCheckboxGroup name={name} options={options} {...rest} />;
      case fieldTypeKeys.radio:
        return <FormikRadioButtons name={name} options={options} {...rest} />;
      case fieldTypeKeys.date:
        return <FormikCalendarField name={name} {...rest} />;

      case fieldTypeKeys.date:
        break;

      default:
        return null;
    }

    return <div></div>;
  }
);

FormikControls.displayName = "FormikControls";

export default FormikControls;
