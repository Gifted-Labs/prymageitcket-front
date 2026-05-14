import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Globe, Zap, Users } from 'lucide-react';

export function LandingPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-32">
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Consultancy Tower"
            className="w-full h-full object-cover opacity-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-paper via-transparent to-brand-paper" />
        </div>

        <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-brand-dark/10 bg-white/50 backdrop-blur-sm">
              <span className="w-2 h-2 bg-brand-gold rounded-full animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark/60">Established 1994</span>
            </div>
            
            <h1 className="text-7xl lg:text-8xl leading-none font-display">
              Precision in <br />
              <span className="italic text-brand-gold">Complexity.</span>
            </h1>
            
            <p className="text-lg text-brand-dark/70 leading-relaxed max-w-xl">
              Prymage is a premier management consultancy for global leaders facing existential challenges. We provide the strategic clarity required to navigate high-stakes market shifts.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/support" className="btn-primary group flex items-center gap-3">
                Access Client Portal
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <button className="btn-outline">Our Methodology</button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop" 
                alt="Strategy Meeting"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-brand-dark/80 to-transparent text-brand-paper">
                <p className="text-2xl font-display italic">"Excellence is not an act, but a habit of disciplined strategy."</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-widest text-brand-gold">— Alistair Prymage, Founder</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats / Proof Section */}
      <section className="py-24 border-y border-brand-accent/30 bg-brand-accent/5">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Asset Management', value: '$45B+' },
              { label: 'Strategic Partners', value: '420+' },
              { label: 'Markets Serviced', value: '88' },
              { label: 'Success Quotient', value: '96%' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-display mb-2">{stat.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-32 section-container">
        <div className="max-w-2xl mb-24">
          <h2 className="text-5xl mb-8">Architecting the future through three key pillars.</h2>
          <p className="text-brand-dark/60 italic leading-relaxed">
            Our approach isn't just about problem-solving; it's about structural transformation. We rebuild organizations from the core out to withstand the pressures of tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Strategic Advisory",
              icon: Globe,
              desc: "Navigating cross-border complexities and geopolitical shifts with clinical precision.",
              tags: ["Market Entry", "M&A", "Capital Optimization"]
            },
            {
              title: "Risk Mitigation",
              icon: ShieldCheck,
              desc: "Predictive modeling and contingency planning for high-stakes enterprise environments.",
              tags: ["Crisis Response", "Cyber Defense", "Regulatory"]
            },
            {
              title: "Digital Evolution",
              icon: Zap,
              desc: "Integrating AI and edge computing into established legacy infrastructures.",
              tags: ["AI Implementation", "Cloud Migration", "Datastack"]
            }
          ].map((cap, i) => (
            <div key={i} className="p-12 border border-brand-dark/5 bg-white space-y-8 hover:bg-brand-dark hover:text-brand-paper transition-all duration-500 group">
              <cap.icon className="w-12 h-12 text-brand-gold group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl">{cap.title}</h3>
              <p className="text-sm leading-relaxed opacity-70">{cap.desc}</p>
              <div className="flex flex-wrap gap-2 pt-4">
                {cap.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 border border-current/20 text-[10px] uppercase font-bold tracking-widest">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-brand-dark text-brand-paper relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
            alt="Dark Abstract"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="section-container relative z-10 text-center space-y-12">
          <h2 className="text-6xl max-w-4xl mx-auto leading-tight">Ready to fortify your market position?</h2>
          <div className="flex justify-center gap-6">
            <Link to="/support" className="px-10 py-4 bg-brand-gold text-brand-dark font-bold uppercase tracking-widest hover:bg-brand-paper transition-colors">
              Initiate Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
