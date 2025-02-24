import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Home from './pages/Home';
import DotArt from './pages/DotArt';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className="relative group px-4 py-2"
    >
      <span className={`relative z-10 transition-colors duration-300 ${
        isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'
      }`}>
        {children}
      </span>
      {isActive && (
        <span className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-sm" />
      )}
      <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
    </Link>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/90 backdrop-blur-sm' : 'bg-transparent'
        }`}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center h-20">
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden relative group p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors">
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </span>
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-full transition-colors duration-300" />
              </button>

              {/* Logo - Left Aligned */}
              <Link 
                to="/" 
                className="text-2xl font-bold relative group"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                  DotVideo
                </span>
                <span className="absolute -inset-x-2 -inset-y-1 border border-white/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
              </Link>
              
              {/* Desktop Menu - Right Aligned */}
              <div className="hidden md:flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-2 py-1 rounded-full ml-auto">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/dot-art">Dot Art</NavLink>
                <NavLink to="/pricing">Pricing</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-4 py-4 space-y-2 bg-black/95 backdrop-blur-sm border-t border-white/10">
                <Link 
                  to="/" 
                  className="block px-4 py-3 text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/dot-art" 
                  className="block px-4 py-3 text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dot Art
                </Link>
                <Link 
                  to="/pricing" 
                  className="block px-4 py-3 text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link 
                  to="/contact" 
                  className="block px-4 py-3 text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dot-art" element={<DotArt />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App