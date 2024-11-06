import React, { useState } from 'react';
import { Form, Input, Button, Select, Checkbox, Radio, message, Modal } from 'antd';
import '../styles/SignUpPage.css';
import axios from 'axios';
// import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const SignUpPage = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const onFinish = (values) => {
    console.log('Form values:', values);
    // Merge all form data and submit
    axios.post('http://localhost:5000/api/auth/signup', values)
      .then(response => {
        console.log(response.data);

        message.success('Signup successful!');
        setIsSuccessModalVisible(true);  // Show the modal
        // Redirect to the login page after a successful signup
        // setTimeout(() => {
        //   navigate('/login'); // Adjust the path if necessary
        // }, 2000); // Delay to let the user see the success message
      })
      .catch(error => {
        if (error.response && error.response.status === 400 && error.response.data.message === 'Email already exists') {
            // Show popup if the email already exists
            setModalMessage('The email is already registered. Please use a different email.');
            setIsErrorModalVisible(true);
          } else {
            console.error('There was an error!', error);
          }
      });
  };

  const handleSuccessOk = () => {
    setIsSuccessModalVisible(false);
    navigate('/login');  // Redirect to login page
  };

  const handleErrorCancel = () => {
    setIsErrorModalVisible(false);
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Welcome to Sign Up</h2>

        <Form onFinish={onFinish} layout="vertical">
          {/* Basic Info */}
          <Form.Item label="Account Name" name="accountName" rules={[{ required: true, message: 'Please input your account name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your account name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: 'Please input your first name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Last Name" name="lastName" rules={[{ required: true, message: 'Please input your last name!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Email Address" name="email" rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Phone Number" name="phone" rules={[{ required: true, message: 'Please input your phone number!' }]}>
            <Input />
          </Form.Item>

          {/* About You */}
          <Form.Item label="Country" name="country" rules={[{ required: true, message: 'Please select your country!' }]}>
            <Select placeholder="Select a country">
              <Option value="usa">USA</Option>
              <Option value="canada">Canada</Option>
              {/* Add more options as needed */}
            </Select>
          </Form.Item>
          <Form.Item label="City" name="city" rules={[{ required: true, message: 'Please input your city!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Address (street)" name="address" rules={[{ required: true, message: 'Please input your address!' }]}>
            <Input />
          </Form.Item>

          {/* Traffic Info */}
          <Form.Item label="Specialization" name="specialization" rules={[{ required: true, message: 'Please select your specialization!' }]}>
            <Radio.Group>
              <Radio value="blogger">Blogger/Fan Page Owner</Radio>
              <Radio value="affiliate">Affiliate/Media Buyer</Radio>
              {/* Add more options */}
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Preferred Niche" name="niche" rules={[{ required: true, message: 'Please choose a niche!' }]}>
            <Checkbox.Group options={['Education', 'Gaming', 'Finance', 'Travel']} />
          </Form.Item>

          {/* Submit Button */}
          <div className="form-wrapper">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form>
        {/* Modal for error messages */}
        <Modal
          title="Alert"
          visible={isErrorModalVisible}
          onOk={handleErrorCancel}
          onCancel={handleErrorCancel}
          centered
        >
          <p>{modalMessage}</p>
        </Modal>


        {/* Modal for successful signup */}
        <Modal
          title="Signup Successful"
          visible={isSuccessModalVisible}
          onOk={handleSuccessOk}
          onCancel={() => setIsSuccessModalVisible(false)}
          okText="Go to Login"
          cancelText="Stay Here"
          centered
        //   bodyStyle={{
        //     backgroundImage: 'linear-gradient(135deg, #3b41c5, #d24872)',  // Match this color to your page background
        //     color: '#ffffff',  // Text color
        //     borderRadius: '8px',
        //     padding: 0,
        //   }}
        //   style={{
        //     backgroundImage: 'linear-gradient(135deg, #3b41c5, #d24872)',  // Make the modal overlay transparent
        //     boxShadow: 'none',
        //   }}
        //   maskStyle={{
        //     backgroundImage: 'linear-gradient(135deg, #3b41c5, #d24872)', // Match overlay to background
        //   }}
        >
          <p style={{ padding: '16px' }}>Your account has been created successfully. You can now log in.</p>
        </Modal>
      </div>
    </div>
  );
};

export default SignUpPage;
