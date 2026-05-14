import React, { useState } from 'react';
import { MOCK_TICKETS } from '../constants';
import { TicketStatus, TicketSeverity, TicketDepartment } from '../types';
import { Search, Filter, MoreHorizontal, Eye, MessageSquare, ShieldAlert } from 'lucide-react';
import { cn } from '../lib/utils';

export function TicketManagement() {
  const [filter, setFilter] = useState<TicketStatus | 'All'>('All');
  const [search, setSearch] = useState('');

  const filteredTickets = MOCK_TICKETS.filter(t => {
    const matchesFilter = filter === 'All' || t.status === filter;
    const matchesSearch = t.subject.toLowerCase().includes(search.toLowerCase()) || 
                          t.clientName.toLowerCase().includes(search.toLowerCase()) ||
                          t.submissionId.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="relative flex-1 max-w-md">
          <input 
            type="text" 
            placeholder="Search briefs, clients, or IDs..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white border border-brand-dark/10 outline-none focus:border-brand-gold text-sm tracking-tight"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-dark/30" />
        </div>
        
        <div className="flex gap-4">
          <div className="flex items-center gap-2 px-6 py-2 bg-white border border-brand-dark/10">
            <Filter className="w-4 h-4 text-brand-dark/30" />
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="bg-transparent text-[10px] font-bold uppercase tracking-widest outline-none cursor-pointer"
            >
              <option value="All">All Statuses</option>
              {Object.values(TicketStatus).map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Ticket Table */}
      <div className="bg-white border border-brand-dark/10 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-brand-dark text-brand-paper">
              <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest">Identifier</th>
              <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest">Client & Priority</th>
              <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest">Brief Subject</th>
              <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-center">Engagement Status</th>
              <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-dark/5">
            {filteredTickets.map((ticket) => (
              <tr key={ticket.id} className="hover:bg-brand-accent/5 transition-colors group">
                <td className="px-8 py-6">
                  <div className="font-mono text-xs font-bold text-brand-gold">{ticket.submissionId}</div>
                  <div className="text-[9px] text-brand-dark/40 uppercase tracking-tighter mt-1">{new Date(ticket.createdAt).toLocaleDateString()}</div>
                </td>
                <td className="px-8 py-6">
                  <div className="text-sm font-bold flex items-center gap-2">
                    {ticket.clientName}
                    {ticket.severity === TicketSeverity.CRITICAL && (
                      <ShieldAlert className="w-3 h-3 text-rose-600 animate-pulse" />
                    )}
                  </div>
                  <div className={cn(
                    "text-[9px] uppercase font-bold tracking-widest mt-1",
                    ticket.severity === TicketSeverity.HIGH || ticket.severity === TicketSeverity.CRITICAL ? "text-rose-600" : "text-brand-dark/40"
                  )}>
                    {ticket.severity} SEVERITY
                  </div>
                </td>
                <td className="px-8 py-6 max-w-xs">
                  <div className="text-sm line-clamp-1">{ticket.subject}</div>
                  <div className="text-[9px] uppercase tracking-widest text-brand-dark/30 mt-1">{ticket.department}</div>
                </td>
                <td className="px-8 py-6 text-center">
                  <span className={cn(
                    "px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em]",
                    ticket.status === TicketStatus.OPEN ? "bg-brand-dark text-brand-paper" : 
                    ticket.status === TicketStatus.IN_PROGRESS ? "bg-brand-gold text-brand-dark" : 
                    "bg-brand-accent text-brand-dark/40"
                  )}>
                    {ticket.status}
                  </span>
                </td>
                <td className="px-8 py-6 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 hover:bg-brand-dark hover:text-brand-paper transition-all rounded-none">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-brand-dark hover:text-brand-paper transition-all rounded-none relative">
                      <MessageSquare className="w-4 h-4" />
                      {ticket.comments.length > 0 && (
                        <span className="absolute top-0 right-0 w-2 h-2 bg-brand-gold rounded-full" />
                      )}
                    </button>
                    <button className="p-2 hover:bg-brand-dark hover:text-brand-paper transition-all rounded-none">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredTickets.length === 0 && (
          <div className="py-24 text-center space-y-4">
            <div className="text-brand-dark/10 inline-block border-2 border-dashed border-current p-8">
              <Search className="w-12 h-12 mx-auto" />
            </div>
            <p className="text-brand-dark/40 italic font-display">No matching engagements found in the secretariat files.</p>
          </div>
        )}
      </div>

      {/* Pagination Placeholder */}
      <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-brand-dark/30">
        <div>Showing {filteredTickets.length} of {MOCK_TICKETS.length} Authorized Records</div>
        <div className="flex gap-4">
          <button className="opacity-30 cursor-not-allowed">Previous</button>
          <div className="text-brand-dark font-bold">Page 01</div>
          <button className="hover:text-brand-dark transition-colors">Next</button>
        </div>
      </div>
    </div>
  );
}
