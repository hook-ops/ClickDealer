import React from 'react';
import { Table, DatePicker, Select, Button, Form } from 'antd';
import '../styles/reportPage.css';

const { RangePicker } = DatePicker;
const { Option } = Select;

const GlobalReportPage = () => {
  const columns = [
    { title: 'Campaign', dataIndex: 'campaign', key: 'campaign' },
    { title: 'Visits', dataIndex: 'visits', key: 'visits' },
    { title: 'Total Visits', dataIndex: 'totalVisits', key: 'totalVisits' },
    { title: 'Clicks', dataIndex: 'clicks', key: 'clicks' },
    { title: 'Total Clicks', dataIndex: 'totalClicks', key: 'totalClicks' },
    { title: 'Conversions', dataIndex: 'conversions', key: 'conversions' },
    { title: 'Events', dataIndex: 'events', key: 'events' },
    { title: 'Revenue (€)', dataIndex: 'revenue', key: 'revenue' },
    { title: 'CR (%)', dataIndex: 'cr', key: 'cr' },
    { title: 'EPC', dataIndex: 'epc', key: 'epc' },
  ];

  const data = [
    {
      key: '1',
      campaign: 'Smartlink',
      visits: 1,
      totalVisits: 1,
      clicks: 1,
      totalClicks: 1,
      conversions: 1,
      events: 0,
      revenue: 0,
      cr: '0.00',
      epc: '0.0000',
    },
  ];

  return (
    <div className="report-page">
      <h2 className="page-title">GLOBAL REPORT</h2>
      <Form layout="inline" className="filter-form">
        <Form.Item>
          <RangePicker />
        </Form.Item>
        <Form.Item>
          <Select placeholder="Group by" style={{ width: 150 }}>
            <Select.Option value="selected:1">Selected: 1</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Select placeholder="OS" style={{ width: 100 }}>
            <Select.Option value="all">All</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary">Apply</Button>
        </Form.Item>
        <Form.Item>
          <Button>Clear</Button>
        </Form.Item>
      </Form>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default GlobalReportPage;
