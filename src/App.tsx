import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './components/Contact';
import { Team } from './pages/Team';
import { Products } from './pages/Products';
import { BasilAI } from './pages/BasilAI';
import { FinTechPulse } from './pages/FinTechPulse';
import { Services } from './pages/Services';
import { Partners } from './pages/Partners';
import { Documentation } from './pages/resources/Documentation';
import { Support } from './pages/resources/Support';
import { Privacy } from './pages/resources/Privacy';
import { Terms } from './pages/resources/Terms';
import { Glossary } from './pages/Glossary';
import { AdminLogin } from './pages/admin/Login';
import { AdminDashboard } from './pages/admin/Dashboard';
import { TeamManagement } from './pages/admin/TeamManagement';

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  const hideFooter = isAdminRoute || location.pathname === '/contact' || location.pathname === '/products';

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Toaster position="top-right" />
      {!isAdminRoute && <Navbar />}
      <main className={`flex-grow ${!isAdminRoute ? 'pt-16' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/products" element={<Products />} />
          <Route path="/basil-ai" element={<BasilAI />} />
          <Route path="/fintech-pulse" element={<FinTechPulse />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/content" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminDashboard />} />
          <Route path="/admin/analytics" element={<AdminDashboard />} />
          <Route path="/admin/media" element={<AdminDashboard />} />
          <Route path="/admin/settings" element={<AdminDashboard />} />
          <Route path="/admin/team" element={<TeamManagement />} />
        </Routes>
      </main>
      {!hideFooter && <Footer show={true} />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;