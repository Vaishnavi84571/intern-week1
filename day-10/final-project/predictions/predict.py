# Day 10 - predictions/predict.py
import pandas as pd
import joblib
from pathlib import Path

# Load trained model
model_path = Path("models/saved_models/hygiene_risk_model.pkl")
model = joblib.load(model_path)

print("=" * 50)
print("SMART HYGIENE RISK PREDICTION SYSTEM")
print("=" * 50)

# Example new facility data
new_facility = pd.DataFrame([{
    "cleanliness_score": 4,
    "odor_score": 7,
    "waste_level": 8,
    "water_availability": 1,
    "footfall": 750,
    "complaints": 6,
    "hours_since_cleaning": 30,
    "inspection_year": 2026,
    "inspection_month": 9,
    "inspection_day": 15,
    "location_Semi-Urban": 0,
    "location_Urban": 1
}])

# Ensure columns match training data
training_columns = model.feature_names_in_
new_facility = new_facility.reindex(
    columns=training_columns,
    fill_value=0
)

# Predict
prediction = model.predict(new_facility)[0]

# Convert numeric prediction to risk level
risk_mapping = {
    0: "Low",
    1: "Medium",
    2: "High"
}

risk_level = risk_mapping[prediction]

print("\nNew Facility Details:")
print(new_facility)

print("\nPredicted Hygiene Risk:", risk_level)

print("\nPrediction completed successfully!")
# TODO: Implement this stage of the Smart Hygiene Risk Prediction System.
