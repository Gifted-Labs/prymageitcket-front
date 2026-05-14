import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PlusCircle, Search, Clock, ShieldAlert, FileText, PhoneCall } from 'lucide-react';

export function SupportPortal() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="section-container">
        <header className="mb-20 text-center space-y-4">
          <h1 className="text-6xl">Strategic Support Portal</h1>
          <p className="text-brand-dark/50 text-xl font-display italic">Immediate response for registered partners and authorized representatives.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Action Cards */}
          <Link to="/support/create" className="group">
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-12 border-2 border-brand-dark bg-brand-dark text-brand-paper h-full flex flex-col justify-between transition-colors hover:bg-brand-gold hover:border-brand-gold"
            >
              <PlusCircle className="w-16 h-16 mb-12 text-brand-gold group-hover:text-brand-dark" />
              <div>
                <h3 className="text-3xl mb-4">Request Strategic Action</h3>
                <p className="text-sm opacity-70 leading-relaxed">
                  Submit a new brief for urgent board-level review, technical escalation, or complex billing inquiries.
                </p>
              </div>
            </motion.div>
          </Link>

          <Link to="/support/track" className="group">
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-12 border-2 border-brand-dark h-full flex flex-col justify-between hover:bg-brand-dark hover:text-brand-paper transition-all"
            >
              <Search className="w-16 h-16 mb-12 text-brand-gold" />
              <div>
                <h3 className="text-3xl mb-4">Monitor Active Engagement</h3>
                <p className="text-sm opacity-70 leading-relaxed">
                  Track the progress of existing tickets using your authorized Submission ID and verified credentials.
                </p>
              </div>
            </motion.div>
          </Link>
        </div>

        {/* Support Categories Section */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-brand-accent pt-20">
          <div className="space-y-6">
            <h4 className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-brand-gold">
              <ShieldAlert className="w-4 h-4" />
              Emergency Escalation
            </h4>
            <p className="text-sm leading-relaxed text-brand-dark/60">
              For security breaches or critical system failures, use the prioritized escalation protocol in your engagement contract.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-brand-gold">
              <FileText className="w-4 h-4" />
              Documentation Room
            </h4>
            <p className="text-sm leading-relaxed text-brand-dark/60">
              Access secure project archives, legal frameworks, and digital asset repositories via our encrypted data room.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-brand-gold">
              <PhoneCall className="w-4 h-4" />
              Direct Line
            </h4>
            <p className="text-sm leading-relaxed text-brand-dark/60">
              Enterprise clients maintain direct 24/7 telephonic access to their dedicated Lead Consultant.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
