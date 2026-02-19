
import React from 'react';

const Legacy: React.FC = () => {
  const lessons = [
    'Culture Architecture',
    'Systemic Design',
    'Mindset Scaling',
    'Leadership Dynamics'
  ];

  return (
    <div className="animate-in fade-in duration-1000">
      <section className="py-40 max-w-[1600px] mx-auto px-8">
        <div className="text-center mb-40">
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/30 mb-8 block">Post-Analysis</span>
          <h1 className="text-[12vw] font-display uppercase tracking-tighter leading-[0.8] mb-16">The Legacy<span className="text-white/10 italic">.</span></h1>
          
          <div className="max-w-4xl mx-auto border-y border-white/5 py-16">
            <p className="text-3xl md:text-5xl font-light text-white/90 leading-tight italic">
              "JumpnRise was an experiment in scaling mindset. It revealed that human potential is unlocked through friction, not ease."
            </p>
          </div>
        </div>

        {/* The Bunny Principle Section */}
        <div className="mb-40">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <span className="text-[10px] font-black tracking-[0.5em] uppercase text-white/30 mb-6 block">Internal Symbolism</span>
              <h2 className="text-7xl font-display uppercase tracking-tighter mb-8 italic">The Bunny <br />Principle</h2>
              <div className="space-y-6 text-xl font-light text-white/60 leading-relaxed mb-12">
                <p>
                  JumpnRise operated on a simple internal symbol — the Bunny. Not because it is cute. <span className="text-white font-medium italic">Because it is fast.</span>
                </p>
                <p>
                  In nature, the rabbit doesn’t dominate by size. It survives by movement. It survives through:
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
                {['Speed', 'Awareness', 'Reflex', 'Consistency'].map((trait) => (
                  <div key={trait} className="bg-black p-6 flex items-center justify-between group hover:bg-white transition-all duration-300">
                    <span className="text-sm uppercase tracking-widest font-bold text-white/40 group-hover:text-black">{trait}</span>
                    <div className="w-1.5 h-1.5 bg-white/20 group-hover:bg-black rounded-full" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="aspect-video bg-white/[0.03] border border-white/5 flex items-center justify-center relative overflow-hidden group">
                 <div className="absolute inset-0 opacity-10 grayscale group-hover:opacity-20 transition-opacity duration-1000">
                    <img src="https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&q=80&w=1200" alt="Rabbit symbol" className="w-full h-full object-cover scale-150" />
                 </div>
                 <h2 className="text-[25vw] font-display text-white/[0.02] leading-none absolute select-none italic group-hover:text-white/[0.05] transition-colors duration-500">SPEED</h2>
                 <div className="relative z-10 text-center">
                    <p className="text-[10px] font-black tracking-[1em] uppercase text-white/20 mb-4">Run Like The</p>
                    <p className="text-9xl font-display uppercase tracking-tighter text-outline group-hover:text-white transition-all duration-700">Bunny</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
             <div className="bg-white/[0.02] p-12 border border-white/5">
                <h3 className="text-2xl font-display uppercase tracking-widest mb-8 border-b border-white/10 pb-4">What it Represented</h3>
                <ul className="space-y-6">
                   {[
                     { t: 'Quick execution over endless planning', desc: 'Starting before you are ready.' },
                     { t: 'Agility over rigidity', desc: 'Adapting at the speed of the challenge.' },
                     { t: 'Repetition over motivation', desc: 'Work as a mechanical requirement.' },
                     { t: 'Movement over excuses', desc: 'The only metric that matters.' },
                   ].map((item, i) => (
                     <li key={i} className="flex gap-6 items-start">
                        <span className="text-[10px] font-mono text-white/20 mt-1">0{i+1}</span>
                        <div>
                           <p className="text-white font-medium uppercase tracking-wider text-sm">{item.t}</p>
                           <p className="text-white/40 text-xs mt-1">{item.desc}</p>
                        </div>
                     </li>
                   ))}
                </ul>
             </div>
             <div className="bg-white p-16 flex flex-col justify-center text-black">
                <span className="text-[10px] font-black tracking-[0.5em] uppercase opacity-30 mb-6 block">The Culture Code</span>
                <p className="text-6xl font-display uppercase leading-[0.85] tracking-tighter mb-10">
                  “Run Like <br />The Bunny.”
                </p>
                <div className="space-y-4 text-sm font-bold uppercase tracking-widest leading-relaxed">
                   <p className="flex items-center gap-4"><span className="w-8 h-px bg-black/20" /> Start before you're ready.</p>
                   <p className="flex items-center gap-4"><span className="w-8 h-px bg-black/20" /> Improve before you complain.</p>
                   <p className="flex items-center gap-4"><span className="w-8 h-px bg-black/20" /> Compete with yesterday.</p>
                </div>
                <p className="mt-12 text-xs font-medium italic opacity-40 max-w-xs">
                  The Bunny is never about being flashy. It is about staying in motion while others stayed comfortable.
                </p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-40">
          {lessons.map((lesson, idx) => (
            <div key={idx} className="border border-white/10 p-12 bg-white/[0.02] group hover:bg-white hover:text-black transition-all duration-500">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-40 mb-12 block italic">Lesson 0{idx + 1}</span>
              <h3 className="text-2xl font-display uppercase tracking-widest">{lesson}</h3>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-px bg-white/10">
          <div className="bg-white text-black p-16 lg:p-24 flex flex-col justify-center">
            <h2 className="text-[8vw] font-display uppercase leading-[0.8] tracking-tighter mb-12">THE CORE <br />TRUTH</h2>
            <div className="space-y-4">
              <p className="text-2xl font-display uppercase tracking-tight opacity-40">Momentum is easy.</p>
              <p className="text-5xl md:text-7xl font-display uppercase tracking-tighter pt-4 border-t border-black/10">Standards are hard.</p>
            </div>
          </div>
          <div className="bg-black p-16 lg:p-24 flex flex-col justify-center space-y-12">
              <p className="text-2xl font-light text-white/60 leading-relaxed">
              The blueprints designed during JumpnRise now serve as the structural foundation for new community-building ventures.
            </p>
              <p className="text-lg font-light text-white/30 leading-relaxed">
              It proved that without a rigid framework, even the most passionate movements dilute. Every strong movement leaves behind principles — JumpnRise left a manifesto of discipline.
            </p>
            <div className="pt-12 border-t border-white/10 flex justify-between items-center opacity-20 pointer-events-none">
               <span className="text-[10px] font-black uppercase tracking-[0.5em]">Continuity</span>
               <div className="flex space-x-2" aria-hidden="true">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Legacy;
