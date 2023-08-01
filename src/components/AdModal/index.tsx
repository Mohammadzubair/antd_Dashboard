import { useState } from "react";
import { Button, Modal } from "../../UI";
import { PlusSquareFilled } from "@ant-design/icons";

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
        title={"Ad Modal"}
      >
        <p>Ad Modal</p>
      </Modal>
    </>
  );
};

export default AdModal;
