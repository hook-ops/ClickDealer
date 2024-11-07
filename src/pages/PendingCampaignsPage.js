import React, { useEffect, useState } from 'react';
import { Table, message } from 'antd';
import axios from 'axios';

const columns = [
  { title: 'Offer Name', dataIndex: 'offer_name', key: 'offerName' },
  { title: 'Price Format', dataIndex: 'price_format', key: 'priceFormat' },
  { title: 'Payout', dataIndex: 'payout', key: 'payout' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
];

const PendingCampaignsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPendingCampaigns();
  }, []);

  const fetchPendingCampaigns = async () => {
    try {
      const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
      const response = await axios.get('http://localhost:5000/api/offers/pending-campaigns', {
          headers: { Authorization: `Bearer ${token}` },
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching pending campaigns:', error);
      message.error('Failed to fetch pending campaigns.');
    }
  };

  return (
    <div>
      <h2>Pending Campaigns</h2>
      <Table columns={columns} dataSource={data} rowKey="id" pagination={{ pageSize: 10 }} />
    </div>
  );
};

export default PendingCampaignsPage;
