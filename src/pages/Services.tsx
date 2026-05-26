import React, { useEffect } from 'react';
import {
  ArrowRight,
  Settings,
  Command,
  Cpu,
  Shrink,
  Drill,
  Zap,
  Boxes,
  Cog,
} from 'lucide-react';
import { motion } from 'motion/react';
import factory4 from '../assets/images/factory4.png';

const industries = [
  {
    title: 'Automotive',
    image: 'https://cdn-icons-png.flaticon.com/512/744/744465.png',
  },
  {
    title: 'Electrical',
    image: 'https://cdn-icons-png.flaticon.com/512/1048/1048953.png',
  },
  {
    title: 'Heavy Engineering',
    image: 'https://cdn-icons-png.flaticon.com/512/1995/1995574.png',
  },
  {
    title: 'OEM Manufacturing',
    image: 'https://cdn-icons-png.flaticon.com/512/4290/4290854.png',
  },
  {
    title: 'Industrial Fabrication',
    image: 'https://cdn-icons-png.flaticon.com/512/2942/2942789.png',
  },
  {
    title: 'Precision Components',
    image: 'https://cdn-icons-png.flaticon.com/512/1687/1687675.png',
  },
  {
    title: 'Machine Tools',
    image: 'https://cdn-icons-png.flaticon.com/512/2092/2092663.png',
  },
  {
    title: 'Global Export',
    image: 'https://cdn-icons-png.flaticon.com/512/854/854878.png',
  },
];

