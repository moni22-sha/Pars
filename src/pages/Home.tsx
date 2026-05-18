import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Users, Factory, Target, Shield, Clock, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import image16 from '../assets/images/image16.png';

export default function Home() {
  return (
    <div className="overflow-hidden relative">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center bg-brand-primary">
        <div className="absolute inset-0 z-0">
          <img 
            src={image16}
            alt="Industrial Facility" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight font-bold">
              Engineered for Excellence. Built for Performance.
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed font-medium">
              Precision engineering solutions for modern manufacturing — delivering high-precision tooling, machining, and fabrication with global quality standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/products" 
                className="inline-flex items-center justify-center bg-brand-accent text-white px-10 py-4 rounded-full font-bold hover:brightness-110 transition-all shadow-lg shadow-blue-500/20"
              >
                View Products
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center bg-brand-gold text-slate-900 px-10 py-4 rounded-full font-bold hover:brightness-110 transition-all shadow-lg shadow-yellow-500/20"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-[#373e48]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white mb-4">Why Choose Us?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <WhyChooseCard 
              icon={Clock}
              title="30+ Years Experience"
              text="Decades of technical expertise and proven industry knowledge."
            />
            <WhyChooseCard 
              icon={Users}
              title="1000+ Clients"
              text="Trusted by a growing network of industrial clients globally."
            />
            <WhyChooseCard 
              icon={Factory}
              title="Modern Facility"
              text="Fully equipped 4000+ sq. ft. production infrastructure."
            />
            <WhyChooseCard 
              icon={Zap}
              title="Timely Delivery"
              text="Efficient production planning and project execution."
            />
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl leading-tight">Precision-Driven Manufacturing</h2>
              <p className="text-lg text-slate-600">
                Specializing in high-precision tooling systems, CNC machining, jigs, fixtures, gauges, welding fixtures, and custom engineering solutions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                <CapabilityItem icon={Target} title="Advanced Infrastructure" text="Equipped with modern machinery and precision inspection systems." />
                <CapabilityItem icon={Settings} title="Customized Solutions" text="Every solution is engineered to meet specific production requirements." />
                <CapabilityItem icon={Shield} title="Quality-Focused" text="Strict quality inspection procedures ensure superior consistency." />
                <CapabilityItem icon={Zap} title="Efficiency Built-In" text="Designed for durability, performance, and long-term reliability." />
              </div>
            </div>
            
            <div className="relative">
               <div className="rounded-2xl overflow-hidden shadow-2xl">
                 <img 
                  src={image16}  
                  alt="Capability" 
                  className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
               </div>
               <div className="absolute -bottom-6 -left-6 bg-brand-accent p-8 rounded-lg shadow-xl text-white max-w-xs md:block hidden">
                 <p className="text-4xl font-display font-bold mb-1">30+</p>
                 <p className="uppercase tracking-widest text-xs font-semibold">Years of Excellence</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
             <div className="lg:w-1/2 order-2 lg:order-1">
                <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded text-xs font-bold uppercase tracking-widest mb-6 border-l-4 border-brand-accent">
                   About the Company
                </div>
                <h2 className="text-4xl mb-6">Engineering Excellence Built on Precision</h2>
                <p className="text-lg text-slate-600 mb-6 font-medium">
                   At Pars Engineering Works, we specialize in delivering advanced engineering and tooling solutions designed for efficiency, consistency, and long-term performance.
                </p>
                <p className="text-slate-500 mb-10 leading-relaxed">
                   Backed by over 30 years of experience, a modern manufacturing facility, and the trust of 1000+ clients, we serve a wide range of industries with customized solutions that meet exact operational requirements. 
                   From precision press tools and progressive dies to jigs, fixtures, gauges, and fabrication systems, every product is engineered with attention to detail.
                </p>
                <Link to="/about" className="text-brand-accent font-bold flex items-center group mb-8">
                  Learn more about our legacy
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 w-fit">
                   <img 
                    src={image16}
                    alt="Quality Seal" 
                    className="h-16 w-16"
                    referrerPolicy="no-referrer"
                   />
                   <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Certified Quality</p>
                      <p className="text-sm font-bold text-slate-800">Precision Engineering Certified</p>
                   </div>
                </div>
             </div>
             <div className="lg:w-1/2 order-1 lg:order-2 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                   <div className="h-48 bg-slate-100 rounded-lg overflow-hidden">
                     <img src={image16} className="w-full h-full object-cover" alt="Detail" />
                   </div>
                   <div className="h-64 bg-slate-200 rounded-lg overflow-hidden">
                     <img src={image16} className="w-full h-full object-cover grayscale" alt="Detail" />
                   </div>
                </div>
                <div className="space-y-4 pt-8">
                   <div className="h-64 bg-slate-200 rounded-lg overflow-hidden">
                    <img src={image16} className="w-full h-full object-cover grayscale" alt="Detail" />
                   </div>
                   <div className="h-48 bg-slate-100 rounded-lg overflow-hidden">
                    <img src={image16} className="w-full h-full object-cover" alt="Detail" />
                   </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-4">Comprehensive Engineering & Tooling Solutions</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Providing end-to-end manufacturing support with precision-engineered tooling and advanced machining services.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServicePreviewCard title="Progressive Tools" text="High-precision tooling solutions for continuous production processes." link="/services" />
              <ServicePreviewCard title="Press Tools" text="Custom-designed manufactured tools for efficient industrial performance." link="/services" />
              <ServicePreviewCard title="Jigs & Fixtures" text="Precision-built systems to improve manufacturing consistency." link="/services" />
              <ServicePreviewCard title="Gauges" text="Accurate and durable inspection gauges for quality control." link="/services" />
              <ServicePreviewCard title="Welding Fixtures" text="Robust systems engineered for stability and alignment accuracy." link="/services" />
              <ServicePreviewCard title="CNC Machining" text="Advanced components with tight tolerances and superior finish." link="/services" />
           </div>
           
           <div className="mt-12 text-center">
              <Link to="/services" className="inline-flex items-center text-brand-accent hover:text-white font-bold transition-colors">
                View all services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-accent" />
        <div className="absolute -right-20 -top-20 text-white/10 opacity-50">
           <Settings className="h-96 w-96 rotate-12" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
           <h2 className="text-4xl md:text-5xl font-bold mb-8">Looking for Reliable Engineering & Tooling Solutions?</h2>
           <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
             Partner with PIW Engineering Works for precision-driven manufacturing support tailored to your industrial requirements.
           </p>
           <Link 
             to="/contact" 
             className="inline-flex items-center justify-center bg-white text-brand-accent px-12 py-5 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl"
           >
             Contact Us Today
           </Link>
        </div>
      </section>

      {/* 🟢 Glowing Floating WhatsApp Button */}
      <a
        href="https://wa.me/YOUR_PHONE_NUMBER" // Replace with your actual WhatsApp line link
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full text-white shadow-xl hover:scale-110 transition-transform duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        {/* Glow Effects matching your reference image */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
        <span className="absolute inset-[-8px] rounded-full bg-[#25D366]/20 blur-md opacity-100 group-hover:bg-[#25D366]/30 transition-all" />
        
        {/* Native SVG Icon */}
        <svg
          className="w-7 h-7 relative z-10 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 12.008 0c3.201.001 6.212 1.244 8.477 3.508 2.266 2.264 3.507 5.275 3.507 8.474 0 6.656-5.338 12.004-11.948 12.004-2.005-.001-3.973-.5-5.732-1.455L0 24zm6.59-4.846c1.66.986 3.298 1.448 5.355 1.449 5.42 0 9.831-4.331 9.835-9.65.002-2.577-1.004-5.001-2.834-6.828-1.829-1.826-4.26-2.833-6.843-2.834-5.426 0-9.836 4.333-9.84 9.655-.002 2.052.548 4.053 1.593 5.823l-.999 3.647 3.734-.962zM17.02 14.37c-.274-.138-1.62-.8-1.871-.892-.252-.093-.437-.138-.62.138-.184.276-.712.893-.873 1.077-.161.184-.322.207-.597.069-.275-.138-1.16-.427-2.21-1.366-.817-.729-1.37-1.629-1.53-1.905-.16-.276-.017-.424.12-.562.124-.124.275-.322.413-.483.137-.161.183-.276.275-.459.092-.184.046-.344-.023-.482-.069-.138-.62-1.493-.849-2.045-.224-.54-.449-.467-.62-.476-.161-.007-.345-.009-.53-.009-.184 0-.483.069-.735.344-.252.276-.964.942-.964 2.298 0 1.355.987 2.665 1.125 2.849.138.184 1.943 2.968 4.707 4.161.658.284 1.172.453 1.573.58.66.21 1.261.18 1.736.109.529-.08 1.62-.663 1.85-1.31.229-.646.229-1.2.161-1.311-.069-.112-.253-.184-.528-.322z" />
        </svg>
      </a>
    </div>
  );
}

// Sub-components rendering Lucide icons safely via component type tags:

interface IconProps {
  className?: string;
}

function WhyChooseCard({ icon: Icon, title, text }: { icon: React.ComponentType<IconProps>, title: string, text: string }) {
  return (
    <div className="p-8 bg-black border border-slate-800 rounded-lg flex flex-col items-center text-center group hover:bg-brand-primary transition-colors">
      <div className="mb-6 text-brand-accent group-hover:scale-110 transition-transform">
        <Icon className="h-10 w-10" />
      </div>
      <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">
        {text}
      </p>
    </div>
  );
}

function CapabilityItem({ icon: Icon, title, text }: { icon: React.ComponentType<IconProps>, title: string, text: string }) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 p-3 bg-white shadow-sm border border-slate-100 rounded-lg text-brand-accent h-fit">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h4 className="font-bold mb-1 text-slate-800 uppercase tracking-wide text-sm">{title}</h4>
        <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function ServicePreviewCard({ title, text, link }: { title: string, text: string, link: string }) {
  return (
    <Link to={link} className="group p-8 bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-800/80 hover:border-brand-accent transition-all">
       <div className="flex justify-between items-start mb-6">
          <Settings className="h-10 w-10 text-brand-accent opacity-60 group-hover:opacity-100 transition-opacity" />
          <ArrowRight className="h-5 w-5 text-slate-600 group-hover:text-brand-accent transition-colors" />
       </div>
       <h3 className="text-xl font-bold mb-3">{title}</h3>
       <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
    </Link>
  );
}