import { Menu as ANTDMenu, MenuProps } from "antd";

const Menu = ({ children, ...props }: MenuProps) => {
  return <ANTDMenu {...props}>{children}</ANTDMenu>;
};

export default Menu;
