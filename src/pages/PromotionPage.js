import React from 'react';
import { Table } from 'antd';

const promotions = [];

const columns = [
  { title: 'Vertical', dataIndex: 'vertical', key: 'vertical' },
  { title: 'Advertiser', dataIndex: 'advertiser', key: 'advertiser' },
  { title: 'Country', dataIndex: 'country', key: 'country' },
];

const PromotionPage = () => {
  return (
    <div>
      <h1>Promotions</h1>
      <Table dataSource={promotions} columns={columns} pagination={false} />
    </div>
  );
};

export default PromotionPage;
