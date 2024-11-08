import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

import {
  DashboardOutlined,
  TagsOutlined,
  BarChartOutlined,
  DollarOutlined,
  GiftOutlined,
  SettingOutlined,
  FileTextOutlined,
  LineChartOutlined,
  BulbOutlined,
  TrophyOutlined,
} from '@ant-design/icons';
import '../styles/sidebar.css'; // Ensure this file has your custom styles for appearance

const Sidebar = () => {
  const{t} = useTranslation();
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      style={{ width: '100%', height: '100%', borderRight: 0 }}
      className="custom-sidebar"
    >
      <Menu.Item key="1" icon={<DashboardOutlined />}>
        <Link to="/dashboard">{t('Dashboard')}</Link>
      </Menu.Item>
      <Menu.SubMenu key="sub1" className="custom-submenu" icon={<TagsOutlined />} title="Offers">
        <Menu.Item key="2"><Link to="/offers/browse">Browse</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/offers/MyCampaigns">My campaigns</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/offers/PendingCampaigns">Pending campaigns</Link></Menu.Item>
        <Menu.Item key="5"><Link to="/offers/NewOffers">New offers</Link></Menu.Item>
        <Menu.Item key="6"><Link to="/offers/RecentlyViewed">Recently viewed</Link></Menu.Item>
        <Menu.Item key="7"><Link to="/offers/Rotations">Rotations</Link></Menu.Item>
        <Menu.Item key="8">Request offer</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="sub2" className="custom-submenu" icon={<BarChartOutlined />} title="SmartLinks">
        <Menu.Item key="9">Social networking</Menu.Item>
        <Menu.Item key="10">iGaming</Menu.Item>
        <Menu.Item key="11">My smartlinks</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="sub3" className="custom-submenu" icon={<LineChartOutlined />} title="Reports">
        <Menu.Item key="12"><Link to="/reports/global">Global report</Link></Menu.Item>
        <Menu.Item key="13">Daily summary</Menu.Item>
        <Menu.Item key="14">Campaign summary</Menu.Item>
        <Menu.Item key="15">Ecommerce report</Menu.Item>
        <Menu.Item key="16">Smartlink summary</Menu.Item>
        <Menu.Item key="17">Creative summary</Menu.Item>
        <Menu.Item key="18">SubAffiliate summary</Menu.Item>
        <Menu.Item key="19">Rotation summary</Menu.Item>
        <Menu.Item key="20">Event report</Menu.Item>
        <Menu.Item key="21">Conversion report</Menu.Item>
        <Menu.Item key="22">Click report</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="23" icon={<DollarOutlined />}>
        <Link to="/loyalty">Loyalty</Link>
      </Menu.Item>
      <Menu.Item key="24" icon={<TrophyOutlined />}>
        <Link to="/promotions">Promotions</Link>
      </Menu.Item>
      <Menu.SubMenu key="sub4"className="custom-submenu" icon={<FileTextOutlined />} title="Billing">
        <Menu.Item key="25"><Link to="/billing/payment-info">Payment info</Link></Menu.Item>
        <Menu.Item key="26"><Link to="/billing/payout-info">Payout report</Link></Menu.Item>
        <Menu.Item key="27"><Link to="/billing/ReferralPayment">Referral payments</Link></Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key="sub5" className="custom-submenu" icon={<SettingOutlined />} title="Tools">
        <Menu.Item key="28"><Link to="/tools/account-settings">Account settings</Link></Menu.Item>
        <Menu.Item key="29">Team management</Menu.Item>
        <Menu.Item key="30">Global postback</Menu.Item>
        <Menu.Item key="31">Alerts</Menu.Item>
        <Menu.Item key="32">My domains</Menu.Item>
        <Menu.Item key="33">API</Menu.Item>
        <Menu.Item key="34">Conversion API integration</Menu.Item>
        <Menu.Item key="35">Ecommerce toolkit</Menu.Item>
        <Menu.Item key="36">Referral program</Menu.Item>
        <Menu.Item key="37">Tutorials</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="38" icon={<GiftOutlined />}>
        <Link to="/partners">Partners</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Sidebar;
