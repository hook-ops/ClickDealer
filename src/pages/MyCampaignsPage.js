import React from 'react';
import { Table } from 'antd';

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Price Format', dataIndex: 'priceFormat', key: 'priceFormat' },
  { title: 'Payout', dataIndex: 'payout', key: 'payout' },
  // Other columns as needed
];

const data = [
  // Add your campaign data here
];

const MyCampaignsPage = () => {
  return (
    <div>
      <h2>My Campaigns</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default MyCampaignsPage;
