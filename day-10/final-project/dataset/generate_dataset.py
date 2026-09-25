import pandas as pd
import numpy as np
from pathlib import Path

# Reproducible dataset
np.random.seed(42)

# Number of records
n = 2000

# Facility IDs
facility_ids = [f"F{i:04d}" for i in range(1, n + 1)]

# Locations
locations = np.random.choice(
    ["Urban", "Semi-Urban", "Rural"],
    size=n,
    p=[0.45, 0.35, 0.20]
)

# Hygiene-related features
cleanliness_score = np.random.randint(1, 11, n)
odor_score = np.random.randint(1, 11, n)
waste_level = np.random.randint(1, 11, n)

# Operational features
water_availability = np.random.choice(
    ["Available", "Limited", "Unavailable"],
    size=n,
    p=[0.70, 0.20, 0.10]
)

footfall = np.random.randint(20, 1001, n)
complaints = np.random.poisson(3, n)
hours_since_cleaning = np.random.randint(1, 49, n)

# Inspection dates
inspection_dates = pd.date_range(
    start="2024-01-01",
    periods=n,
    freq="D"
)

# Calculate a risk score
risk_score = (
    (10 - cleanliness_score) * 0.25
    + odor_score * 0.15
    + waste_level * 0.20
    + complaints * 0.10
    + (footfall / 1000) * 1.0
    + (hours_since_cleaning / 48) * 2.0
)

# Add water availability effect
risk_score += np.where(water_availability == "Limited", 1.0, 0)
risk_score += np.where(water_availability == "Unavailable", 2.0, 0)

# Convert score into risk categories
risk_level = np.where(
    risk_score >= 7,
    "High",
    np.where(
        risk_score >= 4,
        "Medium",
        "Low"
    )
)

# Create DataFrame
df = pd.DataFrame({
    "facility_id": facility_ids,
    "location": locations,
    "cleanliness_score": cleanliness_score,
    "odor_score": odor_score,
    "waste_level": waste_level,
    "water_availability": water_availability,
    "footfall": footfall,
    "complaints": complaints,
    "hours_since_cleaning": hours_since_cleaning,
    "inspection_date": inspection_dates,
    "risk_level": risk_level
})

# Save dataset
output_path = Path("dataset/raw/hygiene_data.csv")
df.to_csv(output_path, index=False)

print("Smart Hygiene dataset created successfully!")
print(f"Records: {len(df)}")
print(f"Saved to: {output_path}")
print("\nRisk distribution:")
print(df["risk_level"].value_counts())
print("\nFirst 5 records:")
print(df.head())