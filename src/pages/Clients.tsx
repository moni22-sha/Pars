import { ShieldCheck, Award, Globe } from 'lucide-react';
import { motion, Variants } from 'motion/react';

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
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-slate-900 py-24 text-center relative overflow-hidden">
        {/* Abstract subtle background layout graphic */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl text-white mb-6 font-bold"
          >
            Our Clients
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-400 font-light max-w-2xl mx-auto"
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
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl mb-6 font-bold text-slate-900">Trusted by Leading Industrial Brands</h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Over the years, PIW Engineering Works has earned the trust of reputed industrial manufacturers and OEMs by consistently delivering precision-engineered solutions with reliability and quality.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="md:w-1/2 grid grid-cols-2 gap-4"
            >
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-center group cursor-default shadow-sm hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <Globe className="h-8 w-8 text-brand-accent mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="block text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-brand-primary transition-colors">Global Presence</span>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-center group cursor-default shadow-sm hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <Award className="h-8 w-8 text-brand-accent mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="block text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-brand-primary transition-colors">Industry Leader</span>
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
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {clients.map((client) => (
              <motion.div 
                key={client} 
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white p-8 rounded border border-slate-200 flex items-center justify-center text-center shadow-sm hover:shadow-md hover:border-brand-accent transition-all duration-300 group cursor-default"
              >
                <span className="text-slate-800 font-display font-medium text-sm group-hover:text-brand-accent uppercase tracking-wider transition-colors duration-300">
                  {client}
                </span>
              </motion.div>
            ))}
            
            {/* Final Placeholder grid cell */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 0.99 }}
              className="bg-slate-100 p-8 rounded border-dashed border-2 border-slate-300 flex items-center justify-center text-center"
            >
              <span className="text-slate-500 font-medium italic text-sm">
                And many more industrial partners...
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 0.2, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <ShieldCheck className="h-16 w-16 text-brand-accent mx-auto mb-8" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl mb-6 font-bold text-slate-900"
          >
            Our Commitment
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-slate-600 italic leading-relaxed font-light"
          >
            "Our long-standing client relationships reflect our dedication to engineering precision, consistent quality, timely delivery, and customer satisfaction."
          </motion.p>
        </div>
      </section>
    </div>
  );
}