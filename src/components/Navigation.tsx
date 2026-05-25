import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import para from '../assets/images/para.png';
import adlogo from '../assets/images/adlogo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Products', path: '/products' },
  { name: 'Facility', path: '/facility' },
  { name: 'Clients', path: '/clients' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="top-accent w-full" />
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-24">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-4 py-2">
                
                {/* First Brand Group */}
                <div className="flex flex-col items-center justify-center text-center">
                  <img 
                    src={para} 
                    alt="PIW Engineering Works Logo" 
                    className="h-10 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <span className="block text-[12px] font-bold uppercase tracking-[0.1em] text-brand-primary mt-1 whitespace-nowrap">
                    Pars Industries Work
                  </span>
                </div>

                {/* Subtle Divider Line like image_5531a9.png */}
                <div className="h-10 w-[1px] bg-slate-200 self-center mt-[-8px]" />

                {/* Second Brand Group */}
                <div className="flex flex-col items-center justify-center text-center">
                  <img 
                    src={adlogo} 
                    alt="Advanex Toolings Logo" 
                    className="h-10 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <span className="block text-[12px] font-bold uppercase tracking-[0.1em] text-brand-primary mt-1 whitespace-nowrap">
                    Advanex Toolings
                  </span>
                </div>

              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative text-sm font-medium transition-colors hover:text-brand-accent py-2 ${
                      isActive ? 'text-brand-accent' : 'text-slate-600'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <motion.span
                      whileTap={{ scale: 0.95, y: 1 }}
                      className="inline-block relative z-10"
                    >
                      {link.name}
                      {isActive && (
                        <motion.div
                          layoutId="activeUnderline"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-accent"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </motion.span>
                  )}
                </NavLink>
              ))}
              <motion.div whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="bg-brand-primary text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-brand-secondary transition-all inline-block"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-600 hover:text-brand-accent p-2"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-4 text-base font-medium rounded-md ${
                        isActive ? 'text-brand-accent bg-slate-50' : 'text-slate-600 hover:text-brand-accent hover:bg-slate-50'
                      }`
                    }
                  >
                    <motion.span 
                      whileTap={{ x: 6 }} 
                      className="block"
                    >
                      {link.name}
                    </motion.span>
                  </NavLink>
                ))}
                <div className="pt-4 border-t border-slate-100 mt-4 px-3">
                  <motion.div whileTap={{ scale: 0.98 }}>
                    <Link
                      to="/contact"
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-center bg-brand-primary text-white px-5 py-3 rounded-md text-base font-semibold"
                    >
                      Get a Quote
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex flex-col items-start gap-2 mb-6">
              <div className="flex items-center gap-3">
                <img 
                  src={para} 
                  alt="PIW Logo" 
                  className="h-9 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
                <div className="h-6 w-[1px] bg-slate-700" />
                <img 
                  src={adlogo} 
                  alt="Branding Logo" 
                  className="h-9 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-2 space-y-0.5">
                <span className="block text-xs font-bold uppercase tracking-wider text-white leading-tight">
                  Pars Industries Works
                </span>
               <span className="block text-xs font-bold uppercase tracking-wider text-white leading-tight">
                  Advanex Toolings
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Precision engineering solutions for modern manufacturing. Specializing in high-precision tooling, machining, and fabrication since 1994.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Progressive Tools</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Press Tools</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">CNC Machining</Link></li>
              <li><Link to="/services" className="hover:text-brand-accent transition-colors">Jigs & Fixtures</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-brand-accent transition-colors">About Us</Link></li>
              <li><Link to="/facility" className="hover:text-brand-accent transition-colors">Our Facility</Link></li>
              <li><Link to="/clients" className="hover:text-brand-accent transition-colors">Trusted Clients</Link></li>
              <li><Link to="/contact" className="hover:text-brand-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Get in Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-accent shrink-0" />
                <span>SP 156, 12th Street, Ambattur Industrial Estate, Chennai 600 058</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-accent shrink-0" />
                <span> +91 98402 55994/994004477</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-accent shrink-0" />
                <span>parsindustrieswork@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Pars Industries Works. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}