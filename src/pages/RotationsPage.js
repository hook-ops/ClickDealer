import React from 'react';
import { Table } from 'antd';

const columns = [
  { title: 'Rotation Name', dataIndex: 'rotationName', key: 'rotationName' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
  { title: 'Created On', dataIndex: 'createdOn', key: 'createdOn' },
  // Other columns as needed
];

const data = [
  // Rotation data here
];

const RotationsPage = () => {
  return (
    <div>
      <h2>Rotations</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default RotationsPage;
