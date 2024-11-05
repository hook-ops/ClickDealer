import React from 'react';
import { Table } from 'antd';

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Viewed On', dataIndex: 'viewedOn', key: 'viewedOn' },
  // Other columns as needed
];

const data = [
  // Recently viewed data here
];

const RecentlyViewedPage = () => {
  return (
    <div>
      <h2>Recently Viewed</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default RecentlyViewedPage;
