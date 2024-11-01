import React, { useState } from 'react';

const MultiSelectDateRangePicker = ({ label, onRangesChange }) => {
  const [dateRanges, setDateRanges] = useState([{ startDate: '', endDate: '' }]);

  const handleRangeChange = (index, field, value) => {
    const updatedRanges = dateRanges.map((range, i) =>
      i === index ? { ...range, [field]: value } : range
    );
    setDateRanges(updatedRanges);
    onRangesChange && onRangesChange(updatedRanges);
  };

  const handleAddRange = () => {
    setDateRanges([...dateRanges, { startDate: '', endDate: '' }]);
  };

  const handleRemoveRange = (index) => {
    const updatedRanges = dateRanges.filter((_, i) => i !== index);
    setDateRanges(updatedRanges);
    onRangesChange && onRangesChange(updatedRanges);
  };

  return (
    <div>
      <label style={{ display: 'block', marginBottom: '10px' }}>{label}</label>
      {dateRanges.map((range, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <input
            type="date"
            value={range.startDate}
            onChange={(e) => handleRangeChange(index, 'startDate', e.target.value)}
            style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc', marginRight: '10px' }}
          />
          <span style={{ margin: '0 10px' }}>to</span>
          <input
            type="date"
            value={range.endDate}
            onChange={(e) => handleRangeChange(index, 'endDate', e.target.value)}
            style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <button onClick={() => handleRemoveRange(index)} style={{ marginLeft: '10px', padding: '5px' }}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddRange} style={{ marginTop: '10px', padding: '5px 10px' }}>Add Date Range</button>
    </div>
  );
};

export default MultiSelectDateRangePicker;
