import { useState, useEffect } from 'react';
import pckupLogo from './assets/icon-orange.svg';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X, ChevronDown, ArrowUpRight, Zap, Shield, Layers, Code, Globe } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="#" className="text-2xl font-bold tracking-tighter text-white">
            <img src={pckupLogo} alt="Pckup Logo" className="h-8" />
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
            <div className="group relative flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
              Solutions <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-full left-0 mt-4 w-64 bg-[#111] border border-white/10 rounded-xl p-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all">
                <div className="p-3 hover:bg-white/5 rounded-lg transition-colors">
                  <div className="text-white font-medium mb-1">Seamless Money Movement</div>
                  <div className="text-xs text-gray-400">Instant stablecoin bridging/swapping</div>
                </div>
                <div className="p-3 hover:bg-white/5 rounded-lg transition-colors">
                  <div className="text-white font-medium mb-1">Simplified Stablecoin UX</div>
                  <div className="text-xs text-gray-400">Global balances, smart account integration</div>
                </div>
                <div className="p-3 hover:bg-white/5 rounded-lg transition-colors">
                  <div className="text-white font-medium mb-1">Institutional Grade Execution</div>
                  <div className="text-xs text-gray-400">For maximum comfort & visibility</div>
                </div>
                <div className="p-3 hover:bg-white/5 rounded-lg transition-colors">
                  <div className="text-white font-medium mb-1">Liquidity & Yield</div>
                  <div className="text-xs text-gray-400">Source, or provide just-in-time liquidity</div>
                </div>
              </div>
            </div>
            <div className="group relative flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
              Resources <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-full left-0 mt-4 w-48 bg-[#111] border border-white/10 rounded-xl p-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all">
                <a href="#" className="block p-3 hover:bg-white/5 rounded-lg text-white transition-colors">Blog</a>
                <a href="#" className="block p-3 hover:bg-white/5 rounded-lg text-white transition-colors">Docs</a>
                <a href="#" className="block p-3 hover:bg-white/5 rounded-lg text-white transition-colors">Dashboard</a>
                <a href="#" className="block p-3 hover:bg-white/5 rounded-lg text-white transition-colors">Brand</a>
              </div>
            </div>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2"
          >
            Bridge with Portal <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            <a href="#" className="text-lg font-medium text-white">About</a>
            <a href="#" className="text-lg font-medium text-white">Careers</a>
            <a href="#" className="text-lg font-medium text-white">Solutions</a>
            <a href="#" className="text-lg font-medium text-white">Resources</a>
            <a href="#" className="text-lg font-medium text-white">Contact</a>
            <a
              href="#"
              className="px-5 py-3 bg-white text-black text-center font-semibold rounded-full mt-4"
            >
              Bridge with Portal
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-48 pb-32 px-6 overflow-hidden min-h-[90vh] flex items-center justify-center">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      >
        <source src="https://r2.vidzflow.com/source/88fe23d4-f5b2-4b0e-ac00-943c1a88815d.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/90 pointer-events-none" />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[110px] font-medium tracking-tighter leading-[0.9] text-white mb-8 font-display"
        >
          Logistics moving at the speed of now.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-24"
        >
          <a
            href="#"
            className="px-8 py-4 bg-white text-black text-lg font-semibold rounded-full hover:scale-105 transition-transform flex items-center gap-2"
          >
            Bridge with Portal <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-3xl text-gray-400 max-w-4xl mx-auto leading-tight font-light"
        >
          Eco ensures superior execution for any stablecoin product or strategy. We connect leading stablecoin ecosystems with unparalleled speed, capital efficiency and control.
        </motion.p>
      </div>
    </section>
  );
};

