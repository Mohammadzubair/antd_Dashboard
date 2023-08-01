import { Button as ANTDButton, ButtonProps } from "antd";

const Button = ({ children, ...props }: ButtonProps) => {
  return <ANTDButton {...props}>{children}</ANTDButton>;
};

export default Button;
