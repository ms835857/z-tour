import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Clock, Users, X } from 'lucide-react';
import { packages } from '../data/packages';
import PackageDetail from './PackageDetail';

/* ─── Compute card positions in a fan/arc around the node ─── */
function getCardPositions(centerX, centerY, count, vw, vh) {
  const positions = [];
  const radius = Math.min(vw, vh) * 0.28;  // responsive radius
  // Arrange in a semicircle below the node
  const startAngle = Math.PI * 0.15;   // slightly off from left
  const endAngle = Math.PI * 0.85;     // slightly off from right
  const angleStep = count > 1 ? (endAngle - startAngle) / (count - 1) : 0;

  for (let i = 0; i < count; i++) {
    const angle = count === 1 ? Math.PI * 0.5 : startAngle + angleStep * i;
    let x = centerX + Math.cos(angle) * radius - 90; // offset half card width
    let y = centerY + Math.sin(angle) * radius * 0.7 + 30; // slightly flatter arc, below node

    // Clamp to viewport
    x = Math.max(16, Math.min(x, vw - 200));
    y = Math.max(80, Math.min(y, vh - 220));

    positions.push({ x, y, rotation: (angle - Math.PI / 2) * 4 }); // subtle tilt
  }
  return positions;
}

export default function FloatingCards({ node, fgRef, onClose, getCategoryColor }) {
  const [expandedPkg, setExpandedPkg] = useState(null);
  const [nodeScreenPos, setNodeScreenPos] = useState({ x: 0, y: 0 });
  const animFrameRef = useRef();

  // Get packages for this destination
  const destinationPackages = useMemo(() => {
    return packages[node.id] || [];
  }, [node.id]);

  // Project 3D node position → 2D screen coordinates
  useEffect(() => {
    function updatePos() {
      if (fgRef.current && node) {
        const coords = fgRef.current.graph2ScreenCoords(node.x, node.y, node.z);
        if (coords) {
          setNodeScreenPos({ x: coords.x, y: coords.y });
        }
      }
      animFrameRef.current = requestAnimationFrame(updatePos);
    }
    updatePos();
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [node, fgRef]);

  const cardPositions = useMemo(() => {
    return getCardPositions(
      nodeScreenPos.x,
      nodeScreenPos.y,
      destinationPackages.length,
      window.innerWidth,
      window.innerHeight
    );
  }, [nodeScreenPos.x, nodeScreenPos.y, destinationPackages.length]);

  const accentColor = getCategoryColor(node.category);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{ background: 'rgba(12, 13, 20, 0.35)', backdropFilter: 'blur(2px)' }}
      />

      {/* Destination name badge floating near the node */}
      <motion.div
        className="absolute z-40 pointer-events-none"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.1 }}
        style={{
          left: nodeScreenPos.x - 80,
          top: nodeScreenPos.y - 55,
        }}
      >
        <div
          className="px-4 py-2 rounded-xl text-sm font-semibold text-center"
          style={{
            background: 'rgba(26, 27, 46, 0.85)',
            backdropFilter: 'blur(12px)',
            border: `1px solid ${accentColor}35`,
            color: '#e8e8f0',
            boxShadow: `0 4px 20px rgba(0,0,0,0.3), 0 0 15px ${accentColor}15`,
            minWidth: 160,
          }}
        >
          <span style={{ color: accentColor, marginRight: 6 }}>●</span>
          {node.name}
          <div className="text-xs mt-1" style={{ color: '#8888a8' }}>
            {destinationPackages.length} packages available
          </div>
        </div>
      </motion.div>

      {/* Close button */}
      <motion.button
        className="absolute top-4 right-4 z-50 glass-button p-3 rounded-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2 }}
        onClick={onClose}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{ color: '#e8e8f0' }}
      >
        <X size={20} />
      </motion.button>

      {/* Floating Cards */}
      <AnimatePresence>
        {!expandedPkg && destinationPackages.map((pkg, i) => {
          const pos = cardPositions[i];
          if (!pos) return null;

          return (
            <motion.div
              key={pkg.id}
              className="absolute z-40 cursor-pointer"
              style={{ left: pos.x, top: pos.y }}
              initial={{ y: window.innerHeight, opacity: 0, rotate: 8 }}
              animate={{
                y: 0,
                opacity: 1,
                rotate: pos.rotation,
                transition: {
                  type: 'spring',
                  damping: 18,
                  stiffness: 120,
                  delay: 0.08 * i,
                },
              }}
              exit={{
                y: 60,
                opacity: 0,
                scale: 0.9,
                transition: { duration: 0.25, delay: 0.03 * i },
              }}
              whileHover={{
                scale: 1.06,
                rotate: 0,
                y: -5,
                boxShadow: `0 12px 40px rgba(0,0,0,0.4), 0 0 20px ${accentColor}15`,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setExpandedPkg(pkg)}
            >
              <div
                className="w-[185px] rounded-2xl p-4 select-none"
                style={{
                  background: 'rgba(26, 27, 46, 0.7)',
                  backdropFilter: 'blur(20px) saturate(1.4)',
                  WebkitBackdropFilter: 'blur(20px) saturate(1.4)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: `0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)`,
                }}
              >
                {/* Agent */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg">{pkg.agentLogo}</span>
                  <span className="text-xs font-medium truncate" style={{ color: '#8888a8' }}>
                    {pkg.agentName}
                  </span>
                </div>

                {/* Package Name */}
                <h4 className="text-sm font-bold mb-2 leading-tight" style={{ color: '#e8e8f0' }}>
                  {pkg.packageName}
                </h4>

                {/* Divider */}
                <div className="h-px mb-3" style={{ background: 'rgba(255,255,255,0.06)' }} />

                {/* Price */}
                <div className="text-base font-bold mb-1.5" style={{ color: accentColor }}>
                  {pkg.price}
                </div>

                {/* Duration & Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1" style={{ color: '#55556a' }}>
                    <Clock size={11} />
                    <span className="text-xs">{pkg.duration.split('/')[0].trim()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={11} fill="#fbbf24" stroke="#fbbf24" />
                    <span className="text-xs font-medium" style={{ color: '#fbbf24' }}>{pkg.rating}</span>
                  </div>
                </div>

                {/* Group Size */}
                <div className="flex items-center gap-1 mt-1.5" style={{ color: '#55556a' }}>
                  <Users size={11} />
                  <span className="text-xs">{pkg.groupSize}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Expanded Package Detail */}
      <AnimatePresence>
        {expandedPkg && (
          <PackageDetail
            pkg={expandedPkg}
            destinationName={node.name}
            destinationCategory={node.category}
            getCategoryColor={getCategoryColor}
            onBack={() => setExpandedPkg(null)}
            onClose={onClose}
          />
        )}
      </AnimatePresence>
    </>
  );
}
