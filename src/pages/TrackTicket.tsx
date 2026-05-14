import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MOCK_TICKETS } from '../constants';
import { Ticket } from '../types';
import { Search, ChevronRight, MessageSquare, Clock, FileText, Lock } from 'lucide-react';
import { cn } from '../lib/utils';

export function TrackTicket() {
  const [searchId, setSearchId] = useState('');
  const [foundTicket, setFoundTicket] = useState<Ticket | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setError('');
    
    // Simulate lookup delay
    setTimeout(() => {
      const ticket = MOCK_TICKETS.find(t => t.submissionId.toLowerCase() === searchId.toLowerCase());
      if (ticket) {
        setFoundTicket(ticket);
      } else {
        setError('Authorization failed: Submission ID not found or unauthorized access attempt.');
        setFoundTicket(null);
      }
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-brand-paper">
      <div className="section-container max-w-4xl">
        <header className="mb-16">
          <h1 className="text-5xl mb-4">Engagement Tracker</h1>
          <p className="text-brand-dark/50 italic">Securely monitor the status of your strategic engagement.</p>
        </header>

        {/* Search Logic */}
        <section className="mb-12">
          <form onSubmit={handleSearch} className="flex gap-4">
            <div className="relative flex-1">
              <input 
                type="text" 
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder="Enter Authorization ID (e.g., PRY-1024-XJ)"
                className="w-full px-12 py-5 bg-white border border-brand-dark/10 focus:border-brand-gold outline-none text-lg font-mono tracking-tight"
                required
              />
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-dark/20" />
            </div>
            <button 
              type="submit"
              disabled={isSearching}
              className="px-12 bg-brand-dark text-brand-paper font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-dark transition-all disabled:opacity-50"
            >
              {isSearching ? 'Verifying...' : 'Authorize Access'}
            </button>
          </form>
          {error && <p className="mt-4 text-rose-600 text-xs font-bold uppercase tracking-widest">{error}</p>}
        </section>

        {/* Results */}
        <AnimatePresence mode="wait">
          {foundTicket ? (
            <motion.div 
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="space-y-8"
            >
              {/* Status Header */}
              <div className="p-8 bg-brand-dark text-brand-paper flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gold mb-2">Live Engagement Status</div>
                  <h2 className="text-3xl font-display">{foundTicket.subject}</h2>
                </div>
                <div className="text-right">
                  <div className="px-4 py-2 bg-brand-gold text-brand-dark font-bold uppercase tracking-widest text-xs inline-block">
                    {foundTicket.status}
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-widest opacity-50">Last Update: {new Date(foundTicket.updatedAt).toLocaleDateString()}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Details Column */}
                <div className="md:col-span-2 space-y-8">
                  <div className="bg-white p-8 border border-brand-dark/5 space-y-6">
                    <h3 className="text-xl flex items-center gap-3">
                      <FileText className="w-5 h-5 text-brand-gold" />
                      Original Brief
                    </h3>
                    <p className="text-brand-dark/70 text-sm leading-relaxed whitespace-pre-wrap">
                      {foundTicket.description}
                    </p>
                  </div>

                  {/* Communication History */}
                  <div className="space-y-6">
                    <h3 className="text-xl flex items-center gap-3">
                      <MessageSquare className="w-5 h-5 text-brand-gold" />
                      Communication Ledger
                    </h3>
                    
                    <div className="space-y-4">
                      {foundTicket.comments.map(comment => (
                        <div 
                          key={comment.id} 
                          className={cn(
                            "p-6 text-sm max-w-[85%]",
                            comment.authorRole === 'Client' 
                              ? "bg-brand-accent/20 border-l-4 border-brand-gold ml-auto text-right" 
                              : "bg-white border-l-4 border-brand-dark mr-auto"
                          )}
                        >
                          <div className="flex items-center gap-2 mb-2 justify-between">
                            <span className="font-bold uppercase tracking-widest text-[10px]">
                              {comment.authorName} <span className="opacity-40 ml-1">({comment.authorRole})</span>
                            </span>
                            <span className="text-[9px] opacity-40">{new Date(comment.createdAt).toLocaleString()}</span>
                          </div>
                          <p>{comment.content}</p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-white border border-brand-dark/10 p-6 flex gap-4">
                      <textarea 
                        className="flex-1 bg-transparent outline-none text-sm resize-none" 
                        placeholder="Add to the record..." 
                        rows={2}
                      />
                      <button className="px-6 py-2 bg-brand-dark text-brand-paper hover:bg-brand-gold hover:text-brand-dark transition-all text-[10px] font-bold uppercase tracking-widest">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>

                {/* Info Sidebar */}
                <div className="space-y-6">
                  <div className="bg-brand-accent/10 p-6 space-y-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Metadata</h4>
                    
                    <div className="space-y-1">
                      <div className="text-[10px] text-brand-dark/40 uppercase">Department</div>
                      <div className="text-sm font-medium">{foundTicket.department}</div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-[10px] text-brand-dark/40 uppercase">Classification</div>
                      <div className="text-sm font-medium">{foundTicket.category}</div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[10px] text-brand-dark/40 uppercase">Severity</div>
                      <div className={cn(
                        "text-sm font-bold uppercase tracking-widest",
                        foundTicket.severity === 'Critical' ? "text-rose-600" : "text-brand-dark"
                      )}>{foundTicket.severity}</div>
                    </div>
                  </div>

                  <div className="p-6 border border-brand-gold/30 bg-brand-gold/5 flex items-start gap-4">
                    <Clock className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest mb-1">Response Lead</h4>
                      <p className="text-[10px] text-brand-dark/60 leading-relaxed italic">
                        Your engagement is being handled by our Strategy Secretariat. Estimated review cycle: 24 Business Hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-32 text-center"
            >
              <div className="p-12 border-2 border-dashed border-brand-dark/5 text-brand-dark/20 inline-block">
                <Search className="w-16 h-16 mx-auto mb-4" />
                <p className="font-display italic text-2xl">Pending Authorization...</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
