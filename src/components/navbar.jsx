import React from 'react';
import { FaBell, FaUserAlt } from 'react-icons/fa';
import Search from './pages/search';

const Navbar = ({ onSearch }) => {  // Accept the onSearch prop here
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: '60px',
        right: 0,
        height: '45px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: '#f0f0f0',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        zIndex: 999,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: '20px',
          padding: '5px 15px',
        }}
      >
        <img
          src="https://i.imgur.com/3GznpBp.png"
          alt="Logo"
          style={{
            height: '30px',
            width: '30px',
            borderRadius: '50%',
            marginRight: '30px',
          }}
        />
        <span
          style={{
            fontSize: '16px',
            fontWeight: 'bold',
          }}
        >
          Logo
        </span>
      </div>

      <div>
        <Search onSearch={onSearch} /> {/* Pass onSearch prop to Search component */}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <FaBell style={{ marginLeft: '50px', fontSize: '20px', cursor: 'pointer' }} />
        <FaUserAlt style={{ marginLeft: '50px', fontSize: '20px', cursor: 'pointer' }} />
      </div>
    </div>
  );
};

export default Navbar;
