import React from 'react';
import { List, Typography, Button, Space } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const { Text } = Typography;

const CardList = ({ cards, onDeleteCard, onEditCard }) => {
  const handleDeleteCard = (cardId) => {
    onDeleteCard(cardId);
  };

  const handleEditCard = (cardId) => {
    onEditCard(cardId);
  };

  return (
    <List
      dataSource={cards}
      renderItem={(card) => (
        <List.Item
          key={card.id}
          actions={[
            <Space>
              <Button
                type='text'
                icon={<EditOutlined />}
                onClick={() => handleEditCard(card.id)}
              />
              <Button
                type='text'
                danger
                icon={<DeleteOutlined />}
                onClick={() => handleDeleteCard(card.id)}
              />
            </Space>,
          ]}
        >
          <List.Item.Meta
            title={card.name}
            description={<Text ellipsis>{card.link}</Text>}
          />
        </List.Item>
      )}
    />
  );
};

export default CardList;
