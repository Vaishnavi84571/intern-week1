type EmployeeValue = string | { id: number; name: string };

function isEmployee(value: EmployeeValue): value is { id: number; name: string } {
  return typeof value === "object" && value !== null && "id" in value && "name" in value;
}

function printValue(value: EmployeeValue) {
  if (isEmployee(value)) {
    console.log(`Employee #${value.id}: ${value.name}`);
  } else {
    console.log(`Text: ${value.toUpperCase()}`);
  }
}

printValue({ id: 1, name: "Aarav" });
printValue("TypeScript type guard");
