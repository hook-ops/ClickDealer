import React, { useState } from 'react';
import { Table, Button } from 'antd';
import OfferDetailsModal from './OfferDetailsModal';
import '../styles/dashboard.css';

const DashboardTable = () => {
  const [selectedOffer, setSelectedOffer] = useState(null);

  const offers = [
    { key: '1', id: '162128', name: 'Custom Page Offer', payout: '€14.40', format: 'CPA', country: 'NZ' },
    { key: '2', id: '162127', name: 'Dynamic Page Offer', payout: '€10.50', format: 'CPC', country: 'AU' }
  ];

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Offer Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Payout',
      dataIndex: 'payout',
      key: 'payout',
    },
    {
      title: 'Price Format',
      dataIndex: 'format',
      key: 'format',
    },
    {
      title: 'Allowed Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Button type="link" onClick={() => setSelectedOffer(record)}>
          View Details
        </Button>
      ),
    },
  ];

  return (
    <div className="dashboard-table">
      <Table columns={columns} dataSource={offers} pagination={false} />
      {selectedOffer && <OfferDetailsModal offer={selectedOffer} onClose={() => setSelectedOffer(null)} />}
    </div>
  );
};

export default DashboardTable;
