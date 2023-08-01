import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Menu } from "../../UI";

const SideMenu = () => {
  return (
    <>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2.5rem",
          padding: "2px",
        }}
      >
        LOGO
      </h1>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "nav 1",
            children: [
              {
                key: "3212",
                label: "subName",
                icon: <UserOutlined />,
              },
              {
                key: "3213",
                label: "subName",
                icon: <UserOutlined />,
              },
              {
                key: "3214",
                label: "subName",
                icon: <UserOutlined />,
              },
            ],
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "nav 2",
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "nav 3",
          },
        ]}
      />
    </>
  );
};

export default SideMenu;
