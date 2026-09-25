interface Employee {
  id: number;
  name: string;
  department: string;
  salary: number;
  role?: string;
}

const employee: Employee = {
  id: 1,
  name: "Aarav Sharma",
  department: "IT",
  salary: 65000,
  role: "Software Developer"
};

console.log(employee);
