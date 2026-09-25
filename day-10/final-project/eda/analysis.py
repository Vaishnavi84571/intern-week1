import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from pathlib import Path

# Load processed dataset
input_path = Path("dataset/processed/hygiene_processed.csv")
output_dir = Path("visualizations")

df = pd.read_csv(input_path)

print("Dataset shape:", df.shape)

print("\nDataset information:")
print(df.info())

print("\nStatistical summary:")
print(df.describe())

print("\nRisk distribution:")
print(df["risk_level"].value_counts())

# Create output directory if needed
output_dir.mkdir(exist_ok=True)

# 1. Risk distribution
plt.figure(figsize=(8, 5))

sns.countplot(
    data=df,
    x="risk_level"
)

plt.title("Hygiene Risk Level Distribution")
plt.xlabel("Risk Level")
plt.ylabel("Number of Facilities")
plt.xticks(
    [0, 1, 2],
    ["Low", "Medium", "High"]
)

plt.tight_layout()

plt.savefig(
    output_dir / "risk_distribution.png",
    dpi=300
)

plt.close()

# 2. Correlation heatmap
plt.figure(figsize=(12, 8))

numeric_df = df.select_dtypes(include=["number"])

sns.heatmap(
    numeric_df.corr(),
    annot=True,
    cmap="coolwarm",
    fmt=".2f"
)

plt.title("Feature Correlation Heatmap")

plt.tight_layout()

plt.savefig(
    output_dir / "correlation_heatmap.png",
    dpi=300
)

plt.close()

# 3. Cleanliness vs risk
plt.figure(figsize=(8, 5))

sns.boxplot(
    data=df,
    x="risk_level",
    y="cleanliness_score"
)

plt.title("Cleanliness Score by Risk Level")
plt.xlabel("Risk Level")
plt.ylabel("Cleanliness Score")
plt.xticks(
    [0, 1, 2],
    ["Low", "Medium", "High"]
)

plt.tight_layout()

plt.savefig(
    output_dir / "cleanliness_vs_risk.png",
    dpi=300
)

plt.close()

# 4. Complaints vs risk
plt.figure(figsize=(8, 5))

sns.boxplot(
    data=df,
    x="risk_level",
    y="complaints"
)

plt.title("Complaints by Risk Level")
plt.xlabel("Risk Level")
plt.ylabel("Number of Complaints")
plt.xticks(
    [0, 1, 2],
    ["Low", "Medium", "High"]
)

plt.tight_layout()

plt.savefig(
    output_dir / "complaints_vs_risk.png",
    dpi=300
)

plt.close()

print("\nEDA completed successfully!")

print("\nGenerated visualizations:")

for file in output_dir.glob("*.png"):
    print("-", file)# Day 10 - eda/analysis.py
# TODO: Implement this stage of the Smart Hygiene Risk Prediction System.
