const { employees, nextId } = require('../models/employeeModel');

function validate(data) {
  if (!data.name || !data.email || !data.department) {
    throw new Error('name, email and department are required');
  }
  if (data.salary !== undefined && Number(data.salary) < 0) {
    throw new Error('salary cannot be negative');
  }
}

exports.getAll = () => employees;

exports.getById = id => employees.find(e => e.id === Number(id));

exports.create = data => {
  validate(data);
  const employee = {
    id: nextId(),
    name: data.name.trim(),
    email: data.email.trim(),
    department: data.department.trim(),
    salary: Number(data.salary || 0),
    role: (data.role || 'Employee').trim()
  };
  employees.push(employee);
  return employee;
};

exports.update = (id, data) => {
  const employee = exports.getById(id);
  if (!employee) return null;
  const updated = { ...employee, ...data, id: employee.id };
  validate(updated);
  Object.assign(employee, {
    name: updated.name.trim(),
    email: updated.email.trim(),
    department: updated.department.trim(),
    salary: Number(updated.salary || 0),
    role: (updated.role || 'Employee').trim()
  });
  return employee;
};

exports.remove = id => {
  const index = employees.findIndex(e => e.id === Number(id));
  if (index === -1) return false;
  employees.splice(index, 1);
  return true;
};
