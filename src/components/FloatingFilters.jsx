import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, ChevronLeft, RefreshCw, Users, Map, Wallet, Calendar } from 'lucide-react';

export default function FloatingFilters({
  activeProvince,
  setActiveProvince,
  activeBudget,
  setActiveBudget,
  activeDuration,
  setActiveDuration,
  activeGroupSize,
  setActiveGroupSize,
  onClearAll,
}) {
  const [isOpen, setIsOpen] = useState(true);

  const provinces = ['All', 'Punjab', 'Sindh', 'Khyber Pakhtunkhwa', 'Balochistan', 'Gilgit-Baltistan', 'Azad Kashmir'];

  const budgets = [
    { name: 'All', label: 'All Budgets' },
    { name: 'budget', label: '< 30K PKR' },
    { name: 'mid', label: '30K - 60K PKR' },
    { name: 'premium', label: '60K - 100K PKR' },
    { name: 'luxury', label: '> 100K PKR' },
  ];

  const durations = [
    { name: 'All', label: 'Any Duration' },
    { name: 'day', label: 'Day Trip (1 Day)' },
    { name: 'weekend', label: 'Weekend (2-3 Days)' },
    { name: 'mid', label: 'Mid-length (4-7 Days)' },
    { name: 'long', label: 'Long (8+ Days)' },
  ];

  return (
    <motion.div
      initial={false}
      animate={{ x: isOpen ? 0 : -320 }}
      transition={{ type: 'spring', damping: 22, stiffness: 130 }}
      className="fixed left-0 top-24 z-30 w-[366px] select-none flex items-start pointer-events-none"
    >
      {/* Main floating filter sidebar */}
      <div
        className="w-80 glass-panel rounded-r-3xl p-5 overflow-y-auto pointer-events-auto"
        style={{
          maxHeight: 'calc(100vh - 180px)',
          boxShadow: '20px 0 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={16} className="text-cyan-400 animate-pulse" />
            <span className="font-bold text-sm text-gray-200">Refine Galaxy</span>
          </div>
          <motion.button
            onClick={onClearAll}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xs flex items-center gap-1 text-gray-400 hover:text-cyan-400 transition-colors"
            style={{ cursor: 'pointer' }}
          >
            <RefreshCw size={11} />
            <span>Reset</span>
          </motion.button>
        </div>

        <div className="space-y-5">
          {/* Province Selector */}
          <div>
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5 mb-2.5">
              <Map size={12} className="text-cyan-400" />
              <span>Province / Region</span>
            </label>
            <div className="flex flex-wrap gap-1.5">
              {provinces.map((prov) => {
                const isActive = activeProvince === prov;
                return (
                  <button
                    key={prov}
                    onClick={() => setActiveProvince(prov)}
                    className="text-[11px] px-2.5 py-1.5 rounded-lg border font-medium transition-all duration-200 cursor-pointer"
                    style={{
                      backgroundColor: isActive ? 'rgba(34, 211, 238, 0.12)' : 'rgba(255,255,255,0.02)',
                      borderColor: isActive ? 'rgba(34, 211, 238, 0.35)' : 'rgba(255,255,255,0.05)',
                      color: isActive ? '#22d3ee' : '#8888a8',
                      boxShadow: isActive ? '0 0 10px rgba(34, 211, 238, 0.08)' : 'none',
                    }}
                  >
                    {prov}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/5" />

          {/* Budget Selector */}
          <div>
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5 mb-2.5">
              <Wallet size={12} className="text-amber-400" />
              <span>Budget Limit</span>
            </label>
            <div className="grid grid-cols-2 gap-1.5">
              {budgets.map((b) => {
                const isActive = activeBudget === b.name;
                return (
                  <button
                    key={b.name}
                    onClick={() => setActiveBudget(b.name)}
                    className={`text-[11px] px-2.5 py-1.5 rounded-lg border font-medium text-left transition-all duration-200 cursor-pointer ${
                      b.name === 'All' ? 'col-span-2' : ''
                    }`}
                    style={{
                      backgroundColor: isActive ? 'rgba(251, 191, 36, 0.12)' : 'rgba(255,255,255,0.02)',
                      borderColor: isActive ? 'rgba(251, 191, 36, 0.35)' : 'rgba(255,255,255,0.05)',
                      color: isActive ? '#fbbf24' : '#8888a8',
                      boxShadow: isActive ? '0 0 10px rgba(251, 191, 36, 0.08)' : 'none',
                    }}
                  >
                    {b.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/5" />

          {/* Duration Selector */}
          <div>
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5 mb-2.5">
              <Calendar size={12} className="text-violet-400" />
              <span>Trip Duration</span>
            </label>
            <div className="flex flex-col gap-1.5">
              {durations.map((d) => {
                const isActive = activeDuration === d.name;
                return (
                  <button
                    key={d.name}
                    onClick={() => setActiveDuration(d.name)}
                    className="text-[11px] px-3 py-1.5 rounded-lg border font-medium text-left transition-all duration-200 cursor-pointer"
                    style={{
                      backgroundColor: isActive ? 'rgba(167, 139, 250, 0.12)' : 'rgba(255,255,255,0.02)',
                      borderColor: isActive ? 'rgba(167, 139, 250, 0.35)' : 'rgba(255,255,255,0.05)',
                      color: isActive ? '#a78bfa' : '#8888a8',
                      boxShadow: isActive ? '0 0 10px rgba(167, 139, 250, 0.08)' : 'none',
                    }}
                  >
                    {d.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/5" />

          {/* Group Size Selector */}
          <div>
            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5 mb-2.5">
              <Users size={12} className="text-rose-400" />
              <span>Travelers Group Size</span>
            </label>
            <div className="flex items-center justify-between bg-white/[0.02] border border-white/5 rounded-xl p-2">
              <button
                onClick={() => setActiveGroupSize((prev) => Math.max(1, prev - 1))}
                disabled={activeGroupSize <= 1}
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center font-bold text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
              >
                -
              </button>
              <div className="text-center">
                <span className="font-extrabold text-sm text-cyan-400">{activeGroupSize}</span>
                <span className="text-[10px] text-gray-400 block leading-none mt-0.5">{activeGroupSize === 1 ? 'Person' : 'People'}</span>
              </div>
              <button
                onClick={() => setActiveGroupSize((prev) => Math.min(20, prev + 1))}
                disabled={activeGroupSize >= 20}
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center font-bold text-gray-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/10 transition-colors"
              >
                +
              </button>
            </div>
            {activeGroupSize > 1 && (
              <button
                onClick={() => setActiveGroupSize(1)}
                className="text-[9px] text-gray-500 hover:text-cyan-400 mt-2 block mx-auto text-center hover:underline cursor-pointer"
              >
                Reset to 1 person
              </button>
            )}
          </div>

          {/* Reset All Filters Button at the bottom */}
          <div className="mt-6 pt-4 border-t border-white/5">
            <motion.button
              onClick={onClearAll}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(239, 68, 68, 0.15)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-2.5 rounded-xl border border-rose-500/20 text-rose-400 font-bold text-xs flex items-center justify-center gap-2 transition-all duration-300"
              style={{
                backgroundColor: 'rgba(239, 68, 68, 0.05)',
                boxShadow: '0 4px 15px rgba(239, 68, 68, 0.05)',
                cursor: 'pointer'
              }}
            >
              <RefreshCw size={13} className="animate-spin-slow" />
              <span>Reset All Filters</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Toggle button on the right edge */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="glass-button p-3 rounded-full flex items-center justify-center text-white ml-2 shadow-lg pointer-events-auto"
        style={{ width: 46, height: 46, flexShrink: 0 }}
      >
        {isOpen ? <ChevronLeft size={18} /> : <SlidersHorizontal size={18} />}
      </motion.button>
    </motion.div>
  );
}
