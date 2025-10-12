import React from "react";
import { Button as AntButton } from "antd";
import {type  ButtonProps as AntButtonProps} from "antd";
import classNames from "classnames";
import "./button.module.scss";

type CustomButtonType =
  | AntButtonProps["type"]
  | "underlined"; // ← النوع الجديد

interface CustomButtonProps extends Omit<AntButtonProps, "type">  {
  type?: CustomButtonType;
}

const Button: React.FC<CustomButtonProps> = ({ type = "default", className, ...rest }) => {
  const btnClass = classNames(className, {
    "btn-underlined": type === "underlined",
  });

  // لو النوع underlined → نعمل default نوع link عشان يبقى consistent
  const computedType = type === "underlined" ? "link" : type;

  return <AntButton {...rest} type={computedType} className={btnClass} />;
};

export default Button;
