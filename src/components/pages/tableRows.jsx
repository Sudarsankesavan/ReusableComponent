// TableRows.jsx
import React, { useState } from 'react';
import HighlightText from './highlightTextSearch'; // Import the HighlightText component

const TableRows = ({ data, selectedColumns, onCellChange, searchTerm }) => {
  const [editingCell, setEditingCell] = useState(null);

  const handleCellClick = (rowIndex, colKey) => {
    setEditingCell({ rowIndex, colKey });
  };

  const handleInputChange = (event, rowIndex, colKey) => {
    onCellChange(rowIndex, colKey, event.target.value);
  };

  const handleBlur = () => {
    setEditingCell(null); // Close editing mode on blur
  };

  return (
    <tbody>
      {data.map((row, rowIndex) => {
        // Check if the row matches the search term
        const isMatched = Object.values(row).some((cell) =>
          cell.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return (
          <tr key={rowIndex} style={{ backgroundColor: isMatched ? '#f0f0f0' : 'white' }}>
            {selectedColumns.map((colKey) => (
              <td
                key={colKey}
                onClick={() => handleCellClick(rowIndex, colKey)}
                style={{ cursor: 'pointer', textAlign: 'center' }}
              >
                {editingCell && editingCell.rowIndex === rowIndex && editingCell.colKey === colKey ? (
                  <input
                    type="text"
                    value={row[colKey]}
                    onChange={(event) => handleInputChange(event, rowIndex, colKey)}
                    onBlur={handleBlur}
                    autoFocus
                  />
                ) : (
                  // Use the HighlightText component to highlight the search term
                  <HighlightText text={row[colKey]} searchTerm={searchTerm} />
                )}
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableRows;
