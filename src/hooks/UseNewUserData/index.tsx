interface UseNewUserDataProps {
  name: string;
  userName: string;
  address: string;
  email: string;
  phone: string;
  company: string;
}

const UseNewUserData = async ({
  name,
  userName,
  address,
  email,
  phone,
  company,
}: UseNewUserDataProps) => {
  // const onAdd = async () => {
  const url = `https://jsonplaceholder.typicode.com/users`;
  // const [users, setUsers] = useState([]);
  return await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      name,
      userName,
      address,
      email,
      phone,
      company,
    }),
    headers: { "Content-type": "application/json; charset=utf-8" },
  })
    .then((response) => {
      if (response.status !== 201) {
        return;
      } else {
        return response.json;
      }
    })
    .then((data) => {
      // setUsers((users) => [...users, data]);
      return data;
    })
    .catch((err) => console.log(`Message Error`, err));
  // };

  // return users;
};

export default UseNewUserData;
