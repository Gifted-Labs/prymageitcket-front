import React from 'react';
import { MOCK_STAFF } from '../constants';
import { Mail, Phone, Calendar, Star, Medal, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

export function StaffManagement() {
  return (
    <div className="space-y-12">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl mb-2">Senior Workforce</h2>
          <p className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/40">Registered Consultants & Strategic Analysts</p>
        </div>
        <button className="btn-primary">Provision New Access</button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {MOCK_STAFF.map((staff) => (
          <div key={staff.email} className="bg-white border border-brand-dark/5 p-10 flex gap-10 group hover:shadow-2xl transition-all duration-500">
            {/* Avatar / Status */}
            <div className="shrink-0 space-y-4">
              <div className="w-32 h-32 relative overflow-hidden bg-brand-accent/30 grayscale group-hover:grayscale-0 transition-all duration-700">
                {staff.avatar ? (
                  <img src={staff.avatar} alt={staff.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-display text-4xl text-brand-dark/20">
                    {staff.name.charAt(0)}
                  </div>
                )}
                <div className={cn(
                  "absolute top-0 right-0 w-4 h-4 border-4 border-white rounded-full",
                  staff.status === 'Active' ? "bg-emerald-500" : "bg-amber-500"
                )} title={staff.status} />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/40 text-center">ID: {staff.dateAdded.replace(/-/g, '')}</div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-display">{staff.name}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">{staff.role}</p>
                </div>
                <button className="p-2 border border-brand-dark/10 hover:border-brand-dark hover:bg-brand-dark hover:text-brand-paper transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-brand-dark/5">
                <div className="space-y-1">
                  <div className="text-[9px] uppercase tracking-widest text-brand-dark/40">Engagement Performance</div>
                  <div className="text-lg font-display">{staff.performance.ticketsResolved} Resolved</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[9px] uppercase tracking-widest text-brand-dark/40">Lead Time</div>
                  <div className="text-lg font-display">{staff.performance.avgResolutionTime}</div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={cn(
                        "w-3 h-3", 
                        i < Math.floor(staff.performance.satisfactionRate / 20) ? "text-brand-gold fill-brand-gold" : "text-brand-dark/10"
                      )} 
                    />
                  ))}
                  <span className="text-[10px] font-bold ml-2 text-brand-dark/60">{staff.performance.satisfactionRate}% Satisfaction</span>
                </div>
                <div className="flex gap-4">
                  <Mail className="w-4 h-4 text-brand-dark/30 hover:text-brand-gold cursor-pointer transition-colors" />
                  <Phone className="w-4 h-4 text-brand-dark/30 hover:text-brand-gold cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
