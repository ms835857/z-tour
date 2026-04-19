import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './components/LandingPage';
import GraphView from './components/GraphView';
import './index.css';

function App() {
  const [currentView, setCurrentView] = useState('landing');

  return (
    <div
      className="w-full h-screen overflow-hidden"
      style={{
        backgroundColor: '#12131a',
        fontFamily: "'Inter', system-ui, sans-serif",
        color: '#e8e8f0',
      }}
    >
      <AnimatePresence mode="wait">
        {currentView === 'landing' ? (
          <LandingPage key="landing" setView={setCurrentView} />
        ) : (
          <GraphView key="graph" setView={setCurrentView} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
