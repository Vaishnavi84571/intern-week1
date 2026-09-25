export interface Employee {
  id: number;
  name: string;
  department: string;
  role: string;
  salary: number;
}

export const sampleEmployee: Employee = {
  id: 1,
  name: "Aarav Sharma",
  department: "IT",
  role: "Software Developer",
  salary: 65000
};

console.log(sampleEmployee);
