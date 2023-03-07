import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useNavigate} from 'react-router-dom';
import { deleteBucket, editBucket } from '../actions/bucketAction';
import BucketModal from './BucketModal';

const BucketList = () => {
  const buckets = useSelector((state) => state.bucket.buckets);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedBucket, setSelectedBucket] = React.useState(null);

  const handleDelete = (id) => {
    dispatch(deleteBucket(id));
  };

  const handleEdit = (bucket) => {
    setSelectedBucket(bucket);
    setModalVisible(true);
  };

  const handleCardClick = (id) => {
    navigate(`/bucket/${id}`);
  };

  const handleModalClose = () => {
    setSelectedBucket(null);
    setModalVisible(false);
  };

  const handleModalSubmit = (values) => {
    dispatch(editBucket(selectedBucket.id, values.name));
    handleModalClose();
  };

  return (
    <div>
      <List
        dataSource={buckets}
        renderItem={(bucket) => (
          <List.Item
            key={bucket.id}
            actions={[
              <Button
                icon={<DeleteOutlined />}
                onClick={() => handleDelete(bucket.id)}
              />,
              <Button
                icon={<EditOutlined />}
                onClick={() => handleEdit(bucket)}
              />,
            ]}
          >
            <List.Item.Meta
              title={<a onClick={() => handleCardClick(bucket.id)}>{bucket.name}</a>}
            />
            <div>{bucket.cards.length} cards</div>
          </List.Item>
        )}
      />
      <BucketModal
        visible={modalVisible}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
        bucket={selectedBucket}
      />
    </div>
  );
};

export default BucketList;
