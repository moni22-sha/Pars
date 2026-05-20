import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Users, Factory, Target, Shield, Clock, Zap, Cpu, Layers } from 'lucide-react';
import { motion } from 'motion/react';
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

// Updated Product Interface with category tracking
interface Product {
  id?: string;
  name: string;
  description: string;
  features?: string[];
  image: string;
  category: 'Precision  Dies' | 'Press Tools' | 'Jigs & Fixtures' | 'Gauges' | 'Welding Fixtures' | 'Precision Components';
}

// Product data array for easy management
const FEATURED_PRODUCTS: Product[] = [
  {
  name: 'Progressive Dies',
 description: 'Our progressive dies are engineered for high-speed and high-volume production applications. We focus on exceptional precision and consistency, ensuring that every component meets tight tolerances across millions of cycles to optimize your manufacturing efficiency.',
      image: image29,
      category: 'Precision  Dies'
  },
  {
    name: 'Spline Die Block',
    description: 'A high-precision CNC-machined die block featuring an internal spline profile, designed for press tooling, broaching, and precision metal forming applications..',
    image: image1,
    category: 'Precision  Dies'
  },
  {
    name: 'Blanking Die Insert',
    description: 'A Blanking Die Insert is a replaceable, high-precision cutting component used in industrial stamping presses to punch flat shapes out of sheet metal.',
    image: image9,
    category: 'Precision  Dies'
  },
  {
    name: 'Precision Dowel Pins',
    description: 'High-precision dowel pins engineered for progressive die applications and precision tooling systems. Manufactured with superior CNC machining and hardened steel construction, these pins provide accurate alignment, exceptional wear resistance, and long-lasting performance in demanding industrial environments.',
    image: image10,
    category: 'Precision  Dies'
  },
  {
    name: 'Window Shaving Punch (511)',
    description: 'High-precision Window Shaving Punch (511) manufactured from premium SKD11 tool steel with hardness of HRC 58–60 for superior wear resistance and dimensional accuracy.',
    image: image12,
    category: 'Precision  Dies'
  },
  {
    name: 'Sodick AG400L Wire Cut EDM',
    description: "The Sodick AG400L is a high-precision CNC Wire Cut EDM machine used for cutting complex and accurate metal components using electrically charged wire technology.",
    image: image25,
    category: 'Precision  Dies'
  },
  {
    name: 'Precision Locking Plate',
    description: "Used for accurate positioning, locking, and alignment of mechanical components in precision engineering and industrial assemblies.",
    image: image37,
    category: 'Precision  Dies'
  },
  {
    name: 'Progressive Die Insert',
    description: 'Used in progressive die operations for precision cutting, shaping, and forming of sheet metal components with high accuracy.',
    image: image40,
    category: 'Precision  Dies'
  },
  {
    name: 'Industrial Machined Parts',
    description: 'A collection of high-precision CNC machined metal components manufactured for industrial tooling, automation systems, jigs & fixtures, and mechanical engineering applications.',
    image: image20,
    category: 'Press Tools'
  },
  {
    name: 'Notch Cam Slider',
    description: 'A precision CNC-machined notch cam slide manufactured from SKD11 hardened tool steel, designed for accurate sliding and cam movement operations in industrial press tooling and metal forming applications.',
    image: image22,
    category: 'Press Tools'
  },
  {
    name: 'Tooling Clamping Kit',
    description: 'High-strength tooling clamping kit designed for secure workholding in CNC machining, milling, drilling, and industrial fixture applications. Manufactured from hardened steel for durability and precision, this kit ensures stable component positioning, improved machining accuracy, and reliable industrial performance.',
    image: image15,
    category: 'Jigs & Fixtures'
  },
  {
    name: 'CNC Machined Mounting Block',
    description: 'A precision CNC-machined metal mounting block designed for industrial tooling, fixture alignment, and mechanical assembly applications.',
    image: image18,
    category: 'Jigs & Fixtures'
  },
  {
    name: 'Precision Locator Block',
    description: 'A precision-machined metal block used for positioning, alignment, and support in industrial tooling and fixture applications.',
    image: image19,
    category: 'Jigs & Fixtures'
  },
  {
    name: 'Threaded Fixture Block',
    description: 'A precision CNC-machined threaded block designed for industrial tooling, workholding, and fixture applications.',
    image: image21,
    category: 'Jigs & Fixtures'
  },
  {
    name: 'Precision Fixture Component',
    description: 'Used for accurate positioning, alignment, and support of industrial parts during machining and assembly operations.',
    image: image32,
    category: 'Jigs & Fixtures'
  },
  {
    name: 'Jig & Fixture Base Plate',
    description: 'Used for accurate holding, positioning, and alignment of components during machining and assembly operations.',
    image: image38,
    category: 'Jigs & Fixtures'
  },
  {
    name: 'Surface Grinding Machine',
    description: 'Used for precision grinding and finishing of metal components, dies, and tool surfaces to achieve high accuracy and smooth surface finish.',
    image: image28,
    category: 'Gauges'
  },
  {
    name: 'Manual & Robotic Welding Beds',
    description: 'Integrated spatter-resistant pneumatic clamp designs for absolute rigid framing.',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format',
    category: 'Welding Fixtures'
  },
  {
    name: 'Plug Valve Components',
    description: 'Precision machined for accurate sealing and extreme chemical resistance capabilities.',
    image: percision,
    category: "Precision Components"
  },
  {
    name: 'Precision CNC Flange Hub',
    description: 'High-precision CNC machined flange hub engineered for industrial automation, rotary systems, and precision mechanical assemblies. Featuring a concentric multi-hole design, superior surface finish, and high-strength metal construction for accurate alignment and durable performance.',
    image: image2,
    category: "Precision Components"
  },
  {
    name: 'Precision CNC Shaft Assembly',
    description: 'High-precision CNC machined shaft assembly engineered for industrial automation, rotary motion systems, and mechanical transmission applications. Manufactured with premium-grade steel and finished with superior surface machining for exceptional durability, smooth rotation, and high dimensional accuracy.',
    image: image3,
    category: "Precision Components"
  },
  {
    name: 'Precision Flexible Coupling',
    description: 'High-precision flexible coupling engineered for accurate torque transmission and vibration reduction in industrial motion systems. Manufactured with premium CNC machining and designed for smooth rotational performance, alignment compensation, and long-lasting durability',
    image: image4,
    category: "Precision Components"
  },
  {
    name: 'Precision CNC Fixture Block',
    description: 'High-precision CNC machined fixture block designed for industrial tooling, automation systems, and precision mechanical assemblies. Manufactured from premium-grade metal with accurate drilled mounting holes and a precision-cut slot profile for stable positioning, durability, and reliable performance.',
    image: image5,
    category: "Precision Components"
  },
  {
    name: 'Precision Wear Plate',
    description: 'High-precision CNC machined fixture block designed for industrial tooling, automation systems, and precision mechanical assemblies. Manufactured from premium-grade metal with accurate drilled mounting holes and a precision-cut slot profile for stable positioning, durability, and reliable performance.',
    image: image6,
    category: "Precision Components"
  },
  {
    name: 'Precision Stop Block',
    description: '“Compact precision-machined stop block engineered for accurate positioning, fixture alignment, and industrial tooling applications. Designed with smooth rounded geometry and premium metallic finishing for durability and reliable mechanical performance.',
    image: image7,
    category: "Precision Components"
  },
  {
    name: 'PRE-PP-505 Precision Tooling Component',
    description: 'PRE-PP-505 is a high-precision CNC machined tooling component manufactured from premium SKD11 tool steel with hardness ranging from HRC 58–60. Engineered for superior wear resistance, dimensional accuracy, and long operational life in demanding industrial and tooling applications',
    image: image8,
    category: "Precision Components"
  },
  {
    name: 'Precision CNC Flange Hub Assembly',
    description: 'High-precision CNC machined flange hub assembly engineered for industrial automation, rotary systems, and precision mechanical applications. Manufactured with superior dimensional accuracy and a premium metallic finish, this component ensures stable mounting, smooth rotational alignment, and long-lasting industrial performance.',
    image: image11,
    category: "Precision Components"
  },
  {
    name: 'DMG DMC 835V CNC Vertical Machining Center (VMC)',
    description: 'The DMG DMC 835V is a high-precision CNC Vertical Machining Center designed for advanced milling, drilling, tapping, and precision machining operations. Engineered for superior accuracy',
    image: image14,
    category: "Precision Components"
  },
  {
    name: 'Mazak CNC Vertical Machining Center (VMC)',
    description: 'The Mazak CNC VMC is a high-precision vertical machining center designed for advanced milling, drilling, tapping, and precision machining operations. Engineered for superior accuracy',
    image: image16,
    category: "Precision Components"
  },
  {
    name: 'Sodick Wire Cut EDM Machine',
    description: 'A Sodick Wire-Cut EDM (Electrical Discharge Machining) Machine is a high-precision CNC machine used for cutting complex metal components with extreme accuracy using a thin electrically charged wire.',
    image: image24,
    category: "Precision Components"
  },
  {
    name: 'EDM Chiller Unit',
    description: 'Used for cooling and maintaining the temperature of the Wire Cut EDM machine for stable and high-precision machining.',
    image: image27,
    category: "Precision Components"
  },
  {
    name: 'Milling Machine',
    description: 'Used for precision machining, drilling, slotting, and shaping of metal components for dies, tools, and industrial parts.',
    image: image30,
    category: "Precision Components"
  },
  {
    name: 'Mounting Plate',
    description: 'Used for accurate mounting, alignment, and fastening of machine components in precision engineering and industrial assemblies.',
    image: image33,
    category: "Precision Components"
  },
  {
    name: 'Precision Disc Plate',
    description: 'Used for precision alignment, positioning, and controlled flow or mechanical applications in industrial assemblies and tooling systems.',
    image: image34,
    category: "Precision Components"
  },
  {
    name: 'Precision Spacer Block',
    description: 'Used for accurate spacing, alignment, and support in precision machining, tooling, and industrial assembly applications.',
    image: image36,
    category: "Precision Components"
  },
  {
    name: 'Precision Machined Components',
    description: 'Used for precision fitting, alignment, and industrial engineering applications with high dimensional accuracy and fine machining quality.',
    image: image39,
    category: "Precision Components"
  },
  {
    name: 'CNC Vertical Machining Center (VMC)',
    description: 'Used for precision milling, drilling, cutting, and machining of metal components with high accuracy in industrial manufacturing applications.',
    image: image42,
    category: "Precision Components"
  },
];

