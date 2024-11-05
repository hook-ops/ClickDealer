import React from 'react';
import { Table } from 'antd';

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
  // Other relevant columns
];

const data = [
  // Add pending campaign data here
];

const PendingCampaignsPage = () => {
  return (
    <div>
      <h2>Pending Campaigns</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default PendingCampaignsPage;
