
import React from 'react';

const Movement: React.FC = () => {
  const activities = [
    { 
      label: 'Sprint timing benchmarks', 
      img: 'https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      label: 'Endurance challenges', 
      img: 'https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      label: 'Skill repetition goals', 
      img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      label: 'Strength progression tracking', 
      img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      label: 'Monthly performance reviews', 
      img: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=800' 
    },
  ];

  return (
    <div className="animate-in fade-in duration-1000">
      <section className="py-40 max-w-[1600px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-20 mb-32">
          <div className="lg:w-2/3">
             <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/30 mb-6 block">Execution</span>
             <h1 className="text-[10vw] font-display uppercase tracking-tighter leading-[0.85] mb-8">How it <br />Worked</h1>
          </div>
          <div className="lg:w-1/3 flex items-end">
             <p className="text-xl text-white/40 font-light leading-relaxed italic border-l border-white/20 pl-8">
               "Performance was self-recorded and shared publicly within the community. Excuses were exposed."
             </p>
          </div>
        </div>

        {/* Modules with Background Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-white/10 mb-40">
          {activities.map((item, idx) => (
            <div key={idx} className="group relative bg-black p-12 flex flex-col justify-between aspect-square overflow-hidden transition-all duration-500 cursor-default border border-white/5">
              <img 
                src={item.img} 
                alt={item.label}
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.2] group-hover:brightness-[0.4] group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-0" />
              
              <span className="relative z-10 text-[10px] font-black text-white/30 group-hover:text-white/60 italic">MOD 0{idx + 1}</span>
              <span className="relative z-10 text-xl font-display uppercase leading-tight text-white tracking-widest drop-shadow-lg">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit">
            <h2 className="text-4xl font-display uppercase tracking-widest mb-12 border-b border-white/10 pb-4">Core Standards</h2>
            <div className="space-y-12">
              {[
                { n: '01', t: 'Accountability over motivation' },
                { n: '02', t: 'Competition over comfort' },
                { n: '03', t: 'Standards over popularity' },
              ].map((p, i) => (
                <div key={i} className="group">
                  <h4 className="text-white/20 font-bold uppercase tracking-[0.4em] text-[10px] mb-2 group-hover:text-white transition-colors">Principle {p.n}</h4>
                  <p className="text-3xl font-display uppercase tracking-tighter">{p.t}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-8 space-y-24">
            <div className="p-16 bg-white/[0.02] border border-white/10 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 text-[20vw] font-display text-white/[0.02] rotate-12 pointer-events-none italic">WHY?</div>
              <h3 className="text-4xl font-display uppercase tracking-widest mb-10 relative z-10">The Resonance</h3>
              <p className="text-2xl font-light text-white/60 leading-relaxed mb-8 relative z-10">
                Because most environments were casual. JumpnRise wasn’t. It demanded effort, and that’s why it grew.
              </p>
              <p className="text-lg font-light text-white/40 leading-relaxed relative z-10 max-w-xl">
                It attracted individuals who wanted structure — not validation. We provided the framework; the athlete provided the will.
              </p>
            </div>
            
            {/* Fixed Athlete Focus Image Section */}
            <div className="aspect-[16/7] grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden relative border border-white/10 group">
               <img 
                 src="https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&q=80&w=1200" 
                 alt="Athlete focus" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
               />
               <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-700" />
               <div className="absolute top-8 right-8 text-[10px] font-bold tracking-[0.5em] uppercase text-white/60 bg-black/80 px-4 py-2 border border-white/10 z-10">
                 ARCHIVE: 2022 PERFORMANCE LAB
               </div>
               <div className="absolute bottom-8 left-8 text-[10px] font-mono text-white/30 uppercase tracking-widest z-10">
                 Ref: Track_Analysis_4.0
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Movement;
