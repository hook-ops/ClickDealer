import React, { useState } from 'react';
import { Form, Input, Button, message, Modal } from 'antd';
import '../styles/LoginPage.css'; // Import the CSS file for additional styling
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', values);
      message.success('Login successful!');
      // Redirect to the dashboard or another page
      navigate('/dashboard'); // Adjust the path if necessary
    } catch (error) {
      // Check if it's a known error from the backend
      if (error.response && error.response.data.message) {
        setModalMessage(error.response.data.message); // Set the error message from the response
      } else {
        setModalMessage('An unexpected error occurred. Please try again.');
      }
      setIsModalVisible(true); // Show the modal
    }
  };

  const handleModalOk = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="login-page-container">
      <div className="login-form-container">
        <h2 className="login-title">Welcome Back</h2>
        <Form
          name="login"
          onFinish={onFinish}
          layout="vertical"
          className="login-form"
        >
          <Form.Item
            label="Account Name"
            name="accountName"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Enter your username" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-button">
              Log In
            </Button>
          </Form.Item>
        </Form>
      </div>

      {/* Modal for displaying error messages */}
      <Modal
        title="Login Failed"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalOk}
        centered
        okText="OK"
      >
        <p>{modalMessage}</p>
      </Modal>
    </div>
  );
};

export default LoginPage;
