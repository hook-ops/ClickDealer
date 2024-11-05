import React, { useState } from 'react';
import { Form, Input, Select, Checkbox, Button, Collapse, Typography, Alert } from 'antd';
import '../styles/paymentInformation.css';

const { Panel } = Collapse;
const { Title, Text } = Typography;

const PaymentInformationPage = () => {
  const [form] = Form.useForm();
  const [holdPayments, setHoldPayments] = useState(false);

  return (
    <div className="payment-information-page">
      <Title level={2}>Payment Information</Title>

      {/* Payment Terms Section */}
      <div className="section">
        <Collapse defaultActiveKey={['1']}>
          <Panel header="Payment Terms" key="1">
            <p><strong>Billing cycle:</strong> Monthly</p>
            <p><strong>Payment terms:</strong> NET 15</p>
            <p><strong>Payment threshold (for selected payment type):</strong> $500</p>
          </Panel>
        </Collapse>
      </div>

      {/* IO Details Section */}
      <div className="section">
        <Collapse defaultActiveKey={['2']}>
          <Panel header="IO Details" key="2">
            <Form layout="vertical" form={form}>
              <Form.Item label="Legal name" name="legalName">
                <Input placeholder="Legal name" />
              </Form.Item>
              <Form.Item name="sameAddress" valuePropName="checked">
                <Checkbox>Legal address same as physical?</Checkbox>
              </Form.Item>
              <Form.Item label="Country of registration" name="country">
                <Select placeholder="Select">
                  {/* Options can be populated as needed */}
                </Select>
              </Form.Item>
              <Form.Item label="Legal address" name="legalAddress">
                <Input placeholder="Legal address" />
              </Form.Item>
              <Form.Item label="VAT Number" name="vatNumber">
                <Input placeholder="VAT Number" />
              </Form.Item>
            </Form>
          </Panel>
        </Collapse>
      </div>

      {/* Payment Details Section */}
      <div className="section">
        <Collapse defaultActiveKey={['3']}>
          <Panel header="Payment Details" key="3">
            <Form layout="vertical" form={form}>
              <Form.Item name="wireACH" valuePropName="checked">
                <Checkbox>Wire/ACH (Tipalti)</Checkbox>
              </Form.Item>
              <Form.Item name="payoneer" valuePropName="checked">
                <Checkbox>Payoneer</Checkbox>
              </Form.Item>
              <Form.Item label="Email address" name="payoneerEmail">
                <Input placeholder="Email address" />
              </Form.Item>
              <Form.Item name="paypal" valuePropName="checked">
                <Checkbox>PayPal</Checkbox>
              </Form.Item>
              <Form.Item label="Email address" name="paypalEmail">
                <Input placeholder="Email address" />
              </Form.Item>
              <Alert
                message="Payments in cryptocurrency require a signed IO contract. To sign the IO contract, it is necessary to provide the Legal name, as well as details about the country and address of registration."
                type="info"
                showIcon
              />
              <Form.Item name="crypto" valuePropName="checked">
                <Checkbox>Crypto (BTC/USDT)</Checkbox>
              </Form.Item>
              <Form.Item name="other" valuePropName="checked">
                <Checkbox>Other</Checkbox>
              </Form.Item>
            </Form>
          </Panel>
        </Collapse>
      </div>

      {/* Payment Settings */}
      <div className="section">
        <Collapse defaultActiveKey={['4']}>
          <Panel header="Payment Settings" key="4">
            <Form layout="vertical" form={form}>
              <Form.Item name="holdPayments" valuePropName="checked">
                <Checkbox onChange={(e) => setHoldPayments(e.target.checked)}>Hold my payments</Checkbox>
              </Form.Item>
              <Form.Item label="Current cycle payment method" name="paymentMethod">
                <Select defaultValue="PayPal">
                  <Select.Option value="PayPal">PayPal</Select.Option>
                  <Select.Option value="Payoneer">Payoneer</Select.Option>
                  {/* Additional payment methods can be added */}
                </Select>
              </Form.Item>
              <Button type="primary">Save</Button>
              <Button style={{ marginLeft: '10px' }}>Cancel</Button>
            </Form>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default PaymentInformationPage;
