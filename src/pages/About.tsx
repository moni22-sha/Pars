import { CheckCircle2, Factory, Target, Compass, Users, Award, ShieldCheck, Zap, Briefcase } from 'lucide-react';
import { motion, Variants } from 'motion/react';
import image28 from '../assets/images/image28.png';
import ceo from '../assets/images/ceo.png';
import logo1 from '../assets/images/logo1.png';
import logo2 from '../assets/images/logo2.png';
import logo4 from '../assets/images/logo4.png';
import logo5 from '../assets/images/logo6.png'; // matches your current project layout
import logo6 from '../assets/images/logo7.png';
import logo7 from '../assets/images/logo8.png';
import logo8 from '../assets/images/logo9.png';
import logo9 from '../assets/images/logo10.png';
import logo10 from '../assets/images/logo11.png';
import logo12 from '../assets/images/logo12.png';
import logo13 from '../assets/images/logo13.png';
import logo14 from '../assets/images/logo14.png';
import logo15 from '../assets/images/logo15.png';

export default function About() {
  // Stagger wrapper for lists or grids
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const clients = [
    { name: 'TIDC India Ltd.', logo: logo1 },
 
    { name: 'Modine Thermal Systems', logo: logo15 },
    { name: 'Federal Mogul', logo: logo4 },
    { name: 'Petterssons', logo: logo12 },
    { name: 'Sundaram Fasteners', logo: logo5 },
    { name: 'TI Diamond Chain', logo: logo14 },
  
    { name: 'Magna Cosma', logo: logo6 },
  
  
    { name: 'Akai Fasteners (Sri Lanka)', logo: logo10 },
  ];

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Banner */}
      <section className="bg-brand-primary py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={image28}
            alt="Industrial Facility" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Subtle sliding texture layer */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none"
        />
        
        {/* Ambient geometric light effect */}
        <motion.div 
          initial={{ opacity: 0, x: '20%' }}
          animate={{ opacity: 0.2, x: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute -right-20 -bottom-20 w-[500px] h-[500px] bg-brand-accent/30 rounded-full blur-[100px] pointer-events-none hidden md:block"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            About Advanex Toolings
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl leading-relaxed font-light"
          >
            Precision-driven engineering solutions built on quality, three decades of industrial expertise, and manufacturing excellence.
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold uppercase tracking-wider">
                <Factory className="h-3.5 w-3.5" /> Corporate Profile
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Company Overview</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Advanex Toolings is a premier precision engineering and manufacturing firm located in Ambattur, specializing in high-performance tooling systems, press tools, jig fixtures, plastic moulds, and precision automotive components.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Founded in 2020 alongside proprietrix Mrs. Sivajothi, Advanex Toolings delivers advanced job work infrastructure including VMC, wire cutting, and surface grinding, serving critical production sectors with uncompromising engineering fidelity.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Operating across 2 specialized industrial units, our modern infrastructure utilizes premium, high-precision vertical machining and electrical discharge machines imported directly from Japan and Germany. This ensures absolute consistency, cost efficiency, and world-class quality standards for complex engineering projects.
              </p>
            </motion.div>
            
            {/* Staggered Stat Blocks */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
               <StatBox number="30+" label="Years of Leadership" />
               <StatBox number="2" label="Production Units" />
               <StatBox number="12" label="Expert Workforce" />
               <StatBox number="100%" label="Quality Standards" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Profile Section */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            
            {/* Image Frame with Motion */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 90 }}
              className="md:col-span-1 flex flex-col items-center"
            >
              <div className="w-full max-w-[280px] aspect-[3/4] bg-slate-200 rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center relative overflow-hidden shadow-inner group hover:border-brand-accent transition-colors">
                <img src={ceo} alt="Mr. Iyyappan Mohanraj" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="text-center mt-4">
                <h4 className="text-lg font-bold text-slate-900">Mr. Iyyappan Mohanraj</h4>
                <p className="text-xs font-semibold text-brand-accent uppercase tracking-widest mt-0.5">CEO, Advanex Toolings</p>
              </div>
            </motion.div>

            {/* Profile Journey Details with Motion */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="md:col-span-2 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-brand-primary border border-slate-200 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm">
                <Briefcase className="h-3.5 w-3.5 text-brand-accent" /> Inspirational Entrepreneur
              </div>
              <h3 className="text-3xl font-bold text-slate-900 tracking-tight">The Entrepreneurial Journey</h3>
              
              <div className="prose prose-slate text-slate-600 space-y-4">
                <p className="leading-relaxed">
                  Driven by determination and a strong desire to become an entrepreneur, Mr. Iyyappan pursued technical education as a Machinist Grinder (Trade) course at Salem ITI, graduating in 1982, and later completed his part-time Diploma in Mechanical Engineering at Central Polytechnic, Adyar.
                </p>
                <p className="leading-relaxed">
                  His defining moment came in 1996 when he started Pars Industries Works. Building on that rich baseline foundation of field experience and market success, he launched Advanex Toolings in 2020. 
                </p>
                <p className="leading-relaxed">
                  With deep professional roots navigating complex industry verticals for around three decades, his vision remains focused on building long-term workforce retention, superior production quality standards, and consistent project execution.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ type: 'spring', stiffness: 70, damping: 14 }}
               whileHover={{ y: -8, scale: 1.01 }}
               className="bg-slate-50 p-12 rounded-2xl shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 group"
             >
                <h3 className="text-2xl font-bold text-brand-primary mb-6 flex items-center gap-3">
                  <div className="p-2 bg-brand-accent/10 text-brand-accent rounded-lg group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                    <Target className="h-5 w-5" />
                  </div>
                  Our Mission
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  To deliver precision-engineered manufacturing solutions that enhance productivity, quality, and operational efficiency for industries worldwide.
                </p>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ type: 'spring', stiffness: 70, damping: 14, delay: 0.15 }}
               whileHover={{ y: -8, scale: 1.01 }}
               className="bg-slate-50 p-12 rounded-2xl shadow-md hover:shadow-xl border border-slate-100 transition-all duration-300 group"
             >
                <h3 className="text-2xl font-bold text-brand-primary mb-6 flex items-center gap-3">
                  <div className="p-2 bg-brand-accent/10 text-brand-accent rounded-lg group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                    <Compass className="h-5 w-5 transition-transform" />
                  </div>
                  Our Vision
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  To become a trusted leader in precision engineering and tooling solutions through innovation, technical excellence, and long-term customer partnerships.
                </p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Major Clients Section */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Colorful top badge logo centered cleanly above the text */}
           

            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-slate-900 uppercase"
            >
              Trusted by Industry Leaders
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 bg-brand-accent mx-auto mt-4"
            />
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-slate-500 max-w-xl mx-auto"
            >
              We engineer components for major domestic and international brands across manufacturing corridors.
            </motion.p>
          </div>
          
          {/* Grid Layout rendering the actual Clients list with Logos */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-stretch text-center font-semibold text-slate-500 text-sm tracking-wider uppercase"
          >
            {clients.map((client, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02, boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.05)' }}
                className="p-6 bg-white shadow-sm rounded-xl transition-all border border-slate-100 cursor-default flex flex-col items-center justify-between gap-4"
              >
                {client.logo ? (
                  <div className="h-12 w-full flex items-center justify-center transition-all duration-300">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} Commercial Logo Reference`} 
                      className="max-h-full max-w-[85%] object-contain"
                    />
                  </div>
                ) : (
                  <div className="h-12 w-full flex items-center justify-center text-slate-300">
                    <Briefcase className="h-6 w-6" />
                  </div>
                )}
                <span className="text-xs font-bold text-slate-600 mt-2 block tracking-normal text-center w-full border-t border-slate-50 pt-3">
                  {client.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-slate-900 uppercase"
            >
              Our Core Strengths
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 bg-brand-accent mx-auto mt-4"
            />
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12"
          >
            <StrengthItem variants={itemVariants} text="30+ Years Tooling Industry Domain Knowledge" icon={<Award className="h-5 w-5" />} />
            <StrengthItem variants={itemVariants} text="Imported High-Precision CNC & EDM Machinery" icon={<Zap className="h-5 w-5" />} />
            <StrengthItem variants={itemVariants} text="Dual Production Facility Framework" icon={<Factory className="h-5 w-5" />} />
            <StrengthItem variants={itemVariants} text="Jig, Fixtures & Plastic Mould Capabilities" icon={<ShieldCheck className="h-5 w-5" />} />
            <StrengthItem variants={itemVariants} text="Advanced German & Japanese Production Line" icon={<Compass className="h-5 w-5" />} />
            <StrengthItem variants={itemVariants} text="Dedicated 12-Member Technical Team" icon={<Users className="h-5 w-5" />} />
            <StrengthItem variants={itemVariants} text="Rigorous Quality & Precision Compliance" icon={<CheckCircle2 className="h-5 w-5" />} />
            <StrengthItem variants={itemVariants} text="Comprehensive Job Work VMC Capabilities" icon={<Factory className="h-5 w-5" />} />
            <StrengthItem variants={itemVariants} text="Timely Logistics & Contract Commitments" icon={<CheckCircle2 className="h-5 w-5" />} />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function StatBox({number, label}: {number: string, label: string}) {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 }
      }}
      whileHover={{ 
        y: -6, 
        scale: 1.03,
        boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.05)'
      }}
      className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg border border-slate-100 text-center transition-all duration-300 cursor-default"
    >
      <motion.div 
        initial={{ scale: 0.6 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 150, delay: 0.2 }}
        className="text-4xl font-bold text-brand-accent mb-2 tracking-tight"
      >
        {number}
      </motion.div>
      <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">{label}</div>
    </motion.div>
  );
}

function StrengthItem({text, variants, icon}: {text: string, variants: Variants, icon?: React.ReactNode}) {
  return (
    <motion.div 
      variants={variants}
      whileHover={{ x: 6 }}
      className="flex items-center gap-4 group cursor-default"
    >
      <div className="bg-emerald-50 text-emerald-600 p-2 rounded-full group-hover:bg-brand-accent group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
        {icon || <CheckCircle2 className="h-5 w-5" />}
      </div>
      <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
        {text}
      </span>
    </motion.div>
  );
}