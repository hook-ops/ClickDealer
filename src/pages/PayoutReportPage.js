import React from 'react';
import { Table } from 'antd';
import { Line } from '@ant-design/plots';
import '../styles/payoutReport.css';

const columns = [
  { title: 'Bill ID', dataIndex: 'billId', key: 'billId' },
  { title: 'Period', dataIndex: 'period', key: 'period' },
  { title: 'Payout, $', dataIndex: 'payout', key: 'payout' },
  { title: 'Payout, Converted', dataIndex: 'payoutConverted', key: 'payoutConverted' },
  { title: 'Status', dataIndex: 'status', key: 'status' },
  { title: 'Actions', dataIndex: 'actions', key: 'actions' },
];

const data = [
  {
    key: '1',
    billId: '11845779',
    period: '2020/04/01 - 2020/04/30',
    payout: '1044.80',
    payoutConverted: '$ 1044.80',
    status: 'Paid',
    actions: (
      <div>
        <i className="fas fa-info-circle" title="Details"></i>
        <i className="fas fa-file-alt" title="Download"></i>
      </div>
    ),
  },
  {
    key: '2',
    billId: '11845779',
    period: '2020/02/01 - 2020/03/31',
    payout: '656.00',
    payoutConverted: '$ 656.00',
    status: 'Paid',
    actions: (
      <div>
        <i className="fas fa-info-circle" title="Details"></i>
        <i className="fas fa-file-alt" title="Download"></i>
      </div>
    ),
  },
];

const PayoutReportPage = () => {
  const config = {
    data: [
      { date: '2020-04', revenue: 1044.80 },
      { date: '2020-03', revenue: 656.00 },
    ],
    xField: 'date',
    yField: 'revenue',
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: { fill: '#000', fontSize: 12 },
    },
  };

  return (
    <div className="payout-report-page">
      <h2>Payout Report</h2>
      <div className="chart-container">
        <Line {...config} />
      </div>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 25 }} summary={() => (
        <Table.Summary.Row>
          <Table.Summary.Cell index={0} colSpan={2}>Total</Table.Summary.Cell>
          <Table.Summary.Cell index={2}>$ 1700.80</Table.Summary.Cell>
          <Table.Summary.Cell index={3} colSpan={3}></Table.Summary.Cell>
        </Table.Summary.Row>
      )} />
    </div>
  );
};

export default PayoutReportPage;
