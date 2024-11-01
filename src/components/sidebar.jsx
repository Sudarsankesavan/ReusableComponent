import React, { useState } from 'react';
import { FaBars, FaSitemap } from 'react-icons/fa';
import Drawer from './pages/drawer';

const Sidebar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '60px',
          height: '100%',
          backgroundColor: '#111',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '20px',
          zIndex: 1000,
        }}
      >
        {/* FaBars icon to toggle drawer */}
        <FaBars 
          style={{ 
            color: '#fff', 
            fontSize: '24px', 
            margin: '20px 0', 
            cursor: 'pointer' 
          }}
          onClick={toggleDrawer} // Trigger drawer toggle on click
          onMouseOver={(e) => (e.target.style.color = '#ccc')}
          onMouseOut={(e) => (e.target.style.color = '#fff')}
        />
        <FaSitemap 
          style={{ 
            color: '#fff', 
            fontSize: '24px', 
            margin: '20px 0', 
            cursor: 'pointer' 
          }}
          onMouseOver={(e) => (e.target.style.color = '#ccc')}
          onMouseOut={(e) => (e.target.style.color = '#fff')}
        />
      </div>
      
      {isDrawerOpen && <Drawer onTabChange={(tab) => console.log(`Switched to ${tab}`)} />}
    </>
  );
};

export default Sidebar;
