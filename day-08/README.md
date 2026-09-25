# Day 08 — Database + Laravel

This project is prepared from the Day 08 requirements in the internship assessment.

## Objective
Understand relational databases and implement backend APIs using Laravel.

## Included
- SQL schema for users, departments, employees, facilities, inspections and complaints
- Relationships and sample SQL queries
- Laravel CRUD API structure for Facilities, Inspections and Complaints
- Validation-ready controller examples
- API routes
- README with setup instructions

## Day 08 requirements covered
- Tables, rows and columns
- Primary and foreign keys
- Relationships
- CRUD
- SELECT, WHERE, ORDER BY, GROUP BY, HAVING
- JOIN
- Subqueries
- Indexes
- Transactions
- Laravel routes, controllers, models, migrations, Eloquent, validation, middleware and API development

## Recommended setup
1. Install PHP, Composer and MySQL.
2. Create a Laravel project if this folder is being merged into a fresh Laravel installation:
   `composer create-project laravel/laravel laravel-api`
3. Copy the provided `app`, `database/migrations`, and `routes` files into that Laravel project.
4. Create a MySQL database named `facility_management`.
5. Configure `.env`.
6. Run:
   `php artisan migrate`
7. Start:
   `php artisan serve`

The API will be available at `http://127.0.0.1:8000/api`.

## Important
This package contains the Day 08 implementation files and SQL. A full Laravel framework/vendor installation is intentionally not included because those generated dependencies are installed by Composer.
