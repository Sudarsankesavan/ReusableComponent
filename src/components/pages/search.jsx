import React from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import { Input } from 'antd';

const Search = ({ onSearch }) => {
  const handleSearch = (e) => {
    if (typeof onSearch === 'function') {
      onSearch(e.target.value);  // Pass the search term back to the parent
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '10px 10px',
        width: '220%',
        height: '25px',
      }}
    >
      <FaBars style={{ marginRight: '10px', fontSize: '20px', cursor: 'pointer' }} />
      <Input
        placeholder="Search"
        style={{
          flex: 1,
          border: 'none',
          outline: 'none',
          fontSize: '15px',
        }}
        onChange={handleSearch} // Call handleSearch on input change
      />
      <FaSearch style={{ marginLeft: '10px', fontSize: '20px' }} />
    </div>
  );
};

export default Search;
