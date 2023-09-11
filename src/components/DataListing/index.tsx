import { useEffect, useState } from "react";
import { Table } from "../../UI";
import { UseFetchUsersData, UseNewUserData } from "../../hooks";
import ActionItems from "../ActionItems";

const DataListing = () => {
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
        return (
          <ActionItems
            onAdd={() => {
              // UseNewUserData();
            }}
          />
        );
      },
    },
  ];

  const [data, setData] = useState([]);
  const dataFatached = async () => {
    setData(await UseFetchUsersData());
  };

  const addNewUser = async () => {
    setData(await UseNewUserData());
  };

  // const addData = async (name, userName, address, phone, company, email) => {
  //   await fetch(URL, {
  //     method: "POST",
  //     body: JSON.stringify({
  //       name: name,
  //       userName: userName,
  //       address: address,
  //       phone: phone,
  //       company: company,
  //       email: email,
  //     }),
  //     headers: { "Content-Type": "application/json; charset=utf-8" },
  //   })
  //     .then((response) => {
  //       if (response.status !== 201) {
  //         return;
  //       } else {
  //         return response.json;
  //       }
  //     })
  //     .then((user) => {
  //       setData((data) => [...data, user]);
  //     })
  //     .catch((error) => console.log(`API Error message`, error));
  // };

  useEffect(() => {
    dataFatached();
    addNewUser();
  }, []);

  return <Table dataSource={data} columns={columns} />;
};

export default DataListing;
