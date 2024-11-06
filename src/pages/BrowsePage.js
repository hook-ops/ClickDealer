import React, { useEffect, useState } from 'react';
import { Table, Input, Button, Row, Col, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios';
import '../styles/browseOffers.css';

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name', width: 300 },
  { title: 'Price Format', dataIndex: 'price_format', key: 'priceFormat' },
  { title: 'Allowed Countries', dataIndex: 'allowedCountries', key: 'allowedCountries' },
  { title: 'Vertical', dataIndex: 'vertical', key: 'vertical' },
  { title: 'Platform', dataIndex: 'platform', key: 'platform' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
  { title: 'Payout', dataIndex: 'payout', key: 'payout' },
  { title: 'Flow', dataIndex: 'flow', key: 'flow' },
  { title: 'Loyalty', dataIndex: 'loyalty', key: 'loyalty' },
  { title: 'Tracking Type', dataIndex: 'trackingType', key: 'trackingType' },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Gender', dataIndex: 'gender', key: 'gender' },
];

const BrowsePage = () => {
  const [data, setData] = useState([]);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/offers');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching offers:', error);
    }
  };

  const handleRowClick = (offer) => {
    setSelectedOffer(offer);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSelectedOffer(null);
  };

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
        pagination={{ pageSize: 25, showSizeChanger: true, total: data.length }}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
      />

      {selectedOffer && (
        <Modal
          title={selectedOffer.name}
          visible={isModalVisible}
          onCancel={handleModalClose}
          footer={[
            <Button key="close" onClick={handleModalClose}>Close</Button>,
            <Button key="apply" type="primary">Apply for Offer</Button>,
          ]}
        >
          <p><strong>Description:</strong> {selectedOffer.description}</p>
          <p><strong>Payout:</strong> {selectedOffer.payout}</p>
          <p><strong>Price Format:</strong> {selectedOffer.priceFormat}</p>
          <p><strong>Vertical:</strong> {selectedOffer.vertical}</p>
          <p><strong>Allowed Countries:</strong> {selectedOffer.allowedCountries}</p>
          <p><strong>Platforms:</strong> {selectedOffer.platform}</p>
          <p><strong>Flow:</strong> {selectedOffer.flow}</p>
          <p><strong>Loyalty:</strong> {selectedOffer.loyalty}</p>
          <p><strong>Tracking Type:</strong> {selectedOffer.trackingType}</p>
          <p><strong>Restrictions:</strong> {selectedOffer.restrictions}</p>
          {/* Add any other fields as needed */}
        </Modal>
      )}
    </div>
  );
};

export default BrowsePage;
