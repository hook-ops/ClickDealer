import React from 'react';
import { Input, Button, Select } from 'antd';
import '../styles/dashboard.css';

const { Search } = Input;
const { Option } = Select;

const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      <h1>Dashboard</h1>
      <div className="filters">
        <Search placeholder="Search offers..." style={{ width: 200, marginRight: 10 }} />
        <Select placeholder="Filter by Country" style={{ width: 150, marginRight: 10 }}>
          <Option value="US">United States</Option>
          <Option value="ES">Spain</Option>
        </Select>
        <Button type="primary">Apply</Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
