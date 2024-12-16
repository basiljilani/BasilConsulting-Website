import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, FileText, Users, BarChart2, Mail, Image, Settings as SettingsIcon } from 'lucide-react';
import { DashboardHome } from './DashboardHome';
import { ContentSection } from './ContentSection';
import { UsersSection } from './UsersSection';
import { AnalyticsSection } from './AnalyticsSection';
import { NewsletterSection } from './NewsletterSection';
import { MediaSection } from './MediaSection';
import { SettingsSection } from './SettingsSection';

const AdminLayout = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardHome />;
      case 'content':
        return <ContentSection />;
      case 'users':
        return <UsersSection />;
      case 'analytics':
        return <AnalyticsSection />;
      case 'newsletter':
        return <NewsletterSection />;
      case 'media':
        return <MediaSection />;
      case 'settings':
        return <SettingsSection />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-[#1E293B] p-4">
        <nav className="flex justify-center space-x-4">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`text-white hover:text-emerald-500 transition-colors flex items-center gap-2 ${
              activeTab === 'dashboard' ? 'text-emerald-500' : ''
            }`}
          >
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </button>
          <button 
            onClick={() => setActiveTab('content')}
            className={`text-white hover:text-emerald-500 transition-colors flex items-center gap-2 ${
              activeTab === 'content' ? 'text-emerald-500' : ''
            }`}
          >
            <FileText className="h-4 w-4" />
            Content
          </button>
          <button 
            onClick={() => setActiveTab('users')}
            className={`text-white hover:text-emerald-500 transition-colors flex items-center gap-2 ${
              activeTab === 'users' ? 'text-emerald-500' : ''
            }`}
          >
            <Users className="h-4 w-4" />
            Users
          </button>
          <button 
            onClick={() => setActiveTab('analytics')}
            className={`text-white hover:text-emerald-500 transition-colors flex items-center gap-2 ${
              activeTab === 'analytics' ? 'text-emerald-500' : ''
            }`}
          >
            <BarChart2 className="h-4 w-4" />
            Analytics
          </button>
          <button 
            onClick={() => setActiveTab('newsletter')}
            className={`text-white hover:text-emerald-500 transition-colors flex items-center gap-2 ${
              activeTab === 'newsletter' ? 'text-emerald-500' : ''
            }`}
          >
            <Mail className="h-4 w-4" />
            Newsletter
          </button>
          <button 
            onClick={() => setActiveTab('media')}
            className={`text-white hover:text-emerald-500 transition-colors flex items-center gap-2 ${
              activeTab === 'media' ? 'text-emerald-500' : ''
            }`}
          >
            <Image className="h-4 w-4" />
            Media
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`text-white hover:text-emerald-500 transition-colors flex items-center gap-2 ${
              activeTab === 'settings' ? 'text-emerald-500' : ''
            }`}
          >
            <SettingsIcon className="h-4 w-4" />
            Settings
          </button>
        </nav>
      </header>
      <main className="flex-1 overflow-y-auto p-6 bg-[#0F172A]">
        {renderContent()}
      </main>
    </div>
  );
};

export default AdminLayout;
