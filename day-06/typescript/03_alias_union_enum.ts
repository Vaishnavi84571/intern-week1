type ID = number | string;
type Status = "active" | "inactive";

enum Department {
  IT = "IT",
  HR = "HR",
  Finance = "Finance"
}

const employeeId: ID = "EMP001";
const employeeStatus: Status = "active";
const department: Department = Department.IT;

console.log(employeeId, status, department);
