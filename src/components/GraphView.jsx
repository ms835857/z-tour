import React, { useRef, useState, useMemo, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ForceGraph3D from 'react-force-graph-3d';
import * as THREE from 'three';
import { ArrowLeft } from 'lucide-react';
import { destinations } from '../data/destinations';
import FilterBar from './FilterBar';
import FloatingCards from './FloatingCards';

/* ─── Midnight ambient mesh behind the graph ─── */
function MidnightBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <div className="absolute inset-0" style={{ backgroundColor: '#12131a' }} />
      {/* Indigo wash */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '45vw', height: '45vw', maxWidth: 550, maxHeight: 550,
          top: '-8%', left: '5%',
          background: 'radial-gradient(circle, rgba(99,70,190,0.1), transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Teal wash */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '35vw', height: '35vw', maxWidth: 450, maxHeight: 450,
          top: '10%', right: '0%',
          background: 'radial-gradient(circle, rgba(34,211,238,0.06), transparent 70%)',
          filter: 'blur(110px)',
        }}
        animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Amber hint */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '40vw', height: '40vw', maxWidth: 500, maxHeight: 500,
          bottom: '-10%', left: '35%',
          background: 'radial-gradient(circle, rgba(251,191,36,0.04), transparent 70%)',
          filter: 'blur(120px)',
        }}
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

