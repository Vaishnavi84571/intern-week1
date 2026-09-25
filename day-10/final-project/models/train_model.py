# Day 10 - models/train_model.py
import pandas as pd
from pathlib import Path
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
import joblib

# File paths
input_path = Path("dataset/processed/selected_features.csv")
model_path = Path("models/saved_models/hygiene_risk_model.pkl")

# Load dataset
df = pd.read_csv(input_path)

print("Dataset loaded successfully!")
print("Dataset shape:", df.shape)

# Separate features and target
X = df.drop(columns=["risk_level"])
y = df["risk_level"]

print("\nFeatures used for training:")
for feature in X.columns:
    print("-", feature)

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.20,
    random_state=42,
    stratify=y
)

print("\nTraining samples:", len(X_train))
print("Testing samples:", len(X_test))

# Create Random Forest model
model = RandomForestClassifier(
    n_estimators=100,
    random_state=42,
    class_weight="balanced"
)

# Train model
model.fit(X_train, y_train)

print("\nModel training completed successfully!")

# Make predictions
y_pred = model.predict(X_test)

# Evaluate model
accuracy = accuracy_score(y_test, y_pred)

print("\nModel Accuracy:", round(accuracy, 4))

print("\nClassification Report:")
print(
    classification_report(
        y_test,
        y_pred,
        target_names=["Low", "Medium", "High"]
    )
)

# Save model
joblib.dump(model, model_path)

print("\nModel saved successfully!")
print(f"Saved to: {model_path}")
# TODO: Implement this stage of the Smart Hygiene Risk Prediction System.
