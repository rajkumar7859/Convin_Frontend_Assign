import React, { useState } from 'react';
import { Modal, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { addBucket, editBucket } from '../actions/bucketAction';

const BucketModal = ({ visible, onCancel, onSave, bucket }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSave = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      const data = {
        name: values.name,
      };
      if (bucket) {
        dispatch(editBucket(bucket.id, data));
      } else {
        dispatch(addBucket(data));
      }
      onSave();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal visible={visible} title={bucket ? 'Edit Bucket' : 'Create Bucket'} onCancel={onCancel} onOk={handleSave} confirmLoading={loading}>
      <Form form={form} initialValues={{ name: bucket?.name }}>
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input the bucket name!' }]}>
          <Input placeholder="Enter bucket name" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default BucketModal;
