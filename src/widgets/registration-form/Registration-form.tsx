import { memo } from "react";
import { Button } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import classNames from "clsx";
import { NavLink } from "react-router-dom";
import { routePath } from "app/routes/routePaths";

import FormikControls from "shared/FormikControl/FormikControl";

import styles from "./login-form.module.scss";

interface Props {
  className?: string;
  buttonName?: string;
}

const RegistrationForm: React.FunctionComponent<Props> = memo((props) => {
  const { className = "", buttonName = "Login" } = props;

  const initialValues = {
    email: "",
    passsword: "",
    confirmPasssword: "",
    role: "",
    modeOfContacts: "",
    phone: "",
  };

  const roleOptions = [
    { label: "Admin", value: "ADMIN" },
    { label: "User", value: "USER" },
  ];
  const modeOfContactsOptions = [
    { label: "Phone", value: "phone" },
    { label: "Email", value: "email" },
  ];

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("required").min(6, "At least 6 characters"),
    confirmPasssword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must much")
      .required("required"),
    role: Yup.string().required("required"),
    modeOfContacts: Yup.string().required("required"),
    // phone: Yup.string().when(
    //     'modeOfContacts',

    // {
    // is: 'phone',  //(modeOfContacts)=> modeOfContacts === 'phone',
    // then: Yup.string().required("required"),
    // otherwise: Yup.string(),
    // },

    // )
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
            label="E-mail"
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
