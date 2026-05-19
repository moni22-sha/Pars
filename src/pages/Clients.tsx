import { ShieldCheck, Award, Globe, Building2, HelpCircle } from 'lucide-react';
import { motion, Variants } from 'motion/react';
import image3 from '../assets/images/image3.png';

export default function Clients() {
  const clients = [
    'TIDC India Ltd.',
    'Amalgamation Valeo Clutch',
    'Modine Thermal Systems',
    'Federal Mogul',
    'Petterssons',
    'Sundaram Fasteners',
    'TI Diamond Chain',
    'TI Metal Forming',
    'Magna Cosma',
    'PHA',
    'DAS',
    'Donga',
    'Cirteq (UK)',
    'Akai Fasteners (Sri Lanka)',
  ];

  // Motion variants for staggering the grid items cleanly
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04, // Slightly faster ripple feel for the client grid
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 120, damping: 16 },
    },
  };

  // New Variants for the feature badges layout
  const badgeContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, x: 30, y: 10 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 14 },
    },
  };

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Banner */}
      <section className="bg-slate-900 py-32 text-center relative overflow-hidden">
         <div className="absolute inset-0 z-0">
                          <img 
                            src={image3}
                            alt="Industrial Facility" 
                            className="w-full h-full object-cover opacity-20"
                          />
                          </div>
        {/* Animated grid overlay to give structural movement */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.35, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px]" 
        />
        
        {/* Ambient background glow tracking in */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'linear' }}
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-accent/10 blur-[120px] rounded-full pointer-events-none"
        />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.25 }}
          >
            <h1 className="text-5xl md:text-6xl text-white mb-6 font-bold tracking-tight">
              Our Clients
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
            className="text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Trusted by reputed industrial manufacturers and OEMs globally for over three decades.
          </motion.p>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="md:w-1/2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold uppercase tracking-wider mb-4">
                <Building2 className="h-3.5 w-3.5" /> Global Track Record
              </div>
              <h2 className="text-3xl md:text-4xl mb-6 font-bold text-slate-900 tracking-tight">
                Trusted by Leading Industrial Brands
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Over the years, PIW Engineering Works has earned the trust of reputed industrial manufacturers and OEMs by consistently delivering precision-engineered solutions with reliability and quality.
              </p>
            </motion.div>
            
            <motion.div 
              variants={badgeContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="md:w-1/2 grid grid-cols-2 gap-4 w-full"
            >
              <motion.div 
                variants={badgeVariants}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-center group cursor-default shadow-sm hover:bg-white hover:shadow-md hover:border-slate-200 transition-all duration-300"
              >
                <Globe className="h-8 w-8 text-brand-accent mx-auto mb-3 group-hover:rotate-[15deg] transition-transform duration-300" />
                <span className="block text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-brand-primary transition-colors">
                  Global Presence
                </span>
              </motion.div>
              
              <motion.div 
                variants={badgeVariants}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-center group cursor-default shadow-sm hover:bg-white hover:shadow-md hover:border-slate-200 transition-all duration-300"
              >
                <Award className="h-8 w-8 text-brand-accent mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="block text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-brand-primary transition-colors">
                  Industry Leader
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client List */}
      <section className="py-24 bg-slate-50 industrial-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {clients.map((client) => (
              <motion.div 
                key={client} 
                variants={itemVariants}
                whileHover={{ 
                  y: -6, 
                  scale: 1.03,
                  boxShadow: '0 10px 25px -5px rgb(0 0 0 / 0.05), 0 4px 10px -6px rgb(0 0 0 / 0.05)'
                }}
                className="bg-white p-8 rounded border border-slate-200 flex items-center justify-center text-center shadow-sm hover:border-brand-accent transition-all duration-300 group cursor-default"
              >
                <span className="text-slate-800 font-display font-medium text-sm group-hover:text-brand-accent uppercase tracking-wider transition-colors duration-300">
                  {client}
                </span>
              </motion.div>
            ))}
            
            {/* Final Placeholder grid cell */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 0.98 }}
              className="bg-slate-100/80 p-8 rounded border-dashed border-2 border-slate-300 flex flex-col items-center justify-center text-center gap-2 group cursor-default"
            >
              <HelpCircle className="h-5 w-5 text-slate-400 group-hover:text-slate-500 group-hover:animate-pulse transition-colors" />
              <span className="text-slate-500 font-medium italic text-sm">
                And many more industrial partners...
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.3, rotate: -45 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
            className="mb-6 flex justify-center text-brand-accent"
          >
            <div className="p-4 bg-brand-accent/5 rounded-full ring-8 ring-brand-accent/0 hover:ring-brand-accent/5 transition-all duration-500">
              <ShieldCheck className="h-12 w-12" />
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-3xl mb-6 font-bold text-slate-900 tracking-tight"
          >
            Our Commitment
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl text-slate-600 italic leading-relaxed font-light px-4"
          >
            "Our long-standing client relationships reflect our dedication to engineering precision, consistent quality, timely delivery, and customer satisfaction."
          </motion.p>
        </div>
      </section>
    </div>
  );
}