import React from "react";
import inputStyles from "./input.module.scss";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    return <input ref={ref} {...props} className={inputStyles.input} />;
  }
);


export default Input;
