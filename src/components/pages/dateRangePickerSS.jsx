import React, { useState } from 'react';

const SingleSelectDateRangePicker = ({ label, onRangeChange }) => {
  const [dateRange, setDateRange] = useState({ startDate: '', endDate: '' });

  const handleStartDateChange = (event) => {
    const startDate = event.target.value;
    setDateRange((prev) => {
      const updatedRange = { ...prev, startDate };
      onRangeChange && onRangeChange(updatedRange);
      return updatedRange;
    });
  };

  const handleEndDateChange = (event) => {
    const endDate = event.target.value;
    setDateRange((prev) => {
      const updatedRange = { ...prev, endDate };
      onRangeChange && onRangeChange(updatedRange);
      return updatedRange;
    });
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <label style={{ marginRight: '10px' }}>{label}</label>
      <input
        type="date"
        value={dateRange.startDate}
        onChange={handleStartDateChange}
        style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', marginRight: '10px' }}
      />
      <span style={{ margin: '0 10px' }}>to</span>
      <input
        type="date"
        value={dateRange.endDate}
        onChange={handleEndDateChange}
        style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
    </div>
  );
};

export default SingleSelectDateRangePicker;
