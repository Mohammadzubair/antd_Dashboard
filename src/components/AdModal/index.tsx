import { useState } from "react";
import { Button, Modal } from "../../UI";
import { PlusSquareFilled } from "@ant-design/icons";
import GenericForm from "../GenericForm";

interface AdModalProps {
  onAdd: () => void;
}

const AdModal = ({ onAdd }: AdModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = () => {
    console.log("Modal for data.....");
  };
  return (
    <>
      <Button
        size="small"
        type="primary"
        onClick={showModal}
        onSubmit={() => {
          onAdd();
        }}
        icon={<PlusSquareFilled />}
      />
      <Modal
        open={isModalOpen}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={() => {}}>
            Submit
          </Button>,
        ]}
      >
        <GenericForm dataSubmit={handleFormSubmit()} />
      </Modal>
    </>
  );
};

export default AdModal;
