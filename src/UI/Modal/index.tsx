import { Modal as ANTDModal, ModalProps } from "antd";

const index = ({ children, ...props }: ModalProps) => {
  return <ANTDModal {...props}>{children}</ANTDModal>;
};

export default index;
