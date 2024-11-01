// MultiSelectDateTimePicker.jsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import MultiSelectTimePicker from './timePickerMS';

const MultiSelectDateTimePicker = ({ label, onDateTimesChange }) => {
  const [selectedDateTimes, setSelectedDateTimes] = useState([]);
  const [tempDate, setTempDate] = useState(null);
  const [tempTimes, setTempTimes] = useState([]);

  const handleTimesChange = (times) => {
    setTempTimes(times);
  };

  const addDateTime = () => {
    if (tempDate && tempTimes.length > 0) {
      // Combine selected date with each selected time
      const newDateTimes = tempTimes.map(time => `${tempDate.toDateString()} ${time}`);
      const newSelectedDateTimes = [...selectedDateTimes, ...newDateTimes];

      setSelectedDateTimes(newSelectedDateTimes);
      onDateTimesChange(newSelectedDateTimes);

      // Reset temp date and times
      setTempDate(null);
      setTempTimes([]);
    }
  };

  return (
    <div>
      <label>{label}</label>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '10px 0' }}>
        {/* Date Picker */}
        <DatePicker
          selected={tempDate}
          onChange={setTempDate}
          placeholderText="Select Date"
          style={{ padding: '8px', borderRadius: '8px', border: '1px solid #ccc', width: '150px' }}
        />

        {/* Multi-Select Time Picker */}
        <MultiSelectTimePicker onTimesChange={handleTimesChange} />

        {/* Add Date & Time button */}
        <button onClick={addDateTime} style={{
          padding: '5px 10px',
          backgroundColor: '#FF9800',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Add Date & Times
        </button>
      </div>

      {/* Display selected date-times */}
      <div>
        {selectedDateTimes.map((dateTime, index) => (
          <div key={index} style={{
            padding: '5px',
            background: '#e0e0e0',
            margin: '5px 0',
            borderRadius: '4px'
          }}>
            {dateTime}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelectDateTimePicker;
