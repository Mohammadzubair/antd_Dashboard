import { Col as ANTDCol, ColProps } from "antd";

const Col = ({ children, ...props }: ColProps) => {
  return <ANTDCol {...props}>{children}</ANTDCol>;
};

export default Col;
