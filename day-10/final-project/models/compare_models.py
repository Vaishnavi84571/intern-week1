# Day 10 - models/compare_models.py
import pandas as pd
from pathlib import Path

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report


# Load processed dataset
input_path = Path("dataset/processed/selected_features.csv")

df = pd.read_csv(input_path)

print("Dataset loaded successfully!")
print("Dataset shape:", df.shape)

# Separate features and target
X = df.drop(columns=["risk_level"])
y = df["risk_level"]

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.20,
    random_state=42,
    stratify=y
)

# Define models
models = {
    "Random Forest": RandomForestClassifier(
        n_estimators=100,
        random_state=42,
        class_weight="balanced"
    ),
    "Logistic Regression": LogisticRegression(
        max_iter=1000,
        random_state=42,
        class_weight="balanced"
    )
}

results = []

# Train and compare models
for name, model in models.items():

    print(f"\n{'=' * 50}")
    print(f"Training: {name}")
    print(f"{'=' * 50}")

    model.fit(X_train, y_train)

    y_pred = model.predict(X_test)

    accuracy = accuracy_score(y_test, y_pred)

    print("Accuracy:", round(accuracy, 4))

    print("\nClassification Report:")
    print(
        classification_report(
            y_test,
            y_pred,
            target_names=["Low", "Medium", "High"]
        )
    )

    results.append({
        "Model": name,
        "Accuracy": accuracy
    })

# Display comparison
results_df = pd.DataFrame(results)

print("\n" + "=" * 50)
print("MODEL COMPARISON")
print("=" * 50)

print(results_df.to_string(index=False))

# Save comparison results
output_path = Path("evaluation/model_comparison.csv")
results_df.to_csv(output_path, index=False)

print(f"\nComparison results saved to: {output_path}")
# TODO: Implement this stage of the Smart Hygiene Risk Prediction System.
