employees = []
{
    "id": 1,
    "name": "Rahul",
    "age": 22,
    "department": "IT",
    "salary": 50000
}

# add employee

def add_employee():

    employee_id = int(input("Enter employee ID: "))
    name = input("Enter employee name: ")
    age = int(input("Enter age: "))
    department = input("Enter department: ")
    salary = float(input("Enter salary: "))

    employee = {
        "id": employee_id,
        "name": name,
        "age": age,
        "department": department,
        "salary": salary
    }

    employees.append(employee)

    print("Employee added successfully!")
    
 # list employees
    
def list_employees():

    if not employees:
        print("No employees found.")
        return

    for employee in employees:

        print(
            f"ID: {employee['id']}, "
            f"Name: {employee['name']}, "
            f"Age: {employee['age']}, "
            f"Department: {employee['department']}, "
            f"Salary: {employee['salary']}"
        )
#Search Employee
