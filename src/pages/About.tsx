import {CheckCircle2} from 'lucide-react';
import {motion} from 'motion/react';

export default function About() {
  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-brand-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl text-white mb-6">About PIW Engineering Works</h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            Precision-driven engineering solutions built on quality, expertise, and manufacturing excellence.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl text-slate-900 mb-8">Company Overview</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                PIW Engineering Works is a precision engineering and manufacturing company specializing in tooling solutions, CNC machining, fabrication systems, and industrial engineering support.
              </p>
              <p className="text-slate-600 leading-relaxed">
                With over 30 years of industry experience, we have established ourselves as a trusted partner for businesses seeking reliable and high-performance engineering solutions. Our commitment to precision, innovation, and customer satisfaction drives every project we undertake.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Operating from a fully equipped 4000+ sq. ft. manufacturing facility, we combine technical expertise with advanced production capabilities to deliver efficient, durable, and cost-effective engineering solutions that align with modern industrial standards.
              </p>
              <div className="bg-slate-50 p-8 rounded-lg border-l-4 border-brand-accent">
                <p className="italic text-slate-700">
                  "With the trust of 1000+ clients across various industrial sectors, we continue to deliver high-quality tooling systems, precision components, and customized engineering solutions."
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <StatBox number="30+" label="Years of Experience" />
               <StatBox number="1000+" label="Satisfied Clients" />
               <StatBox number="4000+" label="Sq. Ft. Facility" />
               <StatBox number="100%" label="Quality Commitment" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-slate-50 industrial-grid">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <motion.div 
                 whileHover={{y: -5}}
                 className="bg-white p-12 rounded-2xl shadow-xl border border-slate-100"
               >
                  <h3 className="text-2xl font-bold text-brand-primary mb-6 flex items-center gap-3">
                    <div className="h-8 w-2 bg-brand-accent rounded"></div>
                    Our Mission
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    To deliver precision-engineered manufacturing solutions that enhance productivity, quality, and operational efficiency for industries worldwide.
                  </p>
               </motion.div>
               
               <motion.div 
                 whileHover={{y: -5}}
                 className="bg-white p-12 rounded-2xl shadow-xl border border-slate-100"
               >
                  <h3 className="text-2xl font-bold text-brand-primary mb-6 flex items-center gap-3">
                    <div className="h-8 w-2 bg-brand-accent rounded"></div>
                    Our Vision
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    To become a trusted leader in precision engineering and tooling solutions through innovation, technical excellence, and long-term customer partnerships.
                  </p>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Strengths */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold uppercase tracking-tight text-slate-900">Our Core Strengths</h2>
            <div className="h-1 w-20 bg-brand-accent mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
            <StrengthItem text="30+ Years of Industry Experience" />
            <StrengthItem text="1000+ Satisfied Clients" />
            <StrengthItem text="4000+ Sq. Ft. Facility" />
            <StrengthItem text="Precision Engineering Expertise" />
            <StrengthItem text="Advanced Infrastructure" />
            <StrengthItem text="Skilled Technical Workforce" />
            <StrengthItem text="Quality-Driven Processes" />
            <StrengthItem text="Customized Industrial Solutions" />
            <StrengthItem text="Timely Project Delivery" />
          </div>
        </div>
      </section>
    </div>
  );
}

function StatBox({number, label}: {number: string, label: string}) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 text-center">
      <div className="text-4xl font-display font-bold text-brand-accent mb-2">{number}</div>
      <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">{label}</div>
    </div>
  );
}

function StrengthItem({text}: {text: string}) {
  return (
    <div className="flex items-center gap-4 group">
      <div className="bg-emerald-50 text-emerald-600 p-2 rounded-full group-hover:bg-brand-accent group-hover:text-white transition-colors">
        <CheckCircle2 className="h-5 w-5" />
      </div>
      <span className="text-slate-700 font-medium">{text}</span>
    </div>
  );
}
