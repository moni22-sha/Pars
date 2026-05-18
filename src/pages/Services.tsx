import {ArrowRight, Settings, Command, Cpu, Shrink, Drill, Zap, Boxes} from 'lucide-react';
import {motion} from 'motion/react';

export default function Services() {
  const services = [
    {
      title: 'Progressive Tools',
      icon: <Command />,
      description: 'We design and manufacture high-precision progressive tools engineered for efficient and continuous production operations. Our tooling solutions are developed to deliver accuracy, repeatability, and long-term operational reliability.'
    },
    {
      title: 'Press Tools',
      icon: <Shrink />,
      description: 'Our custom press tools are manufactured to support a wide range of metal forming and stamping applications. Designed with precision and durability, our press tools ensure smooth and efficient manufacturing performance.'
    },
    {
      title: 'Jigs & Fixtures',
      icon: <Settings />,
      description: 'We provide precision-engineered jigs and fixtures that improve production efficiency, reduce setup time, and maintain dimensional consistency throughout manufacturing processes.'
    },
    {
      title: 'Gauges',
      icon: <Drill />,
      description: 'Our inspection gauges are designed to ensure accurate measurement and quality verification across production environments. Every gauge is manufactured to meet stringent quality and precision standards.'
    },
    {
      title: 'Welding Fixtures',
      icon: <Boxes />,
      description: 'We develop durable and reliable welding fixtures that enhance positioning accuracy, structural stability, and workflow efficiency during welding operations.'
    },
    {
      title: 'CNC Machining',
      icon: <Cpu />,
      description: 'Our CNC machining services deliver precision-manufactured components with tight tolerances, superior surface finishes, and consistent production quality for industrial applications.'
    },
    {
      title: 'Fabrication Solutions',
      icon: <Zap />,
      description: 'We offer custom fabrication services tailored to industrial requirements, combining engineering expertise with advanced manufacturing techniques to deliver high-quality fabricated components and assemblies.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-slate-900 py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
           <h1 className="text-5xl md:text-6xl text-white mb-6">Our Services</h1>
           <p className="text-xl text-slate-400 font-light max-w-2xl">
             Precision engineering services designed for industrial excellence and production performance.
           </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="space-y-12">
              {services.map((service, index) => (
                <motion.div 
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true}}
                  key={service.title} 
                  className={`flex flex-col lg:flex-row gap-12 items-center p-8 rounded-2xl border border-slate-100 hover:border-brand-accent transition-all ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                   <div className="lg:w-1/3">
                      <div className="p-10 bg-slate-50 text-brand-accent rounded-2xl w-full aspect-square flex items-center justify-center">
                         {React.cloneElement(service.icon as React.ReactElement, {className: 'h-24 w-24 opacity-20'})}
                         <div className="absolute font-display font-black text-6xl opacity-5 select-none">{String(index + 1).padStart(2, '0')}</div>
                      </div>
                   </div>
                   <div className="lg:w-2/3">
                      <h3 className="text-3xl font-bold mb-6 text-slate-900">{service.title}</h3>
                      <p className="text-slate-600 text-lg leading-relaxed mb-8">
                        {service.description}
                      </p>
                      <button className="flex items-center text-brand-accent font-bold group">
                         Discuss your requirement <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </button>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-slate-50 industrial-grid">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-3xl uppercase tracking-widest text-slate-500 font-bold mb-4">Industries We Serve</h2>
              <p className="text-slate-400">Tailored solutions for diverse industrial sectors.</p>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <IndustryTag label="Automotive" />
              <IndustryTag label="Electrical & Electronics" />
              <IndustryTag label="Heavy Engineering" />
              <IndustryTag label="OEM Manufacturing" />
              <IndustryTag label="Fabrication" />
              <IndustryTag label="Precision Components" />
              <IndustryTag label="Industrial Manufacturing" />
              <IndustryTag label="Global Export" />
           </div>
         </div>
      </section>
    </div>
  );
}

function IndustryTag({label}: {label: string}) {
  return (
    <div className="bg-white px-6 py-8 rounded shadow-sm border border-slate-100 text-center flex items-center justify-center">
       <span className="text-slate-800 font-bold uppercase tracking-wider text-xs">{label}</span>
    </div>
  );
}

import React from 'react';
