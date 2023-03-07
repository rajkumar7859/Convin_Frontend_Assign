import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button, Typography } from 'antd';

const { Title } = Typography;
const { Content } = Layout;

const Home = () => {
  return (
    <Layout className="layout">
      <Content style={{ padding: '50px 50px' }}>
        <Title level={2}>Welcome to Video App</Title>
        <Link to="/buckets">
          <Button type="primary" size="large" style={{ marginRight: 20 }}>
            Go to Buckets
          </Button>
        </Link>
        <Link to="/history">
          <Button type="primary" size="large">
            Go to History
          </Button>
        </Link>
      </Content>
    </Layout>
  );
};

export default Home;
