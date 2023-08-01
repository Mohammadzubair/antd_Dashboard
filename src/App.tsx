import { useState } from "react";
import { Layout, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import { DataListing, SideMenu, TopHeaderBar } from "./components";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import "./App.css";

const { Header, Content, Footer } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorPrimary },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100%" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <SideMenu />
      </Sider>
      <Layout style={{ backgroundColor: colorPrimary }}>
        <Header style={{ padding: "0 16px" }}>
          <TopHeaderBar
            onClick={() => setCollapsed(!collapsed)}
            icons={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          />
        </Header>
        <Content className="site-layout" style={{ padding: "16px" }}>
          <DataListing />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
