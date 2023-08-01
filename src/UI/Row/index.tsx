import { Row as ANTDRow, RowProps } from "antd";

const Row = ({ children, ...props }: RowProps) => {
  return <ANTDRow {...props}>{children}</ANTDRow>;
};

export default Row;
