
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Lock, 
  Server, 
  CheckCircle, 
  ArrowRight, 
  Menu, 
  X, 
  Smartphone, 
  Users, 
  Bus, 
  LayoutDashboard, 
  Brain, 
  Award,
  ChevronRight,
  Phone,
  Mail,
  Zap,
  ExternalLink,
  Key,
  FileText,
  MapPin,
  Calendar,
  Clock,
  TrendingUp,
  ClipboardCheck,
  User,
  Headphones,
  UploadCloud,
  Navigation,
  Scale,
  Bell,
  Search,
  MessageSquare,
  Star,
  Globe
} from 'lucide-react';

// --- Constants ---
const WEB_APP_URL = "https://app.vidyasetuai.com";
const UDYAM_REG_NO = "UDYAM-RJ-16-0040771";

// --- Components ---

const LegalModal = ({ isOpen, onClose, type }: { isOpen: boolean, onClose: () => void, type: 'privacy' | 'terms' | 'data' | null }) => {
  if (!isOpen || !type) return null;

  const content = {
    privacy: {
      title: "Privacy Policy (गोपनीयता नीति)",
      subtitle: "आपका डेटा, आपकी संपत्ति।",
      sections: [
        { h: "Data Ownership", p: "VidyaSetu AI provides the platform, but all data (students, staff, finances) belongs 100% to the school. We have no legal right to access or sell your data." },
        { h: "Zero Third-Party Sharing", p: "हम कभी भी किसी थर्ड-पार्टी या विज्ञापन कंपनी के साथ आपका डेटा साझा नहीं करते हैं। " },
        { h: "Legal Compliance", p: "Fully compliant with the Information Technology Act, 2000 and upcoming Digital Personal Data Protection (DPDP) Act of India." }
      ]
    },
    terms: {
      title: "Terms of Service (सेवा की शर्तें)",
      subtitle: "पारदर्शी और निष्पक्ष नियम।",
      sections: [
        { h: "Service Availability", p: "We guarantee 99.9% uptime on our cloud servers. Your school operations will never halt due to technical lag." },
        { h: "Subscription & Cancellation", p: "No hidden lock-in periods. If you choose to cancel, we provide a 30-day window to export all your data in standard formats." },
        { h: "Usage Rights", p: "The school is responsible for the accuracy of data entered. VidyaSetu AI provides the tools for management and verification." }
      ]
    },
    data: {
      title: "Data Protection (डेटा सुरक्षा)",
      subtitle: "मिलिट्री-ग्रेड सुरक्षा इंफ्रास्ट्रक्चर।",
      sections: [
        { h: "AES-256 Encryption", p: "All sensitive data is encrypted at rest and in transit. This is the same standard used by global banking systems." },
        { h: "Daily Backups", p: "We maintain redundant backups across multiple secure locations to prevent data loss in case of hardware failure." },
        { h: "MSME Security Standards", p: "As an MSME registered entity, we follow government-mandated security protocols for educational support services." }
      ]
    }
  }[type];

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 30 }}
        className="bg-white w-full max-w-3xl rounded-[3rem] shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="bg-emerald-600 p-8 text-white flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">{content.title}</h3>
            <p className="text-emerald-100 text-sm mt-1">{content.subtitle}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="p-8 md:p-12 space-y-8 overflow-y-auto max-h-[70vh]">
          {content.sections.map((s, i) => (
            <div key={i} className="space-y-2">
              <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle size={18} className="text-emerald-500" /> {s.h}
              </h4>
              <p className="text-slate-600 leading-relaxed pl-7">{s.p}</p>
            </div>
          ))}
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-8">
            <p className="text-sm text-slate-500 italic">
              "लीगल तौर पर, VidyaSetu AI एक MSME रजिस्टर्ड संस्था है। हम कानूनन आपके डेटा की सुरक्षा और गोपनीयता के लिए जवाबदेह हैं।"
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const DemoModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;

  const credentials = [
    { role: "Principal", mobile: "1000000001", pass: "123456" },
    { role: "Teacher", mobile: "1000000002", pass: "123456" },
    { role: "Parent", mobile: "1000000003", pass: "123456" },
    { role: "Driver", mobile: "1000000004", pass: "123456" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
        className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-8 md:p-12">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-3xl font-bold text-slate-900">Demo Login Details</h3>
              <p className="text-emerald-600 font-semibold mt-1">School ID: <span className="bg-emerald-100 px-2 py-0.5 rounded">VIDYA001</span></p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
              <X size={24} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {credentials.map((cred, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-slate-800">{cred.role}</span>
                  <Key size={16} className="text-emerald-500" />
                </div>
                <p className="text-sm text-slate-500">Mobile: <span className="text-slate-900 font-medium">{cred.mobile}</span></p>
                <p className="text-sm text-slate-500">Password: <span className="text-slate-900 font-medium">{cred.pass}</span></p>
              </div>
            ))}
          </div>

          <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 mb-8 text-center">
            <p className="text-sm text-emerald-800 leading-relaxed italic">
              "इन क्रेडेंशियल्स का उपयोग करके आप ऐप के सभी फीचर्स जैसे अटेंडेंस, ट्रैकिंग और डैशबोर्ड का अनुभव कर सकते हैं।"
            </p>
          </div>

          <a href={WEB_APP_URL} target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-emerald-500 text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-100">
            Open Web App <ExternalLink size={20} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CertificateModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
        className="bg-white w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="bg-emerald-600 p-8 text-white flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-wider">Udyam Registration Certificate</h3>
            <p className="text-emerald-100 text-sm mt-1">Ministry of Micro, Small and Medium Enterprises</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>
        <div className="p-8 md:p-12 space-y-8 overflow-y-auto max-h-[70vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-slate-100 pb-8">
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Registration Number</label>
              <p className="text-xl font-bold text-slate-900">{UDYAM_REG_NO}</p>
            </div>
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Name of Enterprise</label>
              <p className="text-xl font-bold text-slate-900">VIDYASETU AI</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Type of Enterprise</label>
              <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded font-bold">MICRO</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Major Activity</label>
              <span className="text-slate-900 font-bold uppercase text-sm">TRADING / SERVICES</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">NIC 2 Digit</label>
              <span className="text-slate-900 font-bold text-sm">85 - Education</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="text-emerald-500 mt-1 shrink-0" size={20} />
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Official Address</label>
                <p className="text-slate-700 font-medium">Ward No - 02, Hanumangarh, Rajasthan - 335802</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Calendar className="text-emerald-500 mt-1 shrink-0" size={20} />
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Date of Registration</label>
                <p className="text-slate-700 font-medium">07/12/2023</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Navbar = ({ onOpenDemo, onOpenCert }: { onOpenDemo: () => void, onOpenCert: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Vision', href: '#vision' },
    { name: 'Partner Schools', href: '#partners' },
    { name: 'Features', href: '#features' },
    { name: 'Security', href: '#security' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`glass px-6 py-3 rounded-full flex items-center justify-between transition-shadow duration-300 ${scrolled ? 'shadow-lg border-emerald-500/20' : ''}`}>
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-200 transition-all">
              <span className="text-white font-bold text-xl">V</span>
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-800">VidyaSetu AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <button key={link.name} onClick={() => handleNavClick(link.href)} className="hover:text-emerald-600 transition-colors cursor-pointer">{link.name}</button>
            ))}
            <button onClick={onOpenCert} className="flex items-center gap-1 hover:text-emerald-600 transition-colors"><Award size={16} /> MSME</button>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={onOpenDemo} className="hidden lg:block px-6 py-2 rounded-full border border-emerald-500 text-emerald-600 text-sm font-semibold hover:bg-emerald-50 transition-colors">Demo Logs</button>
            <a href={WEB_APP_URL} target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition-all shadow-md hover:shadow-emerald-200 flex items-center gap-2">Login <ExternalLink size={14} /></a>
            <button className="md:hidden p-2 rounded-full hover:bg-slate-100 transition-colors" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="md:hidden mt-4 mx-6 overflow-hidden glass rounded-3xl shadow-xl border border-emerald-500/10">
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button key={link.name} onClick={() => handleNavClick(link.href)} className="text-left py-2 text-slate-600 hover:text-emerald-600 font-medium border-b border-slate-100 last:border-0">{link.name}</button>
              ))}
              <div className="grid grid-cols-2 gap-3 mt-2">
                <button onClick={onOpenDemo} className="py-3 px-4 bg-emerald-50 text-emerald-600 rounded-2xl font-bold text-center text-sm">Demo Logs</button>
                <button onClick={onOpenCert} className="py-3 px-4 bg-slate-50 text-slate-600 rounded-2xl font-bold text-center text-sm">MSME Cert</button>
              </div>
              <a href={WEB_APP_URL} target="_blank" className="py-4 bg-emerald-500 text-white rounded-2xl font-bold text-center shadow-lg shadow-emerald-100">Launch App</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onOpenDemo }: { onOpenDemo: () => void }) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mb-6 uppercase tracking-wider">
            <Shield size={14} /> Secure by Design & MSME Registered
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-950 leading-tight mb-6">VidyaSetu AI – <span className="text-emerald-600">भविष्य का</span> स्मार्ट स्कूल सिस्टम</h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">Smart Management. Military-Grade Privacy. Govt (MSME) Registered. Built for the long-term success of Indian schools.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={onOpenDemo} className="px-8 py-4 bg-emerald-500 text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-100 group">
              Get Demo Logs <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a href={WEB_APP_URL} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all shadow-sm">
              <ExternalLink size={20} /> Open Web App
            </a>
          </div>
          <div className="mt-12 flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-1">Empowering Excellence</span>
              <span className="text-xl font-bold text-slate-800 flex items-center gap-2"><CheckCircle size={20} className="text-emerald-500"/> Leading Institutions</span>
            </div>
            <div className="h-8 w-px bg-slate-200" />
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Registration</span>
              <span className="text-sm font-bold text-slate-800 italic">{UDYAM_REG_NO}</span>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group cursor-pointer" onClick={() => window.open(WEB_APP_URL, '_blank')}>
            <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=1000" alt="School Dashboard" className="w-full h-auto transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-emerald-900/0 transition-colors" />
            <div className="absolute bottom-6 left-6 right-6 p-6 glass rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-emerald-700 font-bold">Try Live Interactive Dashboard</p>
                <p className="text-xs text-slate-500">Log in with provided demo credentials</p>
              </div>
              <ExternalLink size={20} className="text-emerald-600" />
            </div>
          </div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-400/20 blur-3xl rounded-full -z-10" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-400/20 blur-3xl rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

