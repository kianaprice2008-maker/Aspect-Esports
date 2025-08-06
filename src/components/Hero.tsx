import React from 'react';
import { Twitter, Youtube, Twitch, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/aspectesports', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com/@aspectesports', label: 'YouTube' },
    { icon: Twitch, href: 'https://twitch.tv/aspectesports', label: 'Twitch' },
    { icon: MessageCircle, href: 'https://discord.gg/aspectesports', label: 'Discord' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#42d0f4]/20 via-[#6096dc]/10 to-transparent"></div>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#42d0f4]/10 to-[#6096dc]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-[#6096dc]/10 to-[#42d0f4]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl space-y-8">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tight">
            WELCOME TO
            <br />
            <span className="bg-gradient-to-r from-[#42d0f4] to-[#6096dc] bg-clip-text text-transparent">
              ASPECT.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Everything ASPECT - ASPECT is a premiere esports organization, breeding the 
            next-generation of esports professionals in gaming, content-creation and more!
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4 pt-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#42d0f4] to-[#6096dc] p-3 rounded text-white hover:scale-110 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;