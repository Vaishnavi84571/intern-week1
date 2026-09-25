# Day 09 API Integration

The Angular application consumes the Day 08 Laravel REST API.

## Base URL

Development proxy:

```text
/api
```

Target:

```text
http://127.0.0.1:8000
```

## Facilities

```text
GET    /api/facilities
GET    /api/facilities/{id}
POST   /api/facilities
PUT    /api/facilities/{id}
DELETE /api/facilities/{id}
```

## Inspections

```text
GET    /api/inspections
GET    /api/inspections/{id}
POST   /api/inspections
PUT    /api/inspections/{id}
DELETE /api/inspections/{id}
```

## Complaints

```text
GET    /api/complaints
GET    /api/complaints/{id}
POST   /api/complaints
PUT    /api/complaints/{id}
DELETE /api/complaints/{id}
```

## Inspection Payload Example

```json
{
  "facility_id": 1,
  "inspector_id": 2,
  "inspection_date": "2026-09-25",
  "score": 90,
  "notes": "Follow-up inspection completed successfully."
}
```

## Facility Payload Example

```json
{
  "name": "West Facility",
  "location": "Nagpur",
  "cleanliness_score": 88,
  "odor_score": 15,
  "waste_level": 10,
  "water_availability": true,
  "footfall": 500
}
```

## Complaint Payload Example

```json
{
  "facility_id": 1,
  "user_id": 1,
  "complaint_text": "Water supply needs inspection.",
  "status": "Open"
}
```

## Testing

Start the Laravel backend:

```powershell
cd ..\day-08\laravel-api
php artisan serve
```

Then start Angular:

```powershell
cd ..\day-09ngular-app
npm install
npm start
```

Open:

```text
http://localhost:4200
```
