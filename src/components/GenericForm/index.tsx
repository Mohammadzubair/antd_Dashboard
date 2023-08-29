import { useState } from "react";
import { Form } from "antd";
import { Input } from "../../UI";

interface GenericFormProps {
  dataSubmit?: () => void;
}

const GenericForm = ({ dataSubmit }: GenericFormProps) => {
  const [person, setPerson] = useState({
    name: "",
    userName: "",
    address: "",
    email: "",
    phone: "",
    company: "",
  });
  const { name, userName, address, phone, company, email } = person;
  return (
    <Form onSubmitCapture={dataSubmit} layout={"vertical"}>
      <Form.Item label={"Name"} required>
        <Input
          onChange={(e) => setPerson(e.target.value)}
          type={"text"}
          name={"name"}
          placeholder={"Name"}
          value={name}
        />
      </Form.Item>
      <Form.Item label={"User Name"} required>
        <Input
          onChange={(e) => setPerson(e.target.value)}
          type={"text"}
          name={"userName"}
          placeholder={"User Name"}
          value={userName}
        />
      </Form.Item>
      <Form.Item label={"Address"} required>
        <Input
          onChange={(e) => setPerson(e.target.value)}
          type={"text"}
          name={"address"}
          placeholder={"Address"}
          value={address}
        />
      </Form.Item>
      <Form.Item label={"Email"} required>
        <Input
          onChange={(e) => setPerson(e.target.value)}
          type={"email"}
          name={"email"}
          placeholder={"Email"}
          value={email}
        />
      </Form.Item>
      <Form.Item label={"Phone"} required>
        <Input
          onChange={(e) => setPerson(e.target.value)}
          type={"phone"}
          name={"phone"}
          placeholder={"Phone"}
          value={phone}
        />
      </Form.Item>
      <Form.Item label={"Company"} required>
        <Input
          onChange={(e) => setPerson(e.target.value)}
          type={"company"}
          name={"company"}
          placeholder={"Company"}
          value={company}
        />
      </Form.Item>
    </Form>
  );
};

export default GenericForm;
