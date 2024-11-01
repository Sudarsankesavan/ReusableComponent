import React, { useState } from 'react';

const SingleSelectTimePicker = ({ label, onTimeChange }) => {
  const [selectedTime, setSelectedTime] = useState('');

  const handleTimeChange = (event) => {
    const newTime = event.target.value;
    setSelectedTime(newTime);
    onTimeChange && onTimeChange(newTime); // Call parent handler if provided
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={{ marginRight: '10px' }}>{label}</label>
      <input
        type="time"
        value={selectedTime}
        onChange={handleTimeChange}
        style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
    </div>
  );
};

export default SingleSelectTimePicker;