export default function Services() {
  // Inject Dynamic Schema Tag on Component Mount for Search Engine Optimization
  useEffect(() => {
    const schemaId = 'pars-services-jsonld-schema';
    let script = document.getElementById(schemaId) as HTMLScriptElement;
    
    if (!script) {
      script = document.createElement('script');
      script.id = schemaId;
      script.type = 'application/ld+json';
      
      const schemaData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Industrial Tooling and Precision Machining Services",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Pars Industries",
          "description": "Premium industrial tool room and progressive die design company offering multi-axis CNC turning, milling, and fixture design infrastructure.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "India"
          }
        },
        "areaServed": [
          { "@type": "AdministrativeArea", "name": "Chennai" },
          { "@type": "AdministrativeArea", "name": "Hosur" },
          { "@type": "AdministrativeArea", "name": "Coimbatore" },
          { "@type": "AdministrativeArea", "name": "Delhi" },
          { "@type": "Country", "name": "India" },
          { "@type": "Country", "name": "Germany" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Precision Engineering Solutions",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "CNC Machining Services",
                "description": "High-precision CNC machining solutions tailored for OEMs, industrial tooling setups, and specialized engineering applications globally."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Vertical Machining Centers (VMC)",
                "description": "Advanced VMC machining services delivering high-precision CNC components, molds, dies, and industrial parts with superior accuracy and production turnaround."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Progressive Tools Design & Manufacturing",
                "description": "High-precision progressive stamping tool design and press tools engineered for continuous sheet metal manufacturing streams."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Press Tools Fabrication",
                "description": "Custom sheet metal press tools configured for reliable heavy-duty component forming, cutting, and industrial metal blanking operations."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Jigs & Fixtures Engineering",
                "description": "Precision-engineered jigs and industrial fixture production to eliminate layout errors, reduce setup constraints, and scale component consistency."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Industrial Gauges Production",
                "description": "Custom go/no-go quality assurance verification gauges manufactured to sustain dimensional validation metrics across high-volume tooling systems."
              }
            }
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

  const services = [
    {
      title: 'CNC Machining Services',
      icon: <Cpu className="w-10 h-10 text-blue-500" />,
      description:
        'At Pars Industries Works, we specialize in high‑precision CNC machining solutions tailored for OEMs, industrial projects, and specialized engineering requirements.'
    },
    {
      title: 'Vertical Machining Centers (VMC)',
      icon: <Boxes className="w-10 h-10 text-blue-500" />,
      description:
        'Advanced VMC machining services delivering high-precision CNC components, molds, dies, and industrial parts with superior accuracy, durability, and fast production turnaround.',
    },
    {
      title: 'Progressive Tools',
      icon: <Command className="w-10 h-10 text-blue-500" />,
      description:
        'We design and manufacture high‑precision progressive tools engineered for efficient and continuous production operations.'
    },
    {
      title: 'Press Tools',
      icon: <Shrink className="w-10 h-10 text-blue-500" />,
      description:
        'Custom press tools designed for reliable metal forming and industrial stamping applications with precision and durability.'
    },
    {
      title: 'Jigs & Fixtures',
      icon: <Settings className="w-10 h-10 text-blue-500" />,
      description:
        'Precision‑engineered jigs and fixtures that improve production efficiency, reduce setup time, and maintain dimensional consistency.'
    },
    {
      title: 'Gauges',
      icon: <Drill className="w-10 h-10 text-blue-500" />,
      description:
        'Gauges manufactured to ensure accurate measurement and quality verification across production environments.'
    },
  ];

  return (
    <div className="bg-[#f8fafc] overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[420px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: `url(${factory4})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" />

        {/* Floating Animation */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="absolute top-20 left-10 hidden lg:block"
        >
          <Cog className="w-24 h-24 text-blue-200 opacity-40 animate-[spin_20s_linear_infinite]" />
        </motion.div>

        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
          className="absolute bottom-10 right-10 hidden lg:block"
        >
          <Settings className="w-24 h-24 text-blue-300 opacity-30" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-[#123a74] mb-6"
          >
            Our Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-2xl text-gray-700 leading-relaxed"
          >
            Comprehensive manufacturing solutions from precision machining
            to quality assurance.
          </motion.p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="relative -mt-8 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Top Border Animation */}
              <div className="absolute top-0 left-0 h-1 w-0 bg-blue-500 group-hover:w-full transition-all duration-700" />

              <div className="p-10">
                {/* Icon Wrapper */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mb-8"
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-3xl font-bold text-blue-500 mb-5 group-hover:text-[#123a74] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed mb-8 line-clamp-4">
                  {service.description}
                </p>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-blue-500 hover:bg-[#123a74] text-white font-semibold px-7 py-3 rounded-full transition-all duration-300"
                >
                  Read More
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-[#123a74] mb-4"
            >
              Industries We Serve
            </motion.h2>

            <p className="text-gray-600 text-lg">
              Delivering advanced engineering solutions for diverse sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-[#f8fafc] border border-gray-100 rounded-2xl py-8 px-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-lg transition-all duration-300 gap-4 group"
              >
                <img 
                  src={item.image} 
                  alt={`${item.title} industrial engineering market sector`} 
                  className="w-12 h-12 object-contain opacity-85 group-hover:opacity-100 transition-opacity" 
                />
                <span className="font-semibold text-[#123a74] tracking-wide text-sm">
                  {item.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-green-500 shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          className="w-8 h-8"
        >
          <path d="M19.11 17.24c-.27-.14-1.58-.78-1.83-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.85 1.05-.16.18-.31.2-.58.07-.27-.14-1.12-.41-2.14-1.3-.79-.7-1.33-1.56-1.49-1.83-.16-.27-.02-.41.12-.55.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.6-1.45-.82-1.99-.22-.52-.44-.45-.6-.46h-.51c-.18 0-.47.07-.72.34-.24.27-.94.92-.94 2.24 0 1.32.96 2.59 1.09 2.77.14.18 1.88 2.87 4.56 4.02.64.27 1.14.43 1.53.55.64.2 1.22.17 1.68.1.51-.08 1.58-.65 1.8-1.28.22-.63.22-1.17.15-1.28-.07-.11-.24-.18-.51-.32z" />
          <path d="M16 .4C7.39.4.4 7.39.4 16c0 2.82.75 5.57 2.18 7.99L0 32l8.22-2.55A15.55 15.55 0 0016 31.6c8.61 0 15.6-6.99 15.6-15.6S24.61.4 16 .4zm0 28.34c-2.44 0-4.83-.66-6.91-1.91l-.49-.29-4.88 1.51 1.59-4.75-.32-.5A12.67 12.67 0 013.33 16C3.33 8.99 8.99 3.33 16 3.33S28.67 8.99 28.67 16 23.01 28.74 16 28.74z" />
        </svg>
      </motion.a>
    </div>
  );
}