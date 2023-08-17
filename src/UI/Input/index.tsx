import { Input as ANTDInput, InputProps } from "antd";

const Input = ({ children, ...props }: InputProps) => {
  return <ANTDInput {...props}>{children}</ANTDInput>;
};

export default Input;
