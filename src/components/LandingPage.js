import React from 'react';
import { Layout, Menu, Button, Row, Col, Typography, Card } from 'antd';
import '../styles/LandingPage.css'; // Ensure this CSS matches your theme adjustments
import {Link} from 'react-router-dom';

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

const LandingPage = () => {
  return (
    <Layout className="landing-layout">
      <Header className="landing-header">
        <div className="logo">
          <img src="/path-to-logo.png" alt="Logo" style={{ height: '50px' }} />
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className="landing-menu">
          <Menu.Item key="1">Advertisers</Menu.Item>
          <Menu.Item key="2">Affiliates</Menu.Item>
          <Menu.Item key="3">Smartlink</Menu.Item>
          <Menu.Item key="4">E-Commerce</Menu.Item>
          <Menu.Item key="5">Leadgen</Menu.Item>
          <Menu.Item key="6">Company</Menu.Item>
          <Menu.Item key="7">Media</Menu.Item>
        </Menu>
        <div className="auth-buttons">
          <Button type="text" className="login-button"><Link to="/login">Login</Link></Button>
          <Button type="primary" className="signup-button"><Link to="/signup">Signup</Link></Button>
        </div>
      </Header>
      <Content className="landing-content">
        <div className="hero-section">
          <Title level={1} className="hero-title">Global Affiliate Network</Title>
          <Paragraph className="hero-subtitle">
            The only way to succeed in online marketing is to partner with the best.
          </Paragraph>
        </div>
        <Row gutter={24} justify="center" className="info-cards">
          <Col xs={24} sm={12} md={6}>
            <Card hoverable className="info-card">
              <Title level={3}>Affiliates</Title>
              <Paragraph>Exclusive deals, expert managers, and the best-equipped platform on the market.</Paragraph>
              <Button type="link">Join Now</Button>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card hoverable className="info-card">
              <Title level={3}>Advertisers</Title>
              <Paragraph>Brand-safe advertising, meticulous quality control, and worldwide scaling with sharp targeting.</Paragraph>
              <Button type="link">Join Now</Button>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card hoverable className="info-card">
              <Title level={3}>Affiliates</Title>
              <Paragraph>One link per vertical, thousands of offers per link, and billions of data points processed by algorithms.</Paragraph>
              <Button type="link">Join Now</Button>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card hoverable className="info-card">
              <Title level={3}>Advertisers</Title>
              <Paragraph>Quick setup, global reach, and massive amounts of traffic toward any number of your products.</Paragraph>
              <Button type="link">Join Now</Button>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default LandingPage;
