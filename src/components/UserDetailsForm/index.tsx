import { forwardRef, useImperativeHandle, useState } from "react";
import { Form } from "antd";
import { Input } from "../../UI";

interface UserDetailsFormProps {
  onAdd?: () => void;
}

type FieldType = {
  name?: string;
  username?: string;
  password?: string;
  remember?: string;
};

const UserDetailsForm = forwardRef(({ onAdd }: UserDetailsFormProps, ref) => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    form.validateFields();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");

  useImperativeHandle(ref, () => ({
    onAdd() {
      return { name, userName, address, phone, company, email };
    },
  }));

  return (
    <Form
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      initialValues={{
        remember: true,
      }}
      layout={"vertical"}
    >
      <Form.Item<FieldType>
        label={"Name"}
        required
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your name",
          },
        ]}
      >
        <Input
          onChange={(e) => setName(e.target.value)}
          type={"text"}
          placeholder={"Name"}
          value={name}
        />
      </Form.Item>
      <Form.Item
        label={"User Name"}
        required
        name="userName"
        rules={[
          {
            required: true,
            message: "Please input your user name",
          },
        ]}
      >
        <Input
          onChange={(e) => setUserName(e.target.value)}
          type={"text"}
          placeholder={"User Name"}
          value={userName}
        />
      </Form.Item>
      <Form.Item
        label={"Address"}
        required
        name="address"
        rules={[
          {
            required: true,
            message: "Please input your address",
          },
        ]}
      >
        <Input
          onChange={(e) => setAddress(e.target.value)}
          type={"text"}
          placeholder={"Address"}
          value={address}
        />
      </Form.Item>
      <Form.Item
        label={"Email"}
        required
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email",
          },
        ]}
      >
        <Input
          onChange={(e) => setEmail(e.target.value)}
          type={"email"}
          placeholder={"Email"}
          value={email}
        />
      </Form.Item>
      <Form.Item
        label={"Phone"}
        required
        name="phone"
        rules={[
          {
            required: true,
            message: "Please input your phone",
          },
        ]}
      >
        <Input
          onChange={(e) => setPhone(e.target.value)}
          type={"phone"}
          placeholder={"Phone"}
          value={phone}
        />
      </Form.Item>
      <Form.Item
        label={"Company"}
        name="company"
        required
        rules={[
          {
            required: true,
            message: "Please input your company",
          },
        ]}
      >
        <Input
          onChange={(e) => setCompany(e.target.value)}
          type={"company"}
          placeholder={"Company"}
          value={company}
        />
      </Form.Item>
    </Form>
  );
});

export default UserDetailsForm;
