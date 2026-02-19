
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../types';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=2069" 
            alt="Elite performance" 
            className="w-full h-full object-cover grayscale opacity-20 scale-110"
          />
          <div className="absolute inset-0 hero-gradient z-10" />
        </div>

        <div className="relative z-20 max-w-[1600px] mx-auto px-8 w-full text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-[12vw] lg:text-[14vw] font-bold tracking-tighter leading-[0.85] mb-8 animate-in slide-in-from-bottom-20 duration-1000 fill-mode-forwards">
              JumpnRise<span className="text-white/10 italic">.</span>
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
               <span className="h-px w-12 bg-white/20 hidden md:block" />
               <p className="text-lg md:text-2xl font-light text-white/60 tracking-tight">
                 Built for Those Who Refuse to Stay Average.
               </p>
               <span className="h-px w-12 bg-white/20 hidden md:block" />
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link 
                to={AppRoutes.MOVEMENT}
                className="px-12 py-5 bg-white text-black text-xs font-black uppercase tracking-[0.3em] hover:bg-white/90 transition-all active:scale-95"
              >
                Start Training
              </Link>
              <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/40 border-b border-white/20 pb-1">
                “No Talent. Just Work.”
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar Info */}
        <div className="absolute bottom-12 left-0 w-full z-20 px-8 hidden lg:block">
           <div className="max-w-[1600px] mx-auto flex justify-between items-end border-t border-white/10 pt-6">
              <div className="flex space-x-12">
                 <div>
                    <span className="block text-[10px] font-bold text-white/30 tracking-widest uppercase mb-1">Status</span>
                    <span className="text-sm font-medium">LEGACY MOVEMENT</span>
                 </div>
                 <div>
                    <span className="block text-[10px] font-bold text-white/30 tracking-widest uppercase mb-1">Origin</span>
                    <span className="text-sm font-medium">FOUNDED 2022</span>
                 </div>
              </div>
              <div className="text-[10px] font-bold text-white/20 tracking-[0.8em] uppercase">
                 Performance Architecture
              </div>
           </div>
        </div>
      </section>

      {/* Philosophy Section - Minimalist / Brutalist */}
      <section className="py-40 bg-black overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="relative">
              <h2 className="text-[10vw] font-display leading-[0.8] mb-12 text-outline absolute -top-24 -left-4 z-0">CORE</h2>
              <div className="relative z-10">
                <h3 className="text-5xl font-display mb-8 uppercase tracking-tight">The Core Idea</h3>
                <div className="space-y-8 text-lg md:text-xl text-white/50 font-light leading-relaxed">
                  <p>
                    JumpnRise was launched in 2022 with one belief: <span className="text-white font-medium">You don’t need selection to be an athlete. You need structure.</span>
                  </p>
                  <p>
                    We stripped away the casual nature of recreational sports. No random matches. No participation trophies. Only data.
                  </p>
                  <p className="text-3xl font-display text-white uppercase italic tracking-tighter">
                    It isn’t about trophies. It is about transformation.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Image-based Metric Grid */}
            <div className="grid grid-cols-2 gap-4">
               {[
                 { 
                   id: '01', 
                   title: 'Sprint', 
                   img: 'https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?auto=format&fit=crop&q=80&w=800' 
                 },
                 { 
                   id: '02', 
                   title: 'Strength', 
                   img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' 
                 },
                 { 
                   id: '03', 
                   title: 'Endurance', 
                   img: 'https://images.unsplash.com/photo-1530143311094-34d807799e8f?auto=format&fit=crop&q=80&w=800' 
                 },
                 { 
                   id: 'Goal', 
                   title: 'Identity', 
                   img: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=800',
                   highlight: true
                 }
               ].map((metric) => (
                 <div key={metric.id} className="group relative aspect-square overflow-hidden border border-white/10">
                   <img 
                     src={metric.img} 
                     alt={metric.title}
                     className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:scale-110 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                   <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                      <span className={`text-[10px] font-bold tracking-widest uppercase ${metric.highlight ? 'text-white' : 'text-white/40'}`}>
                        {metric.id === 'Goal' ? 'Final Goal' : `Metric ${metric.id}`}
                      </span>
                      <span className={`text-3xl font-display tracking-widest uppercase leading-none ${metric.highlight ? 'text-white underline decoration-white/30 underline-offset-8' : 'text-white'}`}>
                        {metric.title}
                      </span>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="py-40 border-t border-white/5">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
             <h2 className="text-6xl md:text-8xl font-display uppercase leading-none tracking-tighter">What Set Us <br />Apart</h2>
             <p className="max-w-md text-white/40 text-sm tracking-widest uppercase font-bold text-right italic">
               “The system rewards the discipline, not the talent.”
             </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {[
              { title: 'Weekly Challenges', desc: 'Performance demands that ignore external motivation.' },
              { title: 'Personal Benchmarks', desc: 'Data-driven self-competition.' },
              { title: 'Peer Accountability', desc: 'Standards maintained by the collective.' },
              { title: 'Self-Driven Growth', desc: 'Transformation owned by the individual.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-black p-12 hover:bg-white/[0.03] transition-colors">
                <span className="block text-4xl font-display text-white/10 mb-8">0{idx + 1}</span>
                <h3 className="text-2xl font-display uppercase mb-6 tracking-wide">{item.title}</h3>
                <p className="text-white/40 font-light leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-40 text-center">
             <h4 className="text-[8vw] font-display text-outline uppercase leading-[0.8] mb-8">Mindset Shift</h4>
             <p className="text-2xl font-light text-white/80 max-w-2xl mx-auto">
               JumpnRise isn't a club. It is the refusal to stay average.
             </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
