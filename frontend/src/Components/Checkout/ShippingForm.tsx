import { useEffect } from "react";
import { Form, Input, Checkbox } from "antd";
import { Controller, useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/app/store";

import {
  clearShippingData,
  setSaveInfo,
  setShippingData,
} from "@/features/products/paymentSlice";
import { schema, type ShippingFormValues } from "@/validations/shippingSchema"

function ShippingForm() {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();
  const shippingData = useSelector(
    (state: RootState) => state.payment.shippingData
  );
  const saveInfo = useSelector((state: RootState) => state.payment.saveInfo);

  const {
    control,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm<ShippingFormValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: shippingData || {fullName:user?.name, address:user?.address, phone:user?.phone, },
  });


  const formValues = useWatch({ control });
  useEffect(() => {
    const handler = setTimeout(() => {
      const currentValues = getValues();
      dispatch(setShippingData(currentValues));

      if (saveInfo) {
        localStorage.setItem("shippingData", JSON.stringify(currentValues));
      }
    }, 800);

    return () => clearTimeout(handler);
  }, [formValues, saveInfo, dispatch, getValues]);

  useEffect(() => {
    if (shippingData) {
      reset(shippingData);
      dispatch(setSaveInfo(saveInfo));
    }
  }, [shippingData, dispatch, reset]);

  const handleCheckChange = (e: any) => {
    const checked = e.target.checked;
    dispatch(setSaveInfo(checked));
    if (checked) {
      dispatch(setShippingData(getValues()));
    } else {
      dispatch(clearShippingData());
    }
  };

  const onSubmit = (values: ShippingFormValues) => {
    dispatch(setShippingData(values));
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit(onSubmit)} variant="filled">
      <Form.Item
        label="Full Name"
        validateStatus={errors.fullName ? "error" : ""}
        help={errors.fullName?.message}
      >
        <Controller
          name="fullName"
          control={control}
          render={({ field }) => <Input {...field} placeholder="John Doe" />}
        />
      </Form.Item>

      <Form.Item
        label="Company Name"
        validateStatus={errors.companyName ? "error" : ""}
        help={errors.companyName?.message}
      >
        <Controller
          name="companyName"
          control={control}
          render={({ field }) => <Input {...field} placeholder="Company" />}
        />
      </Form.Item>

      <Form.Item
        label="Street Address"
        validateStatus={errors.streetAddress ? "error" : ""}
        help={errors.streetAddress?.message}
      >
        <Controller
          name="streetAddress"
          control={control}
          render={({ field }) => <Input {...field} placeholder="123 Main St" />}
        />
      </Form.Item>

      <Form.Item
        label="Address"
        validateStatus={errors.address ? "error" : ""}
        help={errors.address?.message}
      >
        <Controller
          name="address"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="District, Area..." />
          )}
        />
      </Form.Item>

      <Form.Item label="Apartment, floor, etc. (optional)">
        <Controller
          name="apartment"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Apartment, Floor..." />
          )}
        />
      </Form.Item>

      <Form.Item
        label="Town/City"
        validateStatus={errors.city ? "error" : ""}
        help={errors.city?.message}
      >
        <Controller
          name="city"
          control={control}
          render={({ field }) => <Input {...field} placeholder="Cairo" />}
        />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        validateStatus={errors.phone ? "error" : ""}
        help={errors.phone?.message}
      >
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="01000000000" maxLength={11} />
          )}
        />
      </Form.Item>

      <Form.Item>
        <Checkbox checked={saveInfo} onChange={handleCheckChange}>
          Save this information for faster check-out next time
        </Checkbox>
      </Form.Item>
    </Form>
  );
}

export default ShippingForm;
