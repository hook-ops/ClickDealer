import React from 'react';
import { Card, Row, Col } from 'antd';

const loyaltyItems = [
  { name: 'Galaxy Watch 5 Pro', points: 15750, category: 'Accessories' },
  { name: 'Galaxy Watch 6', points: 16550, category: 'Accessories' },
  { name: 'Telescope', points: 12500, category: 'Sports & Leisure' },
  // Add more items as needed
];

const LoyaltyPage = () => {
  return (
    <div>
      <h1>Loyalty</h1>
      <Row gutter={[16, 16]}>
        {loyaltyItems.map((item, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card title={item.name} bordered={false}>
              <p>Points: {item.points}</p>
              <p>Category: {item.category}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default LoyaltyPage;