const PartnerSection = () => {
  return (
    <section id="partners" className="py-24 bg-white relative overflow-hidden scroll-mt-20 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mb-6 uppercase tracking-wider">
            <Star size={14} className="fill-emerald-500" /> Case Study: Success in Action
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Partners in <span className="text-emerald-600">Educational Excellence</span></h2>
          <p className="text-lg text-slate-600">See how top institutions are using VidyaSetu AI to transform their daily operations and safety.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative p-1 rounded-[3rem] bg-gradient-to-br from-emerald-400 to-blue-500 shadow-2xl"
            >
              <div className="bg-white rounded-[2.8rem] overflow-hidden">
                <div className="p-8 md:p-12">
                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                      <div className="flex items-center gap-6">
                        <div className="w-20 h-20 rounded-3xl bg-blue-50 flex items-center justify-center shadow-inner group">
                           <Globe size={40} className="text-blue-500 group-hover:rotate-12 transition-transform" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-black text-slate-900 tracking-tight">The Little Wings School</h3>
                          <p className="text-emerald-600 font-bold uppercase tracking-widest text-sm">Goluwala, Rajasthan</p>
                        </div>
                      </div>
                      <div className="px-6 py-2 rounded-full bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-200">Integrated Partnership</div>
                   </div>

                   <div className="grid md:grid-cols-2 gap-8 mb-10">
                      <div className="space-y-4">
                        <h4 className="font-bold text-slate-900 border-l-4 border-blue-500 pl-4">Digital Infrastructure</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3 text-slate-600 text-sm font-medium"><Zap size={16} className="text-blue-500"/> Classroom with Smart Boards</li>
                          <li className="flex items-center gap-3 text-slate-600 text-sm font-medium"><Shield size={16} className="text-blue-500"/> CCTV Enabled Premises</li>
                          <li className="flex items-center gap-3 text-slate-600 text-sm font-medium"><CheckCircle size={16} className="text-blue-500"/> 24-Hour Power Backup</li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-bold text-slate-900 border-l-4 border-emerald-500 pl-4">Safety & Comfort</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3 text-slate-600 text-sm font-medium"><Bus size={16} className="text-emerald-500"/> AC Transportation with GPS</li>
                          <li className="flex items-center gap-3 text-slate-600 text-sm font-medium"><Thermometer size={16} className="text-emerald-500"/> Full AC Campus Facility</li>
                          <li className="flex items-center gap-3 text-slate-600 text-sm font-medium"><Navigation size={16} className="text-emerald-500"/> Real-time Location Sharing</li>
                        </ul>
                      </div>
                   </div>

                   <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="flex items-center gap-4">
                         <MapPin size={24} className="text-slate-400" />
                         <p className="text-sm text-slate-500 font-medium">26 JRK, Goluwala, Teh. Pilibangan, Hanumangarh</p>
                      </div>
                      <div className="flex gap-4">
                        <a href="tel:+919929713492" className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100 text-emerald-600 hover:bg-emerald-50 transition-colors"><Phone size={20}/></a>
                        <a href={WEB_APP_URL} target="_blank" className="px-6 py-3 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all">Launch Portal <ExternalLink size={16}/></a>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 space-y-8">
             <div className="p-8 rounded-[2.5rem] bg-emerald-50 border border-emerald-100 relative overflow-hidden shadow-xl">
                <h4 className="text-2xl font-bold text-slate-900 mb-4">"Play & Learn" Ecosystem</h4>
                <p className="text-slate-600 leading-relaxed mb-6">The Little Wings School has successfully integrated VidyaSetu AI to manage their vast campus activities, ensuring that safety (GPS Tracking) and education (Digital Feedback) go hand-in-hand.</p>
                <div className="flex flex-wrap gap-2">
                   <span className="px-4 py-2 bg-white rounded-xl text-xs font-bold text-slate-600 shadow-sm border border-slate-100">Smart Boards</span>
                   <span className="px-4 py-2 bg-white rounded-xl text-xs font-bold text-slate-600 shadow-sm border border-slate-100">Live GPS</span>
                   <span className="px-4 py-2 bg-white rounded-xl text-xs font-bold text-slate-600 shadow-sm border border-slate-100">AC Transport</span>
                   <span className="px-4 py-2 bg-white rounded-xl text-xs font-bold text-slate-600 shadow-sm border border-slate-100">Digital Attendance</span>
                </div>
             </div>
             
             <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-3xl bg-blue-50 border border-blue-100">
                   <p className="text-2xl font-black text-blue-600 mb-1">100%</p>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Digital Safety Coverage</p>
                </div>
                <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-100">
                   <p className="text-2xl font-black text-emerald-600 mb-1">Verified</p>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">VidyaSetu Gold Status</p>
                </div>
             </div>

             <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden group cursor-pointer" onClick={() => window.open(WEB_APP_URL, '_blank')}>
                <div className="relative z-10 flex items-center justify-between">
                   <div>
                     <p className="font-bold text-lg mb-1">Add Your School</p>
                     <p className="text-slate-400 text-sm">Join the network of future-ready schools.</p>
                   </div>
                   <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                      <ArrowRight size={24} />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AppLifecycleAnimation = () => {
  return (
    <section className="py-24 bg-white overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">कैसे काम करता है <span className="text-emerald-600">VidyaSetu AI?</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto">One app, multiple lives. School life simplified in real-time.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 relative overflow-hidden h-[400px] flex flex-col">
            <div className="flex-grow relative flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/road.png')] opacity-10" />
              <motion.div animate={{ x: [-40, 40, -40], rotate: [0, 2, -2, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative z-10">
                <div className="w-24 h-16 bg-yellow-400 rounded-2xl shadow-xl flex items-center justify-center border-4 border-yellow-500 relative">
                  <div className="absolute -top-1 left-2 right-2 h-1 bg-yellow-600 rounded-full" />
                  <Bus size={32} className="text-yellow-900" />
                  <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                    <Navigation size={16} className="text-emerald-600" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
            <div className="relative z-10">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">Driver Module</span>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Live GPS Sync</h4>
              <p className="text-sm text-slate-500 leading-relaxed">बस शुरू होते ही पेरेंट्स को लाइव लोकेशन और अलर्ट मिल जाते हैं।</p>
            </div>
          </div>
          <div className="p-8 rounded-[2.5rem] bg-emerald-50 border border-emerald-100 relative overflow-hidden h-[400px] flex flex-col">
            <div className="flex-grow relative flex items-center justify-center">
              <motion.div initial={{ y: 0 }} animate={{ y: [-20, 0, -20] }} transition={{ duration: 4, repeat: Infinity }} className="w-20 h-24 bg-white rounded-xl shadow-lg border-2 border-emerald-100 p-4 flex flex-col gap-2 relative">
                <div className="h-2 w-full bg-slate-100 rounded" />
                <div className="h-2 w-2/3 bg-slate-100 rounded" />
                <div className="h-2 w-1/2 bg-slate-100 rounded" />
                <motion.div animate={{ y: [0, -40, 0], opacity: [0, 1, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-10 left-1/2 -translate-x-1/2"><UploadCloud size={32} className="text-emerald-500" /></motion.div>
              </motion.div>
            </div>
            <div className="relative z-10">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-2">Teacher Module</span>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Smart Homework</h4>
              <p className="text-sm text-slate-500 leading-relaxed">टीचर एक क्लिक में होमवर्क सबमिट करते हैं, जो सीधे पेरेंट्स के पास पहुँचता है।</p>
            </div>
          </div>
          <div className="p-8 rounded-[2.5rem] bg-blue-50 border border-blue-100 relative overflow-hidden h-[400px] flex flex-col">
            <div className="flex-grow relative flex items-center justify-center">
              <div className="w-32 h-56 bg-slate-900 rounded-[2rem] p-2 border-4 border-slate-800 shadow-2xl relative overflow-hidden">
                <div className="w-16 h-1 bg-slate-800 rounded-full mx-auto mb-4" />
                <div className="bg-white h-full rounded-[1.5rem] p-3">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center"><ClipboardCheck size={12} className="text-emerald-600"/></div>
                    <span className="text-[10px] font-bold text-slate-800">Homework Tab</span>
                  </div>
                  <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }} className="space-y-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex items-center justify-between p-2 bg-slate-50 rounded-lg border border-slate-100">
                        <div className="w-8 h-1 bg-slate-200 rounded" />
                        <CheckCircle size={10} className="text-emerald-500" />
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="relative z-10">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">Parent Module</span>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Daily Progress</h4>
              <p className="text-sm text-slate-500 leading-relaxed">पेरेंट्स और बच्चे सीधे ऐप में होमवर्क चेक और अपडेट कर सकते हैं।</p>
            </div>
          </div>
          <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden h-[400px] flex flex-col">
            <div className="flex-grow relative flex items-center justify-center">
               <div className="grid grid-cols-3 items-end gap-2 h-20 w-32">
                 {[40, 80, 60].map((h, i) => (
                   <motion.div key={i} animate={{ height: [`${h}%`, `${h+15}%`, `${h}%`] }} transition={{ duration: 3, delay: i*0.2, repeat: Infinity }} className="w-full bg-emerald-500 rounded-t-lg shadow-lg shadow-emerald-500/20" />
                 ))}
               </div>
               <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border border-white/5 rounded-full scale-125" />
            </div>
            <div className="relative z-10">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">Principal Module</span>
              <h4 className="text-xl font-bold text-white mb-2">Unified Dashboard</h4>
              <p className="text-sm text-slate-400 leading-relaxed">पूरे स्कूल का डेटा—फीस, अटेंडेंस और स्टाफ—एक ही स्क्रीन पर लाइव।</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const VisionSection = () => {
  return (
    <section id="vision" className="py-24 bg-white relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">A Vision for <span className="text-emerald-600">Unified Schools</span></h2>
            <div className="space-y-6 text-lg text-slate-600">
              <p>भारतीय स्कूलों की वास्तविकता को ध्यान में रखते हुए, हमने VidyaSetu AI को एक "ऑपरेंटिंग सिस्टम" के रूप में बनाया है। यह केवल एक सॉफ्टवेयर नहीं है, बल्कि आपके स्कूल के विजन को डिजिटल रूप देने का माध्यम है।</p>
              <p>We believe in simplicity, transparency, and long-term sustainability. Our goal is to reduce the administrative burden so you can focus on what matters most: <b>Education.</b></p>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100">
                <h4 className="text-3xl font-bold text-emerald-600 mb-2">100%</h4>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Paperless Office</p>
              </div>
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100">
                <h4 className="text-3xl font-bold text-emerald-600 mb-2">Real-time</h4>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Insights & Decisions</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-xl relative z-10">
               <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-lg"><CheckCircle size={24} /></div>
                 <h4 className="text-2xl font-bold text-slate-900">The VidyaSetu Promise</h4>
               </div>
               <ul className="space-y-6">
                 {[
                   { title: "No Fear-based Selling", desc: "हम आपको डरा कर नहीं, बल्कि भरोसा जीतकर अपना साथी बनाना चाहते हैं।" },
                   { title: "No Over-promising", desc: "हम वही वादा करते हैं जो तकनीकी रूप से संभव और सुरक्षित है।" },
                   { title: "Data Continuity", desc: "अगर आप कभी छोड़ना चाहें, तो आपका डेटा सुरक्षित रूप से आपके पास रहेगा।" }
                 ].map((item, i) => (
                   <li key={i} className="group">
                     <h5 className="font-bold text-slate-800 mb-1 group-hover:text-emerald-600 transition-colors">{item.title}</h5>
                     <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                   </li>
                 ))}
               </ul>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-50 rounded-full blur-3xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustSection = ({ onOpenCert, onOpenLegal }: { onOpenCert: () => void, onOpenLegal: (t: 'privacy' | 'terms' | 'data') => void }) => {
  return (
    <section id="security" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mb-4 uppercase">Data Security First</div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-950 mb-6">Military-Grade <span className="text-emerald-600">Privacy Guarantee</span></h2>
          <p className="text-lg text-slate-600">हमारा वादा: आपकी स्कूल का डेटा सिर्फ आपका है। No leaks, no third-party sales, and absolute control.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Shield className="text-emerald-600" size={32} />, title: "Legal Data Privacy", desc: "Your data is legally protected under Indian IT Acts. We act as custodians, not owners.", type: 'privacy' },
            { icon: <Lock className="text-emerald-600" size={32} />, title: "Encrypted Storage", desc: "Military-grade AES-256 encryption protects every byte of information.", type: 'data' },
            { icon: <Scale className="text-emerald-600" size={32} />, title: "Compliance First", desc: "Our terms of service are built to protect school management from legal risks.", type: 'terms' }
          ].map((item, idx) => (
            <motion.div key={idx} whileHover={{ y: -10 }} onClick={() => onOpenLegal(item.type as any)} className="p-10 rounded-[2.5rem] bg-white border border-slate-100 transition-all hover:shadow-2xl hover:shadow-emerald-100/50 cursor-pointer group">
              <div className="mb-6 w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">{item.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-4">{item.desc}</p>
              <span className="text-emerald-600 font-bold text-sm flex items-center gap-1">Read Legal Policy <ChevronRight size={16} /></span>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 p-8 md:p-12 rounded-[2.5rem] bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 bg-emerald-500 rounded-3xl flex items-center justify-center shadow-lg shadow-emerald-100 shrink-0"><Award className="text-white" size={48} /></div>
            <div>
              <h4 className="text-2xl font-bold text-slate-900">Proudly MSME Registered</h4>
              <p className="text-emerald-600 font-bold mb-1">Registration No: {UDYAM_REG_NO}</p>
              <p className="text-slate-500 text-sm">Official Government of India Recognition for Educational Support Services.</p>
            </div>
          </div>
          <button onClick={onOpenCert} className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all border border-slate-800 flex items-center gap-2 group shadow-lg">View Full Certificate <FileText size={20} className="group-hover:rotate-12 transition-transform" /></button>
        </div>
      </div>
    </section>
  );
};

// Mockup components for RoleExperience
const PrincipalMockup = () => (
  <div className="w-full h-full bg-slate-50 p-6 flex flex-col gap-4">
    <div className="flex justify-between items-center mb-4">
      <div className="h-4 w-32 bg-slate-200 rounded" />
      <div className="h-8 w-8 bg-emerald-500 rounded-full" />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="h-24 bg-white rounded-2xl border border-slate-100 p-4 flex flex-col justify-end gap-2">
        <div className="h-2 w-12 bg-slate-100 rounded" />
        <div className="h-4 w-full bg-emerald-100 rounded" />
      </div>
      <div className="h-24 bg-white rounded-2xl border border-slate-100 p-4 flex flex-col justify-end gap-2">
        <div className="h-2 w-12 bg-slate-100 rounded" />
        <div className="h-4 w-full bg-blue-100 rounded" />
      </div>
    </div>
    <div className="flex-grow bg-white rounded-2xl border border-slate-100 p-4 space-y-3">
      <div className="h-3 w-3/4 bg-slate-50 rounded" />
      <div className="h-3 w-1/2 bg-slate-50 rounded" />
      <div className="h-3 w-2/3 bg-slate-50 rounded" />
    </div>
  </div>
);

const TeacherMockup = () => (
  <div className="w-full h-full bg-emerald-50/30 p-6 flex flex-col gap-4">
    <div className="h-10 bg-white rounded-xl shadow-sm border border-emerald-100 flex items-center px-4 gap-3">
      <div className="w-4 h-4 rounded-full bg-emerald-500" />
      <div className="h-2 w-24 bg-slate-200 rounded" />
    </div>
    <div className="flex-grow bg-white rounded-[2rem] shadow-sm border border-slate-100 p-6 space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-slate-100" />
        <div className="space-y-2">
          <div className="h-2 w-20 bg-slate-200 rounded" />
          <div className="h-2 w-12 bg-slate-100 rounded" />
        </div>
      </div>
      <div className="h-px bg-slate-50 w-full" />
      <div className="space-y-3">
        <div className="h-10 bg-slate-50 rounded-lg" />
        <div className="h-20 bg-emerald-50/50 rounded-lg border border-dashed border-emerald-200 flex items-center justify-center">
          <UploadCloud size={24} className="text-emerald-300" />
        </div>
      </div>
    </div>
  </div>
);

const ParentMockup = () => (
  <div className="w-full h-full bg-blue-50/30 p-6 flex items-center justify-center">
    <div className="w-48 h-80 bg-slate-900 rounded-[2.5rem] border-4 border-slate-800 shadow-xl overflow-hidden relative">
      <div className="absolute top-0 inset-x-0 h-6 flex justify-center">
        <div className="w-16 h-4 bg-slate-800 rounded-b-xl" />
      </div>
      <div className="mt-8 px-4 space-y-4">
        <div className="bg-white/10 h-8 rounded-lg" />
        <div className="bg-white rounded-xl p-3 space-y-2">
          <div className="flex justify-between items-center">
             <div className="h-2 w-10 bg-slate-200 rounded" />
             <div className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>
          <div className="h-1.5 w-full bg-slate-50 rounded" />
        </div>
        <div className="bg-emerald-500 rounded-xl p-3 h-24 relative overflow-hidden">
          <div className="relative z-10 text-[10px] font-bold text-white">LIVE TRACKING</div>
          <div className="absolute bottom-2 right-2"><Bus size={32} className="text-white/20" /></div>
        </div>
      </div>
    </div>
  </div>
);

const DriverMockup = () => (
  <div className="w-full h-full bg-slate-900 flex flex-col p-6 text-white">
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
        <span className="text-xs font-bold uppercase tracking-widest">On Trip</span>
      </div>
      <Clock size={18} />
    </div>
    <div className="flex-grow flex flex-col justify-center items-center gap-6">
       <div className="w-24 h-24 rounded-full border-4 border-emerald-500 flex items-center justify-center bg-emerald-500/10">
          <Navigation size={40} className="text-emerald-500" />
       </div>
       <div className="text-center">
         <p className="text-2xl font-bold">Route 4B</p>
         <p className="text-slate-400 text-sm">Next Stop: Sector 22</p>
       </div>
    </div>
    <button className="w-full py-4 bg-red-500 rounded-2xl font-bold uppercase tracking-wider text-sm shadow-lg shadow-red-500/20">End Trip</button>
  </div>
);

const RoleExperience = () => {
  const [activeRole, setActiveRole] = useState(0);
  const roles = [
    { title: "Principals", icon: <LayoutDashboard size={20} />, content: "Complete oversight of attendance, accounts, and notices with real-time analytics dashboards.", features: ["Full Admin Control", "Revenue Tracking", "Instant Digital Notices", "Staff Management"], mockup: <PrincipalMockup />, ui: [{ icon: <TrendingUp size={14}/>, text: "+12% Revenue", color: "bg-emerald-500" }, { icon: <Users size={14}/>, text: "98% Attendance", color: "bg-blue-500" }] },
    { title: "Teachers", icon: <Users size={20} />, content: "Reduce 70% of paperwork. Focus on teaching while AI handles routine administration.", features: ["Digital Attendance", "Smart Homework Sharing", "History of Students", "Leave Requests"], mockup: <TeacherMockup />, ui: [{ icon: <ClipboardCheck size={14}/>, text: "Attendance Done", color: "bg-emerald-500" }, { icon: <FileText size={14}/>, text: "Homework Shared", color: "bg-orange-500" }] },
    { title: "Parents", icon: <Smartphone size={20} />, content: "Stay connected with your child's journey in real-time, anytime, anywhere.", features: ["Progress Reports", "Fee Payment reminders", "Bus Live Tracking", "Direct Teacher Connect"], mockup: <ParentMockup />, ui: [{ icon: <Bus size={14}/>, text: "Bus Nearby", color: "bg-yellow-500" }, { icon: <Award size={14}/>, text: "New Grade: A+", color: "bg-emerald-500" }] },
    { title: "Drivers", icon: <Bus size={20} />, content: "Safety first. Simple one-tap trip starting with live GPS sharing for parents.", features: ["One-tap Start/Stop", "Live Location Sync", "Roster Management", "Speed Alerts"], mockup: <DriverMockup />, ui: [{ icon: <MapPin size={14}/>, text: "GPS Active", color: "bg-red-500" }, { icon: <Clock size={14}/>, text: "Next Stop: 2m", color: "bg-blue-500" }] }
  ];
  return (
    <section id="features" className="py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Unified Role-Based <span className="text-emerald-600">Experience</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">Every stakeholder gets exactly what they need in a clean, simple interface.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {roles.map((role, idx) => (
            <button key={idx} onClick={() => setActiveRole(idx)} className={`px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-3 border ${activeRole === idx ? 'bg-emerald-500 text-white border-emerald-500 shadow-xl shadow-emerald-100' : 'bg-slate-50 text-slate-600 border-slate-100 hover:bg-slate-100'}`}>{role.icon} {role.title}</button>
          ))}
        </div>
        <div className="glass p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 relative">
          <AnimatePresence mode="wait">
            <motion.div key={activeRole} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.02 }} transition={{ duration: 0.5, ease: "anticipate" }} className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6">{roles[activeRole].icon}</motion.div>
                <motion.h3 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="text-4xl font-bold text-slate-900 mb-6">{roles[activeRole].title} Module</motion.h3>
                <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl text-slate-600 mb-8 leading-relaxed italic border-l-4 border-emerald-200 pl-6">"{roles[activeRole].content}"</motion.p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {roles[activeRole].features.map((feat, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.05 }} className="flex items-center gap-3 text-slate-700 font-medium"><div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0"><CheckCircle size={14} className="text-emerald-600" /></div>{feat}</motion.div>
                  ))}
                </div>
                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}><a href={WEB_APP_URL} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex px-10 py-5 bg-emerald-500 text-white rounded-full font-bold items-center gap-2 hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-100 group">Test the Dashboard <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></a></motion.div>
              </div>
              <div className="order-1 md:order-2 relative h-[400px]">
                <motion.div className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border border-white/50 relative z-10" layoutId="role-image">
                   <AnimatePresence mode="wait">
                      <motion.div 
                        key={activeRole}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full h-full"
                      >
                        {roles[activeRole].mockup}
                      </motion.div>
                   </AnimatePresence>
                </motion.div>
                {roles[activeRole].ui.map((ui, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.6 + i * 0.2, duration: 0.5, type: "spring", stiffness: 100 }} className={`absolute z-20 ${i === 0 ? '-top-4 -right-4' : '-bottom-4 -left-4'} glass p-4 rounded-2xl shadow-xl flex items-center gap-3 border-white/40`}><div className={`w-8 h-8 ${ui.color} rounded-lg flex items-center justify-center text-white shadow-lg`}>{ui.icon}</div><span className="font-bold text-slate-800 text-sm">{ui.text}</span></motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-950 mb-6">Transparent <span className="text-emerald-600">Pricing</span></h2>
          <p className="text-lg text-slate-600 italic">No hidden fees. No fear tactics. Full data continuity. Cancel anytime.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div whileHover={{ y: -10 }} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-200 flex flex-col h-full shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-emerald-500 text-white px-8 py-3 rounded-bl-[2rem] text-sm font-bold shadow-lg">Recommended</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">School Operating Plan</h3>
            <p className="text-slate-500 mb-8 text-sm">For Management & Staff</p>
            <div className="mb-8"><span className="text-5xl font-bold text-slate-900">₹1,000</span><span className="text-slate-500">/month</span><div className="mt-2 inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-bold text-xs uppercase">Special: ₹10,000/year (Save 20%)</div></div>
            <ul className="space-y-4 mb-10 flex-grow">{["Full Admin Dashboard", "Staff Management (Unlimited)", "Financial Reporting", "Govt Compliant Documents", "24/7 Priority Support", "Data Continuity Promise"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-600"><div className="shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center"><CheckCircle className="text-emerald-500" size={14} /></div>{item}</li>
            ))}</ul>
            <a href={WEB_APP_URL} target="_blank" className="w-full py-5 bg-emerald-500 text-white rounded-full font-bold text-center hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-100 group-hover:scale-[1.02] active:scale-[0.98]">Launch School Portal</a>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} className="p-10 rounded-[3rem] bg-white border border-slate-200 flex flex-col h-full shadow-lg group">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Student & Parent Plan</h3>
            <p className="text-slate-500 mb-8 text-sm">For Learning & Connectivity</p>
            <div className="mb-8"><span className="text-5xl font-bold text-slate-900">₹80</span><span className="text-slate-500">/month</span><div className="mt-2 inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full font-bold text-xs uppercase">Special: ₹850/year (Per Student)</div></div>
            <ul className="space-y-4 mb-10 flex-grow">{["Smart Homework Portal", "Real-time Bus Tracking", "Attendance Alerts", "Fee Receipt Access", "Learning Assistance", "Parent-Teacher Connect"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-600"><div className="shrink-0 w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center"><CheckCircle className="text-emerald-500" size={14} /></div>{item}</li>
            ))}</ul>
            <button className="w-full py-5 bg-white border-2 border-emerald-500 text-emerald-600 rounded-full font-bold hover:bg-emerald-50 transition-all group-hover:scale-[1.02] active:scale-[0.98]">Talk to Sales</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FounderMessage = () => {
  return (
    <section className="py-24 bg-emerald-600 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="w-12 h-1 w-20 bg-emerald-300 mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Vision for <br/>Indian Education</h2>
          <p className="text-xl text-emerald-100 mb-10 leading-relaxed italic border-l-4 border-emerald-300/40 pl-8">"We built VidyaSetu AI because we saw how schools were struggling with fragmented tools. Our mission is to create a digital foundation that is as strong and reliable as the schools themselves."</p>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-3xl bg-white/20 border-2 border-white/40 flex items-center justify-center shrink-0 shadow-lg"><User size={48} className="text-white" /></div>
              <div><p className="font-bold text-2xl">Anuvar Meedhari</p><p className="text-emerald-200">Founder, VidyaSetu AI</p></div>
            </div>
            <div className="p-6 glass-dark rounded-[2rem] border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-300 mb-3">Management Team</p>
              <div className="flex gap-8">
                <div><p className="font-bold text-white">Sunil Suthar</p><p className="text-[10px] text-emerald-200 uppercase font-bold">Strategy & Operations</p></div>
                <div><p className="font-bold text-white">Jasvant Suthar</p><p className="text-[10px] text-emerald-200 uppercase font-bold">Tech Management</p></div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="glass-dark p-12 rounded-[3rem] border-white/20 shadow-2xl">
            <h4 className="text-2xl font-bold mb-8 flex items-center gap-3"><Calendar className="text-emerald-400" /> Our Roadmap</h4>
            <div className="space-y-10">
              {[
                { year: "2024", task: "Foundation & Security Core", status: "Active" },
                { year: "2025", task: "AI Personalization for Students", status: "Upcoming" },
                { year: "2026", task: "Global Educational Standards", status: "Future" }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className="text-emerald-300 font-black text-lg w-12 pt-1">{item.year}</div>
                  <div className="h-full w-px bg-white/20 relative"><div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50 group-hover:scale-125 transition-transform" /></div>
                  <div className="flex-grow pb-4"><p className="font-bold text-white group-hover:text-emerald-400 transition-colors">{item.task}</p><span className="text-xs font-bold uppercase tracking-widest text-emerald-300/60 mt-1 block">{item.status}</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ onOpenDemo, onOpenCert, onOpenLegal }: { onOpenDemo: () => void, onOpenCert: () => void, onOpenLegal: (t: 'privacy' | 'terms' | 'data') => void }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20"><span className="text-white font-bold text-2xl">V</span></div>
              <span className="text-3xl font-bold text-white tracking-tight">VidyaSetu AI</span>
            </div>
            <p className="max-w-md text-lg text-slate-500 mb-10 leading-relaxed">The secure, unified digital operating system for modern Indian schools. Proudly registered under MSME, Govt of India.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <a href="mailto:support@vidyasetuai.com" className="flex items-center gap-3 hover:text-emerald-400 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors"><Mail size={18} /></div>
                <span className="text-sm">support@vidyasetuai.com</span>
              </a>
              <div className="flex flex-col gap-4">
                 <div className="flex items-start gap-3">
                   <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center shrink-0"><User size={18} /></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-600 mb-1">Founder (Anuvar Meedhari)</span>
                    <a href="tel:+917737080094" className="text-sm text-slate-300 hover:text-emerald-400 transition-colors">+91 77370 80094</a>
                  </div>
                 </div>
                 <div className="flex items-start gap-3">
                   <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center shrink-0"><Headphones size={18} /></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-600 mb-1">Help & Management</span>
                    <a href="tel:+918005833036" className="text-sm text-slate-300 hover:text-emerald-400 transition-colors">+91 80058 33036</a>
                    <a href="tel:+919587967069" className="text-sm text-slate-300 hover:text-emerald-400 transition-colors">+91 95879 67069</a>
                    <a href="tel:+919929922698" className="text-sm text-slate-300 hover:text-emerald-400 transition-colors">+91 99299 22698</a>
                  </div>
                 </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest">Platform</h4>
            <ul className="space-y-4">
              <li><button onClick={onOpenDemo} className="hover:text-white transition-colors cursor-pointer text-left">Demo Logs</button></li>
              <li><a href={WEB_APP_URL} target="_blank" className="hover:text-white transition-colors flex items-center gap-2">Live Web App <ExternalLink size={14} /></a></li>
              <li><button onClick={() => document.getElementById('features')?.scrollIntoView({behavior:'smooth'})} className="hover:text-white transition-colors cursor-pointer text-left">Feature List</button></li>
              <li><button onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior:'smooth'})} className="hover:text-white transition-colors cursor-pointer text-left">Price Plans</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest">Trust & Compliance</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={onOpenCert} className="hover:text-white transition-colors cursor-pointer text-left">MSME Certificate</button></li>
              <li><button onClick={() => onOpenLegal('privacy')} className="hover:text-white transition-colors cursor-pointer text-left">Privacy Policy</button></li>
              <li><button onClick={() => onOpenLegal('terms')} className="hover:text-white transition-colors cursor-pointer text-left">Terms of Service</button></li>
              <li><button onClick={() => onOpenLegal('data')} className="hover:text-white transition-colors cursor-pointer text-left">Data Protection</button></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-8 text-xs font-bold uppercase tracking-widest text-slate-600">
          <p>© {new Date().getFullYear()} VidyaSetu AI. Hanumangarh, Rajasthan.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isCertOpen, setIsCertOpen] = useState(false);
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | 'data' | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-emerald-100 selection:text-emerald-900">
      <AnimatePresence>
        {isDemoOpen && <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />}
        {isCertOpen && <CertificateModal isOpen={isCertOpen} onClose={() => setIsCertOpen(false)} />}
        {legalType && <LegalModal type={legalType} isOpen={!!legalType} onClose={() => setLegalType(null)} />}
      </AnimatePresence>

      <Navbar onOpenDemo={() => setIsDemoOpen(true)} onOpenCert={() => setIsCertOpen(true)} />
      <main>
        <Hero onOpenDemo={() => setIsDemoOpen(true)} />
        <PartnerSection />
        <AppLifecycleAnimation />
        <VisionSection />
        <TrustSection onOpenCert={() => setIsCertOpen(true)} onOpenLegal={(t) => setLegalType(t)} />
        <RoleExperience />
        <Pricing />
        <FounderMessage />
        <section className="py-24 bg-white scroll-mt-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="p-12 md:p-20 glass rounded-[4rem] border-2 border-emerald-500/10 shadow-3xl relative overflow-hidden group">
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">Secure your school's <br/><span className="text-emerald-600">Digital Future</span> today.</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <button onClick={() => setIsDemoOpen(true)} className="px-12 py-6 bg-emerald-500 text-white rounded-full font-bold text-xl hover:bg-emerald-600 transition-all shadow-2xl shadow-emerald-200 active:scale-95">Get Demo Details</button>
                  <a href={WEB_APP_URL} target="_blank" rel="noopener noreferrer" className="px-12 py-6 bg-slate-900 text-white rounded-full font-bold text-xl hover:bg-slate-800 transition-all shadow-2xl shadow-slate-200 active:scale-95 flex items-center justify-center gap-3">Go to Live App <ExternalLink size={24} /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer onOpenDemo={() => setIsDemoOpen(true)} onOpenCert={() => setIsCertOpen(true)} onOpenLegal={(t) => setLegalType(t)} />
    </div>
  );
}

// Re-defining internal components for completeness
const Thermometer = ({ size, className }: { size: number, className: string }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/><path d="M10 9h4"/></svg>;

export default App;
