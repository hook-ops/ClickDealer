import React from 'react';
import { Form, Input, Select, Checkbox } from 'antd';

const { Option } = Select;

const AccountSettingsPage = () => {
  return (
    <div>
      <h1>Account Settings</h1>
      <Form layout="vertical">
        <Form.Item label="Timezone">
          <Select defaultValue="UTC+01:00">
            <Option value="UTC+01:00">UTC+01:00 Amsterdam, Berlin, Vienna</Option>
            {/* Add more options as needed */}
          </Select>
        </Form.Item>
        <Form.Item label="Currency">
          <Select defaultValue="EUR">
            <Option value="EUR">EUR</Option>
            {/* Add more options as needed */}
          </Select>
        </Form.Item>
        <Form.Item label="Preferred Verticals">
          <Checkbox.Group>
            <Checkbox value="Bingo">Bingo</Checkbox>
            <Checkbox value="Ecommerce">Ecommerce</Checkbox>
            {/* Add more checkboxes as needed */}
          </Checkbox.Group>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AccountSettingsPage;
