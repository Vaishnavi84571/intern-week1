function calculateAverageSalary(salaries: number[]): number {
  if (salaries.length === 0) return 0;
  return salaries.reduce((sum, salary) => sum + salary, 0) / salaries.length;
}

const formatEmployee = (name: string, salary: number): string =>
  `${name} earns ₹${salary.toLocaleString("en-IN")}`;

console.log(calculateAverageSalary([50000, 60000, 70000]));
console.log(formatEmployee("Priya", 48000));