export default function Home() {
  // Corrected categories list matching the updated structural fields
  const CATEGORIES = [
    'Precision  Dies',
    'Press Tools',
    'Jigs & Fixtures',
    'Gauges',
    'Welding Fixtures',
    'Precision Components'
  ] as const;

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

      {/* Featured Products Section - Organized Into 6 Categories */}
      <section className="py-24 bg-slate-100 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <div className="inline-block px-3 py-1 bg-slate-200 text-slate-700 rounded text-xs font-bold uppercase tracking-widest mb-3 border-l-4 border-brand-accent">
                Our Capabilities
              </div>
              <h2 className="text-4xl font-bold text-slate-900">Featured Engineering Products</h2>
            </div>
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 font-bold text-brand-accent hover:text-brand-accent/80 transition-colors group h-fit whitespace-nowrap"
            >
              Explore Full Catalog
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Vertical spacing wrapper separating categories */}
          <div className="space-y-24">
            {CATEGORIES.map((categoryTitle) => {
              const filteredProducts = FEATURED_PRODUCTS.filter(p => p.category === categoryTitle);

              if (filteredProducts.length === 0) return null;

              return (
                <div key={categoryTitle} className="border-t border-slate-200/80 pt-12 first:border-none first:pt-0">
                  {/* Category Section Header */}
                  <div className="mb-10">
                    <h3 className="text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-brand-accent shrink-0" />
                      {categoryTitle}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-1.5 uppercase tracking-wider pl-4">
                      {filteredProducts.length} Premium High-Precision {filteredProducts.length === 1 ? 'Model' : 'Models'}
                    </p>
                  </div>

                  {/* Responsive Grid display for items within this category */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col group border border-slate-200/60"
                      >
                        {/* Box Constraints Adjusted for Crisp Image Layouts */}
                        <div className="w-full aspect-[20/15] bg-slate-100 relative overflow-hidden shrink-0 border-b border-slate-100">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            loading="lazy"
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        
                        <div className="p-8 flex flex-col flex-grow">
                          <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-accent transition-colors">
                            {product.name}
                          </h4>
                          <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-4">
                            {product.description}
                          </p>
                          
                          {product.features?.length ? (
                            <div className="border-t border-slate-100 pt-4 mb-6">
                              <ul className="space-y-2">
                                {product.features.map((feature, fIndex) => (
                                  <li key={fIndex} className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                                    <Layers className="h-3.5 w-3.5 text-brand-accent shrink-0" />
                                    {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : null}

                          <Link 
                            to={`/products#${product.id}`}
                            className="inline-flex items-center justify-center bg-slate-900 text-white group-hover:bg-brand-accent font-bold text-sm py-3 px-6 rounded-xl transition-all text-center gap-2 mt-auto"
                          >
                            Technical Specifications
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
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

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/YOUR_PHONE_NUMBER" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full text-white shadow-xl hover:scale-110 transition-transform duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
        <span className="absolute inset-[-8px] rounded-full bg-[#25D366]/20 blur-md opacity-100 group-hover:bg-[#25D366]/30 transition-all" />
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

// Sub-components
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