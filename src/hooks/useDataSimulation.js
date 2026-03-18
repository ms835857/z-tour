import { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';

export const useDataSimulation = (data) => {
  const [nodes, setNodes] = useState([]);
  const [links, setLinks] = useState([]);
  const simulationRef = useRef(null);

  useEffect(() => {
    if (!data || !Array.isArray(data)) return;

    const simulationNodes = data.map(d => ({ 
      ...d, 
      x: (Math.random() - 0.5) * 50, 
      y: (Math.random() - 0.5) * 50, 
      z: (Math.random() - 0.5) * 50 
    }));

    const simulationLinks = [];
    for (let i = 0; i < simulationNodes.length; i++) {
      const connections = 1;
      for (let j = 0; j < connections; j++) {
        const target = Math.floor(Math.random() * simulationNodes.length);
        if (i !== target) {
          simulationLinks.push({ source: simulationNodes[i].id, target: simulationNodes[target].id });
        }
      }
    }

    const simulation = d3.forceSimulation(simulationNodes)
      .force("link", d3.forceLink(simulationLinks).id(d => d.id).distance(10))
      .force("charge", d3.forceManyBody().strength(-100))
      .force("center", d3.forceCenter(0, 0))
      .force("collision", d3.forceCollide().radius(4))
      .on("tick", () => {
        setNodes([...simulationNodes]);
        setLinks([...simulationLinks]);
      });

    simulationRef.current = simulation;
    return () => simulation.stop();
  }, [data]);

  return { nodes, links, simulation: simulationRef };
};
