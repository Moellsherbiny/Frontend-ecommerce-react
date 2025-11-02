import * as yup from "yup";

const phoneRegex = /^(?:\+?\d{1,3})?[0-9]{10,12}$/;
const emailOrPhoneRegex = /^(?:\+?\d{1,3})?[0-9]{10,12}$|^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const loginSchema = yup.object({
  identifier: yup
    .string()
    .required("Email or phone number is required")
    .test(
      "is-valid-identifier",
      "Enter a valid email or phone number",
      (value) => {
        if (!value) return false;
        const isEmail = yup.string().email().isValidSync(value);
        const isPhone = phoneRegex.test(value);
        return isEmail || isPhone;
      }
    ),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export const signUpSchema = yup.object({
  name: yup.string().required("Name is required"),
  identifier: yup
    .string()
    .required("Email or phone number is required")
    .matches(emailOrPhoneRegex, "Enter a valid email or phone number"),
   password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});
