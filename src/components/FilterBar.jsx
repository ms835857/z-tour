import React from 'react';
import { Search, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FilterBar({ searchQuery, setSearchQuery }) {
  return (
    <motion.div
      initial={{ x: '-50%', y: -50, opacity: 0 }}
      animate={{ x: '-50%', y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
      className="absolute top-4 left-1/2 z-20 w-[90%] max-w-md glass-panel px-4 py-2.5 rounded-2xl flex items-center justify-between"
    >
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none" style={{ color: '#8888a8' }}>
          <Search size={18} className="animate-pulse" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search galactic destinations..."
          className="w-full py-2 pl-10 pr-10 text-sm rounded-xl border transition-all duration-300 focus:outline-none bg-white/[0.02]"
          style={{
            borderColor: searchQuery ? 'rgba(34, 211, 238, 0.4)' : 'rgba(255,255,255,0.05)',
            boxShadow: searchQuery ? '0 0 15px rgba(34, 211, 238, 0.1)' : 'none',
            color: '#e8e8f0',
          }}
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute inset-y-0 right-3 flex items-center transition-colors text-gray-400 hover:text-cyan-400"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </motion.div>
  );
}
