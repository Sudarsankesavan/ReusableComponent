// highlightTextSearch.jsx
import React from 'react';

const HighlightText = ({ text, searchTerm }) => {
  if (!searchTerm) return <span>{text}</span>; // Return original text if no search term

  const regex = new RegExp(`(${searchTerm})`, 'gi'); // Case-insensitive search
  const parts = text.split(regex); // Split text into parts

  return parts.map((part, index) =>
    part.toLowerCase() === searchTerm.toLowerCase() ? (
      <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span> // Highlight match
    ) : (
      <span key={index}>{part}</span> // Regular part of text
    )
  );
};

export default HighlightText;
