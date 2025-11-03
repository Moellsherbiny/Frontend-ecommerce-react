import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ShippingData {
  fullName: string;
  companyName: string;
  streetAddress: string;
  address: string;
  apartment: string;
  city: string;
  phone: string;
}

interface PaymentData {
  nameOnCard: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
}

interface StepStatus {
  shipping: "wait" | "process" | "finish" | "error";
  payment: "wait" | "process" | "finish" | "error";
  review: "wait" | "process" | "finish" | "error";
}

interface PaymentState {
  method: string;
  saveInfo: boolean;
  shippingData: ShippingData | null;
  paymentData: PaymentData | null;
  stepsStatus: StepStatus;
}

const getShippingData = (): ShippingData | null => {
  const data = localStorage.getItem("shippingData");
  return data ? JSON.parse(data) : null;
};

const getSaveInfo = (): boolean => localStorage.getItem("saveInfo") === "true";

const initialState: PaymentState = {
  method: "cash",
  shippingData: getShippingData(),
  paymentData: null,
  saveInfo: getSaveInfo(),
  stepsStatus: {
    shipping: "process",
    payment: "wait",
    review: "wait",
  },
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    setPaymentMethod: (state, action: PayloadAction<string>) => {
      state.method = action.payload;
    },

    setSaveInfo: (state, action: PayloadAction<boolean>) => {
      state.saveInfo = action.payload;
      localStorage.setItem("saveInfo", JSON.stringify(action.payload));
    },

    setShippingData: (state, action: PayloadAction<ShippingData>) => {
      state.shippingData = action.payload;

      if (state.saveInfo) {
        localStorage.setItem("shippingData", JSON.stringify(action.payload));
      }
    },

    setPaymentData: (state, action: PayloadAction<PaymentData>) => {
      state.paymentData = action.payload;
    },

    setStepStatus: (
      state,
      action: PayloadAction<{ step: keyof StepStatus; status: StepStatus[keyof StepStatus] }>
    ) => {
      state.stepsStatus[action.payload.step] = action.payload.status;
    },

    clearShippingData: (state) => {
      state.shippingData = null;
      localStorage.removeItem("shippingData");
    },
  },
});

export const {
  setPaymentMethod,
  setSaveInfo,
  setShippingData,
  setPaymentData,
  setStepStatus,
  clearShippingData,
} = paymentSlice.actions;

export default paymentSlice.reducer;
