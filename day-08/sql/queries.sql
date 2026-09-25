USE facility_management;

-- Employees by department
SELECT d.name AS department, e.name AS employee, e.salary
FROM employees e
JOIN departments d ON e.department_id = d.id
ORDER BY d.name, e.name;

-- Average salary
SELECT AVG(salary) AS average_salary
FROM employees;

-- Highest-paid employee
SELECT *
FROM employees
WHERE salary = (SELECT MAX(salary) FROM employees);

-- Poor facilities
SELECT *
FROM facilities
WHERE cleanliness_score < 50
   OR odor_score > 70
   OR waste_level > 70;

-- Complaint counts by facility
SELECT f.name, COUNT(c.id) AS complaint_count
FROM facilities f
LEFT JOIN complaints c ON c.facility_id = f.id
GROUP BY f.id, f.name
ORDER BY complaint_count DESC;

-- Inspection history
SELECT f.name, i.inspection_date, i.score, i.notes
FROM inspections i
JOIN facilities f ON i.facility_id = f.id
ORDER BY i.inspection_date DESC;

-- Facilities with more than 2 complaints
SELECT f.name, COUNT(c.id) AS complaint_count
FROM facilities f
JOIN complaints c ON c.facility_id = f.id
GROUP BY f.id, f.name
HAVING COUNT(c.id) > 2;

-- Transaction example
START TRANSACTION;
UPDATE facilities SET cleanliness_score = 80 WHERE id = 1;
INSERT INTO inspections (facility_id, inspection_date, score, notes)
VALUES (1, CURRENT_DATE, 80, 'Updated during inspection transaction');
COMMIT;
