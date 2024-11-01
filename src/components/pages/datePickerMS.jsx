import React, { useState } from 'react';

const MultiSelectDatePicker = ({ label, onDatesChange }) => {
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateChange = (event) => {
    const newDate = event.target.value;

    // Toggle the selected date
    setSelectedDates((prevDates) => {
      const isSelected = prevDates.includes(newDate);
      const updatedDates = isSelected
        ? prevDates.filter((date) => date !== newDate) // Remove if selected
        : [...prevDates, newDate]; // Add if not selected

      onDatesChange && onDatesChange(updatedDates); // Call parent handler if provided
      return updatedDates;
    });
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={{ marginRight: '10px' }}>{label}</label>
      <input
        type="date"
        onChange={handleDateChange}
        style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <div style={{ marginTop: '10px' }}>
        {selectedDates.length > 0 && (
          <p>Selected Dates: {selectedDates.join(', ')}</p>
        )}
      </div>
    </div>
  );
};

export default MultiSelectDatePicker;