export default function GraphView({ setView }) {
  const fgRef = useRef();
  const containerRef = useRef();
  const [selectedNode, setSelectedNode] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const graphData = useMemo(() => {
    const nodes = destinations.map(d => ({ ...d }));
    const links = [];
    destinations.forEach(d => {
      if (d.links) {
        d.links.forEach(targetId => {
          const targetNode = destinations.find(n => n.id === targetId);
          if (targetNode) links.push({ source: d.id, target: targetNode.id });
        });
      }
    });
    return { nodes, links };
  }, []);

  useEffect(() => {
    if (fgRef.current) {
      fgRef.current.cameraPosition({ x: 0, y: 0, z: 350 });

      const scene = fgRef.current.scene();
      // Soft ambient for midnight scene
      const ambient = new THREE.AmbientLight(0x8888cc, 0.6);
      scene.add(ambient);
      // Warm directional to bring out node materials
      const dirLight = new THREE.DirectionalLight(0xffeedd, 0.4);
      dirLight.position.set(150, 200, 150);
      scene.add(dirLight);
    }
  }, []);

  const getCategoryColor = useCallback((category) => {
    switch (category) {
      case 'Nature': return '#22d3ee';   // Vivid cyan
      case 'City': return '#a78bfa';     // Vivid lavender-purple
      case 'Heritage': return '#fbbf24'; // Vivid amber
      default: return '#8888a8';
    }
  }, []);

  const isNodeVisible = useCallback((node) => {
    if (activeFilter !== "All" && node.category !== activeFilter) return false;
    if (searchQuery && !node.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  }, [activeFilter, searchQuery]);

  const handleNodeClick = useCallback((node) => {
    setSelectedNode(node);
    if (fgRef.current) {
      const distance = 120;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
      fgRef.current.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio },
        node, 1500
      );
    }
  }, []);

  const nodeThreeObject = useCallback((node) => {
    const visible = isNodeVisible(node);
    const colorHex = getCategoryColor(node.category);
    const color = new THREE.Color(colorHex);
    const group = new THREE.Group();

    // Core – glowing sphere
    const geo = new THREE.SphereGeometry(visible ? 6 : 3, 32, 32);
    const mat = new THREE.MeshStandardMaterial({
      color, emissive: color,
      emissiveIntensity: visible ? 0.7 : 0.05,
      transparent: true, opacity: visible ? 1 : 0.12,
      roughness: 0.25, metalness: 0.15,
    });
    group.add(new THREE.Mesh(geo, mat));

    // Neon glow halo
    if (visible) {
      const glowGeo = new THREE.SphereGeometry(10, 32, 32);
      const glowMat = new THREE.MeshBasicMaterial({
        color, transparent: true, opacity: 0.08, side: THREE.BackSide,
      });
      group.add(new THREE.Mesh(glowGeo, glowMat));
    }

    // Label – frosted midnight pill
    if (visible) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 256;
      canvas.height = 64;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const text = node.name;
      ctx.font = '600 22px Inter, system-ui, sans-serif';
      const tw = ctx.measureText(text).width;
      const pw = Math.min(tw + 28, 248);
      const px = (canvas.width - pw) / 2;

      // Midnight frosted pill
      ctx.fillStyle = 'rgba(26, 27, 46, 0.85)';
      ctx.beginPath();
      ctx.roundRect(px, 8, pw, 38, 19);
      ctx.fill();

      // Subtle accent border
      ctx.strokeStyle = colorHex + '30';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(px, 8, pw, 38, 19);
      ctx.stroke();

      // White text for legibility
      ctx.fillStyle = '#e8e8f0';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, canvas.width / 2, 28);

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      const sprite = new THREE.Sprite(
        new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false })
      );
      sprite.scale.set(40, 10, 1);
      sprite.position.set(0, 14, 0);
      group.add(sprite);
    }

    return group;
  }, [isNodeVisible, getCategoryColor]);

  const linkColor = useCallback((link) => {
    const sn = typeof link.source === 'object' ? link.source : destinations.find(n => n.id === link.source);
    const tn = typeof link.target === 'object' ? link.target : destinations.find(n => n.id === link.target);
    let vis = true;
    if (activeFilter !== "All" && sn?.category !== activeFilter && tn?.category !== activeFilter) vis = false;
    if (searchQuery && !sn?.name.toLowerCase().includes(searchQuery.toLowerCase()) && !tn?.name.toLowerCase().includes(searchQuery.toLowerCase())) vis = false;
    return vis ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.015)';
  }, [activeFilter, searchQuery]);

  return (
    <motion.div
      className="absolute inset-0 w-full h-full"
      style={{ backgroundColor: '#12131a' }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <MidnightBackground />

      {/* Back */}
      <div className="absolute top-4 left-4 z-20">
        <motion.button
          onClick={() => setView('landing')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="glass-button p-3 rounded-full"
          style={{ color: '#e8e8f0' }}
        >
          <ArrowLeft size={24} />
        </motion.button>
      </div>

      <FilterBar
        activeFilter={activeFilter} setActiveFilter={setActiveFilter}
        searchQuery={searchQuery} setSearchQuery={setSearchQuery}
      />

      {/* Counter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-6 left-6 z-20 glass-panel px-5 py-3 rounded-2xl text-sm"
      >
        <span style={{ color: '#8888a8' }}>Showing </span>
        <span style={{ color: '#22d3ee', fontWeight: 700 }}>
          {destinations.filter(d => isNodeVisible(d)).length}
        </span>
        <span style={{ color: '#8888a8' }}> of {destinations.length} destinations</span>
      </motion.div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-6 right-6 z-20 glass-panel px-5 py-3 rounded-2xl flex gap-4 text-xs"
      >
        {[
          { label: 'Nature', color: '#22d3ee' },
          { label: 'City', color: '#a78bfa' },
          { label: 'Heritage', color: '#fbbf24' },
        ].map(({ label, color }) => (
          <div key={label} className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}50` }} />
            <span style={{ color: '#8888a8' }}>{label}</span>
          </div>
        ))}
      </motion.div>

      {/* 3D Force Graph — transparent so midnight mesh shows through */}
      <div ref={containerRef} className="w-full h-full relative" style={{ zIndex: 1 }}>
        <ForceGraph3D
          ref={fgRef} graphData={graphData}
          nodeThreeObject={nodeThreeObject} nodeThreeObjectExtend={false}
          onNodeClick={handleNodeClick}
          onNodeHover={node => { if (containerRef.current) containerRef.current.style.cursor = node ? 'pointer' : 'grab'; }}
          backgroundColor="rgba(0,0,0,0)"
          width={dimensions.width} height={dimensions.height}
          linkWidth={1.5} linkColor={linkColor} linkOpacity={0.5} linkResolution={6}
          enableNodeDrag={false}
          warmupTicks={50} cooldownTicks={100}
          d3AlphaDecay={0.02} d3VelocityDecay={0.3}
        />
      </div>

      <AnimatePresence>
        {selectedNode && (
          <FloatingCards
            node={selectedNode}
            fgRef={fgRef}
            onClose={() => setSelectedNode(null)}
            getCategoryColor={getCategoryColor}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
