import React from 'react';
import { Spin } from 'antd';

const Loading = () => {
  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <Spin size="large" />
    </div>
  );
};

export default Loading;
