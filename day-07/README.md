# Day 07 — Next.js + Node.js

This project follows the Day 7 requirements from the 10-Day Intern Technical Training & Domain Assessment Program.

## Objective
Build a modern React/Next.js frontend and a Node.js/Express REST API.

## Features
- Next.js App Router
- `/employees`
- `/employees/[id]`
- `/employees/create`
- Node.js + Express API
- GET, POST, PUT and DELETE employee endpoints
- Validation and error handling
- Logical backend structure: routes, controllers, services, models, middleware and utils

## Project Structure
- `nextjs-app/` — Next.js frontend
- `node-api/` — Express backend

## Run the backend
```bash
cd node-api
npm install
npm run dev
```
Backend runs on `http://localhost:5000`.

## Run the frontend
Open a second terminal:
```bash
cd nextjs-app
npm install
npm run dev
```
Frontend runs on `http://localhost:3000`.

## API
- GET `/api/employees`
- GET `/api/employees/:id`
- POST `/api/employees`
- PUT `/api/employees/:id`
- DELETE `/api/employees/:id`

## Notes
This is a development/demo implementation using an in-memory data store, so data resets when the backend restarts.
