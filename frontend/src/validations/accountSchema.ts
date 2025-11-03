import * as yup from "yup";

export const schema = yup.object().shape({
  firstName: yup.string().trim().nullable(),
  lastName: yup.string().trim().nullable(),
  email: yup.string().trim().email("Invalid email").nullable(),
  address: yup.string().trim().nullable(),
  currentPassword: yup.string().trim().nullable(),
  newPassword: yup
  .string()
  .trim()
  .nullable()
  .when("currentPassword", {
    is: (val: string | null | undefined) => !!val, 
    then: (schema) => schema.min(6, "At least 6 chars"), 
    otherwise: (schema) => schema.notRequired(),
  }),
confirmPassword: yup
  .string()
  .trim()
  .nullable()
  .when("newPassword", {
    is: (val: string | null | undefined) => !!val,
    then: (schema) =>
      schema
        .oneOf([yup.ref("newPassword")], "Passwords must match")
        .required("Please confirm your password"),
    otherwise: (schema) => schema.notRequired(),
  }),
});