import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";

const reveal = { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } };

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-28 sm:px-8 sm:pt-32">
      <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_390px] lg:gap-20">
        <div>
          <motion.div initial="hidden" animate="visible" variants={reveal} transition={{ duration: 0.45 }} className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1.5 text-xs font-semibold text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> Available for focused freelance projects</motion.div>
          <motion.p initial="hidden" animate="visible" variants={reveal} transition={{ duration: 0.45, delay: 0.05 }} className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-blue-300">Full-stack developer · Applied AI builder</motion.p>
          <motion.h1 initial="hidden" animate="visible" variants={reveal} transition={{ duration: 0.55, delay: 0.1 }} className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-7xl lg:text-[5.4rem]">I turn complex ideas into <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-violet-400 bg-clip-text text-transparent">clear, working products.</span></motion.h1>
          <motion.p initial="hidden" animate="visible" variants={reveal} transition={{ duration: 0.5, delay: 0.18 }} className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">I build responsive business websites, web applications and practical automation systems, from the first interface to deployment.</motion.p>
          <motion.div initial="hidden" animate="visible" variants={reveal} transition={{ duration: 0.5, delay: 0.26 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-blue-100">See selected work <ArrowDownRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" /></a>
            <a href="https://wa.me/2347068349199?text=Hello%20David%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.04] px-6 py-3.5 text-sm font-bold text-white transition hover:border-blue-300/40 hover:bg-blue-300/10">Discuss a project <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={reveal} transition={{ duration: 0.5, delay: 0.32 }} className="mt-8 flex items-center gap-2 text-sm text-slate-500"><MapPin className="h-4 w-4" /> Lagos, Nigeria · Available remotely</motion.div>
        </div>
        <motion.aside initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.18 }} className="relative mx-auto w-full max-w-[390px]">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 via-transparent to-violet-500/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.055] p-3 shadow-2xl shadow-black/30">
            <img src="/david-gilbert.png" alt="David Gilbert" className="aspect-[4/5] w-full rounded-[1.45rem] object-cover object-top" />
            <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/12 bg-[#090d18]/85 p-4 backdrop-blur-xl"><p className="font-semibold text-white">David Izuchukwu Gilbert</p><p className="mt-1 text-sm text-slate-400">Engineering discipline, product-minded execution.</p></div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
