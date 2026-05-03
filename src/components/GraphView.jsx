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

const ImageCache = new Map();

export default function GraphView({ setView }) {
  const fgRef = useRef();
  const containerRef = useRef();
  const [selectedNode, setSelectedNode] = useState(null);
  const [activeHub, setActiveHub] = useState(null);
  const [hoverNode, setHoverNode] = useState(null);
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
      
      // Add dynamically generated image URL from API
      const imageUrl = `https://loremflickr.com/300/300/pakistan,${encodeURIComponent(d.name.replace(/ /g, ','))}`;
      
      return { ...d, hub, imageUrl };
    });
  }, []);

  const graphData = useMemo(() => {
    if (!activeHub) {
      const hubs = ['Adventure', 'Luxury', 'Budget', 'Heritage', 'Nature', 'City Tours'];
      const nodes = hubs.map(h => {
        const related = enrichedDestinations.filter(d => d.hub === h);
        return {
          id: `hub_${h}`,
          name: h,
          isHub: true,
          category: h,
          hub: h,
          count: related.length,
          sampleImages: related.slice(0, 4).map(d => d.imageUrl)
        };
      });
      const nodesWithCenter = [...nodes, { id: 'center', isCenter: true, name: '' }];
      const links = nodes.map(n => ({ source: 'center', target: n.id }));
      return { nodes: nodesWithCenter, links };
    } else {
      const related = enrichedDestinations.filter(d => d.hub === activeHub);
      const hubNode = { 
        id: `hub_${activeHub}`, 
        name: activeHub, 
        isHub: true, 
        category: activeHub, 
        hub: activeHub,
        count: related.length,
        sampleImages: related.slice(0, 4).map(d => d.imageUrl)
      };
      const children = related.map(d => ({ ...d, isChild: true }));
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

  const drawHexagon = (ctx, x, y, r) => {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i + Math.PI / 6;
      ctx.lineTo(x + r * Math.cos(angle), y + r * Math.sin(angle));
    }
    ctx.closePath();
  };

  const drawOctagon = (ctx, x, y, r) => {
    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
      const angle = (Math.PI / 4) * i + Math.PI / 8;
      ctx.lineTo(x + r * Math.cos(angle), y + r * Math.sin(angle));
    }
    ctx.closePath();
  };

  const nodeThreeObject = useCallback((node) => {
    if (node.isCenter) return new THREE.Group();

    const visible = isNodeVisible(node);
    const colorHex = getCategoryColor(node.hub || node.category);
    const isHovered = hoverNode && hoverNode.id === node.id;
    const color = new THREE.Color(colorHex);

    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    const cx = 256;
    const cy = 256;

    if (node.isHub) {
      const octRadius = 180;
      // Glowing shadow border
      ctx.shadowColor = colorHex;
      ctx.shadowBlur = isHovered ? 50 : 25;

      // Octagon background
      ctx.fillStyle = '#1a1b2e';
      drawOctagon(ctx, cx, cy, octRadius);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw collage if we have images
      if (node.sampleImages && node.sampleImages.length > 0) {
        ctx.save();
        drawOctagon(ctx, cx, cy, octRadius);
        ctx.clip();

        // 2x2 grid positions
        const cellSize = octRadius;
        const offsets = [
          { x: cx - cellSize, y: cy - cellSize },
          { x: cx, y: cy - cellSize },
          { x: cx - cellSize, y: cy },
          { x: cx, y: cy }
        ];

        node.sampleImages.forEach((url, i) => {
          const imgId = `${node.id}_img_${i}`;
          const imgData = ImageCache.get(imgId);
          if (imgData && imgData !== 'loading' && imgData !== 'error') {
            ctx.drawImage(imgData, offsets[i].x, offsets[i].y, cellSize, cellSize);
          } else if (!imgData) {
            ImageCache.set(imgId, 'loading');
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.src = url;
            img.onload = () => {
              ImageCache.set(imgId, img);
              if (node.__spriteMat) node.__spriteMat.map.needsUpdate = true;
            };
            img.onerror = () => ImageCache.set(imgId, 'error');
          }
        });

        // Dark overlay for text readability
        ctx.fillStyle = 'rgba(12, 13, 26, 0.45)';
        drawOctagon(ctx, cx, cy, octRadius);
        ctx.fill();
        ctx.restore();
      }

      // Border
      ctx.lineWidth = isHovered ? 15 : 8;
      ctx.strokeStyle = colorHex;
      drawOctagon(ctx, cx, cy, octRadius);
      ctx.stroke();

      // HUB Text
      ctx.font = '800 48px Inter, system-ui, sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0,0,0,0.8)';
      ctx.shadowBlur = 10;
      ctx.fillText(node.name.toUpperCase(), cx, cy - 15);
      
      ctx.font = '600 28px Inter, system-ui, sans-serif';
      ctx.fillStyle = colorHex;
      ctx.fillText(`${node.count} DESTINATIONS`, cx, cy + 35);

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true });
      const sprite = new THREE.Sprite(spriteMaterial);
      const scale = isHovered ? 45 : 40;
      sprite.scale.set(scale, scale, 1);
      node.__spriteMat = spriteMaterial;
      return sprite;
    }

    if (!visible) return new THREE.Group();
    const hexRadius = 140;

    // Glowing shadow border
    ctx.shadowColor = colorHex;
    ctx.shadowBlur = isHovered ? 45 : 20;

    // Hexagon background placeholder
    ctx.fillStyle = '#1a1b2e';
    drawHexagon(ctx, cx, cy, hexRadius);
    ctx.fill();

    ctx.shadowBlur = 0;

    const imgData = ImageCache.get(node.id);
    const hasImageURL = !!node.imageUrl;

    if (!hasImageURL || imgData === 'error') {
      // Draw geometric placeholder
      ctx.save();
      drawHexagon(ctx, cx, cy, hexRadius);
      ctx.clip();

      // Dynamic gradient based on category color
      const gradient = ctx.createLinearGradient(cx - hexRadius, cy - hexRadius, cx + hexRadius, cy + hexRadius);
      gradient.addColorStop(0, colorHex + '40'); // 40 is hex opacity for ~25%
      gradient.addColorStop(1, '#12131a');
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw Initials
      ctx.font = '800 72px Inter, system-ui, sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.4)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const initials = node.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
      ctx.fillText(initials, cx, cy);

      ctx.restore();
    } else if (!imgData) {
      ImageCache.set(node.id, 'loading');
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = node.imageUrl;
      img.onload = () => {
        ImageCache.set(node.id, img);
        if (node.__spriteMat && node.__spriteCanvas) {
          const tCtx = node.__spriteCanvas.getContext('2d');
          tCtx.save();
          drawHexagon(tCtx, cx, cy, hexRadius);
          tCtx.clip();
          tCtx.drawImage(img, cx - hexRadius, cy - hexRadius, hexRadius * 2, hexRadius * 2);
          tCtx.restore();
          tCtx.lineWidth = isHovered ? 12 : 6;
          tCtx.strokeStyle = colorHex;
          drawHexagon(tCtx, cx, cy, hexRadius);
          tCtx.stroke();
          node.__spriteMat.map.needsUpdate = true;
        }
      };
      // Error handling for broken image URLs fallback
      img.onerror = () => {
        ImageCache.set(node.id, 'error');
      };
    } else if (imgData && imgData !== 'loading' && imgData !== 'error') {
      ctx.save();
      drawHexagon(ctx, cx, cy, hexRadius);
      ctx.clip();
      ctx.drawImage(imgData, cx - hexRadius, cy - hexRadius, hexRadius * 2, hexRadius * 2);
      ctx.restore();
    }

    ctx.lineWidth = isHovered ? 12 : 6;
    ctx.strokeStyle = colorHex;
    drawHexagon(ctx, cx, cy, hexRadius);
    ctx.stroke();

    if (isHovered) {
      ctx.font = '800 36px Inter, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      const textY = cy + hexRadius + 15;

      const textW = ctx.measureText(node.name).width + 50;
      ctx.fillStyle = 'rgba(18, 19, 26, 0.9)';
      ctx.beginPath();
      ctx.roundRect(cx - textW / 2, textY, textW, 55, 27);
      ctx.fill();

      ctx.strokeStyle = colorHex;
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.fillText(node.name, cx, textY + 10);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;

    // THREE.Sprite natively perfectly billboards (faces camera)
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(spriteMaterial);

    const scaleFactor = isHovered ? 28 : 24;
    sprite.scale.set(scaleFactor, scaleFactor, 1);

    node.__spriteMat = spriteMaterial;
    node.__spriteCanvas = canvas;

    return sprite;
  }, [isNodeVisible, getCategoryColor, hoverNode]);

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
          onNodeHover={node => { setHoverNode(node); if (containerRef.current) containerRef.current.style.cursor = node ? 'pointer' : 'grab'; }}
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
