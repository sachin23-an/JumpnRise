
import React from 'react';

const Founder: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <section className="py-40 max-w-[1600px] mx-auto px-8">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          {/* Text Content */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="mb-12">
              <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-white/30 mb-6 block italic">The Architect</span>
              <h1 className="text-[10vw] font-bold uppercase tracking-tighter leading-[0.8] mb-4">
                Sachin<span className="text-white/10 italic">.</span>
              </h1>
              <p className="text-xl font-medium tracking-widest text-white/40">Founder of JumpnRise</p>
            </div>
            
            <div className="max-w-2xl space-y-12">
               <div className="p-8 border-l-2 border-white bg-white/[0.02] backdrop-blur-sm">
                  <p className="text-2xl md:text-3xl font-light leading-tight text-white italic">
                    "JumpnRise was an early experiment in building performance-driven communities rooted in raw discipline."
                  </p>
               </div>

               <div className="space-y-8 text-lg font-light text-white/50 leading-relaxed">
                  <p>
                    Founded in 2022, JumpnRise was born from Sachin’s conviction that youth sports environments lacked the necessary structure for true, measurable growth. 
                  </p>
                  <p>
                    Sachin initiated the movement to shift the focus from mere participation to elite performance. By introducing identity-building through precise tracking and competitive accountability, he built a culture where standards remained absolute.
                  </p>
                  <p>
                    Though the movement eventually transitioned, its core DNA remains. It served as a definitive blueprint for community architecture, proving that high standards are the only sustainable foundation for excellence.
                  </p>
               </div>

               <div className="pt-12 border-t border-white/5 grid grid-cols-2 gap-8">
                  <div className="group">
                     <span className="block text-[10px] font-bold text-white/30 tracking-widest uppercase mb-2 group-hover:text-white transition-colors">Specialization</span>
                     <p className="text-sm font-medium uppercase tracking-widest text-white/80">Systems Architecture</p>
                  </div>
                  <div className="group">
                    <span className="block text-[10px] font-bold text-white/30 tracking-widest uppercase mb-2 group-hover:text-white transition-colors">Philosophy</span>
                    <p className="text-sm font-medium uppercase tracking-widest text-white/80">Discipline &gt; Talent</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Founder Visual */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative group">
              {/* Profile Image - Grayscale professional portrait */}
              <div className="aspect-[4/5] overflow-hidden grayscale border border-white/10 shadow-2xl relative">
                <img 
                  src="/founder.jpeg" 
                  alt="Sachin - Founder of JumpnRise" 
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
              </div>
              
              {/* Brutalist Label Overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white text-black p-8 md:p-10 z-20 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500">
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 block opacity-40"></span>
                 <p className="text-4xl font-display uppercase tracking-tighter leading-none">Standards create  <br /> STRENGTH</p>
              </div>
              
              {/* Technical Detail Lines */}
              <div className="absolute top-10 right-10 flex flex-col items-end opacity-20 pointer-events-none">
                 <div className="w-16 h-px bg-white mb-2"></div>
                 <div className="w-10 h-px bg-white"></div>
                 <span className="text-[8px] tracking-widest mt-2 uppercase font-mono">X-REF: ARCHITECT_01</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-40 text-center py-20 border-y border-white/5 relative overflow-hidden group">
           <div className="absolute inset-0 bg-white/[0.01] translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
           <p className="relative z-10 text-sm tracking-[0.8em] font-bold uppercase text-white/20 group-hover:text-white/60 transition-colors">
             Building ecosystems for long-term impact.
           </p>
        </div>
      </section>
    </div>
  );
};

export default Founder;
