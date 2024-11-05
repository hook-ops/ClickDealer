import React from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const BillingPage = () => {
  return (
    <div>
      <h1>Billing</h1>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Payment Info" key="1">
          <p>Details for Payment Info</p>
        </TabPane>
        <TabPane tab="Payout Report" key="2">
          <p>Details for Payout Report</p>
        </TabPane>
        <TabPane tab="Referral Payments" key="3">
          <p>Details for Referral Payments</p>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default BillingPage;
