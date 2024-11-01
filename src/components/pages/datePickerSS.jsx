import React, { useState } from 'react';

const SingleSelectDatePicker = ({ label, onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    onDateChange && onDateChange(newDate); // Call parent handler if provided
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={{ marginRight: '10px' }}>{label}</label>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
    </div>
  );
};

export default SingleSelectDatePicker;
