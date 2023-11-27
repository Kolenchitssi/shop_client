import { memo } from "react";
import { Button } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikControls from "shared/ui/formik/FormikControl/FormikControl";

import styles from "./login-form.module.scss";

interface Props {
  className?: string;
  buttonName?: string;
}

const LoginForm: React.FunctionComponent<Props> = memo((props) => {
  const { className = "", buttonName = "Login" } = props;

  const initialValues = {
    email: "",
    passsword: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("required").min(6, "At least 6 characters"),
  });
  const onSubmit = (value: object) => {
    console.log(value);
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
            type="email"
            label="E-mail."
          />
          <FormikControls
            name="password"
            fieldType="input"
            type="password"
            label="Password."
          />
          <button type="submit" disabled={!formik.isValid}>
            {buttonName}
          </button>
        </Form>
      )}
    </Formik>
  );
});

LoginForm.displayName = "LoginForm";

export default LoginForm;
