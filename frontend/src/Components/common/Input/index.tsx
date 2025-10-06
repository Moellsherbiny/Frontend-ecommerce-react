import inputStyles from "./input.module.scss"

type InputProps = React.InputHTMLAttributes<HTMLInputElement>



function Input({...props}:InputProps) {
  return (
    <input {...props} className={inputStyles.input}  />
  )
}

export default Input
