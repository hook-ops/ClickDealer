import React, { useEffect, useState } from 'react';
import { Table, Button, message, Modal } from 'antd';
import axios from 'axios';

const AcceptOfferPage = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPendingApplications();
  }, []);

  const fetchPendingApplications = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/offers/pending-applications', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setApplications(response.data);
    } catch (error) {
      console.error('Error fetching applications:', error);
      message.error('Failed to fetch applications.');
    } finally {
      setLoading(false);
    }
  };

  const handleDecision = async (applicationId, decision) => {
    try {
      await axios.post(
        'http://localhost:5000/api/offers/application/decide',
        { applicationId, decision },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      message.success(`Application ${decision} successfully.`);
      fetchPendingApplications(); // Refresh applications after decision
    } catch (error) {
      console.error('Error updating application status:', error);
      message.error(`Failed to ${decision} application.`);
    }
  };

  const columns = [
    { title: 'Affiliate', dataIndex: 'affiliateName', key: 'affiliateName' },
    { title: 'Offer Name', dataIndex: 'offer_name', key: 'offerName' },
    { title: 'Price Format', dataIndex: 'price_format', key: 'priceFormat' },
    { title: 'Payout', dataIndex: 'payout', key: 'payout' },
    { title: 'Applied At', dataIndex: 'applied_at', key: 'appliedAt' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <>
          <Button
            type="primary"
            onClick={() => handleDecision(record.id, 'accepted')}
            style={{ marginRight: 8 }}
          >
            Accept
          </Button>
          <Button type="danger" onClick={() => handleDecision(record.id, 'rejected')}>
            Reject
          </Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <h2>Manage Offer Applications</h2>
      <Table
        columns={columns}
        dataSource={applications}
        rowKey="id"
        loading={loading}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default AcceptOfferPage;
