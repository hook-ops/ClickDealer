import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LoyaltyPage from './pages/LoyaltyPage';
import PromotionPage from './pages/PromotionPage';
import AccountSettingsPage from './pages/AccountSettingsPage';
import PartnersPage from './pages/PartnersPage';
import BrowsePage from './pages/BrowsePage';
import MyCampaignsPage from './pages/MyCampaignsPage';
import PendingCampaignsPage from './pages/PendingCampaignsPage';
import RecentlyViewedPage from './pages/RecentlyViewedPage';
import RotationsPage from './pages/RotationsPage';
import PaymentInformationPage from './pages/PaymentInformationPage';
import PayoutReportPage from './pages/PayoutReportPage';
import ReferralPaymentsPage from './pages/ReferralPaymentsPage';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import OffersPage from './pages/OffersPage';
import GlobalReportPage from './pages/GlobalReportPage';
import SocialLinks from './components/SocialLinks';
import LanguageSwitcher from './components/LanguageSwitcher';
import './styles/dashboard.css';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import LandingPage from './components/LandingPage';
import { Layout } from 'antd';

const { Sider, Content } = Layout;

// Mock authentication check (replace with actual logic)
const isAuthenticated = true; // Replace this with your actual authentication logic

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected Routes */}
        {isAuthenticated ? (
          <Route
            path="/*"
            element={
              <Layout style={{ minHeight: '100vh' }}>
                <Sider>
                  <Sidebar />
                </Sider>
                <Layout>
                  <LanguageSwitcher />
                  <TopBar />
                  <Content style={{ padding: '20px', backgroundColor: '#f0f2f5' }}>
                    <Routes>
                      <Route path="/dashboard" element={<DashboardPage />} />
                      <Route path="/offers" element={<OffersPage />} />
                      <Route path="/offers/browse" element={<BrowsePage />} />
                      <Route path="/offers/MyCampaigns" element={<MyCampaignsPage />} />
                      <Route path="/offers/PendingCampaigns" element={<PendingCampaignsPage />} />
                      <Route path="/offers/RecentlyViewed" element={<RecentlyViewedPage />} />
                      <Route path="/offers/Rotations" element={<RotationsPage />} />
                      <Route path="/reports/global" element={<GlobalReportPage />} />
                      <Route path="/loyalty" element={<LoyaltyPage />} />
                      <Route path="/promotions" element={<PromotionPage />} />
                      <Route path="/billing/payment-info" element={<PaymentInformationPage />} />
                      <Route path="/billing/payout-info" element={<PayoutReportPage />} />
                      <Route path="/billing/ReferralPayment" element={<ReferralPaymentsPage />} />
                      <Route path="/tools/account-settings" element={<AccountSettingsPage />} />
                      <Route path="/partners" element={<PartnersPage />} />
                      {/* Add other routes as needed */}
                    </Routes>
                  </Content>
                  {/* <div style={{ marginTop: 'auto', padding: '830px 0 0 1400px', position: 'fixed' }}>
                    <SocialLinks />
                  </div> */}
                </Layout>
              </Layout>
            }
          />
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
