import { useState } from 'react';
import { FileText, ChevronRight, Settings, Cpu, Boxes } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
// Fixed the broken asset file path and named configuration parameters
import image1 from '../assets/images/image1.png';
import percision from '../assets/images/percision.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
import image4 from '../assets/images/image4.png';
import image5 from '../assets/images/image5.png';
import image6 from '../assets/images/image6.png';
import image7 from '../assets/images/image7.png';
import image8 from '../assets/images/image8.png';
import image9 from '../assets/images/image9.png';
import image10 from '../assets/images/image10.png';
import image11 from '../assets/images/image11.png';
import image12 from "../assets/images/image12.png";
import image14 from "../assets/images/image14.png";
import image15 from "../assets/images/image15.png";
import image16 from "../assets/images/image16.png";
import image17 from "../assets/images/image17.png";
import image18 from "../assets/images/image18.png";
import image19 from "../assets/images/image19.png";
import image20 from "../assets/images/image20.png";
import image21 from "../assets/images/image21.png";
import image22 from "../assets/images/image22.png";
import image23 from "../assets/images/image23.png";
import image24 from "../assets/images/image24.png";
import image25 from "../assets/images/image25.png";
import image27 from "../assets/images/image27.png";
import image28 from "../assets/images/image28.png";
import image29 from "../assets/images/image29.png";
import image30 from "../assets/images/image30.png";
import image31 from "../assets/images/image31.png";
import image32 from "../assets/images/image32.png";
import image33 from "../assets/images/image33.png";
import image34 from "../assets/images/image34.png";
import image36 from "../assets/images/image36.png";
import image37 from "../assets/images/image37.png";
import image38 from "../assets/images/image38.png";
import image39 from "../assets/images/image39.png";
import image40 from "../assets/images/image40.png";
import image42 from "../assets/images/image42.png";



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
  material: string;
  specs: string;
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
    mainImage: image29,
    subProducts: [
     
      {
        name: 'Spline Die Block',
        material: 'HCHCR Premium Hardened Steel',
        specs: 'A high-precision CNC-machined die block featuring an internal spline profile, designed for press tooling, broaching, and precision metal forming applications..',
        image: image1
      },
       {
        name: 'Blanking Die Insert',
        material: 'HCHCR Premium Hardened Steel',
        specs: 'A Blanking Die Insert is a replaceable, high-precision cutting component used in industrial stamping presses to punch flat shapes out of sheet metal.',
        image: image9
      },
        {
        name: 'Precision Dowel Pins',
        material: 'HCHCR Premium Hardened Steel',
        specs: 'High-precision dowel pins engineered for progressive die applications and precision tooling systems. Manufactured with superior CNC machining and hardened steel construction, these pins provide accurate alignment, exceptional wear resistance, and long-lasting performance in demanding industrial environments.',
        image: image10
      },
      {
        name: 'Window Shaving Punch (511)',
        material: 'HCHCR Premium Hardened Steel',
        specs: 'High-precision Window Shaving Punch (511) manufactured from premium SKD11 tool steel with hardness of HRC 58–60 for superior wear resistance and dimensional accuracy.',
        image: image12
      },
      
      
       {
        name: 'Sodick AG400L Wire Cut EDM',
        material: 'HCHCR Premium Hardened Steel',
        specs:"The Sodick AG400L is a high-precision CNC Wire Cut EDM machine used for cutting complex and accurate metal components using electrically charged wire technology.",
        image: image25
      },
       {
        name: 'Precision Locking Plate',
        material: 'HCHCR Premium Hardened Steel',
        specs:"Used for accurate positioning, locking, and alignment of mechanical components in precision engineering and industrial assemblies.",
        image: image37
      },
      {
        name: 'Progressive Die Insert',
        material: 'HCHCR Premium Hardened Steel',
        specs:'Used in progressive die operations for precision cutting, shaping, and forming of sheet metal components with high accuracy.',
        image: image40
      },
    ]
  },
  'Press Tools': {
    title: 'Press Tools',
    description: 'We manufacture reliable and durable press tooling solutions designed for demanding industrial forming and stamping operations. Each tool is built with high-grade materials to withstand heavy use while maintaining superior production quality.',
    mainImage: image20,
    subProducts: [
      {
        name: 'Industrial Machined Parts',
        material: 'WPS High-Carbon Steel',
        specs: 'A collection of high-precision CNC machined metal components manufactured for industrial tooling, automation systems, jigs & fixtures, and mechanical engineering applications.',
        image: image20
      },
       {
        name: 'Notch Cam Slider',
        material: 'WPS High-Carbon Steel',
        specs: 'A precision CNC-machined notch cam slide manufactured from SKD11 hardened tool steel, designed for accurate sliding and cam movement operations in industrial press tooling and metal forming applications.',
        image: image22
      }
    ]
  },
  'Jigs & Fixtures': {
    title: 'Jigs & Fixtures',
    description: 'PIW provides custom-engineered jigs and fixtures developed specifically to improve production accuracy, reduce setup times, and ensure operational efficiency in complex manufacturing workflows.',
    mainImage: image15,
    subProducts: [
      {
        name: 'Tooling Clamping Kit',
        material: 'Hardened Structural Steel Alloys',
        specs: 'High-strength tooling clamping kit designed for secure workholding in CNC machining, milling, drilling, and industrial fixture applications. Manufactured from hardened steel for durability and precision, this kit ensures stable component positioning, improved machining accuracy, and reliable industrial performance.',
        image: image15
      },
       {
        name: 'CNC Machined Mounting Block',
        material: 'Hardened Structural Steel Alloys',
        specs: 'A precision CNC-machined metal mounting block designed for industrial tooling, fixture alignment, and mechanical assembly applications.',
        image: image18
      },
         {
        name: 'Precision Locator Block',
        material: 'Hardened Structural Steel Alloys',
        specs: 'A precision-machined metal block used for positioning, alignment, and support in industrial tooling and fixture applications.',
        image: image19
      },
       {
        name: 'Threaded Fixture Block',
        material: 'Hardened Structural Steel Alloys',
        specs: 'A precision CNC-machined threaded block designed for industrial tooling, workholding, and fixture applications.',
        image: image21
      },
    {
        name: 'Precision Fixture Component',
        material: 'Hardened Structural Steel Alloys',
        specs: 'Used for accurate positioning, alignment, and support of industrial parts during machining and assembly operations.',
        image:image32
      },
      {
        name: 'Jig & Fixture Base Plate',
        material: 'Hardened Structural Steel Alloys',
        specs: 'Used for accurate holding, positioning, and alignment of components during machining and assembly operations.',
        image:image38
      }
    
    ]
  },
  'Gauges': {
    title: 'Gauges',
    description: 'Our precision inspection gauges are designed for accurate dimensional verification and rigorous quality assurance. We manufacture durable gauges that help you maintain strict compliance with international quality standards.',
    mainImage: image28,
    subProducts: [
    {
        name: 'Surface Grinding Machine',
        material: 'SS316 Stainless Steel Alloy',
        specs: 'Used for precision grinding and finishing of metal components, dies, and tool surfaces to achieve high accuracy and smooth surface finish.',
        image: image28
      },
    ]
  },
  'Welding Fixtures': {
    title: 'Welding Fixtures',
    description: 'Built for stability and alignment precision, our heavy-duty welding fixture systems enhance manufacturing productivity. They are engineered to handle complex assemblies with robust structural integrity.',
    mainImage: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format',
    subProducts: [
      {
        name: 'Manual & Robotic Welding Beds',
        material: 'Heat-Resistant Heavy Gauge Structural Steel',
        specs: 'Integrated spatter-resistant pneumatic clamp designs for absolute rigid framing.',
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format'
      }
    ]
  },
  'Precision Components': {
    title: 'Precision Components',
    description: 'We deliver high-quality machined components manufactured to meet demanding industrial specifications. Using advanced CNC technology, we ensure superior finish quality and dimensional accuracy for every part.',
    mainImage: percision,
    subProducts: [
      {
        name: 'Plug Valve Components',
        material: 'Premium-grade Teflon / SS316',
        specs: 'Precision machined for accurate sealing and extreme chemical resistance capabilities.',
        image: percision
      },
      {
        name: 'Precision CNC Flange Hub',
        material: 'SS316 Stainless Steel Alloy',
        specs: 'High-precision CNC machined flange hub engineered for industrial automation, rotary systems, and precision mechanical assemblies. Featuring a concentric multi-hole design, superior surface finish, and high-strength metal construction for accurate alignment and durable performance.',
        image: image2
      },
       {
        name: 'Precision CNC Shaft Assembly',
        material: 'SS316 Stainless Steel Alloy',
        specs: 'High-precision CNC machined shaft assembly engineered for industrial automation, rotary motion systems, and mechanical transmission applications. Manufactured with premium-grade steel and finished with superior surface machining for exceptional durability, smooth rotation, and high dimensional accuracy.',
        image: image3
      },
        {
        name: 'Precision Flexible Coupling',
        material: 'SS316 Stainless Steel Alloy',
        specs: 'High-precision flexible coupling engineered for accurate torque transmission and vibration reduction in industrial motion systems. Manufactured with premium CNC machining and designed for smooth rotational performance, alignment compensation, and long-lasting durability',
        image: image4
      },
         {
        name: 'Precision CNC Fixture Block',
        material: 'SS316 Stainless Steel Alloy',
        specs: 'High-precision CNC machined fixture block designed for industrial tooling, automation systems, and precision mechanical assemblies. Manufactured from premium-grade metal with accurate drilled mounting holes and a precision-cut slot profile for stable positioning, durability, and reliable performance.',
        image: image5
      },
        {
        name: 'Precision Wear Plate',
        material: 'SS316 Stainless Steel Alloy',
        specs: 'High-precision CNC machined fixture block designed for industrial tooling, automation systems, and precision mechanical assemblies. Manufactured from premium-grade metal with accurate drilled mounting holes and a precision-cut slot profile for stable positioning, durability, and reliable performance.',
        image: image6
      },
       {
        name: 'Precision Stop Block',
        material: 'SS316 Stainless Steel Alloy',
        specs: '“Compact precision-machined stop block engineered for accurate positioning, fixture alignment, and industrial tooling applications. Designed with smooth rounded geometry and premium metallic finishing for durability and reliable mechanical performance.',
        image: image7
      },
        {
        name: 'PRE-PP-505 Precision Tooling Component',
        material: 'SS316 Stainless Steel Alloy',
        specs: 'PRE-PP-505 is a high-precision CNC machined tooling component manufactured from premium SKD11 tool steel with hardness ranging from HRC 58–60. Engineered for superior wear resistance, dimensional accuracy, and long operational life in demanding industrial and tooling applications',
        image: image8
      },
       {
        name: 'Precision CNC Flange Hub Assembly',
        material: 'SS316 Stainless Steel Alloy',
        specs: 'High-precision CNC machined flange hub assembly engineered for industrial automation, rotary systems, and precision mechanical applications. Manufactured with superior dimensional accuracy and a premium metallic finish, this component ensures stable mounting, smooth rotational alignment, and long-lasting industrial performance.',
        image: image11
      },
      {
        name: 'DMG DMC 835V CNC Vertical Machining Center (VMC)',
        material: 'SS316 Stainless Steel Alloy',
        specs: 'The DMG DMC 835V is a high-precision CNC Vertical Machining Center designed for advanced milling, drilling, tapping, and precision machining operations. Engineered for superior accuracy',
        image: image14
      },
         {
        name: 'Mazak CNC Vertical Machining Center (VMC)',
        material: 'SS316 Stainless Steel Alloy',
        specs: 'The Mazak CNC VMC is a high-precision vertical machining center designed for advanced milling, drilling, tapping, and precision machining operations. Engineered for superior accuracy',
        image: image16
      },
       
      {
        name: 'Sodick Wire Cut EDM Machine',
        material: 'SS316 Stainless Steel Alloy',
        specs: 'A Sodick Wire-Cut EDM (Electrical Discharge Machining) Machine is a high-precision CNC machine used for cutting complex metal components with extreme accuracy using a thin electrically charged wire.',
        image: image24
      },
        {
        name: 'EDM Chiller Unit',
        material: 'SS316 Stainless Steel Alloy',
        specs: 'Used for cooling and maintaining the temperature of the Wire Cut EDM machine for stable and high-precision machining.',
        image: image27
      },
     
       {
        name: 'Milling Machine',
        material: 'SS316 Stainless Steel Alloy',
        specs: 'Used for precision machining, drilling, slotting, and shaping of metal components for dies, tools, and industrial parts.',
        image: image30
      },
       
       
      {
        name: 'Mounting Plate',
        material: 'SS316 Stainless Steel Alloy',
        specs: 'Used for accurate mounting, alignment, and fastening of machine components in precision engineering and industrial assemblies.',
        image: image33
      },
      
       {
        name: 'Precision Disc Plate',
        material: 'SS316 Stainless Steel Alloy',
        specs: 'Used for precision alignment, positioning, and controlled flow or mechanical applications in industrial assemblies and tooling systems.',
        image: image34
      },
       {
        name: 'Precision Spacer Block',
        material: 'SS316 Stainless Steel Alloy',
        specs: 'Used for accurate spacing, alignment, and support in precision machining, tooling, and industrial assembly applications.',
        image: image36
      },

       {
        name: 'Precision Machined Components',
        material: 'SS316 Stainless Steel Alloy',
        specs: 'Used for precision fitting, alignment, and industrial engineering applications with high dimensional accuracy and fine machining quality.',
        image: image39
      },
      {
        name: 'CNC Vertical Machining Center (VMC)',
        material: 'SS316 Stainless Steel Alloy',
        specs: 'Used for precision milling, drilling, cutting, and machining of metal components with high accuracy in industrial manufacturing applications.',
        image: image42
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
            src={image1} 
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
                          <p className="text-xs font-semibold text-slate-400">
                            <span className="text-slate-500">Material:</span> {product.material}
                          </p>
                          <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed">
                            {product.specs}
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

function FeatureItem({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) {
  return (
    <div className="flex gap-4 p-6 bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-2xl">
       <div className="text-amber-400 p-3 bg-slate-950 rounded-xl h-fit">
          {icon && typeof icon === 'object' && 'props' in icon
            ? (icon as React.ReactElement)
            : <Settings className="h-6 w-6" />}
       </div>
       <div className="space-y-1">
          <h4 className="text-white font-bold text-base">{title}</h4>
          <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
       </div>
    </div>
  );
}