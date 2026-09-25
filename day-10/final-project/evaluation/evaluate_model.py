# Day 10 - evaluation/evaluate_model.py
import pandas as pd
from pathlib import Path

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import (
    accuracy_score,
    classification_report,
    confusion_matrix
)

# Load dataset
input_path = Path("dataset/processed/selected_features.csv")

df = pd.read_csv(input_path)

# Separate features and target
X = df.drop(columns=["risk_level"])
y = df["risk_level"]

# Split dataset
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.20,
    random_state=42,
    stratify=y
)

# Train Random Forest
model = RandomForestClassifier(
    n_estimators=100,
    random_state=42,
    class_weight="balanced"
)

model.fit(X_train, y_train)

# Predictions
y_pred = model.predict(X_test)

# Accuracy
accuracy = accuracy_score(y_test, y_pred)

print("=" * 50)
print("MODEL EVALUATION")
print("=" * 50)

print("\nAccuracy:", round(accuracy, 4))

# Classification report
print("\nClassification Report:")
print(
    classification_report(
        y_test,
        y_pred,
        target_names=["Low", "Medium", "High"]
    )
)

# Confusion matrix
cm = confusion_matrix(y_test, y_pred)

print("\nConfusion Matrix:")
print(cm)

# Save metrics
metrics_path = Path("evaluation/metrics.txt")

with open(metrics_path, "w") as file:
    file.write("SMART HYGIENE RISK PREDICTION SYSTEM\n")
    file.write("=" * 50 + "\n\n")

    file.write(f"Model: Random Forest\n")
    file.write(f"Accuracy: {accuracy:.4f}\n\n")

    file.write("Classification Report:\n")
    file.write(
        classification_report(
            y_test,
            y_pred,
            target_names=["Low", "Medium", "High"]
        )
    )

    file.write("\nConfusion Matrix:\n")
    file.write(str(cm))

print(f"\nEvaluation metrics saved to: {metrics_path}")
# TODO: Implement this stage of the Smart Hygiene Risk Prediction System.
