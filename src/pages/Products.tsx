import { useState, cloneElement, ReactElement } from 'react';
import { FileText, ChevronRight, Settings, Cpu, Boxes } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
// Fixed the broken asset file path and named configuration parameters
import balancingfigures from "../assets/images/balancingfigures.png";
import Balancingdie from "../assets/images/Balancingdie.png";
import claw from "../assets/images/claw.png";
import collat from "../assets/images/collat.png";
import Grinding from "../assets/images/Grinding.png";
import ejectorpins from "../assets/images/ejectorpins.png";
import fine from "../assets/images/fine.png";
import Gauges from "../assets/images/Gauges.png";
import lower from "../assets/images/lower.png";
import piercing from "../assets/images/piercing.png";
import punch from "../assets/images/punch.png";
import shaft from "../assets/images/shaft.png";
import sheetmetal from "../assets/images/sheetmetal.png";
import slitting from "../assets/images/slitting.png";
import slot from "../assets/images/slot.png";
import ingauge from "../assets/images/ingauges.png";
import draw from "../assets/images/draw.png";
import cavity from "../assets/images/cavity.png";
import coining from "../assets/images/coining.png";
import intake from "../assets/images/intake.png";
import core from "../assets/images/core.png";
import side from "../assets/images/side.png";
import side1 from "../assets/images/side1.png";
import Base from "../assets/images/Base.png";
import matrix from '../assets/images/matrix.png';
import fine1 from '../assets/images/fine1.png';
import locate from '../assets/images/locate.png';
import image3 from '../assets/images/image3.png';
import notch from '../assets/images/notch.png';
import shaving from '../assets/images/shaving.png';


const categories = [
  'Progressive Dies', 
  'Press Tools', 
  'Jigs & Fixtures', 
  'Gauges', 
  'Welding Fixtures', 
  'Precision Components'
];

interface SubProduct {
  name: string;
  description: string;
  image: string;
}

interface CategoryDetail {
  title: string;
  description: string;
  mainImage: string;
  subProducts: SubProduct[];
}

