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
  const [activeHub, setActiveHub] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const enrichedDestinations = useMemo(() => {
    return destinations.map(d => {
      const charCode = d.id.charCodeAt(0) + d.id.charCodeAt(d.id.length - 1);
      let hub = 'Nature';
      if (d.category === 'City') hub = charCode % 2 === 0 ? 'City Tours' : 'Budget';
      else if (d.category === 'Nature') hub = charCode % 2 === 0 ? 'Nature' : 'Adventure';
      else if (d.category === 'Heritage') hub = charCode % 2 === 0 ? 'Heritage' : 'Luxury';
      return { ...d, hub };
    });
  }, []);

  const graphData = useMemo(() => {
    if (!activeHub) {
      const hubs = ['Adventure', 'Luxury', 'Budget', 'Heritage', 'Nature', 'City Tours'];
      const nodes = hubs.map(h => ({
        id: `hub_${h}`,
        name: h,
        isHub: true,
        category: h,
        hub: h,
        count: enrichedDestinations.filter(d => d.hub === h).length
      }));
      const nodesWithCenter = [...nodes, { id: 'center', isCenter: true, name: '' }];
      const links = nodes.map(n => ({ source: 'center', target: n.id }));
      return { nodes: nodesWithCenter, links };
    } else {
      const hubNode = { id: `hub_${activeHub}`, name: activeHub, isHub: true, category: activeHub, hub: activeHub };
      const children = enrichedDestinations.filter(d => d.hub === activeHub).map(d => ({ ...d, isChild: true }));
      const nodes = [hubNode, ...children];
      const links = children.map(c => ({ source: hubNode.id, target: c.id }));
      return { nodes, links };
    }
  }, [activeHub, enrichedDestinations]);

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
      case 'Nature': return '#22d3ee';
      case 'City Tours': return '#a78bfa';
      case 'Heritage': return '#fbbf24';
      case 'Adventure': return '#ef4444';
      case 'Luxury': return '#fbcfe8';
      case 'Budget': return '#4ade80';
      default: return '#8888a8';
    }
  }, []);

  const isNodeVisible = useCallback((node) => {
    if (node.isCenter) return false;
    if (node.isHub) return true;
    if (activeFilter !== "All" && node.category !== activeFilter && node.hub !== activeFilter) return false;
    if (searchQuery && !node.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  }, [activeFilter, searchQuery]);

  const handleNodeClick = useCallback((node) => {
    if (node.isCenter) return;
    if (node.isHub) {
      if (activeHub !== node.hub) {
        setActiveHub(node.hub);
        setSelectedNode(null);
      } else {
        setActiveHub(null);
        setSelectedNode(null);
      }
    } else {
      setSelectedNode(node);
    }
    if (fgRef.current) {
      const distance = node.isHub && !activeHub ? 200 : 120;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
      fgRef.current.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio },
        node, 1500
      );
    }
  }, [activeHub]);

  const nodeThreeObject = useCallback((node) => {
    if (node.isCenter) {
      return new THREE.Group();
    }

    const visible = isNodeVisible(node);
    const colorHex = getCategoryColor(node.hub || node.category);
    const color = new THREE.Color(colorHex);
    const group = new THREE.Group();

    if (node.isHub) {
      const geo = new THREE.SphereGeometry(14, 32, 32);
      const mat = new THREE.MeshStandardMaterial({
        color, emissive: color, emissiveIntensity: 0.6,
        transparent: true, opacity: 1, roughness: 0.2, metalness: 0.8
      });
      group.add(new THREE.Mesh(geo, mat));

      const ringGeo = new THREE.RingGeometry(18, 20, 32);
      const ringMat = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide, transparent: true, opacity: 0.4 });
      group.add(new THREE.Mesh(ringGeo, ringMat));

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 512;
      canvas.height = 128;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = '800 36px Inter, system-ui, sans-serif';
      ctx.fillStyle = colorHex;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${node.name.toUpperCase()} ${node.count ? '(' + node.count + ')' : ''}`, canvas.width / 2, canvas.height / 2);
      
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false }));
      sprite.scale.set(70, 17.5, 1);
      sprite.position.set(0, 25, 0);
      group.add(sprite);

      return group;
    }

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
    return 'rgba(255,255,255,0.06)';
  }, []);

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

      {/* Back & Hub State */}
      <div className="absolute top-4 left-4 z-20 flex gap-4 items-center">
        <motion.button
          onClick={() => {
            if (activeHub) {
              setActiveHub(null);
              setSelectedNode(null);
            } else setView('landing');
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="glass-button p-3 rounded-full flex items-center justify-center"
          style={{ color: '#e8e8f0', width: 48, height: 48 }}
        >
          <ArrowLeft size={24} />
        </motion.button>
        
        <AnimatePresence>
          {activeHub && (
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: -20 }}
              className="glass-panel px-6 py-2 rounded-full font-bold text-lg"
              style={{ color: getCategoryColor(activeHub) }}
            >
              {activeHub}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {activeHub && (
          <FilterBar
            activeFilter={activeFilter} setActiveFilter={setActiveFilter}
            searchQuery={searchQuery} setSearchQuery={setSearchQuery}
          />
        )}
      </AnimatePresence>

      {/* Counter */}
      <AnimatePresence>
        {activeHub && (
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-6 left-6 z-20 glass-panel px-5 py-3 rounded-2xl text-sm"
          >
            <span style={{ color: '#8888a8' }}>Showing </span>
            <span style={{ color: getCategoryColor(activeHub), fontWeight: 700 }}>
              {graphData.nodes.filter(d => d.isChild && isNodeVisible(d)).length}
            </span>
            <span style={{ color: '#8888a8' }}> in {activeHub}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legend */}
      <AnimatePresence>
        {!activeHub && (
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute bottom-6 right-6 z-20 glass-panel px-5 py-3 rounded-2xl flex flex-col gap-3 text-xs"
          >
            <p className="text-gray-400 font-semibold mb-1">Explore Hubs:</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3">
              {[
                { label: 'Nature', color: '#22d3ee' },
                { label: 'City Tours', color: '#a78bfa' },
                { label: 'Heritage', color: '#fbbf24' },
                { label: 'Adventure', color: '#ef4444' },
                { label: 'Luxury', color: '#fbcfe8' },
                { label: 'Budget', color: '#4ade80' },
              ].map(({ label, color }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}50` }} />
                  <span style={{ color: '#8888a8' }}>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
        {selectedNode && !selectedNode.isHub && !selectedNode.isCenter && (
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
