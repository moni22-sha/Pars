import React from 'react';
import { Drill } from 'lucide-react';
import { motion } from 'motion/react';

export default function PrecisionComponents() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col lg:flex-row gap-12 items-center p-8 md:p-10 rounded-2xl border border-slate-100 hover:border-brand-accent hover:bg-slate-50/30 transition-all duration-300 relative group"
    >
      <div className="w-full lg:w-1/3">
        <div className="p-10 bg-slate-50 text-brand-accent rounded-2xl w-full aspect-square flex items-center justify-center relative overflow-hidden group-hover:bg-white group-hover:border group-hover:border-slate-100 transition-colors duration-300 shadow-inner">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            className="relative z-10 text-brand-accent"
          >
            <Drill className="h-24 w-24 opacity-80 stroke-[1.25]" />
          </motion.div>
          <div className="absolute font-display font-black text-8xl md:text-9xl right-4 bottom-2 select-none text-slate-900 pointer-events-none transition-all duration-500">
            01
          </div>
        </div>
      </div>

      <div className="w-full lg:w-2/3">
        <h3 className="text-3xl font-bold mb-4 text-slate-900 tracking-tight">Precision Components</h3>
        <p className="text-slate-600 text-lg leading-relaxed mb-8 font-normal">
          High-precision components manufactured to exacting tolerances for demanding industrial applications. We deliver consistent dimensional accuracy and excellent surface finish.
        </p>
        <button className="flex items-center text-brand-accent font-bold group text-base relative">
          <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-brand-accent group-hover:after:w-full after:transition-all after:duration-300 pb-1">
            Discuss your requirement
          </span>
        </button>
      </div>
    </motion.div>
  );
}