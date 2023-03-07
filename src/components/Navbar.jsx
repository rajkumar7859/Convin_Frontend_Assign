import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  VideoCameraOutlined,
  HistoryOutlined,
} from '@ant-design/icons';

const { Header } = Layout;

const Navbar = ({ collapsed, toggleCollapsed }) => {
  return (
    <Header className="navbar">
      <div className="navbar__left">
        {collapsed ? (
          <MenuUnfoldOutlined
            className="navbar__icon"
            onClick={toggleCollapsed}
          />
        ) : (
          <MenuFoldOutlined
            className="navbar__icon"
            onClick={toggleCollapsed}
          />
        )}
        <Link to="/" className="navbar__title">
          Video Player
        </Link>
      </div>
      <Menu theme="dark" mode="horizontal" selectable={false}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link to="/buckets">Buckets</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<HistoryOutlined />}>
          <Link to="/history">History</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
