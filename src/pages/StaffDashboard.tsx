import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  Ticket as TicketIcon, 
  Users, 
  Settings, 
  LogOut, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2, 
  Plus
} from 'lucide-react';
import { cn } from '../lib/utils';
import { DashboardOverview } from './DashboardOverview';
import { TicketManagement } from './TicketManagement';
import { StaffManagement } from './StaffManagement';

export function StaffDashboard() {
  const location = useLocation();

  const menuItems = [
    { label: 'Overview', path: '/staff/dashboard/overview', icon: BarChart3 },
    { label: 'Tickets', path: '/staff/dashboard/tickets', icon: TicketIcon },
    { label: 'Staff Hub', path: '/staff/dashboard/staff', icon: Users },
    { label: 'Configurations', path: '/staff/dashboard/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-brand-accent/10 flex">
      {/* Sidebar */}
      <aside className="w-80 bg-brand-dark text-brand-paper p-8 flex flex-col fixed h-screen z-40">
        <div className="flex items-center gap-4 mb-16 px-4">
          <div className="w-10 h-10 bg-brand-gold rounded-sm flex items-center justify-center font-display font-bold text-brand-dark">P</div>
          <div>
            <h2 className="text-lg font-display uppercase tracking-tighter">Secretariat</h2>
            <p className="text-[10px] text-brand-gold font-bold uppercase tracking-widest leading-none">Admin Console</p>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-4 px-6 py-4 rounded-none transition-all group",
                location.pathname === item.path 
                  ? "bg-brand-gold text-brand-dark font-bold" 
                  : "hover:bg-white/5 text-brand-paper/50"
              )}
            >
              <item.icon className={cn("w-5 h-5", location.pathname === item.path ? "text-brand-dark" : "group-hover:text-brand-gold")} />
              <span className="text-xs uppercase tracking-widest">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="pt-8 border-t border-white/10">
          <Link to="/staff" className="flex items-center gap-4 px-6 py-4 text-brand-paper/40 hover:text-rose-500 transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="text-xs uppercase tracking-widest">Terminate Session</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-80 flex-1 p-12 overflow-y-auto">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <header className="flex justify-between items-end border-b border-brand-dark/10 pb-8">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold mb-2">Authenticated User: D. Chen</div>
              <h1 className="text-5xl">Tactical Dashboard</h1>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-3 px-6 py-3 bg-white border border-brand-dark/10 text-[10px] font-bold uppercase tracking-widest hover:border-brand-dark transition-all">
                Generate Report
              </button>
              <button className="flex items-center gap-3 px-6 py-3 bg-brand-dark text-brand-paper text-[10px] font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-brand-dark transition-all">
                <Plus className="w-4 h-4" />
                Assign Ticket
              </button>
            </div>
          </header>

          <Routes>
            <Route path="overview" element={<DashboardOverview />} />
            <Route path="tickets" element={<TicketManagement />} />
            <Route path="staff" element={<StaffManagement />} />
            <Route path="*" element={<DashboardOverview />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
