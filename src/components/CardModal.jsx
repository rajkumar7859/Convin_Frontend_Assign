import React, { useState } from 'react';
import { Modal, Form, Input } from 'antd';

const { TextArea } = Input;

const CardModal = ({ visible, onCancel, onCreate, title, link, description, loading }) => {
  const [form] = Form.useForm();
  const [videoLink, setVideoLink] = useState(link);

  const handleVideoLinkChange = (e) => {
    setVideoLink(e.target.value);
  };

  const initialValues = {
    title,
    link: videoLink,
    description
  };

  return (
    <Modal
      visible={visible}
      title="Create a new card"
      okText="Save"
      onCancel={onCancel}
      onOk={() => {
        form.validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values, videoLink);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
      confirmLoading={loading}
    >
      <Form form={form} layout="vertical" initialValues={initialValues}>
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please input the title of the card!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="link"
          label="Link"
          rules={[{ required: true, message: 'Please input the video link!' }]}
        >
          <Input onChange={handleVideoLinkChange} />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <TextArea rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CardModal;
