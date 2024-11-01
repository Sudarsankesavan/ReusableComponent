// Array of sample first names and last names
const firstNames = ['John', 'Jane', 'Michael', 'Emily', 'Chris', 'Sarah', 'David', 'Laura', 'Daniel', 'Sophia'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Martinez', 'Lopez'];

// Function to generate a random full name (first + last name)
const generateRandomName = () => {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
};

// Function to generate random data for a given number of columns
const getRandomData = (numColumns) => {
  const randomData = {};
  for (let i = 1; i <= numColumns; i++) {
    randomData[`Column ${i}`] = generateRandomName(); // Ensuring column names match
  }
  return randomData;
};

// Function to generate an array of random data rows for a dynamic number of columns
const generateTableData = (numRows, numColumns) => {
  return Array.from({ length: numRows }, () => getRandomData(numColumns));
};

// Function to get or generate table data and persist it in localStorage
const getOrGenerateTableData = (numRows, numColumns) => {
  const storedData = localStorage.getItem('tableData');
  if (storedData) {
    return JSON.parse(storedData);
  } else {
    const newData = generateTableData(numRows, numColumns);
    localStorage.setItem('tableData', JSON.stringify(newData));
    return newData;
  }
};

// Function to clear the stored table data
const clearTableData = () => {
  localStorage.removeItem('tableData');
};

export { getOrGenerateTableData, clearTableData };
