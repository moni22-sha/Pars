import { useEffect } from 'react';
import { motion, Variants } from 'motion/react';
import image16 from '../assets/images/image16.png';
import factory1 from '../assets/images/factory1.png';
import factory2 from '../assets/images/factory2.png';
import factory3 from '../assets/images/factory3.png';
import factory4 from '../assets/images/factory4.png';
import mach2 from '../assets/images/mach2.png';
import mach3 from '../assets/images/mach3.png';
import mach5 from '../assets/images/mach5.png';
import mach6 from '../assets/images/mach6.png';
import mach7 from '../assets/images/mach7.png';
import mech8 from '../assets/images/mech8.png';
import mach1 from '../assets/images/mach1.png';
import image2 from '../assets/images/image2.png';
import image1 from '../assets/images/image1.png';

// FIXED: Added explicit .mp4 extensions to static video asset imports
import DMC from '../video/DMC.mp4';
import Makino from '../video/Makino.mp4';
import Mazak from '../video/Mazak.mp4';
import sordick from '../video/sordick.mp4';

interface HighlightItem {
  title: string;
  image: string;
  altText?: string;
}

interface VideoItem {
  title: string;
  video: string;
  subtitle: string; // The machine specifications / travel dimensions
}

export default function Facility() {
  // Inject Dynamic Schema Tag on Component Mount for GEO/AEO optimization
  useEffect(() => {
    const schemaId = 'facility-jsonld-schema';
    let script = document.getElementById(schemaId) as HTMLScriptElement;
    
    if (!script) {
      script = document.createElement('script');
      script.id = schemaId;
      script.type = 'application/ld+json';
      
      const schemaData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Pars Industries Facility",
        "description": "State-of-the-art 4000+ sq. ft. tool room facility in India specializing in custom progressive tool manufacturing, CNC turning and milling services, and high accuracy wire EDM.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "addressCountry": "India"
        },
        "knowsAbout": [
          "Progressive die design and manufacturing company India",
          "Tool room and press tools manufacturers Hosur",
          "CNC machining service providers in Coimbatore",
          "High accuracy CNC machining services Delhi",
          "Tool room progressive die manufacturers Hosur"
        ],
        "mainEntity": {
          "@type": "ItemList",
          "name": "Advanced Precision Machinery Inventory",
          "numberOfItems": 10,
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Seibu MM35UP CNC Ultra-Precision Wire EDM Machine" },
            { "@type": "ListItem", "position": 2, "name": "Makino W53FB Precision Wire EDM Machine" },
            { "@type": "ListItem", "position": 3, "name": "Sodick Wire Cut EDM Machine" },
            { "@type": "ListItem", "position": 4, "name": "Makino F5 CNC Vertical Machining Center" },
            { "@type": "ListItem", "position": 5, "name": "DMC 835V DECKAL MAHO" },
            { "@type": "ListItem", "position": 6, "name": "Mazak VMC" }
          ]
        }
      };

      script.text = JSON.stringify(schemaData);
      document.head.appendChild(script);
    }

    return () => {
      const existingScript = document.getElementById(schemaId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const highlights: HighlightItem[] = [
    {
      title: "Main Fabrication Assembly",
      image: factory1,
      altText: "Progressive die and press tools assembly floor Chennai"
    },
    {
      title: "Precision CNC Machining Center",
      image: factory2,
      altText: "Precision engineering and CNC machining India production floor"
    },
    {
      title: "Heavy-Duty Milling & Lathes",
      image: factory3,
      altText: "Industrial tooling manufacturers Delhi workshop setup"
    },
    {
      title: "Quality Assurance & Inspection Lab",
      image: factory4,
      altText: "Precision jigs and fixtures suppliers Chennai inspection setup"
    },
  ];

  const machineHighlights: HighlightItem[] = [
    {
      title: "Sodick ALN 600G Wire Cut EDM Machine (Wire-cut Electrical Discharge Machine)",
      image: mach2,
      altText: "Sodick wire cut EDM operations - tool room progressive die manufacturers Hosur"
    },
    {
      title: "Sodick AG400L Wire Cut EDM Machine",
      image: mach3,
      altText: "High precision press tools manufacturers Chennai hardware"
    },
    {
      title: "Tool & Cutter Grinding Machine",
      image: mach5,
      altText: "Tool room and press tools manufacturers Hosur tooling grinders"
    },
    {
      title: "Vertical Milling Machine",
      image: mach6,
      altText: "Progressive press tool manufacturers Coimbatore vertical milling systems"
    },
    {
      title: "DMC 835V DECKAL MAHO",
      image: mach7,
      altText: "Advanced milling setups - precision progressive tools manufacturers India"
    },
    {
      title: "Makino F5 CNC Vertical Machining Center",
      image: mech8,
      altText: "Automotive CNC machining company Chennai multi axis platform"
    },
    {
      title: "Mazak VMC",
      image: image16,
      altText: "CNC machining for automotive parts Delhi workshop machinery"
    }
  ];

  const facilityVideos: VideoItem[] = [
    {
      subtitle: "DMC 835V DECKAL MAHO Milling Operations",
      title: "Travelsize: 830 * 5ton * 5ton",
      video: DMC,
    },
    {
      subtitle: "ALN 600G IGROOVE TECHNOLOGY (Sodick 2.0 High Accuracy Wire Cut EDM Processing)",
      title: "Travelsize: 600 * 400 * 350",
      video: sordick,
    },
    {
      subtitle: "Makino F5 CNC Vertical Machining Center Demonstration",
      title: "Travelsize: 950 * 450 * 450",
      video: Makino,
    },
    {
      subtitle: "Mazak 530c VMC Precision Component Profiling",
      title: "Travelsize: 1050 * 530 * 530",
      video: Mazak,
    },
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

  const headingZoomVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 1.15,
      y: 10
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 16
      }
    }
  };

  const expansionGridVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardZoomOutVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 1.1,
      y: 15
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
  };

  const cardZoomInVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9,
      y: 15
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] 
      }
    }
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
            Tool Room & Machining Facility
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end"
          >
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Our 4000+ sq. ft. manufacturing facility is engineered for top tier tool room services in Chennai, managing tight-tolerance progressive press tools and custom die assemblies.
            </p>
            <p className="text-slate-500 leading-relaxed">
              As trusted progressive tools manufacturers India, our infrastructure blends over three decades of tool and die making heritage with modern CNC turning and milling services to fulfill high-volume automotive B2B pipelines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* NEW SECTION 3: Precision Machinery — Soon to Arrive */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent bg-brand-accent/10 px-3 py-1 rounded-full">
              Expansion Update
            </span>
            
            <motion.h2 
              variants={headingZoomVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="text-3xl mt-3 mb-4 font-bold text-slate-900 origin-center"
            >
              Precision Machinery — Soon to Arrive
            </motion.h2>

            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-1 bg-brand-accent mx-auto"
            />
          </div>

          <motion.div
            variants={expansionGridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            {/* Upcoming Machine 1 */}
            <motion.div 
              variants={cardZoomOutVariants}
              className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm flex flex-col gap-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-[4/3] w-full bg-slate-50 rounded-xl overflow-hidden relative border border-slate-100 p-4 flex items-center justify-center group">
                <img 
                  src={image2} 
                  alt="High accuracy spline die block suppliers Hosur - Seibu Setup" 
                  className="max-w-full max-h-full object-contain group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Seibu MM35UP CNC Ultra-Precision Wire EDM Machine
                </h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                 Discover the Seibu MM35UP CNC Ultra-Precision Wire EDM. Custom engineered for high-precision progressive die makers Delhi, it delivers extreme pitch accuracy to completely eliminate coordinate grinding stages.
                </p>
                <ul className="space-y-2.5 border-t border-slate-100 pt-4">
                  <li className="flex items-center text-xs font-medium text-slate-600 gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-accent shrink-0" />
                     Features a thermal wire-annealing and straightening automatic wire feeder that effortlessly threads through the breakpoint under water.
                  </li>
                  <li className="flex items-center text-xs font-medium text-slate-600 gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-accent shrink-0" />
                   Intelligent automatic wire feeder threads reliably at the breakpoint under water for complex stamping progressive die geometries.
                  </li>
                  <li className="flex items-center text-xs font-medium text-slate-600 gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-accent shrink-0" />
                    Supports ultra-fine wires down to 0.05mm optimized for intricate spline die blocks and tight-radius tool inserts.
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Upcoming Machine 2 */}
            <motion.div 
              variants={cardZoomInVariants}
              className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-sm flex flex-col gap-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-[4/3] w-full bg-slate-50 rounded-xl overflow-hidden relative border border-slate-100 p-4 flex items-center justify-center group">
                <img 
                  src={image1} 
                  alt="Custom metal press tools manufacturers Hosur - Makino Wire EDM System" 
                  className="max-w-full max-h-full object-contain group-hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Makino W53FB Precision Wire EDM Machine
                </h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                 An advanced, production-grade wire electrical discharge machining (EDM) system built with a stationary work table design. It is engineered to maintain exceptional mechanical repeatability and pitch accuracy regardless of workpiece weight.
                </p>
                <ul className="space-y-2.5 border-t border-slate-100 pt-4">
                  <li className="flex items-center text-xs font-medium text-slate-600 gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-accent shrink-0" />
                    Isolates heavy workpiece loads to maintain high mechanical accuracy on automotive progressive die blocks.
                  </li>
                  <li className="flex items-center text-xs font-medium text-slate-600 gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-accent shrink-0" />
                    Smart touch-screen CNC panel optimized for rapid job setup and real-time tool room monitoring.
                  </li>
                  <li className="flex items-center text-xs font-medium text-slate-600 gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-accent shrink-0" />
                    High-reliability automated wire-annealing feed minimizes downtime for custom blanking die insert creation.
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: Our Facility Highlights */}
      <section className="pt-24 pb-12">
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
                className="bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group cursor-default flex flex-col justify-between"
              >
                <div className="aspect-[4/3] w-full bg-slate-50 overflow-hidden relative border-b border-slate-100 p-2 flex items-center justify-center">
                  <img 
                    src={item.image} 
                    alt={item.altText || item.title} 
                    className="max-w-full max-h-full object-contain group-hover:scale-102 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="p-5 flex-grow content-center">
                  <h3 className="font-bold text-slate-800 tracking-wide text-sm group-hover:text-brand-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* SECTION 2: Our Machine Categories */}
      <section className="pt-12 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="text-3xl mb-4 font-bold text-slate-900"
            >
              Our Machine Inventory & Capabilities
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
            {machineHighlights.map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group cursor-default flex flex-col justify-between"
              >
                <div className="aspect-[4/3] w-full bg-slate-50 overflow-hidden relative border-b border-slate-100 p-3 flex items-center justify-center">
                  <img 
                    src={item.image} 
                    alt={item.altText || item.title} 
                    className="max-w-full max-h-full object-contain group-hover:scale-102 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="p-5 flex-grow content-center">
                  <h3 className="font-bold text-slate-800 tracking-wide text-sm group-hover:text-brand-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VIDEO GALLERY SECTION */}
      <section className="pt-12 pb-24 bg-slate-50/50 border-t border-b border-slate-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="text-3xl mb-4 font-bold text-slate-900"
            >
              Our Video Gallery
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
            className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {facilityVideos.map((video, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-white border border-slate-200/80 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group flex flex-col justify-between"
              >
                <div className="aspect-[5/3] w-full bg-black relative border-b border-slate-100 flex items-center justify-center">
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                    playsInline
                  >
                    <source src={video.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-5 flex-grow content-center bg-white flex flex-col gap-1.5">
                  {/* FIXED: Displaying subtitle as textual info here */}
                  <span className="font-bold text-slate-800 tracking-wide text-sm group-hover:text-brand-primary transition-colors duration-300">
                    {video.subtitle}
                  </span>
                  <h3 className="font-bold text-slate-800 tracking-wide text-sm group-hover:text-brand-primary transition-colors duration-300">
                    {video.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl mb-8 font-bold">Precision Tooling & Manufacturing Excellence</h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Every phase of production within our advanced machine shop is closely monitored by automated metrology tools to guarantee zero-defect blanking die insert and press tool fabrication tracks.
              </p>
              <div className="space-y-6">
                <motion.div whileHover={{ x: 6 }} className="flex gap-4 items-start group">
                  <div className="bg-brand-accent/20 p-2 rounded text-brand-accent shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                    <CheckIcon />
                  </div>
                  <p className="text-slate-300 pt-0.5 group-hover:text-white transition-colors">
                    Strict quality controls backed by high accuracy CNC machining services Coimbatore modules.
                  </p>
                </motion.div>
                <motion.div whileHover={{ x: 6 }} className="flex gap-4 items-start group">
                  <div className="bg-brand-accent/20 p-2 rounded text-brand-accent shrink-0 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-300">
                    <CheckIcon />
                  </div>
                  <p className="text-slate-300 pt-0.5 group-hover:text-white transition-colors">
                    Custom engineering workflows built for heavy duty jigs and fixtures India distribution networks.
                  </p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl group">
                <img 
                  src={mach1} 
                  alt="Industrial tooling and die manufacturers India facility operations" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </div>
              <motion.div 
                animate={{ 
                  scale: [1, 1.08, 1],
                  boxShadow: [
                    "0 0px 0px 0px rgba(59, 130, 246, 0.4)", 
                    "0 0px 0px 12px rgba(59, 130, 246, 0)", 
                    "0 0px 0px 0px rgba(59, 130, 246, 0)"
                  ]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -bottom-6 -right-6 h-24 w-24 bg-brand-accent rounded-full flex items-center justify-center font-bold text-xs text-white text-center p-2"
              >
                ISO 9001 Room
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