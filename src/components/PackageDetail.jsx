import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Star, MapPin, Navigation, Mountain, Building2, Landmark, Clock, Users, Gauge, Check } from 'lucide-react';

const categoryIcon = {
  Nature: Mountain,
  City: Building2,
  Heritage: Landmark,
};

const difficultyColor = {
  Easy: '#22d3ee',
  Moderate: '#fbbf24',
  Challenging: '#ef4444',
};

export default function PackageDetail({ pkg, destinationName, destinationCategory, getCategoryColor, onBack, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const accentColor = getCategoryColor(destinationCategory);
  const CategoryIcon = categoryIcon[destinationCategory] || Landmark;

  return (
    <motion.div
      className="absolute inset-0 z-50 flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{ background: 'rgba(12, 13, 20, 0.6)', backdropFilter: 'blur(6px)' }}
    >
      <motion.div
        initial={{ y: 60, opacity: 0, scale: 0.92 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 40, opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', damping: 22, stiffness: 180 }}
        className="w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-3xl p-7 relative"
        style={{
          background: 'rgba(26, 27, 46, 0.8)',
          backdropFilter: 'blur(28px) saturate(1.5)',
          WebkitBackdropFilter: 'blur(28px) saturate(1.5)',
          border: '1px solid rgba(255,255,255,0.07)',
          boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${accentColor}08, inset 0 1px 0 rgba(255,255,255,0.04)`,
        }}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-6">
          <motion.button
            onClick={onBack}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-button px-4 py-2 rounded-xl text-sm flex items-center gap-2"
            style={{ color: '#e8e8f0' }}
          >
            ← Back to packages
          </motion.button>
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full glass-button"
            style={{ color: '#8888a8' }}
          >
            <X size={18} />
          </motion.button>
        </div>

        {/* Hero Image */}
        <div className="w-full h-44 mb-5 rounded-2xl overflow-hidden relative" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
           <img 
              src={`https://picsum.photos/seed/${encodeURIComponent(destinationName)}/600/300`}
              alt={destinationName}
              className="w-full h-full object-cover"
           />
           {/* Subtle gradient overlay to blend */}
           <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,27,46,0.8)] to-transparent opacity-80 mix-blend-multiply"></div>
        </div>

        {/* Agent & Destination */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{pkg.agentLogo}</span>
          <span className="text-sm font-medium" style={{ color: '#8888a8' }}>{pkg.agentName}</span>
        </div>
        <div className="flex items-center gap-2 mb-1">
          <span
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{
              backgroundColor: `${accentColor}15`,
              border: `1px solid ${accentColor}30`,
              color: accentColor,
            }}
          >
            <CategoryIcon size={10} />
            {destinationCategory}
          </span>
          <span className="text-xs" style={{ color: '#55556a' }}>→</span>
          <span className="text-xs font-medium" style={{ color: '#8888a8' }}>{destinationName}</span>
        </div>

        <h2 className="text-2xl font-bold mt-3 mb-1" style={{ color: '#e8e8f0' }}>
          {pkg.packageName}
        </h2>

        {/* Price + Rating */}
        <div className="flex items-center gap-4 mt-3 mb-6">
          <span className="text-xl font-bold" style={{ color: accentColor }}>{pkg.price}</span>
          <div className="flex items-center gap-1.5">
            <Star size={14} fill="#fbbf24" stroke="#fbbf24" />
            <span className="font-semibold text-sm" style={{ color: '#fbbf24' }}>{pkg.rating}</span>
          </div>
        </div>

        {/* Info Row */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { icon: Clock, label: pkg.duration, title: 'Duration' },
            { icon: Users, label: pkg.groupSize, title: 'Group' },
            { icon: Gauge, label: pkg.difficulty, title: 'Level', color: difficultyColor[pkg.difficulty] },
          ].map(({ icon: Icon, label, title, color }) => (
            <div
              key={title}
              className="rounded-xl p-3 text-center"
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              <Icon size={16} style={{ color: color || '#8888a8', margin: '0 auto 6px' }} />
              <div className="text-xs font-medium" style={{ color: color || '#e8e8f0' }}>{label}</div>
              <div className="text-xs mt-1" style={{ color: '#55556a' }}>{title}</div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#55556a' }}>
            Highlights
          </h3>
          <div className="space-y-2.5">
            {pkg.highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 + i * 0.06 }}
                className="flex items-start gap-2.5"
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: `${accentColor}15`, border: `1px solid ${accentColor}25` }}
                >
                  <Check size={10} style={{ color: accentColor }} />
                </div>
                <span className="text-sm leading-relaxed" style={{ color: '#aaaabc' }}>{h}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Includes */}
        <div className="mb-8">
          <h3 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#55556a' }}>
            What's Included
          </h3>
          <div className="flex flex-wrap gap-2">
            {pkg.includes.map((item, i) => (
              <motion.span
                key={i}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.04 }}
                className="text-xs px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  color: '#8888a8',
                }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-3">
          <button
            className="glass-button flex-1 py-3 rounded-xl flex items-center justify-center gap-2"
            style={{ color: '#e8e8f0' }}
          >
            <MapPin size={18} />
            <span>View Itinerary</span>
          </button>

          <motion.button
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 py-3 rounded-xl flex items-center justify-center gap-2 font-bold text-white"
            style={{
              background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)`,
              boxShadow: `0 4px 20px ${accentColor}30, 0 0 40px ${accentColor}10`,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <Navigation size={18} />
            <span>Book Now</span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
