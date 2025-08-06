import React from 'react';
import { Twitter, Youtube, Twitch, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Twitch, href: '#', label: 'Twitch' },
    { icon: MessageCircle, href: '#', label: 'Discord' },
  ];

  const footerLinks = {
    'Organization': ['About Us', 'Our Teams', 'Careers', 'Press Kit'],
    'Competitions': ['Tournaments', 'Match Schedule', 'Results', 'Rankings'],
    'Community': ['Discord', 'Forums', 'Fan Zone', 'Content Hub'],
    'Support': ['Contact', 'FAQ', 'Privacy Policy', 'Terms of Service']
  };

  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-[#42d0f4] to-[#6096dc] p-2 rounded">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-[#42d0f4] to-[#6096dc] rounded"></div>
                </div>
              </div>
              <span className="ml-3 text-xl font-bold text-white tracking-wider">NEXUS</span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Elite esports organization breeding the next generation of professional gamers, content creators, and competitive champions.
            </p>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-bold mb-6 text-sm tracking-wide">{category.toUpperCase()}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm font-medium"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-6 md:mb-0">
            © 2024 NEXUS Esports. All rights reserved.
          </p>
          
          {/* Social Media Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="bg-gray-900 p-3 rounded text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-[#42d0f4] hover:to-[#6096dc] transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;