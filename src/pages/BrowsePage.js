import React from 'react';
import { Table, Input, Button, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import '../styles/browseOffers.css';

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name', width: 300 },
  { title: 'Price Format', dataIndex: 'priceFormat', key: 'priceFormat' },
  { title: 'Allowed Countries', dataIndex: 'allowedCountries', key: 'allowedCountries' },
  { title: 'Vertical', dataIndex: 'vertical', key: 'vertical' },
  { title: 'Platform', dataIndex: 'platform', key: 'platform', render: platforms => (
      <div>
        {platforms.map((platform, index) => (
          <img key={index} src={platform.icon} alt={platform.name} style={{ width: 20, marginRight: 4 }} />
        ))}
      </div>
    )
  },
  { title: 'Status', dataIndex: 'status', key: 'status' },
  { title: 'Payout', dataIndex: 'payout', key: 'payout' },
  { title: 'Flow', dataIndex: 'flow', key: 'flow' },
  { title: 'Loyalty', dataIndex: 'loyalty', key: 'loyalty' },
  { title: 'Tracking Type', dataIndex: 'trackingType', key: 'trackingType' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Gender', dataIndex: 'gender', key: 'gender' },
];

const data = [
  // Populate your data here with example rows that match the table structure
];

const BrowsePage = () => {
  return (
    <div className="browse-page">
      <h2>Browse Offers</h2>
      <Row gutter={[16, 16]} style={{ marginBottom: '16px' }}>
        <Col span={6}>
          <Input placeholder="Search offers..." prefix={<SearchOutlined />} />
        </Col>
        <Col span={18} style={{ textAlign: 'right' }}>
          <Button type="primary">Request Offer</Button>
          <Button style={{ marginLeft: '8px' }}>Show Filter</Button>
        </Col>
      </Row>
      <Table 
        columns={columns} 
        dataSource={data} 
        pagination={{ pageSize: 25, showSizeChanger: true, total: 10197 }}
      />
    </div>
  );
};

export default BrowsePage;
