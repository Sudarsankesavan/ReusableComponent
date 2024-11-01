// OptionsDrawer.jsx
import React from 'react';

const OptionsDrawer = ({ isOpen, onAddColumn, onAddRow }) => {
  if (!isOpen) return null; // Don't render if the drawer is closed

  return (
    <div style={drawerStyle}>
      {onAddColumn && (
        <button onClick={onAddColumn} style={drawerButtonStyle}>
          + Add Column
        </button>
      )}
      <button onClick={onAddRow} style={drawerButtonStyle}>
        + Add Row
      </button>
    </div>
  );
};

// Styles for the drawer...
const drawerStyle = {
  position: 'absolute',
  right: '120px',
  top: '40px',
  backgroundColor: 'white',
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  padding: '10px',
  zIndex: 1000,
};

const drawerButtonStyle = {
  display: 'block',
  width: '100%',
  padding: '10px',
  margin: '5px 0',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default OptionsDrawer;
