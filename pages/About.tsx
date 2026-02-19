
import React from 'react';
import { Pillar, TimelineEvent } from '../types';

const About: React.FC = () => {
  const pillars: Pillar[] = [
    { title: 'Structure', description: 'Clear benchmarks. Clear targets. No guesswork.' },
    { title: 'Consistency', description: 'Weekly tracking over random intensity.' },
    { title: 'Identity', description: 'You don’t “play sometimes.” You train like an athlete.' }
  ];

  const timeline: TimelineEvent[] = [
    { 
      year: '2022', 
      title: 'Genesis', 
      description: 'Movement launch in early 2022. Rapid adoption of discipline-based sports culture and competitive standards.' 
    },
    { 
      year: '2022–23', 
      title: 'Peak Performance', 
      description: 'Maximum engagement levels. Implementation of consistent performance tracking and disciplined internal culture.' 
    },
    { 
      year: '2023', 
      title: 'Transition', 
      description: 'Momentum shift following leadership transition. The experiment revealed the criticality of structural continuity.' 
    },
    { 
      year: 'Legacy', 
      title: 'Principles', 
      description: 'Transition from active movement to a framework for future ventures. Lessons solidified into community architecture.' 
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000">
      <section className="py-40 max-w-[1600px] mx-auto px-8">
        <div className="mb-32">
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/30 mb-6 block">Foundation</span>
          <h1 className="text-[10vw] font-display uppercase tracking-tighter leading-[0.8] mb-12">
            The Philosophy<span className="text-white/10 italic">.</span>
          </h1>
          <p className="text-3xl md:text-5xl font-light text-white/80 max-w-4xl leading-tight">
            Most youth sports environments reward talent. <br />
            <span className="text-white font-medium">JumpnRise rewarded discipline.</span>
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-32">
          {/* Pillars Section */}
          <div className="space-y-24">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="group">
                <span className="text-[10px] font-black tracking-widest text-white/20 uppercase mb-4 block group-hover:text-white transition-colors italic">PILLAR 0{idx + 1}</span>
                <h3 className="text-6xl font-display uppercase tracking-tighter mb-6">{pillar.title}</h3>
                <p className="text-xl text-white/50 font-light leading-relaxed max-w-md border-l border-white/10 pl-8">{pillar.description}</p>
              </div>
            ))}
          </div>

          {/* Corrected Timeline Section */}
          <div className="bg-white/[0.02] border border-white/5 p-12 lg:p-20 relative overflow-hidden backdrop-blur-sm">
             <div className="absolute top-0 right-0 p-8 text-[12vw] font-display text-white/[0.03] leading-none pointer-events-none uppercase">Archive</div>
             <h2 className="text-3xl font-display uppercase tracking-[0.2em] text-white mb-16 relative z-10 border-b border-white/10 pb-4 inline-block">Lifecycle Audit</h2>
             <div className="space-y-16 relative z-10">
                {timeline.map((event, idx) => (
                  <div key={idx} className="flex gap-8 group relative">
                    {/* Vertical Line Connector */}
                    {idx !== timeline.length - 1 && (
                      <div className="absolute left-[26px] top-10 bottom-[-40px] w-px bg-white/10 group-hover:bg-white/30 transition-colors" />
                    )}
                    
                    <div className="flex-shrink-0 w-[52px] h-[52px] rounded-full border border-white/20 flex items-center justify-center bg-black group-hover:border-white transition-colors">
                      <span className="text-[10px] font-bold text-white/40 group-hover:text-white">{idx + 1}</span>
                    </div>

                    <div>
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-sm font-bold uppercase tracking-widest text-white/20 group-hover:text-white transition-colors">{event.year}</span>
                        <div className="h-px w-8 bg-white/10" />
                        <h4 className="text-2xl font-display uppercase tracking-wider">{event.title}</h4>
                      </div>
                      <p className="text-white/40 font-light text-sm leading-relaxed max-w-sm">{event.description}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>

        <div className="mt-40 text-center border-t border-white/5 pt-32">
           <p className="text-4xl md:text-7xl font-display uppercase max-w-5xl mx-auto leading-[0.9] tracking-tighter mb-12">
             Culture only survives when <br />
             <span className="text-outline">standards stay high.</span>
           </p>
           <div className="inline-block px-8 py-3 border border-white/10 text-[10px] font-bold tracking-[0.5em] uppercase text-white/30 italic">
             Final Post-Phase Conclusion
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
