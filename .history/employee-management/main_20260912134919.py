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
def search_employee():

    employee_id = int(input("Enter employee ID: "))

    for employee in employees:

        if employee["id"] == employee_id:
            print(employee)
            return

    print("Employee not found.")
    
# delete employee
def delete_employee():

    employee_id = int(input("Enter employee ID: "))

    for employee in employees:

        if employee["id"] == employee_id:

            employees.remove(employee)

            print("Employee deleted successfully!")
            return

    print("Employee not found.")
    
# update employee
def update_employee():

    employee_id = int(input("Enter employee ID: "))

    for employee in employees:

        if employee["id"] == employee_id:

            employee["name"] = input("Enter new name: ")
            employee["age"] = int(input("Enter new age: "))
            employee["department"] = input("Enter new department: ")
            employee["salary"] = float(input("Enter new salary: "))

            print("Employee updated successfully!")
            return

    print("Employee not found.")
    
#highest salary

def highest_salary():

    if not employees:
        print("No employees available.")
        return

    employee = max(employees, key=lambda x: x["salary"])

    print("Highest Salary Employee:")
    print(employee)
    
#Avdef average_salary():

    if not employees:
        print("No employees available.")
        return

    total = sum(employee["salary"] for employee in employees)

    average = total / len(employees)

    print("Average Salary:", average)
    
#Department Filter
def department_filter():

    department = input("Enter department: ")

    found = False

    for employee in employees:

        if employee["department"].lower() == department.lower():

            print(employee)
            found = True

    if not found:
        print("No employees found in this department.")
        
    