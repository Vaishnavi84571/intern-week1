import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from pathlib import Path

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import confusion_matrix


# Paths
input_path = Path("dataset/processed/selected_features.csv")
output_dir = Path("visualizations")

output_dir.mkdir(exist_ok=True)

# Load dataset
df = pd.read_csv(input_path)

X = df.drop(columns=["risk_level"])
y = df["risk_level"]

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.20,
    random_state=42,
    stratify=y
)

# Train model
model = RandomForestClassifier(
    n_estimators=100,
    random_state=42,
    class_weight="balanced"
)

model.fit(X_train, y_train)

y_pred = model.predict(X_test)


# --------------------------------------------------
# 1. Confusion Matrix
# --------------------------------------------------

cm = confusion_matrix(y_test, y_pred)

plt.figure(figsize=(7, 5))

sns.heatmap(
    cm,
    annot=True,
    fmt="d",
    cmap="Blues",
    xticklabels=["Low", "Medium", "High"],
    yticklabels=["Low", "Medium", "High"]
)

plt.title("Hygiene Risk Prediction - Confusion Matrix")
plt.xlabel("Predicted Risk")
plt.ylabel("Actual Risk")
plt.tight_layout()

plt.savefig(
    output_dir / "confusion_matrix.png",
    dpi=300
)

plt.close()


# --------------------------------------------------
# 2. Feature Importance
# --------------------------------------------------

importance = pd.DataFrame({
    "Feature": X.columns,
    "Importance": model.feature_importances_
})

importance = importance.sort_values(
    by="Importance",
    ascending=True
)

plt.figure(figsize=(9, 6))

plt.barh(
    importance["Feature"],
    importance["Importance"]
)

plt.title("Random Forest Feature Importance")
plt.xlabel("Importance")
plt.ylabel("Feature")
plt.tight_layout()

plt.savefig(
    output_dir / "feature_importance.png",
    dpi=300
)

plt.close()


print("Visualization completed successfully!")

print("\nGenerated files:")
print("- visualizations/confusion_matrix.png")
print("- visualizations/feature_importance.png")