import * as yup from "yup";

export const schema = yup.object({
  fullName: yup.string().required(),
  companyName: yup.string().required(),
  streetAddress: yup.string().required(),
  address: yup.string().required(),
  apartment: yup.string().required(),
  city: yup.string().required(),
  phone: yup
    .string()
    .required()
    .matches(/^[0-9]+$/, "Digits only")
    .max(11),
});

export type ShippingFormValues = yup.InferType<typeof schema>;

