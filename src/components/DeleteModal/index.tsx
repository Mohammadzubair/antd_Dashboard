import { useState } from "react";
import { Button, Modal } from "../../UI";
import { DeleteFilled } from "@ant-design/icons";

const DeleteModal = () => {
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
        // onClick={() => {
        //   return Modal.confirm({
        //     title: "Confirmation",
        //     content: "Are you sure you want to delete this data",
        //   });
        // }}
        onClick={showModal}
        icon={<DeleteFilled />}
      />
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        title={"Delete User Record"}
        // confirmLoading={true}
        okText={"Yes"}
        cancelText={"No"}
      >
        <p>Are you sure you want to delete this user record?</p>
      </Modal>
    </>
  );
};

export default DeleteModal;
