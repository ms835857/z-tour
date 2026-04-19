import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Compass, Globe, Sparkles, ArrowRight } from 'lucide-react';

/* ─── Subtle ambient gradient mesh behind the landing card ─── */
function AmbientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Deep indigo wash — upper left */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '50vw', height: '50vw', maxWidth: 700, maxHeight: 700,
          top: '-12%', left: '-8%',
          background: 'radial-gradient(circle, rgba(99, 70, 190, 0.12), transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={{ x: [0, 40, 0], y: [0, 25, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Deep teal wash — right */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '40vw', height: '40vw', maxWidth: 550, maxHeight: 550,
          top: '15%', right: '-5%',
          background: 'radial-gradient(circle, rgba(34, 211, 238, 0.08), transparent 70%)',
          filter: 'blur(110px)',
        }}
        animate={{ x: [0, -30, 0], y: [0, 35, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Warm amber hint — bottom */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '45vw', height: '45vw', maxWidth: 600, maxHeight: 600,
          bottom: '-15%', left: '30%',
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.05), transparent 70%)',
          filter: 'blur(120px)',
        }}
        animate={{ x: [0, 25, 0], y: [0, -15, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

/* ─── Floating subtle particles ─── */
function FloatingMotes() {
  const motes = useMemo(() => {
    return Array.from({ length: 35 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      duration: Math.random() * 30 + 15,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.2 + 0.05,
      color: ['#22d3ee', '#a78bfa', '#fbbf24', '#6366f1'][Math.floor(Math.random() * 4)],
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {motes.map((m) => (
        <motion.div
          key={m.id}
          className="absolute rounded-full"
          style={{
            left: `${m.x}%`,
            top: `${m.y}%`,
            width: m.size,
            height: m.size,
            backgroundColor: m.color,
            opacity: m.opacity,
            boxShadow: `0 0 ${m.size * 4}px ${m.color}40`,
          }}
          animate={{
            y: [-12, 12, -12],
            x: [-6, 6, -6],
          }}
          transition={{
            duration: m.duration,
            repeat: Infinity,
            delay: m.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function LandingPage({ setView }) {
  return (
    <motion.div
      className="absolute inset-0 w-full h-full"
      style={{ backgroundColor: '#12131a' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8 }}
    >
      <AmbientMesh />
      <FloatingMotes />

      {/* Hero UI */}
      <div className="h-full w-full flex flex-col items-center justify-center p-6 relative">
        {/* Stats Row */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex gap-8 mb-10"
        >
          {[
            { icon: Globe, label: '13 Destinations', color: '#22d3ee' },
            { icon: Compass, label: '3 Categories', color: '#a78bfa' },
            { icon: Sparkles, label: 'Interactive 3D', color: '#fbbf24' },
          ].map(({ icon: Icon, label, color }) => (
            <div key={label} className="flex items-center gap-2 text-sm">
              <Icon size={16} style={{ color }} />
              <span style={{ color: '#8888a8' }}>{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="glass-panel p-10 md:p-14 rounded-3xl text-center max-w-2xl w-full relative overflow-hidden"
        >
          {/* Inner gradient sheen */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(99,70,190,0.06), transparent 50%, rgba(34,211,238,0.04))',
            }}
          />

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
            className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, rgba(34,211,238,0.12), rgba(167,139,250,0.12))',
              border: '1px solid rgba(34,211,238,0.15)',
            }}
          >
            <Globe size={32} style={{ color: '#22d3ee' }} />
          </motion.div>

          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{
              background: 'linear-gradient(135deg, #22d3ee, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Explore Pakistan in 3D
          </h1>
          <p className="text-lg md:text-xl mb-8" style={{ color: '#8888a8' }}>
            Navigate through an immersive galaxy of destinations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => setView('graph')}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full font-semibold text-lg text-white flex items-center justify-center gap-2 group"
              style={{
                background: 'linear-gradient(135deg, #22d3ee, #a78bfa)',
                boxShadow: '0 4px 25px rgba(34, 211, 238, 0.2), 0 8px 40px rgba(167, 139, 250, 0.15)',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <span>Explore Now</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 text-sm tracking-widest uppercase"
          style={{ color: '#55556a' }}
        >
          Click and drag to explore • Scroll to zoom
        </motion.p>
      </div>
    </motion.div>
  );
}
