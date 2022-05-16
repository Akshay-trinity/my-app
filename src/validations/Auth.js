import * as yup from "yup";

export const PhoneRegex =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const PasswordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

const emailValidation = yup.string().email("Please enter valid email address.");

const passwordValidation = yup
  .string()
  .required("Please enter password")
  .min(8, "Password should be at least 8 characters long.")
  .max(30, "Password should be less than 30 characters.")
  .matches(
    PasswordRegex,
    "Password requires at one capital, one small letter, one number and one special character."
  );

export const LoginValidation = yup.object().shape({
  email: emailValidation.required("Please enter your email"),
  password: yup.string().required("Please enter your password"),
});

export const ForgotPasswordValidation = yup.object().shape({
  email: emailValidation.required("Please enter your email."),
});

export const RegisterFormValidation = yup.object().shape({
  email: emailValidation.required("Please enter your email"),
  password: passwordValidation,
  firstName: yup.string().required("Please enter your first name"),
  lastName: yup.string().required("Please enter your last name"),
});
