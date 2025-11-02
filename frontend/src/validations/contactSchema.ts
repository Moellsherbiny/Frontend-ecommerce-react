import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  phone: yup
    .string()
    .required("Please enter your phone number")
    .matches(/^[0-9]+$/, "Phone must contain only digits"),
  message: yup.string().required("Please enter your message"),
});
