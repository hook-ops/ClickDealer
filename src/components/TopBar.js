import React from 'react';
import { Layout, Input, Menu, Typography, Space } from 'antd';
import { SearchOutlined, BellOutlined, QuestionCircleOutlined, DollarCircleOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Text } = Typography;

const TopBar = () => {
    return (
        <Header style={{ backgroundColor: '#0069b4', padding: '0 20px', display: 'flex', alignItems: 'center' }}>
            <Menu mode="horizontal" theme="dark" style={{ backgroundColor: '#0069b4', border: 'none', flex: 1 }}>
                <Menu.Item key="toggle" style={{ color: '#ffffff' }}>
                    <span style={{ fontSize: '24px' }}>≡</span>
                </Menu.Item>
            </Menu>
            <Space size="middle">
                <Input
                    placeholder="Search offers by ID or name"
                    prefix={<SearchOutlined />}
                    style={{ width: 250, borderRadius: '4px' }}
                />
                <QuestionCircleOutlined style={{ fontSize: '20px', color: '#ffffff' }} />
                <div style={{ color: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <Text style={{ color: '#ffffff' }}>Balance: $4.97</Text>
                    <Text type="secondary" style={{ fontSize: '12px', color : '#ffffff' }}>READY FOR WITHDRAWAL: $0.00</Text>
                </div>
                <div style={{ color: '#ffffff' }}>
                    <Text style={{ color: '#ffffff' }}>09:33</Text>
                    {/* <Text type="secondary" style={{ fontSize: '12px', color : '#ffffff' }}>YOUR LOCAL TIME</Text> */}
                </div>
                <BellOutlined style={{ fontSize: '20px', color: '#ffffff' }} />
                <div style={{ color: '#ffffff' }}>
                    <Text style={{ color: '#ffffff' }}>david_bcn997</Text>
                    <Text type="secondary" style={{ fontSize: '12px' }}>ID 36640</Text>
                </div>
            </Space>
        </Header>
    );
};

export default TopBar;
