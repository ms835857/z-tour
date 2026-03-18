import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Html, Text, Environment, CameraControls } from '@react-three/drei';
import { useSceneStore, SCENE_STATES } from '../hooks/useSceneStore';

const COLORS = {
  primary: '#00d4aa',
  secondary: '#ff6b35',
  accent: '#00d4aa',
  success: '#4ade80',
  danger: '#ef4444',
  background: '#0a0a1a'
};

const RoutePin = ({ position, label, index, total }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + index) * 0.1;
    }
  });

  const color = index === 0 ? COLORS.success : index === total - 1 ? COLORS.secondary : COLORS.primary;

  return (
    <group position={position}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.15, 0.2, 0.4, 8]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={0.8}
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>
      <mesh position={[0, 0.35, 0]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color} 
          emissiveIntensity={1}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <Text
        position={[0, 0.7, 0]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="bottom"
      >
        {label}
      </Text>
    </group>
  );
};

const RouteLine = ({ points }) => {
  const curve = useMemo(() => {
    const curvePoints = points.map(p => new THREE.Vector3(p[0], p[1], p[2]));
    return new THREE.CatmullRomCurve3(curvePoints, false, 'catmullrom', 0.5);
  }, [points]);

  const tubeGeometry = useMemo(() => {
    return new THREE.TubeGeometry(curve, 64, 0.05, 8, false);
  }, [curve]);

  return (
    <mesh geometry={tubeGeometry}>
      <meshStandardMaterial 
        color={COLORS.primary} 
        emissive={COLORS.primary}
        emissiveIntensity={0.5}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

const SeatsProgressBar = ({ booked, total }) => {
  const percentage = (booked / total) * 100;
  const freePercentage = ((total - booked) / total) * 100;
  
  return (
    <div style={{ width: '100%', marginTop: '8px' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        fontSize: '11px',
        marginBottom: '4px',
        fontFamily: "'Poppins', sans-serif"
      }}>
        <span style={{ color: COLORS.danger }}>Booked: {booked}</span>
        <span style={{ color: COLORS.success }}>Free: {total - booked}</span>
      </div>
      <div style={{ 
        width: '100%', 
        height: '12px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '6px',
        overflow: 'hidden',
        display: 'flex'
      }}>
        <div style={{ 
          width: `${percentage}%`, 
          background: `linear-gradient(90deg, ${COLORS.danger}, #f87171)`,
          transition: 'width 0.5s ease'
        }} />
        <div style={{ 
          width: `${freePercentage}%`, 
          background: `linear-gradient(90deg, #22c55e, ${COLORS.success})`
        }} />
      </div>
    </div>
  );
};

const HolographicPanel = ({ nodeData }) => {
  return (
    <Html
      transform
      distanceFactor={8}
      position={[-4, 3, 0]}
      rotation={[0, 0.3, 0]}
      style={{
        width: '320px',
        pointerEvents: 'auto'
      }}
    >
      <div style={{
        background: 'linear-gradient(135deg, rgba(10, 20, 40, 0.9) 0%, rgba(20, 30, 60, 0.85) 100%)',
        backdropFilter: 'blur(20px)',
        borderRadius: '16px',
        border: '1px solid rgba(0, 212, 170, 0.3)',
        padding: '24px',
        color: '#fff',
        fontFamily: "'Poppins', sans-serif",
        boxShadow: `0 0 40px rgba(0, 212, 170, 0.2), inset 0 0 30px rgba(0, 212, 170, 0.05)`,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: `linear-gradient(90deg, transparent, ${COLORS.primary}, transparent)`
        }} />
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: `linear-gradient(135deg, ${COLORS.primary}22, ${COLORS.primary}44)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px'
          }}>
            {nodeData.type === 'Adventure' ? '🏔️' : nodeData.type === 'Cultural' ? '🏛️' : '✨'}
          </div>
          <div>
            <h3 style={{ 
              margin: 0, 
              fontSize: '18px', 
              fontWeight: 600, 
              color: COLORS.primary,
              textShadow: `0 0 10px ${COLORS.primary}40`
            }}>
              {nodeData.name}
            </h3>
            <span style={{ 
              fontSize: '11px', 
              color: 'rgba(255,255,255,0.5)',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              {nodeData.type} Tourism
            </span>
          </div>
        </div>

        <p style={{ 
          fontSize: '12px', 
          lineHeight: '1.6', 
          color: 'rgba(255,255,255,0.8)',
          marginBottom: '20px'
        }}>
          {nodeData.description}
        </p>

        <div style={{ marginBottom: '20px' }}>
          <h4 style={{ 
            fontSize: '11px', 
            textTransform: 'uppercase', 
            letterSpacing: '1.5px',
            color: 'rgba(255,255,255,0.5)',
            marginBottom: '12px'
          }}>
            Packages
          </h4>
          {nodeData.packages?.map((pkg, idx) => (
            <div key={idx} style={{
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '10px',
              padding: '12px',
              marginBottom: '8px',
              border: '1px solid rgba(255,255,255,0.08)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ 
                  fontSize: '13px', 
                  fontWeight: 600,
                  color: idx === 0 ? COLORS.primary : COLORS.secondary
                }}>
                  {pkg.title}
                </span>
                <span style={{ 
                  fontSize: '15px', 
                  fontWeight: 700,
                  color: '#fff'
                }}>
                  {pkg.price}
                </span>
              </div>
              <div style={{ 
                display: 'flex', 
                gap: '12px', 
                marginTop: '6px',
                fontSize: '11px',
                color: 'rgba(255,255,255,0.6)'
              }}>
                <span>⏱ {pkg.duration}</span>
              </div>
              <SeatsProgressBar booked={pkg.booked} total={pkg.seats} />
            </div>
          ))}
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h4 style={{ 
            fontSize: '11px', 
            textTransform: 'uppercase', 
            letterSpacing: '1.5px',
            color: 'rgba(255,255,255,0.5)',
            marginBottom: '12px'
          }}>
            Itinerary Route
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {nodeData.route?.map((stop, idx) => (
              <React.Fragment key={idx}>
                <span style={{
                  background: idx === 0 ? `${COLORS.success}22` : idx === nodeData.route.length - 1 ? `${COLORS.secondary}22` : `${COLORS.primary}22`,
                  border: `1px solid ${idx === 0 ? COLORS.success : idx === nodeData.route.length - 1 ? COLORS.secondary : COLORS.primary}44`,
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontSize: '11px',
                  color: idx === 0 ? COLORS.success : idx === nodeData.route.length - 1 ? COLORS.secondary : COLORS.primary
                }}>
                  {stop}
                </span>
                {idx < nodeData.route.length - 1 && (
                  <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px', alignSelf: 'center' }}>→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ 
            fontSize: '11px', 
            textTransform: 'uppercase', 
            letterSpacing: '1.5px',
            color: 'rgba(255,255,255,0.5)',
            marginBottom: '10px'
          }}>
            Facilities
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {nodeData.facilities?.map((facility, idx) => (
              <span key={idx} style={{
                background: 'rgba(255,255,255,0.08)',
                padding: '4px 8px',
                borderRadius: '6px',
                fontSize: '10px',
                color: 'rgba(255,255,255,0.7)'
              }}>
                {facility}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Html>
  );
};

const ItineraryMap = ({ route }) => {
  const points = useMemo(() => {
    if (!route || route.length < 2) return [];
    
    const baseY = 0;
    const spacing = 2;
    const midOffset = (route.length - 1) * spacing / 2;
    
    return route.map((stop, idx) => [
      idx * spacing - midOffset,
      baseY + Math.sin(idx * 0.8) * 0.5,
      Math.cos(idx * 1.2) * 0.3
    ]);
  }, [route]);

  if (points.length < 2) return null;

  return (
    <group>
      <RouteLine points={points} />
      {route.map((stop, idx) => (
        <RoutePin 
          key={idx} 
          position={points[idx]} 
          label={stop}
          index={idx}
          total={route.length}
        />
      ))}
    </group>
  );
};

const FloatingParticles = () => {
  const particlesRef = useRef();
  const count = 50;
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={COLORS.primary}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const LocalSceneContent = ({ nodeData }) => {
  const returnToCluster = useSceneStore(state => state.returnToCluster);

  const envMapOptions = useMemo(() => {
    const type = nodeData.type;
    if (type === 'Adventure') return 'park';
    if (type === 'Cultural') return 'city';
    return 'sunset';
  }, [nodeData.type]);

  return (
    <>
      <CameraControls makeDefault />
      
      <Environment preset={envMapOptions} background={false} />

      <FloatingParticles />

      <group position={[0, 0, 0]}>
        <ItineraryMap route={nodeData.route} />
      </group>

      <HolographicPanel nodeData={nodeData} />

      <Html
        transform
        position={[0, -4, 0]}
        rotation={[-0.3, 0, 0]}
        distanceFactor={10}
      >
        <button
          onClick={returnToCluster}
          style={{
            background: `linear-gradient(135deg, ${COLORS.secondary}ee, ${COLORS.secondary}cc)`,
            border: 'none',
            borderRadius: '12px',
            padding: '14px 28px',
            color: '#fff',
            fontFamily: "'Poppins', sans-serif",
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: `0 4px 20px ${COLORS.secondary}66`,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s ease'
          }}
        >
          Back to Globe
        </button>
      </Html>
    </>
  );
};

export const LocalScene = ({ nodeData }) => {
  if (!nodeData) return null;
  
  return <LocalSceneContent nodeData={nodeData} />;
};

export default LocalScene;
