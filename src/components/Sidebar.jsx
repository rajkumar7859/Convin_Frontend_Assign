import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const Sidebar = ({ buckets, currentBucketId }) => {

  const renderBuckets = () => {
    return buckets.map(bucket => (
      <Menu.Item key={bucket.id}>
        <Link to={`/bucket/${bucket.id}`}>
          <Icon type="folder" />
          <span>{bucket.name}</span>
        </Link>
      </Menu.Item>
    ));
  };

  return (
    <div className="sidebar">
      <Menu
        mode="inline"
        selectedKeys={[currentBucketId]}
        style={{ borderRight: 0 }}
      >
        <Menu.Item key="home">
          <Link to="/">
            <Icon type="home" />
            <span>Home</span>
          </Link>
        </Menu.Item>
        {renderBuckets()}
      </Menu>
    </div>
  );
};

export default Sidebar;
