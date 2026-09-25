# Day 09 — Angular + TypeScript + API Integration

This folder implements the Day 09 training assignment:

- Angular application with a facility dashboard
- TypeScript interfaces/models
- Facility list, search, filter, sort, and details
- Inspection form and inspection history
- Complaints view
- REST API integration with the Day 08 Laravel API
- Reusable components, pages, services, and models
- Error handling and loading states

## Folder Structure

```text
day-09/
├── angular-app/
└── api-integration/
```

## Requirements

- Angular 21.2.x
- Node.js 20.19+ (or Node.js 22.12+ / 24+)
- npm
- Day 08 Laravel API running at `http://127.0.0.1:8000`

## Run the Angular app

```powershell
cd angular-app
npm install
npm start
```

The app opens at:

```text
http://localhost:4200
```

The Angular development proxy forwards `/api/*` requests to:

```text
http://127.0.0.1:8000/api/*
```

## Run the Day 08 Laravel API

In a separate terminal:

```powershell
cd ..\day-08\laravel-api
php artisan serve
```

Then keep that terminal running.

## Main Features

### Dashboard
- Total facilities
- Total inspections
- Total complaints
- Resolved complaints

### Facilities
- List facilities
- Search by name/location
- Filter by location
- Sort by name, cleanliness score, waste level, or footfall
- View facility details
- View related inspections and complaints

### Inspections
- Add an inspection
- Select facility
- Enter inspector ID
- Enter inspection date
- Enter score and notes
- View inspection history

### Complaints
- View complaints
- View complaint status and facility
- Refresh data from the Laravel API

## API Base URL

The Angular code uses relative `/api` URLs so that the development proxy handles local API requests.

See `api-integration/README.md` for the endpoint map and sample payloads.

## Notes

Do not commit `.env` files or `node_modules/`. The API password belongs only in the Day 08 Laravel `.env` file and must not be uploaded to GitHub.
