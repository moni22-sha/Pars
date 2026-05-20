
import { ShieldCheck, Award, Globe, Building2, HelpCircle } from 'lucide-react';
import logo1 from '../assets/images/logo1.png';
import logo2 from '../assets/images/logo2.png';
import logo3 from '../assets/images/logo3.png';
import logo4 from '../assets/images/logo4.png';
import logo5 from '../assets/images/logo6.png'; // matches your current import path
import logo6 from '../assets/images/logo7.png';
import logo7 from '../assets/images/logo8.png';
import logo8 from '../assets/images/logo9.png';
import logo9 from '../assets/images/logo10.png';
import logo10 from '../assets/images/logo11.png';
import logo12 from '../assets/images/logo12.png';
import logo13 from '../assets/images/logo13.png';

export default function Clients() {
  // Combined client data mapping names to their imported logo assets
  const clients = [
    { name: 'TIDC India Ltd.', logo: logo1 },
    { name: 'Amalgamation Valeo Clutch', logo: logo2 },
    { name: 'Modine Thermal Systems', logo: logo3 },
    { name: 'Federal Mogul', logo: logo4 },
    { name: 'Petterssons', logo: logo12 },
    { name: 'Sundaram Fasteners', logo: logo5 },
    { name: 'TI Diamond Chain', logo: logo1 },
    { name: 'TI Metal Forming', logo: logo1 },
    { name: 'Magna Cosma', logo: logo6 },
    { name: 'PHA', logo: logo13 },
    // Clients without explicit logos yet can still fall back cleanly to styling
    { name: 'DAS', logo: logo7 },
    { name: 'Donga', logo: logo8 },
    { name: 'Cirteq (UK)', logo: logo9 },
    { name: 'Akai Fasteners (Sri Lanka)', logo: logo10 },
  ];

  return (
    <div className="bg-slate-50 overflow-x-hidden">
      {/* Banner - Vibrant Ocean Deep Gradient */}
      <section className="bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 py-32 text-center relative overflow-hidden shadow-inner">
        <div className="absolute inset-0 z-0">
          
        </div>
        {/* Subtle colorful light leaks */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div>
            <h1 className="text-5xl md:text-6xl text-white mb-6 font-bold tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300">Global Network</span>
            </h1>
          </div>
          
          <p className="text-xl text-sky-200/80 font-light max-w-2xl mx-auto leading-relaxed">
            Trusted by reputed industrial manufacturers and OEMs globally for over three decades.
          </p>
        </div>
      </section>

      {/* Description - Editorial layout with deep accents */}
      <section className="py-24 bg-white border-b border-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border border-sky-100">
                <Building2 className="h-3.5 w-3.5 text-sky-500" /> Global Track Record
              </div>
              <h2 className="text-3xl md:text-4xl mb-6 font-bold text-blue-950 tracking-tight">
                Trusted by Leading Industrial Brands
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Over the years, PIW Engineering Works has earned the trust of reputed industrial manufacturers and OEMs by consistently delivering precision-engineered solutions with reliability and quality.
              </p>
            </div>
            
            <div className="md:w-1/2 grid grid-cols-2 gap-4 w-full">
              {/* Feature Box 1 */}
              <div className="p-6 bg-gradient-to-b from-sky-50 to-white rounded-xl border border-sky-100 text-center group cursor-default shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300 hover:-translate-y-2 transform">
                <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md shadow-sky-500/20 group-hover:rotate-[12deg] transition-transform duration-300">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <span className="block text-xs font-bold uppercase tracking-widest text-sky-900 group-hover:text-sky-600 transition-colors">
                  Global Presence
                </span>
              </div>
              
              {/* Feature Box 2 */}
              <div className="p-6 bg-gradient-to-b from-amber-50 to-white rounded-xl border border-amber-100 text-center group cursor-default shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300 hover:-translate-y-2 transform">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md shadow-amber-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <span className="block text-xs font-bold uppercase tracking-widest text-amber-900 group-hover:text-amber-600 transition-colors">
                  Industry Leader
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client List - Soft grid background with vibrant dynamic card strokes */}
      <section className="py-24 bg-gradient-to-b from-blue-50/50 to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((client) => (
              <div 
                key={client.name} 
                className={`bg-white p-6 min-h-[140px] rounded-xl border flex flex-col items-center justify-center text-center shadow-sm transition-all duration-300 group cursor-default hover:-translate-y-1.5 hover:scale-[1.03] hover:shadow-xl ${
                  client.logo 
                    ? 'border-slate-200 hover:border-sky-400' 
                    : 'border-amber-100 bg-amber-50/10 hover:bg-white hover:border-amber-400'
                }`}
              >
                {client.logo ? (
                  /* Soft colored mask layout that gains full brilliance on hover */
                  <img 
                    src={client.logo} 
                    alt={`${client.name} Logo`} 
                    className="max-h-14 max-w-full object-contain filter saturate-50 opacity-80 group-hover:saturate-100 group-hover:opacity-100 transition-all duration-300 mb-3"
                  />
                ) : null}
                
                <span className={`font-medium tracking-wide transition-colors duration-300 ${
                  client.logo 
                    ? 'text-xs text-slate-500 group-hover:text-sky-600 font-sans' 
                    : 'text-sm text-amber-900 font-semibold group-hover:text-amber-600'
                }`}>
                  {client.name}
                </span>
              </div>
            ))}
            
            {/* Colorful Final Help/Placeholder box */}
            <div className="bg-indigo-950 p-8 rounded-xl border-dashed border-2 border-indigo-400 flex flex-col items-center justify-center text-center gap-2 group cursor-default transition-all duration-300 hover:scale-[0.98] shadow-md">
              <HelpCircle className="h-6 w-6 text-sky-400 group-hover:text-sky-300 group-hover:animate-pulse transition-colors" />
              <span className="text-sky-200/90 font-medium italic text-sm">
                And many more industrial partners...
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment - Energetic Green Confidence Seal */}
      <section className="py-24 bg-white overflow-hidden relative border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <div className="mb-6 flex justify-center">
            <div className="p-4 bg-emerald-50 rounded-full ring-8 ring-emerald-50/50 hover:ring-emerald-100 transition-all duration-500">
              <ShieldCheck className="h-12 w-12 text-emerald-600" />
            </div>
          </div>
          
          <h2 className="text-3xl mb-4 font-bold text-blue-950 tracking-tight">
            Our Commitment
          </h2>
          
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-emerald-400 mx-auto mb-6 rounded-full" />
          
          <p className="text-xl text-slate-700 italic leading-relaxed font-light px-4">
            "Our long-standing client relationships reflect our dedication to engineering precision, consistent quality, timely delivery, and customer satisfaction."
          </p>
        </div>
      </section>
    </div>
  );
}