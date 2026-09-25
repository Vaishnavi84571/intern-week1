USE facility_management;

INSERT INTO departments (name) VALUES
('Engineering'), ('HR'), ('Operations');

INSERT INTO users (name, email) VALUES
('Admin User', 'admin@example.com'),
('Inspector One', 'inspector@example.com');

INSERT INTO employees (department_id, name, email, salary) VALUES
(1, 'Aarav Sharma', 'aarav@example.com', 65000),
(2, 'Priya Patil', 'priya@example.com', 52000),
(3, 'Rohan Deshmukh', 'rohan@example.com', 48000);

INSERT INTO facilities
(name, location, cleanliness_score, odor_score, waste_level, water_availability, footfall)
VALUES
('Central Facility', 'Nagpur', 82, 20, 15, TRUE, 1200),
('North Facility', 'Nagpur', 45, 65, 80, TRUE, 850),
('East Facility', 'Nagpur', 70, 30, 40, FALSE, 620);
