import { useState } from "react";
import { Button, Modal } from "../../UI";
import { PlusSquareFilled } from "@ant-design/icons";
import GenericForm from "../GenericForm";

const AdModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button
        size="small"
        type="primary"
        onClick={showModal}
        icon={<PlusSquareFilled />}
      />
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        title={"Ad New User"}
        okText={"Save"}
      >
        <GenericForm />
      </Modal>
    </>
  );
};

export default AdModal;
