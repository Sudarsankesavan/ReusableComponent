import React, { useState } from 'react';

const MultiSelectTimePicker = ({ label, onTimesChange }) => {
  const [selectedTimes, setSelectedTimes] = useState([]);

  const handleTimeChange = (event) => {
    const newTime = event.target.value;

    // Toggle the selected time
    setSelectedTimes((prevTimes) => {
      const isSelected = prevTimes.includes(newTime);
      const updatedTimes = isSelected
        ? prevTimes.filter((time) => time !== newTime) // Remove if selected
        : [...prevTimes, newTime]; // Add if not selected

      onTimesChange && onTimesChange(updatedTimes); // Call parent handler if provided
      return updatedTimes;
    });
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={{ marginRight: '10px' }}>{label}</label>
      <input
        type="time"
        onChange={handleTimeChange}
        style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <div style={{ marginTop: '10px' }}>
        {selectedTimes.length > 0 && (
          <p>Selected Times: {selectedTimes.join(', ')}</p>
        )}
      </div>
    </div>
  );
};

export default MultiSelectTimePicker;
