import React, { useCallback } from 'react';
import { Scene } from './components/Scene';
import { useSceneStore, SCENE_STATES } from './hooks/useSceneStore';
import './App.css';

function App() {
  const { 
    currentScene, 
    selectedNode, 
    triggerZoom, 
    returnToCluster,
  } = useSceneStore();

  const handleNodeClick = useCallback((nodeData) => {
    if (currentScene === SCENE_STATES.CLUSTER_VIEW && nodeData) {
      // Zoom DIRECTLY into the node center to ensure intersection
      const zoomPosition = [
        nodeData.x || 0,
        nodeData.y || 0,
        nodeData.z || 0
      ];
      
      triggerZoom(zoomPosition, nodeData);
    }
  }, [currentScene, triggerZoom]);

  const handleBackToGlobe = useCallback(() => {
    returnToCluster();
  }, [returnToCluster]);

  const isDeepDive = currentScene === SCENE_STATES.DEEP_DIVE_VIEW;

  return (
    <div className="app-container">
      <Scene 
        onNodeClick={handleNodeClick}
      />
      
      {!isDeepDive && (
        <div className="title-bar">
          <h1>Tourism Visualization</h1>
          <p>Explore destinations in 3D • Click nodes to discover</p>
        </div>
      )}

      {isDeepDive && selectedNode && (
        <div className="back-button-container">
          <button 
            className="back-button"
            onClick={handleBackToGlobe}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
            </svg>
            Back to Globe
          </button>
        </div>
      )}

      {selectedNode && (
        <div className="node-indicator">
          <span className="indicator-dot"></span>
          <span className="indicator-text">
            {isDeepDive ? selectedNode.name : 'Flying into ' + selectedNode.name + '...'}
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
