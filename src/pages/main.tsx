import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import 'antd/dist/antd.css';
import '../App.css';
import { Layout, Menu, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  SettingOutlined,
  UserOutlined,
  EnvironmentOutlined,
  GlobalOutlined
} from '@ant-design/icons';
import Logo from '../assets/Logo-Tractian.svg'

const { Header, Sider, Content } = Layout;

function Main() {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = (collapsed: boolean): void => {
    setCollapsed(!collapsed);
  }

  const navigate = useNavigate();

  return (
    <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" onClick={()=>navigate('')}>
          <img src={Logo} alt="Tractian"/>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item
              key="1"
              icon={<SettingOutlined />}
              onClick={()=>navigate('/assets')}
            >
              Ativos
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<UserOutlined />}
              onClick={()=>navigate('/users')}
            >
              Usuários
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<EnvironmentOutlined />}
              onClick={()=>navigate('/units')}
            >
              Unidades
            </Menu.Item>
            <Menu.Item
              key="4" icon={<GlobalOutlined />}
              onClick={()=>navigate('/companies')}
            >
              Companias
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            <Button
              type="default"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              size='large'
              onClick={() => toggle(collapsed)} />
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
  );
}

export default Main;
