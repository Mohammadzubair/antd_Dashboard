import { Form } from "antd";
import { Input } from "../../UI";

const GenericForm = () => {
  return (
    <Form layout={"vertical"}>
      <Form.Item label={"Name"} required>
        <Input type={"text"} name={"name"} placeholder={"Name"} />
      </Form.Item>
      <Form.Item label={"User Name"} required>
        <Input type={"text"} name={"userName"} placeholder={"User Name"} />
      </Form.Item>
      <Form.Item label={"Address"} required>
        <Input type={"text"} name={"address"} placeholder={"Address"} />
      </Form.Item>
      <Form.Item label={"Email"} required>
        <Input type={"email"} name={"email"} placeholder={"Email"} />
      </Form.Item>
      <Form.Item label={"Phone"} required>
        <Input type={"phone"} name={"phone"} placeholder={"Phone"} />
      </Form.Item>
      <Form.Item label={"Company"} required>
        <Input type={"company"} name={"company"} placeholder={"Company"} />
      </Form.Item>
    </Form>
  );
};

export default GenericForm;
