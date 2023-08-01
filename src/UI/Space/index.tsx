import { Space as ANTDSpace, SpaceProps } from "antd";

const Space = ({ children, ...props }: SpaceProps) => {
  return <ANTDSpace {...props}>{children}</ANTDSpace>;
};

export default Space;
