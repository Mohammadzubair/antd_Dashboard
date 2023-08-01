import { Space } from "../../UI";
import { AdModal, DeleteModal, EditModal } from "..";

const ActionItems = () => {
  return (
    <Space wrap>
      <AdModal />
      <EditModal />
      <DeleteModal />
    </Space>
  );
};

export default ActionItems;
