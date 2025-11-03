import * as yup from "yup";


export const schema = yup.object({
  cardName: yup.string().required("Card holder name is required"),
}).required();
