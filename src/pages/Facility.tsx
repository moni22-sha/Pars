import { Factory } from 'lucide-react';
import { motion, Variants } from 'motion/react';
import image16 from '../assets/images/image16.png';
import image10 from '../assets/images/image10.png';
import image26 from '../assets/images/image26.png';
import image20 from '../assets/images/image20.png';
import image41 from '../assets/images/image41.png';
import image28 from '../assets/images/image28.png';
import image42 from '../assets/images/image42.png';
import percision from '../assets/images/percision.png';
import image43 from '../assets/images/image43.png';
import image44 from '../assets/images/image44.png';
// Import your other images here:
// import image11 from '../assets/images/image11.png';
// import image12 from '../assets/images/image12.png';

export default function Facility() {
  // Array updated to use full images for every single item
  const highlights = [
    { image: image42, title: 'CNC Machines' },
    { image: percision, title: 'Precision Tool Room' }, // Replace with your actual image variable
    { image: image41, title: 'Fabrication Unit' },     // Replace with your actual image variable
    { image: image44, title: 'Welding Setup' },         // Replace with your actual image variable
    { image: image28, title: 'Quality Inspection Systems' },
    { image: image43, title: 'Advanced Measuring Instruments' },
    { image: image16, title: 'Efficient Workflow Management' },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 15 
      }
    },
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-24 industrial-grid border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl mb-8 font-bold text-slate-900"
          >
            Our Facility
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end"
          >
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Our 4000+ sq. ft. manufacturing facility is equipped with advanced machinery and precision engineering systems.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Backed by over three decades of engineering expertise, we continuously invest in process improvement, quality systems, and manufacturing excellence to meet evolving industrial demands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="text-3xl mb-4 font-bold text-slate-900"
            >
              Facility Highlights
            </motion.h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 bg-brand-accent mx-auto"
            />
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group cursor-default"
              >
                {/* Image Space Container */}
                <div className="aspect-video w-full bg-slate-100 overflow-hidden relative border-b border-slate-100">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                
                {/* Title Container */}
                <div className="p-5">
                  <h3 className="font-bold text-slate-800 tracking-wide text-sm group-hover:text-brand-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <motion.div 
          initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
          whileInView={{ opacity: 0.05, rotate: 5, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 right-0 p-12 pointer-events-none"
        >
          <Factory className="h-96 w-96" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl mb-8 font-bold">Manufacturing Excellence</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Every stage of our manufacturing process is carefully monitored to ensure precision, consistency, and superior product quality.
              </p>
              <div className="space-y-6">
                <motion.div whileHover={{ x: 6 }} className="flex gap-4 items-start group">
                  <div className="bg-brand-accent/20 p-2 rounded text-brand-accent shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                    <CheckIcon />
                  </div>
                  <p className="text-slate-300 pt-0.5 group-hover:text-white transition-colors">
                    Strict quality and safety standards maintained throughout the facility.
                  </p>
                </motion.div>
                <motion.div whileHover={{ x: 6 }} className="flex gap-4 items-start group">
                  <div className="bg-brand-accent/20 p-2 rounded text-brand-accent shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                    <CheckIcon />
                  </div>
                  <p className="text-slate-300 pt-0.5 group-hover:text-white transition-colors">
                    Modern production technologies enabling efficient project turnaround.
                  </p>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Right Media Column */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl group">
                <img 
                  src={image16} 
                  alt="Excellence" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </div>
              <motion.div 
                animate={{ 
                  scale: [1, 1.08, 1],
                  boxShadow: [
                    "0 0 0 0px rgba(59, 130, 246, 0.4)", 
                    "0 0 0 12px rgba(59, 130, 246, 0)", 
                    "0 0 0 0px rgba(59, 130, 246, 0)"
                  ]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -bottom-6 -right-6 h-24 w-24 bg-brand-accent rounded-full flex items-center justify-center font-bold text-xs text-white"
              >
                ISO 9001
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  );
}