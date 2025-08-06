import React, { useState, useEffect } from 'react';
import { Menu, X, User, ShoppingBag, Shield } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'PARTNERS', href: '#partners' },
    { name: 'TEAMS', href: '#teams' },
    { name: 'CONTENT', href: '#content' },
    { name: 'NEWS', href: '#news' },
    { name: 'SHOP', href: '#shop' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-[#42d0f4] to-[#6096dc] p-2 rounded">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <span className="ml-3 text-xl font-bold text-white tracking-wider">NEXUS</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-semibold text-sm tracking-wide relative group"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#42d0f4] to-[#6096dc] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="hidden lg:flex items-center space-x-6">
            <button className="text-gray-300 hover:text-white transition-colors duration-200 p-2">
              <User className="w-5 h-5" />
            </button>
            <button className="text-gray-300 hover:text-white transition-colors duration-200 p-2">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-300 hover:text-white transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white block px-4 py-3 font-semibold text-sm tracking-wide transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;