import pandas as pd
from pathlib import Path

# Load raw dataset
input_path = Path("dataset/raw/hygiene_data.csv")
output_path = Path("dataset/processed/hygiene_processed.csv")

df = pd.read_csv(input_path)

print("Original dataset shape:", df.shape)

# Remove duplicate records
df = df.drop_duplicates()

# Convert inspection date to datetime
df["inspection_date"] = pd.to_datetime(df["inspection_date"])

# Extract useful date features
df["inspection_year"] = df["inspection_date"].dt.year
df["inspection_month"] = df["inspection_date"].dt.month
df["inspection_day"] = df["inspection_date"].dt.day

# Convert water availability to numeric values
water_mapping = {
    "Available": 2,
    "Limited": 1,
    "Unavailable": 0
}

df["water_availability"] = df["water_availability"].map(water_mapping)

# Encode target variable
risk_mapping = {
    "Low": 0,
    "Medium": 1,
    "High": 2
}

df["risk_level"] = df["risk_level"].map(risk_mapping)

# Remove identifier and original date
df = df.drop(columns=["facility_id", "inspection_date"])

# Check missing values
print("\nMissing values:")
print(df.isnull().sum())

# Save processed dataset
df.to_csv(output_path, index=False)

print("\nProcessed dataset saved successfully!")
print("Final dataset shape:", df.shape)
print(f"Saved to: {output_path}")

print("\nProcessed columns:")
print(df.columns.tolist())

print("\nFirst 5 processed records:")
print(df.head())# Day 10 - preprocessing/clean_data.py
# TODO: Implement this stage of the Smart Hygiene Risk Prediction System.
