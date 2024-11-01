import React, { useState } from 'react';
import TableRows from './pages/tableRows';
import { getOrGenerateTableData } from './pages/tableData';
import Navbar from './navbar';
import OptionsDrawer from './pages/optionsDrawer'; // Import the new OptionsDrawer component

const TableComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTriggered, setSearchTriggered] = useState(false);
  const [columns, setColumns] = useState(['col1', 'col2', 'col3', 'col4', 'col5']);
  const [data, setData] = useState(getOrGenerateTableData(5, columns.length));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const allColumns = {
  };

  const generateColumnName = (index) => {
    return `Column ${index + 1}`;
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setSearchTriggered(term.length > 0); // Trigger search if term exists
  };

  const handleAddColumn = () => {
    const currentColumnCount = columns.length;

    // Prevent adding more than 50 columns
    if (currentColumnCount >= 50) {
      alert('You cannot add more than 50 columns.');
      return;
    }

    const newColumnKey = `col${currentColumnCount + 1}`;
    const newColumnName = allColumns[newColumnKey] || generateColumnName(currentColumnCount);

    // Update columns and data state
    setColumns((prevColumns) => [...prevColumns, newColumnKey]);
    setData((prevData) =>
      prevData.map((row, index) => ({
        ...row,
        [newColumnKey]: `${newColumnName} - Row ${index + 1}`,
      }))
    );
  };

  const handleAddRow = () => {
    const newRow = columns.reduce((row, col) => {
      row[col] = `${allColumns[col] || generateColumnName(columns.length)} - Row ${data.length + 1}`;
      return row;
    }, {});
    setData((prevData) => [...prevData, newRow]);
  };

  const handleCellChange = (rowIndex, colKey, newValue) => {
    setData((prevData) =>
      prevData.map((row, index) => 
        index === rowIndex ? { ...row, [colKey]: newValue } : row
      )
    );
  };

  // Filter the data based on the search term
  const filteredData = data.filter((row) =>
    Object.values(row).some((cell) =>
      cell.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div>
      <Navbar onSearch={handleSearch} />

      <div style={outerContainerStyle}>
        <div style={tableWrapperBorderStyle}>
          <div style={buttonContainerStyle}>
            <button onClick={() => setIsDrawerOpen(!isDrawerOpen)} style={buttonStyle}>+ Options</button>
          </div>

          <OptionsDrawer
            isOpen={isDrawerOpen}
            onAddColumn={handleAddColumn}
            onAddRow={handleAddRow}
          />

          <div style={tableWrapperStyle}>
            <div style={tableContainerStyle}>
              <div style={tableScrollContainerStyle}> {/* Added a scrollable container */}
                <table style={tableStyle(columns.length)} border="1" cellPadding="10">
                  <thead>
                    <tr>
                      {columns.map((col) => (
                        <th key={col} style={columnStyle}>{allColumns[col] || generateColumnName(columns.indexOf(col))}</th>
                      ))}
                    </tr>
                  </thead>
                  <TableRows 
                    data={searchTriggered ? filteredData : data} // Use filtered data if search is triggered
                    selectedColumns={columns} 
                    onCellChange={handleCellChange} 
                    searchTerm={searchTerm} 
                  />
                </table>
              </div>
            </div>
          </div>
          <div style={rowCountStyle}>
            Row Count: {searchTriggered ? filteredData.length : data.length} | Column Count: {columns.length}
          </div>
        </div>
      </div>
    </div>
  );
};

// Styles for the component...
const outerContainerStyle = { padding: '0px' };
const tableWrapperBorderStyle = {
  border: '2px solid black',
  borderRadius: '8px',
  padding: '10px',
  margin: '20px 0',
};
const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '10px',
};
const tableWrapperStyle = { width: 'calc(100vw - 80px)', overflowX: 'auto', maxWidth: '92vw' };
const tableContainerStyle = { display: 'inline-block', minWidth: '100%' };
const tableScrollContainerStyle = {
  maxHeight: '400px', // Set your desired max height
  overflowY: 'auto',  // Enable vertical scrolling
  overflowX: 'hidden', // Prevent horizontal scrolling
};
const tableStyle = (columnCount) => ({
  width: columnCount > 5 ? `${columnCount * 200}px` : '100%',
  tableLayout: 'fixed',
  borderCollapse: 'collapse',
});
const columnStyle = { minWidth: '200px', textAlign: 'center' };
const rowCountStyle = { marginTop: '10px', textAlign: 'center', fontWeight: 'bold' };

const buttonStyle = {
  padding: '5px 10px',
  paddingTop: '8px',
  paddingBottom: '8px',
  marginTop: '8px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

// ... drawer styles and other code remain unchanged ...

export default TableComponent;