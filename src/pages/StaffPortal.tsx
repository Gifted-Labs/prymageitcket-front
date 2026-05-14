import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, Lock, Briefcase } from 'lucide-react';

export function StaffPortal() {
  const navigate = useNavigate();
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthenticating(true);
    // Simulate internal auth
    setTimeout(() => {
      setIsAuthenticating(false);
      navigate('/staff/dashboard/overview');
    }, 1200);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-brand-dark overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent rounded-full filter blur-[100px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg bg-brand-paper p-16 shadow-2xl relative z-10"
      >
        <div className="flex flex-col items-center text-center mb-12 space-y-6">
          <div className="p-4 bg-brand-dark rounded-full">
            <Shield className="w-12 h-12 text-brand-gold" />
          </div>
          <div>
            <h1 className="text-4xl font-display mb-2">Internal Secretariat</h1>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-dark/40">Authorized Personnel Only</p>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-8">
          <div className="space-y-4">
            <div className="relative">
              <input 
                required 
                type="text" 
                placeholder="Staff Identifier" 
                className="w-full pl-12 pr-4 py-4 border-b border-brand-dark/10 focus:border-brand-gold outline-none transition-colors"
              />
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-dark/30" />
            </div>
            <div className="relative">
              <input 
                required 
                type="password" 
                placeholder="Access Protocol (Password)" 
                className="w-full pl-12 pr-4 py-4 border-b border-brand-dark/10 focus:border-brand-gold outline-none transition-colors"
              />
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-dark/30" />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isAuthenticating}
            className="w-full py-5 bg-brand-dark text-brand-paper font-bold uppercase tracking-[0.2em] hover:bg-brand-gold hover:text-brand-dark transition-all disabled:opacity-50"
          >
            {isAuthenticating ? 'Decrypting Access...' : 'Authenticate'}
          </button>

          <p className="text-[9px] text-center text-brand-dark/30 uppercase tracking-[0.15em] leading-relaxed">
            Continuous biometric monitoring and session logging active.<br />
            Unauthorized access is prosecuted under Global Security Directives.
          </p>
        </form>
      </motion.div>
    </div>
  );
}
