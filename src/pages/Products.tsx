import { Settings, Cpu, Boxes } from 'lucide-react';
// Fixed the broken asset file path and named configuration parameters
import Balancingdie from "../assets/images/Balancingdie.png";
import claw from "../assets/images/claw.png";
import Grinding from "../assets/images/Grinding.png";
import ejectorpins from "../assets/images/ejectorpins.png";
import fine from "../assets/images/fine.png";
import lower from "../assets/images/lower.png";
import punch from "../assets/images/punch.png";
import sheetmetal from "../assets/images/sheetmetal.png";
import slitting from "../assets/images/slitting.png";
import basedie from "../assets/images/basedie.png";
import matrix from '../assets/images/matrix.png';
import fine1 from '../assets/images/fine1.png';
import locate from '../assets/images/locate.png';
import image3 from '../assets/images/image3.png';
import notch from '../assets/images/notch.png';
import shaving from '../assets/images/shaving.png';
import ingauge from '../assets/images/ingauges.png';
import cavity from '../assets/images/cavity.png';
import coining from '../assets/images/coining.png';
import intake from '../assets/images/intake.png';
import core from '../assets/images/core.png';
import slot from '../assets/images/slot.png';
import side from '../assets/images/side.png';
import side1 from '../assets/images/side1.png';
import piercing from '../assets/images/intake.png';
import balancingfigures from '../assets/images/balancingfigures.png';
import collat from '../assets/images/collat.png';
import draw from '../assets/images/draw.png';
import shaft from '../assets/images/shaft.png';

interface ProductItem {
  name: string;
  description: string;
  image: string;
}

// Storing the direct list of product items
const productsList: ProductItem[] = [
  { 
    name: 'Balacing Die Block', 
    description: 'High-precision machined mounting flange manufactured with advanced CNC machining for industrial and engineering applications.', 
    image: Balancingdie 
  },
  { 
    name: 'Claw-blank', 
    description: 'High-precision progressive die base manufactured using advanced CNC machining and tooling technology.', 
    image: claw 
  },
  { 
    name: 'Ejector Pins', 
    description: 'High-precision dowel pins engineered for progressive die applications and precision tooling systems.', 
    image: ejectorpins 
  },
  { 
    name: 'Fine Blanking Dies', 
    description: 'High-precision CNC machined plate component manufactured for industrial tooling.', 
    image: fine 
  },
  { 
    name: 'Lower spring sheet', 
    description: 'High-precision carbide die insert manufactured for progressive dies and press tool applications.', 
    image: lower 
  },
  { 
    name: 'Punch Holder', 
    description: 'High-precision machined die block manufactured using advanced CNC machining.', 
    image: punch 
  },
  { 
    name: 'Sheet Metal', 
    description: 'High-precision slotted die plate manufactured using advanced wire-cut EDM and CNC machining.', 
    image: sheetmetal 
  },
  { 
    name: 'Slitting Die Insert', 
    description: 'High-precision wire-cut EDM die block manufactured for progressive die configurations.', 
    image: slitting 
  },
  { 
    name: 'Base Insert', 
    description: 'High-precision progressive die assembly designed for complex sheet metal stamping.', 
    image: basedie 
  },
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
  {
    name: 'Surface Grinding Machine',
    description: 'Advanced surface grinding machine used for precision die and tool manufacturing. Delivers high-accuracy surface finishing, superior flatness, and reliable performance for industrial machining applications.',
    image: Grinding
  },
  {
    name: 'Precision Circular Inspection Gauge',
    description: 'High-precision circular inspection gauge manufactured using advanced CNC machining for dimensional checking and industrial quality control applications.',
    image: ingauge
  },
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
  {
    name: 'Slot die ',
    description: 'High-precision CNC machined conical flange component manufactured for industrial tooling and precision engineering applications.',
    image: slot
  },
  {
    name: 'Side Piercing Tool Bottom ',
    description: 'High-precision progressive press tool assembly manufactured using advanced CNC machining for metal stamping and industrial production applications.',
    image: side
  },
  {
    name: 'Side Piercing Tool Top',
    description: 'High-precision press tool die set manufactured using advanced CNC machining for metal stamping and industrial production applications.',
    image: side1
  },
  {
    name: 'Fine Blanking Die Insert',
    description: 'High-precision CNC machined profile insert manufactured for press tool and industrial tooling applications.',
    image: fine1
  },
];

export default function Products() {
  return (
    <div className="bg-slate-50 min-h-screen flex flex-col w-full font-sans">
      {/* Hero Section */}
      <section className="relative h-[360px] flex items-center justify-center text-center bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src={Grinding} 
            alt="Products Background" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/80" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl text-white font-extrabold mb-4 tracking-tight">Our Products</h1>
          <p className="text-base md:text-lg text-slate-300 font-normal max-w-2xl mx-auto">
            Explore our comprehensive range of high-quality, precision-engineered components for various industrial applications.
          </p>
        </div>
      </section>

      {/* Intro/Sub-Hero Section */}
      <section className="py-12 bg-white border-b border-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
       <h2 className="text-3xl md:text-4xl text-slate-900 font-extrabold mb-2 tracking-tight relative pb-3 inline-block">
      Fine Blanking Tool
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-sky-600 rounded-full" />
    </h2>
          <p className="text-base text-slate-500 max-w-xl mx-auto mt-3">
            All precision components have been thoroughly validated, fully integrated, and are now ready for comprehensive exploration.
          </p>
        </div>
      </section>

      {/* Main Catalog Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
          {/* Catalog Header */}
          {/* <div className="mb-10 text-center md:text-left">
            <span className="text-sky-600 text-xs font-bold uppercase tracking-widest">Catalog Documentation</span>
            <h3 className="text-2xl md:text-3xl text-slate-900 font-bold mt-1">Available Models & Configurations</h3>
          </div> */}

          {/* Sub-item Products Box Rows Grid styled precisely like image_648eec.jpg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {productsList.map((product, idx) => (
              <div
                key={product.name + idx}
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md"
              >
                {/* Image Container wrapper */}
                <div className="p-4 w-full aspect-[4/3] relative overflow-hidden bg-white flex-shrink-0">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover rounded-xl border border-slate-100"
                  />
                </div>
                
                {/* Text Description Block */}
                <div className="p-5 pt-2 border-t border-slate-100 flex-grow flex flex-col justify-between bg-white">
                  <div>
                    <h4 className="text-base text-slate-800 font-bold tracking-tight mb-2 min-h-[2.5rem] flex items-center">
                      {product.name}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Standard Features Row Footer item component alignment links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-10 border-t border-slate-200">
             <FeatureItem icon={<Settings size={20} />} title="Precision Engineering" text="High dimensional accuracy and tight tolerances verified by inspection steps." />
             <FeatureItem icon={<Cpu size={20} />} title="Advanced Material" text="Selection of superior alloy variations for extended tool lifespan configurations." />
             <FeatureItem icon={<Boxes size={20} />} title="Custom Design" text="Tailored build metrics engineered around unique project blueprint limits." />
          </div>
        </div>
      </section>

      {/* Global Quality Recap */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 relative pb-3 inline-block">
            Global Quality Standards
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-sky-600 rounded-full" />
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
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

function FeatureItem({ icon, title, text }: FeatureItemProps) {
  return (
    <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
      <div className="text-sky-600 p-2.5 bg-sky-50 rounded-lg h-fit flex items-center justify-center">
        {icon}
      </div>
      <div className="space-y-1">
        <h4 className="text-slate-800 font-bold text-sm">{title}</h4>
        <p className="text-slate-500 text-xs leading-relaxed">{text}</p>
      </div>
    </div>
  );
}