const Products = () => {
  return (
    <section className="py-32 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-4">
            Three products.<br />One endgame.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative bg-[#111] border border-white/10 rounded-3xl p-8 hover:bg-[#151515] transition-colors overflow-hidden flex flex-col h-full"
          >
            <div className="text-sm font-mono text-gray-500 mb-8">01</div>
            <h3 className="text-3xl font-medium text-white mb-4">Routes</h3>
            <p className="text-gray-400 mb-12 flex-grow">
              The fastest stablecoin movement across chains. Permissionless to integrate with Routes SDK.
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <a href="#" className="px-5 py-2.5 bg-white/10 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-colors">
                Integrate
              </a>
              <a href="#" className="px-5 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                Try Portal
              </a>
            </div>
          </motion.div>

          {/* Product 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative bg-[#111] border border-white/10 rounded-3xl p-8 hover:bg-[#151515] transition-colors overflow-hidden flex flex-col h-full"
          >
            <div className="text-sm font-mono text-gray-500 mb-8">02</div>
            <h3 className="text-3xl font-medium text-white mb-4">Accounts</h3>
            <p className="text-gray-400 mb-12 flex-grow">
              Enable a unified stablecoin balance with one-click actions across any connected chain.
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <a href="#" className="px-5 py-2.5 bg-white/10 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-colors">
                Coming Soon
              </a>
            </div>
          </motion.div>

          {/* Product 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative bg-[#111] border border-white/10 rounded-3xl p-8 hover:bg-[#151515] transition-colors overflow-hidden flex flex-col h-full"
          >
            <div className="text-sm font-mono text-gray-500 mb-8">03</div>
            <h3 className="text-3xl font-medium text-white mb-4">Crowd Liquidity</h3>
            <p className="text-gray-400 mb-12 flex-grow">
              A protocol for chains, bridges, and DeFi to share stablecoin liquidity in a way that improves onchain UX for everyone. Participating is as easy as holding stablecoins.
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <a href="#" className="px-5 py-2.5 bg-white/10 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-colors flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BuildWithEco = () => {
  return (
    <section className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-16">
          Build with Eco
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-colors">
            <Zap className="w-8 h-8 text-white mb-6" />
            <h3 className="text-xl font-medium text-white mb-4">Real-time money movement</h3>
            <a href="#" className="text-gray-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors">
              Learn more <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-colors">
            <Layers className="w-8 h-8 text-white mb-6" />
            <h3 className="text-xl font-medium text-white mb-4">Simplify onchain UX</h3>
            <a href="#" className="text-gray-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors">
              Learn more <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-colors">
            <Code className="w-8 h-8 text-white mb-6" />
            <h3 className="text-xl font-medium text-white mb-4">Program perfect execution</h3>
            <a href="#" className="text-gray-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors">
              Learn more <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Partners = () => {
  return (
    <section className="py-24 px-6 border-y border-white/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <p className="text-gray-500 text-sm font-medium uppercase tracking-widest mb-12">and 50+ more</p>
        <div className="w-full flex justify-center opacity-50 grayscale">
          {/* Placeholder for partner logos */}
          <div className="flex gap-12 md:gap-24 items-center justify-center flex-wrap">
            <div className="text-2xl font-bold text-white">BASE</div>
            <div className="text-2xl font-bold text-white">OPTIMISM</div>
            <div className="text-2xl font-bold text-white">ARBITRUM</div>
            <div className="text-2xl font-bold text-white">POLYGON</div>
            <div className="text-2xl font-bold text-white">ETHEREUM</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-40 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(50,50,50,0.3)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-8">
          Unlock truly programmable money movement
        </h2>
        <h3 className="text-3xl md:text-5xl font-light text-gray-400 mb-16">
          One Click, Full Send
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="px-8 py-4 bg-white text-black text-lg font-semibold rounded-full hover:scale-105 transition-transform w-full sm:w-auto"
          >
            Book a call
          </a>
          <a
            href="#"
            className="px-8 py-4 bg-white/10 text-white text-lg font-semibold rounded-full hover:bg-white/20 transition-colors w-full sm:w-auto"
          >
            Read our docs
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black pt-24 pb-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-2">
            <img src={pckupLogo} alt="Pckup Logo" className="h-10" />
            <p className="text-gray-400 max-w-sm mb-8">
              Stay updated with Eco
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-[#111] border border-white/10 rounded-lg px-4 py-2 text-white outline-none focus:border-white/30 w-full max-w-xs"
              />
              <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Jobs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Brand</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">Social</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">X (Twitter)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Forum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-sm text-gray-500">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Eco. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/30 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <BuildWithEco />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
