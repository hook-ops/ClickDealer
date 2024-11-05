import React from 'react';
import { Table } from 'antd';

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Payout', dataIndex: 'payout', key: 'payout' },
  // Add other necessary columns
];

const data = [
  // Add new offers data here
];

const NewOffersPage = () => {
  return (
    <div>
      <h2>New Offers</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default NewOffersPage;
