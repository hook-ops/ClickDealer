import React, { useEffect, useState } from 'react';
import { Table, message } from 'antd';
import axios from 'axios';

const columns = [
 
    { title: 'Name', dataIndex: 'offer_name', key: 'name', width: 300 },
    // { title: 'Image Path', dataIndex: 'image_path', key: 'ImagePath' },
    { title: 'Price Format', dataIndex: 'price_format', key: 'priceFormat' },
    { title: 'Allowed Countries', dataIndex: 'allowed_countries', key: 'allowedCountries' },
    { title: 'Vertical', dataIndex: 'vertical', key: 'vertical' },
    { title: 'Platform', dataIndex: 'platform', key: 'platform' },
    // { title: 'Status', dataIndex: 'status', key: 'status' },
    { title: 'Payout', dataIndex: 'payout', key: 'payout' },
    { title: 'Flow', dataIndex: 'flow', key: 'flow' },
    { title: 'Loyalty', dataIndex: 'loyalty', key: 'loyalty' },
    { title: 'Tracking Type', dataIndex: 'tracking_type', key: 'trackingType' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Gender', dataIndex: 'gender', key: 'gender' },

];

const MyCampaignsPage = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/offers/my-campaigns', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setCampaigns(response.data);
    } catch (error) {
      console.error('Error fetching campaigns:', error);
      message.error('Failed to fetch campaigns.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>My Campaigns</h2>
      <Table
        columns={columns}
        dataSource={campaigns}
        rowKey="offerId"
        loading={loading}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default MyCampaignsPage;
