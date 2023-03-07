import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, List, Modal } from 'antd';
import { ClockCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { deleteHistory } from '../actions/historyActions';

const History = () => {
  const dispatch = useDispatch();
  const { historyList } = useSelector((state) => state.history);

  useEffect(() => {
    Modal.info({
      title: 'Welcome to History',
      content: 'Here you can see all your played videos and audios!',
      centered: true,
    });
  }, []);

  const handleDelete = (item) => {
    dispatch(deleteHistory(item.id));
  };

  return (
    <div>
      <h1>History</h1>
      {historyList.length === 0 ? (
        <p>No history yet!</p>
      ) : (
        <List
          dataSource={historyList}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Button
                  type="text"
                  danger
                  onClick={() => handleDelete(item)}
                  icon={<DeleteOutlined />}
                  key="delete"
                >
                  Delete
                </Button>,
              ]}
            >
              <List.Item.Meta
                avatar={<ClockCircleOutlined />}
                title={item.cardName}
                description={new Date(item.playedAt).toLocaleString()}
              />
              <div>{item.link}</div>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default History;
