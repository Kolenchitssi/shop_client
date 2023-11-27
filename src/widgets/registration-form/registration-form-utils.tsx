import * as Yup from "yup";

export enum RegistrationFormKeys {
  email = "email",
  password = "password",
  confirmPassword = "confirmPassword",
  role = "role",
  modeOfContacts = "modeOfContacts",
  phone = "phone",
}

export const initialValues = {
  [RegistrationFormKeys.email]: "",
  [RegistrationFormKeys.password]: "",
  [RegistrationFormKeys.confirmPassword]: "",
  [RegistrationFormKeys.role]: "",
  [RegistrationFormKeys.modeOfContacts]: "", //emailContact or phoneContact
  [RegistrationFormKeys.phone]: "",
};

export const validationSchema = Yup.object({
  [RegistrationFormKeys.email]: Yup.string()
    .email("Invalid email format")
    .required("Required"),
  [RegistrationFormKeys.password]: Yup.string()
    .required("required")
    .min(6, "At least 6 characters"),
  [RegistrationFormKeys.confirmPassword]: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must much")
    .required("required"),
  [RegistrationFormKeys.role]: Yup.string().required("required"),
  [RegistrationFormKeys.modeOfContacts]: Yup.string().required("required"),
  [RegistrationFormKeys.phone]: Yup.string().when(
    RegistrationFormKeys.modeOfContacts,
    ([mode], schema) =>
      mode === "phoneContact" ? schema.required("required") : schema
    //этот вариант почемуто так и не заработал хотя раньше я такое использовал
    // {
    //   is: "phoneContact", //(modeOfContacts)=> modeOfContacts === 'phoneContact',
    //   then: Yup.string().required("required"),
    //   otherwise: Yup.string(),
    // }
  ),
});
