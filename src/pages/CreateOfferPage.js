import React, { useState } from 'react';
import { Form, Input, InputNumber, Checkbox, Button, Select, Typography, message, Upload } from 'antd';
import axios from 'axios';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Title } = Typography;
const { Option } = Select;

const CreateOfferPage = () => {
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const onFinish = async (values) => {
    setLoading(true);
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    if (imageFile) {
      formData.append('image', imageFile);
    }
    try {
      // const response = await axios.post('http://localhost:5000/api/offers/create', values);
      const response = await axios.post(
        'http://localhost:5000/api/offers/create',
        formData, // Ensure formData contains the image and other fields
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${localStorage.getItem('token')}` // Retrieve the token from localStorage
          }
        }
      );
      
      message.success(response.data.message || "Offer created successfully!");
      setLoading(false);
    } catch (error) {
      console.error("There was an error creating the offer!", error);
      message.error("Failed to create offer. Please try again.");
      setLoading(false);
    }
  };
  const handleImageChange = (file) => {
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file)); // Generate preview URL
    return false; // Prevents automatic upload
  };
  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <Title level={2} style={{ textAlign: 'center' }}>Create a New Offer</Title>
      
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          offerCapped: false,
        }}
      >

        <Form.Item label="Upload Image" name="image_path">
          <Upload beforeUpload={handleImageChange} maxCount={1}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
          {imagePreview && (
            <div style={{ marginTop: '10px' }}>
              <img src={imagePreview} alt="Preview" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} />
            </div>
          )}
        </Form.Item>
        <Form.Item
          label="Offer Name"
          name="offer_name"
          rules={[{ required: true, message: 'Please enter the offer name!' }]}
        >
          <Input placeholder="Enter offer name" />
        </Form.Item>

        <Form.Item
          label="Payout"
          name="payout"
          rules={[{ required: true, message: 'Please enter the payout amount!' }]}
        >
          <InputNumber min={0} style={{ width: '100%' }} placeholder="Enter payout amount" />
        </Form.Item>

        <Form.Item label="Price Format" name="price_format">
          <Select placeholder="Select price format">
            <Option value="CPA">CPA</Option>
            <Option value="CPC">CPC</Option>
            <Option value="CPL">CPL</Option>
            <Option value="CPI">CPI</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Vertical" name="vertical">
          <Input placeholder="Enter vertical (e.g., Health, Finance)" />
        </Form.Item>

        <Form.Item label="Flow" name="flow">
          <Input placeholder="Enter flow (e.g., Straight Sale, Lead Gen)" />
        </Form.Item>

        <Form.Item label="Platforms" name="platforms">
          <Input placeholder="Enter platforms (e.g., desktop, mobile)" />
        </Form.Item>

        <Form.Item label="Tracking Type" name="tracking_type">
          <Select placeholder="Select tracking type">
            <Option value="postback">Postback</Option>
            <Option value="pixel">Pixel</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Allowed Countries" name="allowed_countries">
          <Input placeholder="Enter allowed countries (e.g., US, UK, CA)" />
        </Form.Item>

        <Form.Item label="Blacklisted Countries" name="blacklisted_countries">
          <Input placeholder="Enter blacklisted countries (e.g., CN, RU)" />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <TextArea rows={4} placeholder="Enter offer description" />
        </Form.Item>

        <Form.Item label="Restrictions" name="restrictions">
          <TextArea rows={4} placeholder="Enter offer restrictions" />
        </Form.Item>

        <Form.Item name="offer_capped" valuePropName="checked">
          <Checkbox>Offer Capped</Checkbox>
        </Form.Item>

        <Form.Item label="Domain" name="domain">
          <Input placeholder="Enter domain (e.g., track.emlrckr.com)" />
        </Form.Item>

        <Form.Item label="Media Type" name="media_type">
          <Input placeholder="Enter media type (e.g., email, banner)" />
        </Form.Item>

        <Form.Item label="Subaffiliate" name="subaffiliate">
          <Input placeholder="Enter subaffiliate code" />
        </Form.Item>

        <Form.Item label="Sub ID1" name="sub_id1">
          <Input placeholder="Enter Sub ID1" />
        </Form.Item>

        <Form.Item label="Sub ID2" name="sub_id2">
          <Input placeholder="Enter Sub ID2" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Create Offer
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateOfferPage;
