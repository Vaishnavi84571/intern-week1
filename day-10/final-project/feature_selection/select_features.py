import pandas as pd
from pathlib import Path
from sklearn.feature_selection import SelectKBest, f_classif

# Load processed dataset
input_path = Path("dataset/processed/hygiene_processed.csv")
output_path = Path("dataset/processed/selected_features.csv")

df = pd.read_csv(input_path)

# Separate features and target
X = df.drop(columns=["risk_level"])
y = df["risk_level"]

# Convert categorical location into numerical dummy variables
X = pd.get_dummies(X, columns=["location"], drop_first=True)

# Select the best features
selector = SelectKBest(
    score_func=f_classif,
    k="all"
)

X_selected = selector.fit_transform(X, y)

# Get feature scores
scores = pd.DataFrame({
    "feature": X.columns,
    "score": selector.scores_
})

scores = scores.sort_values(
    by="score",
    ascending=False
)

print("Feature importance scores:")
print(scores)

# Select features with valid scores
selected_features = scores[
    scores["score"].notna()
]["feature"].tolist()

X_final = X[selected_features]

# Add target column
X_final["risk_level"] = y.values

# Save selected dataset
X_final.to_csv(
    output_path,
    index=False
)

print("\nFeature selection completed successfully!")
print(f"Selected features: {len(selected_features)}")
print(f"Saved to: {output_path}")

print("\nSelected features:")
for feature in selected_features:
    print("-", feature)# Day 10 - feature_selection/select_features.py
# TODO: Implement this stage of the Smart Hygiene Risk Prediction System.
