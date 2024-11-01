import React, { useState } from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import TableComponent from './components/tableComp';
import Drawer from './components/pages/drawer';

// Importing all picker components
import SingleSelectDatePicker from './components/pages/datePickerSS';
import MultiSelectDatePicker from './components/pages/datePickerMS';
import SingleSelectTimePicker from './components/pages/timePickerSS';
import MultiSelectTimePicker from './components/pages/timePickerMS';
import SingleSelectDateTimePicker from './components/pages/dateAndTimePickerSS';
import MultiSelectDateTimePicker from './components/pages/dateAndTimePickerMS';

const App = () => {
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Handlers for pickers
  const handleDateChange = (date) => console.log("Selected Date:", date);
  const handleDatesChange = (dates) => console.log("Selected Dates:", dates);
  const handleTimeChange = (time) => console.log("Selected Time:", time);
  const handleTimesChange = (times) => console.log("Selected Times:", times);
  const handleDateTimeChange = (dateTime) => console.log("Selected Date & Time:", dateTime);
  const handleDateTimesChange = (dateTimes) => console.log("Selected Date & Times:", dateTimes);

  // Drawer management
  const handleTabChange = (columns) => setSelectedColumns(columns);
  const handleDrawerOpen = () => setIsDrawerOpen(true);
  const handleDrawerClose = () => setIsDrawerOpen(false);

  return (
    <div className="app" style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ marginLeft: '60px', width: '100%' }}>
        <Navbar />
        
        <button onClick={handleDrawerOpen} style={openDrawerButtonStyle}>
          Open Drawer
        </button>

        {isDrawerOpen && (
          <Drawer 
            onTabChange={handleTabChange}
            onClose={handleDrawerClose}
          />
        )}

        <SingleSelectDatePicker label="Select Date:" onDateChange={handleDateChange} />
        <MultiSelectDatePicker label="Select Multiple Dates:" onDatesChange={handleDatesChange} />
        <SingleSelectTimePicker label="Select Time:" onTimeChange={handleTimeChange} />
        <MultiSelectTimePicker label="Select Multiple Times:" onTimesChange={handleTimesChange} />
        <SingleSelectDateTimePicker label="Select Date & Time:" onDateTimeChange={handleDateTimeChange} />
        <MultiSelectDateTimePicker label="Select Multiple Dates & Times:" onDateTimesChange={handleDateTimesChange} />

        <div style={{ padding: '20px' }}>
          <TableComponent selectedColumns={selectedColumns} />
        </div>
      </div>
    </div>
  );
};

const openDrawerButtonStyle = {
  padding: '10px 10px',
  margin: '20px',
  backgroundColor: '#ff5722',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default App;
