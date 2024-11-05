import React from 'react';
import { Table, Button } from 'antd';
import '../styles/referralPayments.css';

const columns = [
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'Commission, $', dataIndex: 'commission', key: 'commission' },
  { title: 'Payments, $', dataIndex: 'payments', key: 'payments' },
  { title: 'Bill ID', dataIndex: 'billId', key: 'billId' },
  { title: 'Balance', dataIndex: 'balance', key: 'balance' },
];

const data = [
  // No data for now, showing empty table
];

const ReferralPaymentsPage = () => {
  return (
    <div className="referral-payments-page">
      <div className="header">
        <h2>Referral Payments</h2>
        <div className="balance-info">
          <span className="current-balance">Current Balance: $0.00</span>
          <Button type="default" className="request-payment-btn">Request payment</Button>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 25 }}
        summary={() => (
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={1}>Total</Table.Summary.Cell>
            <Table.Summary.Cell index={1}>0.00</Table.Summary.Cell>
            <Table.Summary.Cell index={2}>0.00</Table.Summary.Cell>
            <Table.Summary.Cell index={3} colSpan={2}></Table.Summary.Cell>
          </Table.Summary.Row>
        )}
      />
    </div>
  );
};

export default ReferralPaymentsPage;
