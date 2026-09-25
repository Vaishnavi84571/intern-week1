import type { Employee } from "../types/employee";

export async function fetchEmployees(): Promise<Employee[]> {
  const response = await fetch("/employees.json");
  if (!response.ok) throw new Error("Unable to load employee data");
  return response.json() as Promise<Employee[]>;
}
