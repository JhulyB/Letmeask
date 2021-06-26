import { ButtonHTMLAttributes } from "react";
import "./styles.scss";

//recebe todas as propriedades do <button> HTML
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <button
      className={`button ${isOutlined ? 'outlined' : ''}`}
      {...props}
      />
  )
}

//{...props} spread operator
