import { create } from 'zustand';

export const SCENE_STATES = {
  CLUSTER_VIEW: 'ClusterView',
  DEEP_DIVE_VIEW: 'DeepDiveView',
};

export const useSceneStore = create((set, get) => ({
  currentScene: SCENE_STATES.CLUSTER_VIEW,
  selectedNode: null,
  nodes: [],
  isZooming: false,
  zoomTarget: null,
  simulationRef: null,

  setCurrentScene: (scene) => set({ currentScene: scene }),
  setSelectedNode: (node) => set({ selectedNode: node }),
  setSimulationRef: (simRef) => set({ simulationRef: simRef }),

  enterDeepDive: (node) => {
    set({ 
      currentScene: SCENE_STATES.DEEP_DIVE_VIEW, 
      selectedNode: node,
      isZooming: false,
      zoomTarget: null 
    });
  },

  returnToCluster: () => {
    const { simulationRef } = get();
    if (simulationRef) {
      simulationRef.velocityDecay(0.3);
      simulationRef.alpha(0.5).restart();
    }
    set({ 
      currentScene: SCENE_STATES.CLUSTER_VIEW, 
      selectedNode: null,
      isZooming: false,
      zoomTarget: null 
    });
  },

  triggerZoom: (targetPosition, node) => {
    const { simulationRef } = get();
    if (simulationRef) {
      // Damp physics when clicked
      simulationRef.alphaTarget(0);
      simulationRef.velocityDecay(0.98);
    }
    set({ 
      isZooming: true, 
      zoomTarget: targetPosition,
      selectedNode: node 
    });
  },

  completeZoom: () => {
    const { selectedNode } = get();
    set({ isZooming: false, zoomTarget: null });
    if (selectedNode) {
      get().enterDeepDive(selectedNode);
    }
  },
}));
