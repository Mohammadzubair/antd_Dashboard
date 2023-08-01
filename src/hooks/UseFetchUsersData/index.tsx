import { useEffect, useState } from "react";
import axios from "axios";

const UseFetchUsersData = () => {
  const url = `https://jsonplaceholder.typicode.com/users`;

  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    return axios.get(url).then((response) => setUsers(response.data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return users;
};

export default UseFetchUsersData;
