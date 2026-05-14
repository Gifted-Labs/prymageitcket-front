/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { LandingPage } from './pages/LandingPage';
import { SupportPortal } from './pages/SupportPortal';
import { StaffPortal } from './pages/StaffPortal';
import { CreateTicket } from './pages/CreateTicket';
import { TrackTicket } from './pages/TrackTicket';
import { StaffDashboard } from './pages/StaffDashboard';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-paper">
        <Navigation />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            
            {/* Client Portal */}
            <Route path="/support" element={<SupportPortal />} />
            <Route path="/support/create" element={<CreateTicket />} />
            <Route path="/support/track" element={<TrackTicket />} />

            {/* Staff Portal */}
            <Route path="/staff" element={<StaffPortal />} />
            <Route path="/staff/dashboard/*" element={<StaffDashboard />} />
          </Routes>
        </main>
        
        <footer className="bg-brand-dark text-brand-paper/50 py-12 border-t border-brand-accent/10">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-brand-paper font-display text-2xl mb-6">Prymage</h3>
                <p className="text-sm leading-relaxed max-w-xs">
                  A high-stakes management consultancy delivering precision, authority, and sustainable excellence since 1994.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-brand-paper uppercase tracking-widest text-xs font-bold">Offerings</h4>
                <ul className="text-sm space-y-2">
                  <li><a href="#" className="hover:text-brand-gold transition-colors">Strategic Advisory</a></li>
                  <li><a href="#" className="hover:text-brand-gold transition-colors">Mergers & Acquisitions</a></li>
                  <li><a href="#" className="hover:text-brand-gold transition-colors">Digital Transformation</a></li>
                  <li><a href="#" className="hover:text-brand-gold transition-colors">Risk Mitigation</a></li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-brand-paper uppercase tracking-widest text-xs font-bold">Contact</h4>
                <p className="text-sm">Global Headquarters: London, UK</p>
                <p className="text-sm">24/7 Strategic Support: +44 20 7946 0123</p>
              </div>
            </div>
            <div className="mt-12 pt-12 border-t border-white/5 text-[10px] uppercase tracking-widest flex flex-col md:flex-row justify-between items-center gap-4">
              <p>&copy; 2024 Prymage Consultancy Group. All Rights Reserved.</p>
              <div className="flex gap-8">
                <a href="#" className="hover:text-brand-gold">Security Protocol</a>
                <a href="#" className="hover:text-brand-gold">Privacy Ledger</a>
                <a href="#" className="hover:text-brand-gold">Ethics Framework</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
