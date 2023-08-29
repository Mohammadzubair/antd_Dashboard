import { Space } from "../../UI";
import { AdModal, DeleteModal, EditModal } from "..";

interface ActionItemsProps {
  onAdd: () => void;
}

const ActionItems = ({ onAdd }: ActionItemsProps) => {
  return (
    <Space wrap>
      <AdModal onAdd={onAdd} />
      <EditModal />
      <DeleteModal />
    </Space>
  );
};

export default ActionItems;
