import { Table } from "../../UI";
import { UseFetchUsersData } from "../../hooks";
import ActionItems from "../ActionItems";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "User Name",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Address",
    dataIndex: ["address", "street"],
    key: "address",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Company",
    dataIndex: ["company", "name"],
    key: "company",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: () => {
      return <ActionItems />;
    },
  },
];

const DataListing = () => {
  const data = UseFetchUsersData();
  return <Table dataSource={data} columns={columns} />;
};

export default DataListing;
