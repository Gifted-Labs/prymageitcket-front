import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { TrendingUp, AlertCircle, CheckCircle2, Clock } from 'lucide-react';
import { cn } from '../lib/utils';

const VOLUME_DATA = [
  { name: 'Mon', tickets: 42, resolved: 38 },
  { name: 'Tue', tickets: 56, resolved: 45 },
  { name: 'Wed', tickets: 48, resolved: 52 },
  { name: 'Thu', tickets: 72, resolved: 60 },
  { name: 'Fri', tickets: 65, resolved: 58 },
  { name: 'Sat', tickets: 30, resolved: 28 },
  { name: 'Sun', tickets: 25, resolved: 20 },
];

const DEPARTMENT_DATA = [
  { name: 'Strategic', value: 35, color: '#C5A059' },
  { name: 'Technical', value: 25, color: '#121212' },
  { name: 'Billing', value: 20, color: '#8E9299' },
  { name: 'General', value: 20, color: '#E5E1DA' },
];

export function DashboardOverview() {
  return (
    <div className="space-y-12">
      {/* KPI Ribbons */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Active Engagements', value: '142', sub: '+12% from last week', icon: TrendingUp, color: 'text-brand-gold' },
          { label: 'Critical Escalations', value: '04', sub: 'Requires boardroom review', icon: AlertCircle, color: 'text-rose-600' },
          { label: 'Resolution Rate', value: '94.2%', sub: 'Avg 2.4 days', icon: CheckCircle2, color: 'text-emerald-600' },
          { label: 'Pending Response', value: '18', sub: 'Awaiting client brief', icon: Clock, color: 'text-brand-dark/40' },
        ].map((kpi, i) => (
          <div key={i} className="bg-white p-8 border border-brand-dark/5 shadow-sm space-y-4">
            <div className="flex justify-between items-start">
              <kpi.icon className={cn("w-6 h-6", kpi.color)} />
              <div className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/30">KPI {i + 1}</div>
            </div>
            <div>
              <div className="text-4xl font-display">{kpi.value}</div>
              <div className="text-[10px] font-bold uppercase tracking-tighter text-brand-dark/50 mt-1">{kpi.label}</div>
            </div>
            <div className={cn("text-[9px] font-medium tracking-tight border-t pt-3 flex items-center gap-1", kpi.color)}>
              {kpi.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-10 border border-brand-dark/5 shadow-sm space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-2xl mb-1">Response Volume</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/40">Engagement cycle analysis (Past 7 Days)</p>
            </div>
            <div className="flex gap-4 text-[9px] font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2"><span className="w-2 h-2 bg-brand-dark" /> Inbound</div>
              <div className="flex items-center gap-2"><span className="w-2 h-2 bg-brand-gold" /> Resolved</div>
            </div>
          </div>
          
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={VOLUME_DATA}>
                <defs>
                  <linearGradient id="colorTickets" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#121212" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#121212" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#888', fontWeight: 600 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#888', fontWeight: 600 }}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '0px', border: '1px solid #121212', fontSize: '12px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="tickets" 
                  stroke="#121212" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorTickets)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="resolved" 
                  stroke="#C5A059" 
                  strokeWidth={2}
                  fill="transparent"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-10 border border-brand-dark/5 shadow-sm space-y-8">
          <div>
            <h3 className="text-2xl mb-1">Department Mix</h3>
            <p className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/40">Strategic Resource Distribution</p>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={DEPARTMENT_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {DEPARTMENT_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '0px', border: '1px solid #121212', fontSize: '10px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

            <div className="space-y-4 pt-4">
              {DEPARTMENT_DATA.map((dept, i) => (
                <div key={i} className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 block" style={{ backgroundColor: dept.color }} />
                    <span className="text-brand-dark/60">{dept.name}</span>
                  </div>
                  <span>{dept.value}%</span>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}
