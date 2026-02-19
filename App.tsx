
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Movement from './pages/Movement';
import Legacy from './pages/Legacy';
import Founder from './pages/Founder';
import { AppRoutes } from './types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: AppRoutes.HOME },
    { name: 'About', path: AppRoutes.ABOUT },
    { name: 'The Movement', path: AppRoutes.MOVEMENT },
    { name: 'Legacy', path: AppRoutes.LEGACY },
    { name: 'Founder', path: AppRoutes.FOUNDER },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-black/90 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-[1600px] mx-auto px-8 flex items-center justify-between">
        <Link to={AppRoutes.HOME} className="text-3xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
          JumpnRise<span className="text-white/20">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[11px] font-bold tracking-[0.3em] uppercase transition-all relative group ${
                location.pathname === link.path ? 'text-white' : 'text-white/40 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 h-[2px] bg-white transition-all duration-300 ${
                location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
        </div>

        {/* Mobile Nav Toggle (The '3 Ticks') */}
        <button 
          className="lg:hidden text-white/60 hover:text-white transition-colors p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-black transition-transform duration-500 ease-in-out overflow-y-auto ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="min-h-full flex flex-col justify-center items-center space-y-8 p-8 py-24">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-5xl font-display tracking-tighter uppercase text-center ${
                location.pathname === link.path ? 'text-white' : 'text-white/20'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => setIsOpen(false)} 
            className="mt-12 text-white/40 uppercase tracking-[0.4em] text-[10px] font-bold border-b border-white/10 pb-2 hover:text-white transition-colors"
          >
            Close Menu
          </button>
        </div>
      </div>
    </nav>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-white selection:text-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path={AppRoutes.HOME} element={<Home />} />
            <Route path={AppRoutes.ABOUT} element={<About />} />
            <Route path={AppRoutes.MOVEMENT} element={<Movement />} />
            <Route path={AppRoutes.LEGACY} element={<Legacy />} />
            <Route path={AppRoutes.FOUNDER} element={<Founder />} />
          </Routes>
        </main>
        
        <footer className="bg-black border-t border-white/5 py-24">
          <div className="max-w-[1600px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
               <div>
                  <span className="text-4xl font-bold tracking-tighter mb-6 block">JumpnRise</span>
                  <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                    Everyday Athlete Movement. Built on structure, discipline, and measurable growth.
                  </p>
               </div>
               <div className="flex flex-col space-y-4">
                  <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/30">Philosophy</span>
                  <Link to={AppRoutes.ABOUT} className="text-white/60 hover:text-white text-sm transition-colors">The Pillars</Link>
                  <Link to={AppRoutes.MOVEMENT} className="text-white/60 hover:text-white text-sm transition-colors">How it Worked</Link>
               </div>
               <div className="flex flex-col space-y-4">
                  <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/30">Legacy</span>
                  <Link to={AppRoutes.LEGACY} className="text-white/60 hover:text-white text-sm transition-colors">Principles</Link>
                  <Link to={AppRoutes.FOUNDER} className="text-white/60 hover:text-white text-sm transition-colors">Founder</Link>
               </div>
               <div className="flex flex-col justify-end">
                  <span className="text-white/20 text-xs font-light tracking-widest uppercase">EST. 2022 — ATHLETIC ARCHITECTURE</span>
               </div>
            </div>
            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/20">
              <span className="text-[10px] font-bold tracking-widest uppercase">No Talent. Just Work.</span>
              <span className="text-[10px] tracking-widest">
                @2026 JumpnRise. <span className="uppercase">PERFORMANCE OVER POPULARITY</span>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
