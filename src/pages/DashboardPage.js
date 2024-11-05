import React from 'react';
import { Row, Col, Card, Table, DatePicker, Button } from 'antd';
import { Line } from '@ant-design/plots';
import DashboardHeader from '../components/DashboardHeader';
import '../styles/dashboard.css';

const { RangePicker } = DatePicker;

// Dummy data for the summary metrics
const metrics = [
  { title: 'Clicks', value: 8 },
  { title: 'Conversions', value: 0 },
  { title: 'Events', value: 0 },
  { title: 'Revenue (€)', value: 0 },
  { title: 'Avg EPC (€)', value: 0 },
];

// Dummy data for the chart
const chartData = [
  { date: '01 Oct', clicks: 0, conversions: 0 },
  { date: '05 Oct', clicks: 0, conversions: 0 },
  { date: '09 Oct', clicks: 1, conversions: 0 },
  { date: '13 Oct', clicks: 2, conversions: 0 },
  { date: '17 Oct', clicks: 1, conversions: 0 },
  // Add more data points as needed
];

// Dummy table data
const tableColumns = [
  { title: 'Campaign', dataIndex: 'campaign', key: 'campaign' },
  { title: 'Format', dataIndex: 'format', key: 'format' },
  { title: 'Clicks', dataIndex: 'clicks', key: 'clicks' },
  { title: 'Total Clicks', dataIndex: 'totalClicks', key: 'totalClicks' },
  { title: 'Conversions', dataIndex: 'conversions', key: 'conversions' },
  { title: 'Events', dataIndex: 'events', key: 'events' },
  { title: 'Revenue (€)', dataIndex: 'revenue', key: 'revenue' },
  { title: 'CR %', dataIndex: 'cr', key: 'cr' },
  { title: 'EPC (€)', dataIndex: 'epc', key: 'epc' },
];

const tableData = [
  {
    key: '1',
    campaign: 'Global redirect',
    format: 'CPA',
    clicks: 8,
    totalClicks: 8,
    conversions: 0,
    events: 0,
    revenue: '0',
    cr: '0.00',
    epc: '0.0000/0.0000',
  },
  // Add more rows as needed
];

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <DashboardHeader />

      <div className="date-filter">
        <RangePicker />
        <Button type="primary" style={{ marginLeft: '10px' }}>Apply</Button>
      </div>

      {/* Top Metrics */}
      <Row gutter={16} style={{ marginTop: '20px' }}>
        {metrics.map((metric, index) => (
          <Col span={4} key={index}>
            <Card>
              <h3>{metric.title}</h3>
              <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{metric.value}</p>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Chart */}
      <div className="chart-container" style={{ marginTop: '20px' }}>
        <Card>
          <Line
            data={chartData}
            xField="date"
            yField="clicks"
            seriesField="type"
            smooth={true}
            point={{ size: 5, shape: 'diamond' }}
            yAxis={{
              title: {
                text: 'Clicks & Conversions',
              },
            }}
            xAxis={{
              title: {
                text: 'Date',
              },
            }}
          />
        </Card>
      </div>

      {/* Detailed Table */}
      <div style={{ marginTop: '20px' }}>
        <Table columns={tableColumns} dataSource={tableData} pagination={false} />
      </div>
    </div>
  );
};

export default DashboardPage;
