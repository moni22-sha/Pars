import React from 'react';
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
import logo14 from '../assets/images/logo14.png';
import logo15 from '../assets/images/logo15.png';

export default function Clients() {
  // Combined client data mapping names to their imported logo assets
  const clients = [
    { name: 'TIDC India Ltd.', logo: logo1 },
    { name: 'Amalgamation Valeo Clutch', logo: logo2 },
    { name: 'Modine Thermal Systems', logo: logo15 },
    { name: 'Federal Mogul', logo: logo4 },
    { name: 'Petterssons', logo: logo12 },
    { name: 'Sundaram Fasteners', logo: logo5 },
    // ... rest of your client data
  ];

  // Structured Data Schema for SEO (JSON-LD)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Pars Industries",
    "description": "Trusted partner for precision engineering, progressive die design, press tools, jigs, fixtures, and high-accuracy CNC machining components across Chennai, Hosur, Coimbatore, and Delhi.",
    "knowsAbout": [
      "Progressive die manufacturing",
      "Spline die block manufacturing",
      "Blanking die inserts",
      "Precision CNC machining and milling",
      "Jigs and fixtures design",
      "Tool room services and press tools"
    ],
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Chennai" },
      { "@type": "AdministrativeArea", "name": "Hosur" },
      { "@type": "AdministrativeArea", "name": "Coimbatore" },
      { "@type": "AdministrativeArea", "name": "Delhi" },
      { "@type": "AdministrativeArea", "name": "India" }
    ],
    "industrialSector": "Precision Engineering and Automotive Tooling"
  };

  return (
    <>
      {/* Injecting Schema Markup into the Document Head or Body */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      {/* SEO Meta Keywords (Visible to search crawlers) */}
      <span className="sr-only">
        Keywords: Progressive die manufacturers Chennai, Precision press tool manufacturers in Hosur, 
        CNC machining India, Tool room and press tools manufacturers Hosur, Jigs and fixtures Coimbatore.
      </span>

      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            {/* Optimized Heading with short-tail keyword context */}
            <h1 className="text-4xl font-bold mb-4 tracking-tight">
              Trusted by Leading Automotive & Precision Engineering Pioneers
            </h1>
            {/* Paragraph enriched with high-value long-tail keywords naturally */}
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              As a premier choice for <strong className="text-sky-400 font-medium">progressive die design and manufacturing in India</strong>, 
              we deliver high-accuracy components, custom jigs, and specialized production fixtures for global industrial leaders.
            </p>
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clients.map((client, index) => (
              <div key={index} className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 flex flex-col items-center justify-center group hover:border-sky-500/50 transition-all duration-300">
                <img src={client.logo} alt={`${client.name} - Tooling & CNC Machining Client`} className="h-12 object-contain opacity-70 group-hover:opacity-100 transition-opacity mb-2" />
                <span className="text-xs text-slate-400 text-center font-medium group-hover:text-white transition-colors">{client.name}</span>
              </div>
            ))}
            
            <div className="p-4 bg-slate-800/30 rounded-xl border border-dashed border-slate-700 flex items-center justify-center gap-3 group hover:border-sky-500/30 transition-all duration-300 hover:scale-[0.98] shadow-md">
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
          
          {/* Section heading optimized with Tool Room keyword contexts */}
          <h2 className="text-3xl mb-4 font-bold text-blue-950 tracking-tight">
            Our Commitment to Precision Engineering & Tool Room Excellence
          </h2>
          
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-emerald-400 mx-auto mb-6 rounded-full" />
          
          <p className="text-xl text-slate-700 italic leading-relaxed font-light px-4">
            From heavy-duty industrial fixtures to custom metal press tools, our manufacturing solutions across 
            Chennai, Hosur, and Coimbatore comply with strict high-accuracy standards to keep your production lines moving seamlessly.
          </p>
        </div>
      </section>
    </>
  );
}