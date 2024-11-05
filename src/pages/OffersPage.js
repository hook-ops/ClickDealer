import React from 'react';
import { Table, Input, Button, Select } from 'antd';
import '../styles/offerPage.css';

const { Search } = Input;
const { Option } = Select;

const OffersPage = () => {
  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Offer Name', dataIndex: 'name', key: 'name' },
    { title: 'Price Format', dataIndex: 'priceFormat', key: 'priceFormat' },
    { title: 'Allowed Countries', dataIndex: 'countries', key: 'countries' },
    { title: 'Vertical', dataIndex: 'vertical', key: 'vertical' },
    { title: 'Platform', dataIndex: 'platform', key: 'platform' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    { title: 'Payout', dataIndex: 'payout', key: 'payout' },
    { title: 'Flow', dataIndex: 'flow', key: 'flow' },
    {
      title: 'Actions',
      key: 'actions',
      render: () => <Button type="link">View Details</Button>,
    },
  ];

  const data = [
    // Add your data here for each offer
    {
      key: '1',
      id: '162128',
      name: '(162128) Custom Page Offer',
      priceFormat: 'CPA',
      countries: 'NZ',
      vertical: 'Sweepstakes',
      platform: 'All',
      status: 'Apply To Run',
      payout: '€14.40',
      flow: 'cc submit',
    },
    {
      key: '2',
      id: '162127',
      name: '(162127) Dynamic Page Offer',
      priceFormat: 'CPC',
      countries: 'AU',
      vertical: 'Sweepstakes',
      platform: 'All',
      status: 'Apply To Run',
      payout: '€12.00',
      flow: 'cc submit',
    },
  ];

  return (
    <div className="offer-page">
      <h2>Browse Offers</h2>
      <div className="filter-section">
        <Search placeholder="Search offers..." style={{ width: 200, marginRight: 10 }} />
        <Select placeholder="Country" style={{ width: 120, marginRight: 10 }}>
          <Option value="NZ">NZ</Option>
          <Option value="AU">AU</Option>
        </Select>
        <Select placeholder="Platform" style={{ width: 120, marginRight: 10 }}>
          <Option value="All">All</Option>
        </Select>
        <Select placeholder="Price format" style={{ width: 150, marginRight: 10 }}>
          <Option value="CPA">CPA</Option>
          <Option value="CPC">CPC</Option>
        </Select>
        <Button type="primary">Apply</Button>
      </div>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default OffersPage;
