import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

export const Header = () => {
  return (
    <header className="fixed w-full bg-black/95 text-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="w-8 h-8 text-[#990000]" />
            <span className="text-xl font-bold">Diligent Security</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-[#990000] transition-colors">Home</Link>
            <Link to="/services" className="hover:text-[#990000] transition-colors">Services</Link>
            <Link to="/contact" className="hover:text-[#990000] transition-colors">Contact</Link>
            <Link to="/client-portal" className="bg-[#990000] px-4 py-2 rounded hover:bg-[#800000] transition-colors">
              Client Portal
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};