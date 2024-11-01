import React, { useState } from 'react';

const SingleSelectDateTimePicker = ({ label, onDateTimeChange }) => {
  const [selectedDateTime, setSelectedDateTime] = useState({ date: '', time: '' });

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setSelectedDateTime((prev) => {
      const updatedDateTime = { ...prev, date: newDate };
      onDateTimeChange && onDateTimeChange(updatedDateTime);
      return updatedDateTime;
    });
  };

  const handleTimeChange = (event) => {
    const newTime = event.target.value;
    setSelectedDateTime((prev) => {
      const updatedDateTime = { ...prev, time: newTime };
      onDateTimeChange && onDateTimeChange(updatedDateTime);
      return updatedDateTime;
    });
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={{ marginRight: '10px' }}>{label}</label>
      <input
        type="date"
        value={selectedDateTime.date}
        onChange={handleDateChange}
        style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', marginRight: '10px' }}
      />
      <input
        type="time"
        value={selectedDateTime.time}
        onChange={handleTimeChange}
        style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
    </div>
  );
};

export default SingleSelectDateTimePicker;
