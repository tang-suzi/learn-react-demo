import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router";
import router from "@/router";
import styles from "./index.module.scss";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
const { Header, Sider, Content, Footer } = Layout;
const App = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const items = [...router.routes[0].children];
  // router.routes[0].children.map((route) => {
  //   const arr = []
  //   route.Component && items.push
  // });
  return (
    <Layout className={styles.layout}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: "hidden",
          overflowY: "auto",
          scrollbarWidth: "thin",
          scrollbarGutter: "stable",
        }}
      >
        <div className={styles.logoVertical}>
          <h2>logo</h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
          onClick={(menu) => {
            navigate(menu.key);
          }}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
        <Footer style={{ background: colorBgContainer }}>footer</Footer>
      </Layout>
    </Layout>
  );
};
export default App;
