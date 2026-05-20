import React, { useRef, useState, useMemo, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ForceGraph3D from 'react-force-graph-3d';
import * as THREE from 'three';
import { ArrowLeft } from 'lucide-react';
import { destinations } from '../data/destinations';
import { packages } from '../data/packages';
import { getProvince, getLinkageType } from '../data/helpers';
import FilterBar from './FilterBar';
import FloatingFilters from './FloatingFilters';
import FloatingCards from './FloatingCards';

/* ─── Midnight ambient mesh behind the graph ─── */
function MidnightBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {/* Cinematic Base Layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/bg-tourism.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.4,
        }}
      />

      {/* Topographic Glow Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/topo-overlay.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2,
          mixBlendMode: 'screen',
        }}
      />

      {/* Vignette & Tint Overlay to ensure 3D clarity */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 20%, #12131a 100%), #12131a',
          mixBlendMode: 'multiply',
          opacity: 0.7
        }}
      />

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
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  // Basic filters (Category bar)
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  // Advanced right-sidebar filters
  const [activeProvince, setActiveProvince] = useState("All");
  const [activeBudget, setActiveBudget] = useState("All");
  const [activeDuration, setActiveDuration] = useState("All");
  const [activeGroupSize, setActiveGroupSize] = useState(1);

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

      // Add dynamically generated image URL from API (using CORS-compliant picsum.photos seed)
      const imageUrl = `https://picsum.photos/seed/${d.id}/300/300`;
      const province = getProvince(d);

      return { ...d, hub, province, imageUrl, isChild: true };
    });
  }, []);

  // 100% stable references for static hub nodes and center node
  const { centerNode, hubNodes, hubNodesMap } = useMemo(() => {
    const center = { id: 'center', isCenter: true, name: '' };
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
    const map = {};
    nodes.forEach(n => {
      map[n.hub] = n;
    });
    return { centerNode: center, hubNodes: nodes, hubNodesMap: map };
  }, [enrichedDestinations]);

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

    // 1. Basic category filter (from FilterBar)
    if (activeFilter !== "All" && node.category !== activeFilter && node.hub !== activeFilter) return false;

    // 2. Search query filter
    if (searchQuery && !node.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;

    // 3. Province filter (from advanced FloatingFilters)
    if (activeProvince !== "All" && node.province !== activeProvince) return false;

    // 4. Advanced package filters (Budget, Duration, Group Size)
    const nodePkgs = packages[node.id] || [];
    if (nodePkgs.length === 0) {
      // If a node has no packages, it only matches if all advanced filters are 'All' / default
      if (activeBudget !== "All" || activeDuration !== "All" || activeGroupSize > 1) {
        return false;
      }
      return true;
    }

    // Node is visible if at least one package matches ALL selected advanced criteria
    const hasMatchingPkg = nodePkgs.some(pkg => {
      // A. Budget Limit
      if (activeBudget !== "All") {
        const price = pkg.priceValue || 0;
        if (activeBudget === 'budget' && price >= 30000) return false;
        if (activeBudget === 'mid' && (price < 30000 || price > 60000)) return false;
        if (activeBudget === 'premium' && (price < 60000 || price > 100000)) return false;
        if (activeBudget === 'luxury' && price <= 100000) return false;
      }

      // B. Duration
      if (activeDuration !== "All") {
        const days = parseInt(pkg.duration, 10) || 1;
        if (activeDuration === 'day' && days !== 1) return false;
        if (activeDuration === 'weekend' && (days < 2 || days > 3)) return false;
        if (activeDuration === 'mid' && (days < 4 || days > 7)) return false;
        if (activeDuration === 'long' && days < 8) return false;
      }

      // C. Group size limit
      if (activeGroupSize > 1) {
        const groupStr = pkg.groupSize || '';
        const matches = groupStr.match(/(\d+)(?:\s*-\s*(\d+))?/);
        if (matches) {
          const min = parseInt(matches[1], 10);
          const max = matches[2] ? parseInt(matches[2], 10) : min;
          if (activeGroupSize < min || activeGroupSize > max) return false;
        }
      }

      return true;
    });

    return hasMatchingPkg;
  }, [activeFilter, searchQuery, activeProvince, activeBudget, activeDuration, activeGroupSize]);

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

  const flyToNode = useCallback((nodeId, retries = 10) => {
    if (!fgRef.current) return;
    const gData = fgRef.current.graphData();
    if (!gData || !gData.nodes) {
      if (retries > 0) {
        setTimeout(() => flyToNode(nodeId, retries - 1), 100);
      }
      return;
    }
    const currentNodes = gData.nodes;
    const node = currentNodes.find(n => n.id === nodeId);
    if (!node) {
      if (retries > 0) {
        setTimeout(() => flyToNode(nodeId, retries - 1), 100);
      }
      return;
    }

    const x = node.x;
    const y = node.y;
    const z = node.z;

    if (x === undefined || y === undefined || z === undefined || x === null || y === null || z === null || (x === 0 && y === 0 && z === 0)) {
      if (retries > 0) {
        setTimeout(() => flyToNode(nodeId, retries - 1), 100);
      }
      return;
    }

    const hyp = Math.hypot(x, y, z);
    if (!isFinite(hyp) || hyp < 0.01) {
      if (retries > 0) {
        setTimeout(() => flyToNode(nodeId, retries - 1), 100);
      }
      return;
    }

    setSelectedNode(node);

    const distance = 120;
    const distRatio = 1 + distance / hyp;
    fgRef.current.cameraPosition(
      { x: x * distRatio, y: y * distRatio, z: z * distRatio },
      node,
      1500
    );
  }, []);

  // Real-Time Search Auto-Focus (Camera fly-in transition as the user types)
  useEffect(() => {
    const query = searchQuery.trim().toLowerCase();
    if (query.length < 3) return;

    // Search enriched destinations for a match
    const targetDest = enrichedDestinations.find(d =>
      d.name.toLowerCase().includes(query)
    );

    if (targetDest) {
      if (activeHub !== targetDest.hub) {
        setActiveHub(targetDest.hub);
        setSelectedNode(null);
      }
      flyToNode(targetDest.id);
    }
  }, [searchQuery, enrichedDestinations, activeHub, flyToNode]);

  const graphData = useMemo(() => {
    const isFilterActive =
      searchQuery.trim().length > 0 ||
      activeFilter !== "All" ||
      activeProvince !== "All" ||
      activeBudget !== "All" ||
      activeDuration !== "All" ||
      activeGroupSize > 1;

    if (!activeHub) {
      const centerToHubLinks = hubNodes.map(n => ({ source: 'center', target: n.id }));

      if (isFilterActive) {
        // Find visible children matching the active filters
        const visibleChildren = enrichedDestinations.filter(d => isNodeVisible(d));

        // Links from respective Hub nodes to their matching child nodes
        const hubToChildLinks = visibleChildren.map(c => ({
          source: `hub_${c.hub}`,
          target: c.id
        }));

        return {
          nodes: [centerNode, ...hubNodes, ...visibleChildren],
          links: [...centerToHubLinks, ...hubToChildLinks]
        };
      } else {
        return {
          nodes: [centerNode, ...hubNodes],
          links: centerToHubLinks
        };
      }
    } else {
      const hubNode = hubNodesMap[activeHub];
      if (!hubNode) {
        return { nodes: [], links: [] };
      }
      const related = enrichedDestinations.filter(d => d.hub === activeHub);
      
      // Cull children based on all multi-dimensional filters
      const visibleChildren = related.filter(c => isNodeVisible(c));
      const nodes = [hubNode, ...visibleChildren];

      // Standard links from the center Hub to visible child nodes
      const hubToChildLinks = visibleChildren.map(c => ({ source: hubNode.id, target: c.id }));

      return { nodes, links: hubToChildLinks };
    }
  }, [activeHub, enrichedDestinations, centerNode, hubNodes, hubNodesMap, isNodeVisible, activeFilter, searchQuery, activeProvince, activeBudget, activeDuration, activeGroupSize]);

  // D3 force tuning for galactic hub isolation & tight orbital clusters
  useEffect(() => {
    if (fgRef.current) {
      const linkForce = fgRef.current.d3Force('link');
      if (linkForce) {
        // Set very long distance for center-to-hub links to isolate hubs
        linkForce.distance(link => {
          if (!link || !link.source || !link.target) return 45;
          const s = link.source.id !== undefined ? link.source.id : link.source;
          const t = link.target.id !== undefined ? link.target.id : link.target;
          if (s === 'center' || t === 'center') {
            return 380; // Push hubs much further out from the center (280 -> 380)
          }
          return 45; // Pull child destination nodes closer to their parent hubs (60 -> 45)
        });

        // Set strong pull to lock child destination nodes tightly in their orbital clusters
        linkForce.strength(link => {
          if (!link || !link.source || !link.target) return 0.7;
          const s = link.source.id !== undefined ? link.source.id : link.source;
          const t = link.target.id !== undefined ? link.target.id : link.target;
          if (s === 'center' || t === 'center') {
            return 0.7; // Standard center-to-hub link rigidity
          }
          return 1.0; // Strong pull (capped at 1.0 for numerical stability to prevent coordinate explosion)
        });
      }

      const chargeForce = fgRef.current.d3Force('charge');
      if (chargeForce) {
        // Dynamic many-body repulsion: keep hubs isolated, while letting children cluster neatly
        chargeForce.strength(node => {
          if (!node) return -60;
          if (node.isCenter) return -300;
          if (node.isHub) return -2500; // Extremely powerful repulsion to keep the 6 hubs far apart!
          return -60; // Soft repulsion for children to prevent direct overlap
        });
      }
    }
  }, [graphData]);

  // Reset helper to clear all filters
  const handleClearAllFilters = useCallback(() => {
    setActiveProvince("All");
    setActiveBudget("All");
    setActiveDuration("All");
    setActiveGroupSize(1);
    setSearchQuery("");
    setActiveFilter("All");
  }, []);

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

    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    const cx = 256;
    const cy = 256;

    if (node.isHub) {
      const octRadius = 180;

      // Glow effect around the hub octagon
      ctx.shadowColor = colorHex;
      ctx.shadowBlur = isHovered ? 55 : 25;

      // Outer glowing radial gradient
      const bgGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, octRadius);
      bgGrad.addColorStop(0, 'rgba(26, 27, 46, 0.95)');
      bgGrad.addColorStop(0.4, 'rgba(18, 19, 32, 0.98)');
      bgGrad.addColorStop(1, '#0c0d14');
      ctx.fillStyle = bgGrad;
      
      drawOctagon(ctx, cx, cy, octRadius);
      ctx.fill();
      ctx.shadowBlur = 0; // Turn off shadow blur for text to avoid fuzzy fonts

      // Draw subtle orbital dots inside the hub for a beautiful cosmic star chart detail
      ctx.strokeStyle = colorHex + '25'; // very soft signature tint
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, 130, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = colorHex + '15';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 8]);
      ctx.beginPath();
      ctx.arc(cx, cy, 100, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]); // clear dash

      // Border glow accent
      ctx.lineWidth = isHovered ? 12 : 6;
      ctx.strokeStyle = colorHex;
      drawOctagon(ctx, cx, cy, octRadius);
      ctx.stroke();

      // Inner border accent ring
      ctx.lineWidth = 2;
      ctx.strokeStyle = colorHex + '80';
      drawOctagon(ctx, cx, cy, octRadius - 15);
      ctx.stroke();

      // HUB Text
      ctx.font = '800 44px Inter, system-ui, sans-serif';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(0,0,0,0.9)';
      ctx.shadowBlur = 8;
      ctx.fillText(node.name.toUpperCase(), cx, cy - 18);

      ctx.font = '700 24px Inter, system-ui, sans-serif';
      ctx.fillStyle = colorHex;
      ctx.fillText(`${node.count} DESTINATIONS`, cx, cy + 32);

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

    // Glowing border shadow for the destination planet hexagon
    ctx.shadowColor = colorHex;
    ctx.shadowBlur = isHovered ? 50 : 20;

    // Radial gradient backing for destination hexagons
    const bgGrad = ctx.createRadialGradient(cx, cy, 5, cx, cy, hexRadius);
    bgGrad.addColorStop(0, 'rgba(26, 27, 46, 0.95)');
    bgGrad.addColorStop(0.7, 'rgba(18, 19, 32, 0.98)');
    bgGrad.addColorStop(1, '#0c0d14');
    ctx.fillStyle = bgGrad;

    drawHexagon(ctx, cx, cy, hexRadius);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Outer neon border
    ctx.lineWidth = isHovered ? 10 : 5;
    ctx.strokeStyle = colorHex;
    drawHexagon(ctx, cx, cy, hexRadius);
    ctx.stroke();

    // Inner thin border ring
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = colorHex + '60';
    drawHexagon(ctx, cx, cy, hexRadius - 12);
    ctx.stroke();

    // Centered node initials in futuristic high-contrast layout
    ctx.font = '800 78px Inter, system-ui, sans-serif';
    ctx.fillStyle = isHovered ? '#ffffff' : colorHex;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Add text shadow to initials for high legibility
    ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
    ctx.shadowBlur = 8;
    const initials = node.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    ctx.fillText(initials, cx, cy);
    ctx.shadowBlur = 0;

    if (isHovered) {
      ctx.font = '800 36px Inter, system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      const textY = cy + hexRadius + 15;

      const textW = ctx.measureText(node.name).width + 50;
      ctx.fillStyle = 'rgba(18, 19, 26, 0.95)';
      ctx.beginPath();
      ctx.roundRect(cx - textW / 2, textY, textW, 55, 27);
      ctx.fill();

      ctx.strokeStyle = colorHex;
      ctx.lineWidth = 2.5;
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.fillText(node.name, cx, textY + 10);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;

    const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true });
    const sprite = new THREE.Sprite(spriteMaterial);

    const scaleFactor = isHovered ? 28 : 24;
    sprite.scale.set(scaleFactor, scaleFactor, 1);

    node.__spriteMat = spriteMaterial;
    node.__spriteCanvas = canvas;

    return sprite;
  }, [isNodeVisible, getCategoryColor, hoverNode]);

  const linkColor = useCallback((link) => {
    return 'rgba(255,255,255,0.08)';
  }, []);

  const linkWidth = useCallback((link) => {
    return 1.2;
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

      <FilterBar
        searchQuery={searchQuery} setSearchQuery={setSearchQuery}
      />

      <FloatingFilters
        activeProvince={activeProvince}
        setActiveProvince={setActiveProvince}
        activeBudget={activeBudget}
        setActiveBudget={setActiveBudget}
        activeDuration={activeDuration}
        setActiveDuration={setActiveDuration}
        activeGroupSize={activeGroupSize}
        setActiveGroupSize={setActiveGroupSize}
        onClearAll={handleClearAllFilters}
      />

      {/* Counter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="absolute bottom-6 left-6 z-20 glass-panel px-5 py-3 rounded-2xl text-sm"
      >
        {activeHub ? (
          <>
            <span style={{ color: '#8888a8' }}>Showing </span>
            <span style={{ color: getCategoryColor(activeHub), fontWeight: 700 }}>
              {(graphData?.nodes || []).filter(d => d.isChild && isNodeVisible(d)).length}
            </span>
            <span style={{ color: '#8888a8' }}> in {activeHub}</span>
          </>
        ) : (
          (() => {
            const matchesCount = (graphData?.nodes || []).filter(d => d.isChild && isNodeVisible(d)).length;
            const isFilterActive =
              searchQuery.trim().length > 0 ||
              activeFilter !== "All" ||
              activeProvince !== "All" ||
              activeBudget !== "All" ||
              activeDuration !== "All" ||
              activeGroupSize > 1;

            return isFilterActive ? (
              <>
                <span style={{ color: '#8888a8' }}>Found </span>
                <span style={{ color: '#22d3ee', fontWeight: 700 }}>
                  {matchesCount}
                </span>
                <span style={{ color: '#8888a8' }}> matching destinations</span>
              </>
            ) : (
              <span style={{ color: '#8888a8' }}>Explore the 6 Galactic Tourism Hubs</span>
            );
          })()
        )}
      </motion.div>

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
        {graphData && graphData.nodes && graphData.nodes.length > 0 ? (
          <ForceGraph3D
            ref={fgRef} graphData={graphData}
            nodeThreeObject={nodeThreeObject} nodeThreeObjectExtend={false}
            onNodeClick={handleNodeClick}
            onNodeHover={node => { setHoverNode(node); if (containerRef.current) containerRef.current.style.cursor = node ? 'pointer' : 'grab'; }}
            backgroundColor="rgba(0,0,0,0)"
            width={dimensions.width} height={dimensions.height}
            linkWidth={linkWidth} linkColor={linkColor} linkOpacity={0.5} linkResolution={6}
            enableNodeDrag={false}
            warmupTicks={50} cooldownTicks={100}
            d3AlphaDecay={0.02} d3VelocityDecay={0.3}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-cyan-400 font-medium tracking-widest text-xs uppercase animate-pulse">
            Initializing galactic coordinates...
          </div>
        )}
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
