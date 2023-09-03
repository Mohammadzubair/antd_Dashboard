import { useRef, useState } from "react";
import { Button, Modal } from "../../UI";
import { PlusSquareFilled } from "@ant-design/icons";
import UserDetailsForm from "../UserDetailsForm";
import { UseNewUserData } from "../../hooks";

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

  const userDetailsRef = useRef();
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
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            htmlType="submit"
            // onClick={() => console.log(userDetailsRef.current?.onAdd?.())}
            onClick={() => userDetailsRef.current?.onAdd?.()}
          >
            Submit
          </Button>
        ]}
      >
        <UserDetailsForm onAdd={UseNewUserData()} ref={userDetailsRef} />
        {/* <UserDetailsForm ref={userDetailsRef} /> */}
      </Modal>
    </>
  );
};

export default AdModal;
