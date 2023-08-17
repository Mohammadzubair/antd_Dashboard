import { Form as ANTDForm, FormProps } from "antd";

const Form = ({ children, ...props }: FormProps) => {
  return <ANTDForm {...props}>{children}</ANTDForm>;
};

export default Form;

