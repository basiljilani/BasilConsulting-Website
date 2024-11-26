import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './components/Contact';
import { Privacy } from './pages/Privacy';
import { Team } from './pages/Team';
import { Products } from './pages/Products';
import { Services } from './pages/Services';
import { Partners } from './pages/Partners';
import { Newsletter } from './pages/Newsletter';
import { Documentation } from './pages/Documentation';
import { Support } from './pages/Support';

function App() {
  const path = window.location.pathname;
  
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/team" element={<Team />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
        {path !== '/contact' && <Footer />}
      </div>
    </Router>
  );
}

export default App;