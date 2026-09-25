const service = require('../services/employeeService');

exports.getEmployees = (req, res) => {
  const { search, department, sort } = req.query;
  let employees = service.getAll();

  if (search) {
    const q = search.toLowerCase();
    employees = employees.filter(e =>
      e.name.toLowerCase().includes(q) ||
      e.email.toLowerCase().includes(q)
    );
  }

  if (department) {
    employees = employees.filter(e => e.department.toLowerCase() === department.toLowerCase());
  }

  if (sort === 'salary-asc') employees.sort((a, b) => a.salary - b.salary);
  if (sort === 'salary-desc') employees.sort((a, b) => b.salary - a.salary);
  if (sort === 'name') employees.sort((a, b) => a.name.localeCompare(b.name));

  res.json(employees);
};

exports.getEmployee = (req, res, next) => {
  try {
    const employee = service.getById(req.params.id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.json(employee);
  } catch (err) {
    next(err);
  }
};

exports.createEmployee = (req, res, next) => {
  try {
    const employee = service.create(req.body);
    res.status(201).json(employee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateEmployee = (req, res, next) => {
  try {
    const employee = service.update(req.params.id, req.body);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.json(employee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteEmployee = (req, res) => {
  const deleted = service.remove(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Employee not found' });
  res.json({ message: 'Employee deleted successfully' });
};
