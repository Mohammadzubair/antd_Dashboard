import { useState } from "react";
import { Button, Modal } from "../../UI";
import { EditFilled } from "@ant-design/icons";
import GenericForm from "../GenericForm";

const EditModal = () => {
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
        icon={<EditFilled />}
      />
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        title={"Edit User Deatils"}
        okText={"Save"}
      >
        <GenericForm />
      </Modal>
    </>
  );
};

export default EditModal;
