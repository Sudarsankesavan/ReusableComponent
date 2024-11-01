import React, { useState } from 'react';

const Drawer = ({ onTabChange }) => {
  // Updated tab names to represent Column 1 to Column 13
  const tabNames = Array.from({ length: 5 }, (_, index) => `Column ${index + 1}`);
  
  // Initialize checkedItems for each tab
  const initialCheckedItems = tabNames.reduce((acc, tab) => {
    acc[tab] = false; // All checkboxes start as unchecked
    return acc;
  }, {});

  const [checkedItems, setCheckedItems] = useState(initialCheckedItems);
  const [selectAll, setSelectAll] = useState(false); // State for Select All checkbox

  // Handle checkbox state for individual checkboxes
  const handleCheckboxChange = (tab) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [tab]: !prevState[tab],
    }));
  };

  // Handle Select All checkbox
  const handleSelectAll = () => {
    const newCheckedState = !selectAll;
    setSelectAll(newCheckedState);
    const newCheckedItems = {};
    
    tabNames.forEach((tab) => {
      newCheckedItems[tab] = newCheckedState; // Set all checkboxes to the new checked state
    });

    setCheckedItems(newCheckedItems);
  };

  // Handle Add button - submit selected columns
  const handleAdd = () => {
    const selectedTabs = Object.keys(checkedItems).filter((key) => checkedItems[key]);
    onTabChange(selectedTabs); // Send selected columns to App component
  };

  return (
    <div 
      style={{
        width: '200px',
        position: 'fixed',
        top: '0',
        left: '60px',
        backgroundColor: 'black',
        paddingTop: '60px',
        color: 'floralwhite',
        zIndex: 999,
      }}
    >
      <h4 style={{ paddingLeft: '10px', marginBottom: '20px', color: 'floralwhite' }}>
        Table Column Display
      </h4>

      <ul style={{ paddingLeft: '10px', listStyle: 'none' }}>
        <li>
          <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
          <span> Select All</span>
        </li>
        {tabNames.map((tab) => (
          <li key={tab}>
            <input type="checkbox" checked={!!checkedItems[tab]} onChange={() => handleCheckboxChange(tab)} />
            <span> {tab}</span>
          </li>
        ))}
      </ul>

      <div style={{ padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={handleAdd} style={buttonStyle}>
          Add
        </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '5px 10px',
  backgroundColor: '#ff5722',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default Drawer;