const productDetails: Record<string, CategoryDetail> = {
  'Progressive Dies': {
    title: 'Progressive Dies',
    description: 'Our progressive dies are engineered for high-speed and high-volume production applications. We focus on exceptional precision and consistency, ensuring that every component meets tight tolerances across millions of cycles to optimize your manufacturing efficiency.',
    mainImage: Balancingdie,
    subProducts: [
      {
        name: 'Balacing Die Block',
        description: 'High-precision machined mounting flange manufactured with advanced CNC machining for industrial and engineering applications. Durable, accurate, and designed for superior performance and reliability.',
        image: Balancingdie
      },
       {
        name: 'Claw-blank',
        description: 'High-precision progressive die base manufactured using advanced CNC machining and tooling technology for press tool applications. Designed for durability, accurate alignment, and high-performance metal stamping operations.',
        image: claw
      },
        {
        name: 'Ejector Pins',
        description: 'High-precision dowel pins engineered for progressive die applications and precision tooling systems. Manufactured with superior CNC machining and hardened steel construction, these pins provide accurate alignment, exceptional wear resistance, and long-lasting performance in demanding industrial environments.',
        image: ejectorpins
      },
      {
        name: 'Fine Blanking Dies',
        description: 'High-precision CNC machined plate component manufactured for industrial tooling and engineering applications. Designed with superior surface finishing, intricate pocket machining, and high dimensional accuracy for reliable performance in precision assemblies.',
        image: fine
      },
      {
        name: 'Lower spring sheet',
        description: 'High-precision carbide die insert manufactured for progressive dies and press tool applications. Engineered with superior hardness, wear resistance, and dimensional accuracy for reliable high-speed metal stamping performance.',
        image: lower
      },
      {
        name: 'Punch Holder',
        description: 'High-precision machined die block manufactured using advanced CNC machining for progressive die and press tool applications.',
        image: punch
      },
       {
        name: 'Sheet Metal',
        description: 'High-precision slotted die plate manufactured using advanced wire-cut EDM and CNC machining technology for progressive die and industrial tooling applications.',
        image: sheetmetal
      },
      {
        name: 'Slitting Die Insert',
        description: 'High-precision wire-cut EDM die block manufactured for progressive die and press tool applications. Engineered with intricate profile cutting, superior dimensional accuracy, and excellent surface finishing for reliable high-performance metal stamping and industrial tooling operations.',
        image: slitting
      },
       {
        name: 'Base Insert',
        description: 'High-precision progressive die assembly designed for complex sheet metal stamping and forming applications in automotive and industrial manufacturing.',
        image: Base
      },
    ]
  },
  'Press Tools': {
    title: 'Press Tools',
    description: 'We manufacture reliable and durable press tooling solutions designed for demanding industrial forming and stamping operations. Each tool is built with high-grade materials to withstand heavy use while maintaining superior production quality.',
    mainImage: slot,
    subProducts: [
      {
        name: 'Slot die ',
        description: 'High-precision CNC machined conical flange component manufactured for industrial tooling and precision engineering applications.',
        image:slot
      },
      {
        name: 'Side Piercing Tool Bottom ',
        description: 'High-precision progressive press tool assembly manufactured using advanced CNC machining for metal stamping and industrial production applications.',
        image:side
      },
       {
        name: 'Side Piercing Tool Top',
        description: 'High-precision press tool die set manufactured using advanced CNC machining for metal stamping and industrial production applications.',
        image:side1
      },
       {
        name: 'Fine Blanking Die Insert',
        description: 'High-precision CNC machined profile insert manufactured for press tool and industrial tooling applications.',
        image:fine1
      },
    ]
  },
  'Jigs & Fixtures': {
    title: 'Jigs & Fixtures',
    description: 'PIW provides custom-engineered jigs and fixtures developed specifically to improve production accuracy, reduce setup times, and ensure operational efficiency in complex manufacturing workflows.',
    mainImage: cavity,
    subProducts: [
      {
        name: 'Cavity Fixtures',
        description: 'High-precision machining fixture plate designed for jig & fixture and industrial assembly applications.',
        image: cavity
      },
       {
        name: 'Coining Die',
        description: 'High-precision CNC machined tooling plate designed for fixture positioning, indexing, and industrial assembly applications.',
        image: coining
      },
       {
        name: 'Intake',
        description: 'High-precision CNC machined holding fixture designed for automotive and industrial assembly applications.',
        image: intake
      },
      {
        name: 'Core Insert',
        description: 'High-precision machining fixture plate designed for component holding, positioning, and inspection applications in industrial manufacturing.',
        image: core
      },
    ]
  },
  'Gauges': {
    title: 'Gauges',
    description: 'High-precision machined die plate manufactured using advanced CNC machining technology for tooling and industrial applications',
    mainImage: Gauges,
    subProducts: [
    {
        name: 'Precision Circular Inspection Gauge',
        description: 'High-precision circular inspection gauge manufactured using advanced CNC machining for dimensional checking and industrial quality control applications.',
        image: ingauge
      },
    ]
  },
  'Welding Fixtures': {
    title: 'Welding Fixtures',
    description: 'Built for stability and alignment precision, our heavy-duty welding fixture systems enhance manufacturing productivity. They are engineered to handle complex assemblies with robust structural integrity.',
    mainImage: Grinding,
    subProducts: [
       {
        name: 'Surface Grinding Machine',
        description: 'Advanced surface grinding machine used for precision die and tool manufacturing. Delivers high-accuracy surface finishing, superior flatness, and reliable performance for industrial machining applications.',
        image: Grinding
      },
    ]
  },
  'Precision Components': {
    title: 'Precision Components',
    description: 'We deliver high-quality machined components manufactured to meet demanding industrial specifications. Using advanced CNC technology, we ensure superior finish quality and dimensional accuracy for every part.',
    mainImage: balancingfigures,
    subProducts: [
      {
        name: 'Balancing Figures',
        description: 'High-quality precision machined flange components manufactured with advanced CNC machining for industrial, tooling, and engineering applications with superior accuracy and durability.',
        image: balancingfigures
      },
       {
        name: 'Collat',
        description: 'High-precision collet component manufactured using advanced CNC machining for tooling, press tool, and industrial applications. Engineered for superior accuracy, durability, and reliable gripping performance.',
        image: collat
      },
        {
        name: 'Piercing Punch',
        description: 'High-precision CNC machined cylindrical tooling component manufactured for industrial tooling, die assemblies, and engineering applications.',
        image: piercing
      },
     {
        name: 'Shaft Component',
        description: 'High-precision machined shaft and collet assembly manufactured using advanced CNC turning and grinding processes for industrial tooling and precision engineering applications.',
        image: shaft
      },
       {
        name: 'Draw Die',
        description: 'High-precision machined circular mounting plate designed for industrial tooling, rotary assemblies, and precision engineering applications.',
        image: draw
      },
       {
        name: 'Matrix Die',
        description: 'High-precision CNC machined component manufactured for industrial tooling and engineering applications. Designed with superior surface finish, accurate slot profiling, and durable material quality for reliable precision performance in advanced manufacturing industries.',
        image: matrix
      },
        {
        name: 'Locating Insert',
        description: 'High-precision CNC machined circular flange component manufactured for industrial tooling, automation, and engineering applications.',
        image: locate
      },
      {
        name: 'Window Shaving Punch',
        description: 'High-precision CNC machined threaded block component manufactured for industrial tooling, fixture systems, and precision engineering applications.',
        image: image3
      },
       {
        name: 'Notch Cam Slide',
        description: 'High-precision CNC machined rectangular tooling component manufactured for industrial engineering and precision tooling applications.',
        image: notch
      },
       {
        name: 'Shaving Punch',
        description: 'High-precision CNC machined threaded tooling component manufactured for industrial fixture systems and precision engineering applications.',
        image: shaving
      },
    ]
  }
};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('Progressive Dies');
  const currentCategory = productDetails[activeCategory];

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-center bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src={Grinding} 
            alt="Products Background" 
            className="w-full h-full object-cover opacity-20 filter grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl text-white font-black mb-6 tracking-tight">Our Products</h1>
          <p className="text-lg md:text-xl text-slate-300 font-medium max-w-2xl mx-auto">
            Explore our comprehensive range of high-quality, precision-engineered components for various industrial applications.
          </p>
        </div>
      </section>

      {/* Category Selection Tab Bar Area */}
      <section className="bg-[#1e293b] py-6 sticky top-[0px] z-40 border-b border-slate-800 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 transform ${
                    activeCategory === cat 
                    ? 'bg-amber-500 text-slate-900 scale-105 shadow-lg shadow-amber-500/20' 
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
           </div>
        </div>
      </section>

      {/* Main Focus Detail Unit Box Container */}
      <section className="py-16 bg-[#0f172a] relative overflow-hidden min-h-[500px]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
               <motion.div
                 key={activeCategory}
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -20 }}
                 transition={{ duration: 0.4 }}
                 className="bg-blue-600 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[450px]"
               >
                  {/* Text-based info left module column */}
                  <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center text-white space-y-6">
                     <div className="bg-amber-400 w-16 h-16 rounded-2xl flex items-center justify-center shadow-md transform -rotate-3">
                        <FileText className="text-slate-900 h-8 w-8" />
                     </div>
                     <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                        {activeCategory}
                     </h2>
                     <p className="text-lg text-blue-50 leading-relaxed font-medium">
                        {currentCategory?.description}
                     </p>
                     
                     <div className="pt-4 flex flex-wrap items-center gap-4">
                        <button className="bg-white text-blue-700 px-8 py-3.5 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg flex items-center gap-2 hover:translate-x-1">
                           <span>Inquiry Now</span> 
                           <ChevronRight className="h-5 w-5" />
                        </button>
                        <button className="text-white border-b-2 border-white/30 hover:border-white font-bold py-1.5 transition-colors">
                           Download Technical Catalog
                        </button>
                     </div>
                  </div>

                  {/* Main Highlight Visual Section right column */}
                  <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-full bg-slate-950">
                    <img 
                      src={currentCategory?.mainImage} 
                      alt={activeCategory} 
                      className="absolute inset-0 w-full h-full object-cover opacity-90 transition-all duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-l from-transparent via-blue-900/20 to-blue-600/40 mix-blend-multiply" />
                  </div>
               </motion.div>
            </AnimatePresence>

            {/* Sub-item Products Box Rows Grid */}
            <div className="mt-20 space-y-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-slate-800 pb-4">
                <div>
                  <span className="text-amber-400 text-sm font-bold uppercase tracking-widest">Catalog Catalogues</span>
                  <h3 className="text-2xl md:text-3xl text-white font-bold mt-1">Available Models & Configurations</h3>
                </div>
                <p className="text-slate-400 text-sm max-w-sm mt-2 md:mt-0">
                  Select variants engineered specifically to match specialized technical print documentation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AnimatePresence mode="wait">
                  {currentCategory?.subProducts.map((product, idx) => (
                    <motion.div
                      key={product.name + idx}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl p-6 flex flex-col sm:flex-row gap-6 hover:border-slate-700 transition-all group"
                    >
                      <div className="sm:w-1/3 aspect-square relative rounded-xl overflow-hidden bg-slate-950 flex-shrink-0">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="sm:w-2/3 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <h4 className="text-xl text-white font-bold group-hover:text-amber-400 transition-colors">
                            {product.name}
                          </h4>
                          
                          <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed">
                            {product.description}
                          </p>
                        </div>

                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2">
                          <span>View Technical Details</span>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
            
            {/* Standard Features Row Footer item component alignment links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-slate-800/60">
               <FeatureItem icon={<Settings />} title="Precision Engineering" text="High dimensional accuracy and tight tolerances verified by inspection steps." />
               <FeatureItem icon={<Cpu />} title="Advanced Material" text="Selection of superior alloy variations for extended tool lifespan configurations." />
               <FeatureItem icon={<Boxes />} title="Custom Design" text="Tailored build metrics engineered around unique project blueprint limits." />
            </div>
         </div>
      </section>

      {/* Global Quality Recap */}
      <section className="py-24 bg-white border-t border-slate-100">
         <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl font-bold text-slate-900 relative pb-3 inline-block">
              Global Quality Standards
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-amber-400 rounded-full" />
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
              Every component manufactured at PIW Engineering Works undergoes stringent quality checks and inspections using advanced measuring instruments to ensure 100% compliance with international standards.
            </p>
         </div>
      </section>
    </div>
  );
}

interface FeatureItemProps {
  icon: React.ReactElement;
  title: string;
  text: string;
}

// Ensure the "I" is capitalized to match <FeatureItem /> exactly
function FeatureItem({ icon, title, text }: FeatureItemProps) {
  return (
    <div className="flex gap-4 p-6 bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-2xl">
       <div className="text-amber-400 p-3 bg-slate-950 rounded-xl h-fit flex items-center justify-center">
          {icon}
       </div>
       <div className="space-y-1">
          <h4 className="text-white font-bold text-base">{title}</h4>
          <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
       </div>
    </div>
  );
}