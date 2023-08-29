import { useEffect, useState } from "react";
import axios from "axios";

const UseFetchUsersData = () => {
  const url = `https://jsonplaceholder.typicode.com/users`;

  // const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    return axios
      .get(url)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error.message);
      });
  };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  return fetchUsers();
};

export default UseFetchUsersData;
