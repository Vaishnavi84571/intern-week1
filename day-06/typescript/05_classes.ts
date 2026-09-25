class EmployeeRecord {
  constructor(
    public name: string,
    private salary: number
  ) {}

  getSalary(): number {
    return this.salary;
  }

  describe(): string {
    return `${this.name}: ₹${this.salary}`;
  }
}

const employee = new EmployeeRecord("Rahul", 58000);
console.log(employee.describe());
console.log(employee.getSalary());
