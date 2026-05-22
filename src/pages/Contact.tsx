import {Phone, Mail, MapPin, Clock, Send} from 'lucide-react';
import {motion} from 'motion/react';
import shaft from '../assets/images/shaft.png';

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-brand-primary min-h-[400px] flex items-center py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
                                   <img 
                                     src={shaft}
                                     alt="Industrial Facility" 
                                     className="w-full h-full object-cover opacity-20"
                                   />
                                   </div>
        <div className="absolute inset-0 opacity-10">
           <div className="absolute top-0 left-0 h-96 w-96 bg-brand-accent rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
           <h1 className="text-5xl md:text-7xl text-white mb-6">Let’s Build Precision Together</h1>
           <p className="text-xl text-slate-300 max-w-2xl mx-auto">
             Get in touch for reliable engineering, tooling, machining, and fabrication solutions tailored to your industrial requirements.
           </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 -mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-white rounded-3xl shadow-2xl overflow-hidden shadow-slate-200/60 border border-slate-100 flex flex-col lg:flex-row">
              {/* Info Column */}
              <div className="lg:w-1/3 bg-slate-900 p-12 text-white">
                 <h2 className="text-2xl font-bold mb-10">Contact Information</h2>
                 
                 <div className="space-y-8">
                    <div className="flex gap-4">
                       <MapPin className="h-6 w-6 text-brand-accent shrink-0" />
                       <div>
                          <p className="font-bold mb-1">Our Address</p>
                          <p className="text-slate-400 text-sm"><br />SP 156, 12th Street, Ambattur Industrial Estate, Chennai 600 058</p>
                       </div>
                    </div>
                    
                    <div className="flex gap-4">
                       <Phone className="h-6 w-6 text-brand-accent shrink-0" />
                       <div>
                          <p className="font-bold mb-1">Phone Number</p>
                          <p className="text-slate-400 text-sm"> +91 98402 55994/044 - 2688 0479</p>
                       </div>
                    </div>
                    
                    <div className="flex gap-4">
                       <Mail className="h-6 w-6 text-brand-accent shrink-0" />
                       <div>
                          <p className="font-bold mb-1">Email Address</p>
                          <p className="text-slate-400 text-sm">parsindustrieswork@gmail.com</p>
                       </div>
                    </div>
                    
                    <div className="flex gap-4">
                       <Clock className="h-6 w-6 text-brand-accent shrink-0" />
                       <div>
                          <p className="font-bold mb-1">Working Hours</p>
                          <p className="text-slate-400 text-sm">Monday – Saturday<br />9:00 AM – 6:00 PM</p>
                       </div>
                    </div>
                 </div>
              </div>
              
              {/* Form Column */}
              <div className="lg:w-2/3 p-12 lg:p-16">
                 <h2 className="text-3xl text-slate-800 mb-8 font-display">Send Us an Enquiry</h2>
                 
                 <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Full Name</label>
                       <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent" placeholder="John Doe" />
                    </div>
                    
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Company Name</label>
                       <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent" placeholder="Global Mfg Co." />
                    </div>
                    
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                       <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent" placeholder="john@example.com" />
                    </div>
                    
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Phone Number</label>
                       <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent" placeholder="+91 XXXX XXXX XX" />
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Service Required</label>
                       <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent">
                          <option>Select a service</option>
                          <option>Progressive Tools</option>
                          <option>Press Tools</option>
                          <option>CNC Machining</option>
                          <option>Jigs & Fixtures</option>
                          <option>Fabrication</option>
                       </select>
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                       <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent" placeholder="Describe your project requirements..."></textarea>
                    </div>
                    
                    <div className="md:col-span-2 pt-4">
                       <motion.button 
                         whileTap={{scale: 0.98}}
                         type="submit" 
                         className="w-full md:w-auto bg-brand-accent text-white px-10 py-4 rounded-lg font-bold flex items-center justify-center gap-3 hover:bg-orange-600 transition-all shadow-lg shadow-orange-200"
                        >
                          Submit Enquiry
                          <Send className="h-5 w-5" />
                       </motion.button>
                    </div>
                 </form>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
