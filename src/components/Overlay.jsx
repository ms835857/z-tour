import React from 'react';
import { MapPin, DollarSign, RotateCcw, X } from 'lucide-react';

const styles = {
  overlay: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    width: '340px',
    maxHeight: 'calc(100vh - 40px)',
    background: 'rgba(10, 20, 40, 0.75)',
    backdropFilter: 'blur(20px)',
    borderRadius: '16px',
    border: '1px solid rgba(0, 212, 170, 0.2)',
    padding: '24px',
    color: '#fff',
    fontFamily: "'Poppins', sans-serif",
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
    overflowY: 'auto',
    zIndex: 100,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '20px',
  },
  buttonRow: {
    display: 'flex',
    gap: '8px',
    marginTop: '16px',
  },
  resetButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    background: 'rgba(255, 107, 53, 0.15)',
    border: '1px solid rgba(255, 107, 53, 0.3)',
    padding: '10px 16px',
    borderRadius: '10px',
    color: '#ff6b35',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
    fontFamily: "'Poppins', sans-serif",
    transition: 'all 0.2s ease',
  },
  title: {
    fontSize: '24px',
    fontWeight: '600',
    margin: 0,
    color: '#00d4aa',
    letterSpacing: '0.5px',
  },
  subtitle: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.6)',
    marginTop: '4px',
  },
  closeButton: {
    background: 'rgba(255,255,255,0.1)',
    border: 'none',
    borderRadius: '8px',
    padding: '8px',
    cursor: 'pointer',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    color: 'rgba(255,255,255,0.5)',
    marginBottom: '10px',
    fontWeight: '500',
  },
  description: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: 'rgba(255,255,255,0.85)',
  },
  priceTag: {
    display: 'inline-flex',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #00d4aa 0%, #00a388 100%)',
    padding: '12px 20px',
    borderRadius: '12px',
    fontSize: '20px',
    fontWeight: '600',
    color: '#0a0a1a',
  },
  routeList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  routeTag: {
    background: 'rgba(255, 107, 53, 0.15)',
    border: '1px solid rgba(255, 107, 53, 0.3)',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '13px',
    color: '#ff6b35',
    fontWeight: '500',
  },
  emptyState: {
    textAlign: 'center',
    padding: '40px 20px',
  },
  emptyIcon: {
    fontSize: '48px',
    marginBottom: '16px',
    opacity: 0.5,
  },
  emptyTitle: {
    fontSize: '18px',
    fontWeight: '500',
    marginBottom: '8px',
    color: 'rgba(255,255,255,0.8)',
  },
  emptyText: {
    fontSize: '14px',
    color: 'rgba(255,255,255,0.5)',
  },
};

export const Overlay = ({ selectedNode, onClose, onReset }) => {
  if (!selectedNode) {
    return (
      <div style={styles.overlay}>
        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>🌍</div>
          <div style={styles.emptyTitle}>Explore Destinations</div>
          <div style={styles.emptyText}>
            Click on a glowing node to discover tourism packages and routes.
          </div>
          {onReset && (
            <button 
              style={{...styles.resetButton, marginTop: '20px'}}
              onClick={onReset}
            >
              <RotateCcw size={16} />
              Reset View
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={styles.overlay}>
      <div style={styles.header}>
        <div>
          <h2 style={styles.title}>{selectedNode.name}</h2>
          <div style={styles.subtitle}>Popularity Score: {selectedNode.popularity}/10</div>
        </div>
        <button style={styles.closeButton} onClick={onClose}>
          <X size={18} />
        </button>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>About</div>
        <p style={styles.description}>{selectedNode.description}</p>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>Package Price</div>
        <div style={styles.priceTag}>
          <DollarSign size={20} />
          {selectedNode.packagePrice.toLocaleString()}
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.sectionTitle}>Connected Routes</div>
        <div style={styles.routeList}>
          {selectedNode.routes?.map((route, index) => (
            <span key={index} style={styles.routeTag}>
              <MapPin size={12} style={{ marginRight: '4px' }} />
              {route}
            </span>
          ))}
        </div>
      </div>

      {onReset && (
        <div style={styles.buttonRow}>
          <button style={styles.resetButton} onClick={onReset}>
            <RotateCcw size={16} />
            Reset View
          </button>
        </div>
      )}
    </div>
  );
};
