import React from 'react';
import { List, Card } from 'antd';

const partners = [
  { name: 'AdsKeeper', category: 'Advertising Network', description: 'Details about AdsKeeper.' },
  { name: 'EZmob', category: 'Advertising Network', description: 'Details about EZmob.' },
  // Add more partners as needed
];

const PartnersPage = () => {
  return (
    <div>
      <h1>Partners</h1>
      <List
        grid={{ gutter: 16, column: 2 }}
        dataSource={partners}
        renderItem={item => (
          <List.Item>
            <Card title={item.name}>
              <p>Category: {item.category}</p>
              <p>{item.description}</p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default PartnersPage;
