import React from 'react';
import { Search, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FilterBar({ activeFilter, setActiveFilter, searchQuery, setSearchQuery }) {
  const filters = [
    { name: 'All', color: '#e8e8f0' },
    { name: 'Nature', color: '#22d3ee' },
    { name: 'City', color: '#a78bfa' },
    { name: 'Heritage', color: '#fbbf24' },
  ];

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
      className="absolute top-4 left-1/2 z-20 w-[92%] max-w-3xl glass-panel px-5 py-3 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-3"
      style={{ transform: 'translateX(-50%)' }}
    >
      {/* Search */}
      <div className="relative w-full md:w-72">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none" style={{ color: '#55556a' }}>
          <Search size={16} />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search destinations..."
          className="w-full py-2.5 pl-10 pr-10 text-sm rounded-xl border transition-all duration-300 focus:outline-none"
          style={{
            backgroundColor: 'rgba(255,255,255,0.03)',
            borderColor: searchQuery ? 'rgba(34, 211, 238, 0.35)' : 'rgba(255,255,255,0.06)',
            boxShadow: searchQuery ? '0 0 15px rgba(34, 211, 238, 0.08)' : 'none',
            color: '#e8e8f0',
          }}
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute inset-y-0 right-3 flex items-center transition-colors"
            style={{ color: '#55556a' }}
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2">
        {filters.map(({ name, color }) => {
          const isActive = activeFilter === name;
          return (
            <motion.button
              key={name}
              onClick={() => setActiveFilter(name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
              style={{
                backgroundColor: isActive ? `${color}15` : 'rgba(255,255,255,0.02)',
                border: `1px solid ${isActive ? `${color}35` : 'rgba(255,255,255,0.05)'}`,
                color: isActive ? color : '#55556a',
                boxShadow: isActive ? `0 0 12px ${color}10` : 'none',
                cursor: 'pointer',
              }}
            >
              <span className="flex items-center gap-1.5">
                {name !== 'All' && (
                  <span
                    className="w-2 h-2 rounded-full inline-block"
                    style={{
                      backgroundColor: color,
                      opacity: isActive ? 1 : 0.3,
                      boxShadow: isActive ? `0 0 6px ${color}60` : 'none',
                    }}
                  />
                )}
                {name}
              </span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
