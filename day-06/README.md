# Day 6 — TypeScript + React

## Objective
Learn TypeScript and build a component-based React application.

## Practical Assignment
Convert the Day 5 employee application to TypeScript and build a React Employee Management Dashboard.

The dashboard includes:
- Total employees
- Average salary
- Departments
- Employee list
- Search
- Department filter
- Sort
- Details
- Add employee
- Edit employee
- Delete employee
- Form validation
- API/JSON integration
- Reusable React components

## Structure
```text
day-06/
├── typescript/
├── react-app/
└── README.md
```

## TypeScript Topics
Primitive types, arrays/objects, interfaces, type aliases, union types, enums, optional properties, functions, classes, generics, type narrowing and type guards.

## React Topics
Components, JSX, props, state, events, forms, conditional rendering, lists, component composition, useState, useEffect, custom hooks, API calls and error handling.

## Run TypeScript exercises
Node.js is required. From the day-06 folder:
```powershell
node typescript/01_types.ts
```
For the TypeScript files, use `npx tsx` after installing dependencies if needed:
```powershell
npx tsx typescript/01_types.ts
```

## Run React app
```powershell
cd react-app
npm install
npm run dev
```
Open the URL shown by Vite, normally `http://localhost:5173/`.

## Note
The demo API is implemented with a local JSON file through Vite's public folder. Add/edit/delete operations are client-side for the current browser session and do not permanently rewrite the JSON file.
