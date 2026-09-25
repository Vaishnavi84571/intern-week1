let idCounter = 4;

const employees = [
  { id: 1, name: 'Aarav Sharma', email: 'aarav@example.com', department: 'Engineering', salary: 65000, role: 'Software Engineer' },
  { id: 2, name: 'Priya Patil', email: 'priya@example.com', department: 'HR', salary: 52000, role: 'HR Executive' },
  { id: 3, name: 'Rohan Deshmukh', email: 'rohan@example.com', department: 'Sales', salary: 48000, role: 'Sales Executive' }
];

function nextId() {
  return idCounter++;
}

module.exports = { employees, nextId };
