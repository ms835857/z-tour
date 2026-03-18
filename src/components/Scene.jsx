import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PerspectiveCamera, Stars, CameraControls, Html } from '@react-three/drei';
import { useDataSimulation } from '../hooks/useDataSimulation';
import { useSceneStore, SCENE_STATES } from '../hooks/useSceneStore';
import { LocalScene } from './LocalScene';
import tourismData from '../data/tourismData.json';

const COLORS = {
  primary: '#00d4aa',
  secondary: '#ff6b35',
  background: '#0a0a1a'
};

const CameraController = ({ targetPosition, isZooming, onZoomComplete, zoomTargetNode }) => {
  const controlsRef = useRef();
  const { camera } = useThree();
  const hasCollided = useRef(false);

  useEffect(() => {
    if (controlsRef.current) {
      const controls = controlsRef.current;
      const onUpdate = () => {
        if (isZooming && zoomTargetNode && !hasCollided.current) {
          const nodePos = new THREE.Vector3(zoomTargetNode.x || 0, zoomTargetNode.y || 0, zoomTargetNode.z || 0);
          // DETECT COLLISION - TRIGGER SCENE SWITCH
          if (camera.position.distanceTo(nodePos) < 2.0) {
            hasCollided.current = true;
            onZoomComplete();
          }
        }
      };
      controls.addEventListener('update', onUpdate);
      return () => controls.removeEventListener('update', onUpdate);
    }
  }, [isZooming, zoomTargetNode, camera, onZoomComplete]);

  useEffect(() => {
    if (targetPosition && isZooming && controlsRef.current) {
      hasCollided.current = false;
      const [x, y, z] = targetPosition;
      controlsRef.current.setLookAt(camera.position.x, camera.position.y, camera.position.z, x, y, z, true);
    }
  }, [targetPosition, isZooming]);

  return <CameraControls ref={controlsRef} makeDefault minDistance={0.01} maxDistance={500} />;
};

const NodeMesh = ({ nodeData, onClick, isSelected }) => {
  const meshRef = useRef();
  const size = 0.5 + (nodeData.popularity || 5) * 0.1;
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.015;
      if (!isSelected) {
        const s = 1 + Math.sin(state.clock.elapsedTime * 2 + (nodeData.id || 0)) * 0.15;
        meshRef.current.scale.set(s, s, s);
      }
    }
  });

  return (
    <mesh 
      ref={meshRef} 
      position={[nodeData.x || 0, nodeData.y || 0, nodeData.z || 0]} 
      onClick={(e) => { e.stopPropagation(); onClick(nodeData); }}
    >
      <sphereGeometry args={[size, 24, 24]} />
      <meshStandardMaterial 
        color={isSelected ? COLORS.secondary : COLORS.primary} 
        emissive={isSelected ? COLORS.secondary : COLORS.primary}
        emissiveIntensity={isSelected ? 5 : 1.5}
        roughness={0.1}
        metalness={0.9}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
};

const SceneElements = ({ onNodeClick }) => {
  const { currentScene, selectedNode, isZooming, zoomTarget, completeZoom, setSimulationRef } = useSceneStore();
  const { nodes, links, simulation } = useDataSimulation(tourismData);

  useEffect(() => {
    if (simulation.current) {
      setSimulationRef(simulation.current);
    }
  }, [simulation, setSimulationRef]);

  if (currentScene === SCENE_STATES.DEEP_DIVE_VIEW) {
    return <LocalScene nodeData={selectedNode} />;
  }

  return (
    <>
      <CameraController 
        targetPosition={isZooming ? zoomTarget : null} 
        isZooming={isZooming} 
        onZoomComplete={completeZoom} 
        zoomTargetNode={selectedNode} 
      />
      
      {nodes.map(node => (
        <NodeMesh 
          key={node.id} 
          nodeData={node} 
          onClick={onNodeClick} 
          isSelected={selectedNode?.id === node.id} 
        />
      ))}

      {links.map((link, idx) => {
        const start = link.source;
        const target = link.target;
        if (!start || !target || typeof start !== 'object' || typeof target !== 'object') return null;
        return (
          <line key={idx}>
            <bufferGeometry attach="geometry" setFromPoints={[
              new THREE.Vector3(start.x, start.y, start.z || 0),
              new THREE.Vector3(target.x, target.y, target.z || 0)
            ]} />
            <lineBasicMaterial attach="material" color="#2a4a6a" opacity={0.2} transparent />
          </line>
        );
      })}
    </>
  );
};

export const Scene = ({ onNodeClick }) => {
  return (
    <div style={{ width: '100vw', height: '100vh', background: COLORS.background }}>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 100], fov: 60 }}>
        <color attach="background" args={[COLORS.background]} />
        <Stars radius={300} depth={50} count={8000} factor={4} saturation={0} fade speed={1.5} />
        <ambientLight intensity={2} />
        <pointLight position={[50, 50, 50]} intensity={3} color={COLORS.primary} />
        <pointLight position={[-50, -50, -50]} intensity={2} color={COLORS.secondary} />
        <SceneElements onNodeClick={onNodeClick} />
      </Canvas>
    </div>
  );
};

export default Scene;
