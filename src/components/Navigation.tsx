import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, LayoutDashboard, TicketIcon, Home } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navigation() {
  const location = useLocation();
  const isInternal = location.pathname.startsWith('/staff') || location.pathname.startsWith('/support');

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-300",
      isInternal ? "bg-brand-dark/95 text-brand-paper shadow-xl backdrop-blur-sm" : "bg-transparent text-brand-dark"
    )}>
      <Link to="/" className="flex items-center gap-3 group">
        <Shield className={cn(
          "w-8 h-8 transition-transform group-hover:rotate-12",
          isInternal ? "text-brand-gold" : "text-brand-dark"
        )} />
        <span className="font-display text-xl font-bold tracking-tighter uppercase transition-colors group-hover:text-brand-gold">
          Prymage
        </span>
      </Link>

      <div className="flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
        <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
        <Link to="/support" className="flex items-center gap-2 hover:text-brand-gold transition-colors">
          <TicketIcon className="w-4 h-4" />
          Client Portal
        </Link>
        <Link to="/staff" className="flex items-center gap-2 px-4 py-2 bg-brand-gold text-brand-dark hover:bg-brand-paper transition-all">
          <LayoutDashboard className="w-4 h-4" />
          Staff Login
        </Link>
      </div>
    </nav>
  );
}
