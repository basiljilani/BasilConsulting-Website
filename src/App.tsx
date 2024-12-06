import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import { Newsletter } from './pages/Newsletter';
import { Documentation } from './pages/resources/Documentation';
import { Support } from './pages/resources/Support';
import { Privacy } from './pages/resources/Privacy';
import { Terms } from './pages/resources/Terms';
import { Terminologies } from './pages/Terminologies';
import { AdminLogin } from './pages/admin/Login';
import { AdminDashboard } from './pages/admin/Dashboard';
import { TeamManagement } from './pages/admin/TeamManagement';

function App() {
  const path = window.location.pathname;
  const isAdminRoute = path.startsWith('/admin');
  
  return (
    <Router>
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
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/support" element={<Support />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/terminologies" element={<Terminologies />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/team" element={<TeamManagement />} />
          </Routes>
        </main>
        <Footer show={!isAdminRoute && path !== '/contact' && path !== '/products'} />
      </div>
    </Router>
  );
}

export default App;