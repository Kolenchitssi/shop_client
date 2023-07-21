import { memo } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControls from "shared/FormikControl/FormikControl";

interface FormikContainerProps {
  [key: string]: any;
}

const FormikContainer: React.FC<FormikContainerProps> = memo((props) => {
  const { formik } = props;
  const selectOptions = [
    { label: "Select an option", value: "" },
    { label: "Selected1", value: "1" },
    { label: "Selected2 ", value: "2" },
    { label: "Selected3 ", value: "3" },
  ];
  const radioOptions = [
    { label: "radio-1", value: "r1" },
    { label: "radio-2 ", value: "r2" },
    { label: "radio-3 ", value: "r3" },
  ];
  const checkboxOptions = [
    { label: "chekbox-1", value: "check1" },
    { label: "chekbox-2 ", value: "check2" },
    { label: "chekbox-3 ", value: "check3" },
  ];
  const initialValues = {
    email: "email test",
    description: "",
    select1: "",
    radio1: "",
    checkbox1: [],
    date1: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("required"),
    description: Yup.string().required("required"),
    select1: Yup.string().required("required"),
    radio1: Yup.string().required("required"),
    checkbox1: Yup.array().required("required"),
  });
  const onSubmit = (values: any) => {
    console.log("Form Data", values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControls
            name="email"
            fieldType="input"
            type="text"
            label="E-mail"
          />
          <FormikControls
            name="description"
            fieldType="textarea"
            label="Description"
          />
          <FormikControls
            name="select1"
            fieldType="select"
            label="select1"
            options={selectOptions}
          />
          <FormikControls
            name="radio1"
            fieldType="radio"
            label="radio buttons "
            options={radioOptions}
          />
          <FormikControls
            name="checkbox1"
            fieldType="checkbox"
            label="checkbox group"
            options={checkboxOptions}
          />
          <FormikControls name="date1" fieldType="date" label="Check Date" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
});

FormikContainer.displayName = "FormikContainer";

export default FormikContainer;
