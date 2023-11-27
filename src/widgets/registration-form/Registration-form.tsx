import { memo } from "react";
import { Button } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import classNames from "clsx";
import { NavLink } from "react-router-dom";
import { routePath } from "app/routes/routePaths";

import FormikControls from "shared/ui/formik/FormikControl/FormikControl";

import { initialValues, validationSchema } from "./registration-form-utils";

import styles from "./login-form.module.scss";
interface Props {
  className?: string;
  buttonName?: string;
}

const RegistrationForm: React.FunctionComponent<Props> = memo((props) => {
  const { className = "", buttonName = "Login" } = props;

  const roleOptions = [
    { label: "Admin", value: "ADMIN" },
    { label: "User", value: "USER" },
  ];

  const modeOfContactsOptions = [
    { label: "Phone:", value: "phoneContact" },
    { label: "E-mail:", value: "emailContact" },
  ];

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
            label="e-mail"
          />
          <FormikControls
            name="password"
            fieldType="input"
            type="password"
            label="Password"
          />
          <FormikControls
            name="confirmPasssword"
            fieldType="input"
            type="password"
            label="confirm Passsword"
          />
          <FormikControls
            name="role"
            fieldType="radio"
            label="Role"
            options={roleOptions}
          />
          <FormikControls
            name="modeOfContacts"
            fieldType="radio"
            label="Mode of contacts"
            options={modeOfContactsOptions}
          />

          <FormikControls
            name="phone"
            fieldType="input"
            type="phone"
            label="Phone"
          />
          <button type="submit" disabled={!formik.isValid}>
            {buttonName}
          </button>
        </Form>
      )}
    </Formik>
  );
});

RegistrationForm.displayName = "RegistrationForm";

export default RegistrationForm;
