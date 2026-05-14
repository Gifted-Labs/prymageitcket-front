import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { TicketDepartment, TicketSeverity } from '../types';
import { ShieldCheck, ChevronRight, Upload } from 'lucide-react';

export function CreateTicket() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Ticket PRY-2024-REQ1 has been submitted successfully to the High-Stakes Secretariat.');
      navigate('/support');
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-brand-accent/10">
      <div className="section-container max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12 space-y-4"
        >
          <div className="flex items-center gap-2 text-brand-gold font-bold uppercase tracking-widest text-[10px]">
            <span onClick={() => navigate('/support')} className="cursor-pointer hover:text-brand-dark">Client Portal</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-dark">Initiate Action</span>
          </div>
          <h1 className="text-5xl">Submit Strategic Brief</h1>
        </motion.div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 bg-white p-12 shadow-2xl border border-brand-accent/30">
          <div className="space-y-6 md:col-span-1">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/50">Full Name</label>
              <input required type="text" className="w-full px-4 py-3 border-b border-brand-dark/10 focus:border-brand-gold outline-none transition-colors" placeholder="Arthur Morgan" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/50">Enterprise Email</label>
              <input required type="email" className="w-full px-4 py-3 border-b border-brand-dark/10 focus:border-brand-gold outline-none transition-colors" placeholder="a.morgan@globex.com" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/50">Target Department</label>
              <select className="w-full px-4 py-3 border-b border-brand-dark/10 focus:border-brand-gold outline-none transition-colors bg-transparent">
                {Object.values(TicketDepartment).map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-6 md:col-span-1">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/50">Strategic Severity</label>
              <div className="flex gap-2">
                {Object.values(TicketSeverity).map(sev => (
                  <button 
                    key={sev}
                    type="button"
                    className="flex-1 py-3 border border-brand-dark/10 text-[10px] uppercase font-bold tracking-tighter hover:bg-brand-dark hover:text-brand-paper transition-all"
                  >
                    {sev}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/50">Subject Header</label>
              <input required type="text" className="w-full px-4 py-3 border-b border-brand-dark/10 focus:border-brand-gold outline-none transition-colors" placeholder="Q3 Expansion Friction" />
            </div>
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/50">Comprehensive Briefing</label>
            <textarea 
              required
              rows={6}
              className="w-full px-4 py-3 border border-brand-dark/10 focus:border-brand-gold outline-none transition-colors resize-none"
              placeholder="Provide exhaustive details regarding the strategic requirement..."
            />
          </div>

          <div className="md:col-span-2">
            <div className="p-8 border-2 border-dashed border-brand-dark/10 rounded-lg text-center space-y-4 hover:border-brand-gold transition-colors cursor-pointer group">
              <Upload className="w-8 h-8 mx-auto text-brand-dark/20 group-hover:text-brand-gold transition-colors" />
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/40">Encrypt and Attach Documentation (Max 50MB)</p>
            </div>
          </div>

          <div className="md:col-span-2 pt-8 flex justify-between items-center">
            <div className="flex items-center gap-2 text-[10px] text-brand-dark/40 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Secure 256-bit Transmission
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="btn-primary disabled:opacity-50 min-w-[200px]"
            >
              {isSubmitting ? 'Transmitting...' : 'Dispatch Brief'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
