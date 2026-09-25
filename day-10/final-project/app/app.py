from flask import Flask, request, jsonify, render_template
import pandas as pd
import joblib
from pathlib import Path

app = Flask(__name__)

model_path = Path("models/saved_models/hygiene_risk_model.pkl")
model = joblib.load(model_path)

risk_mapping = {
    0: "Low",
    1: "Medium",
    2: "High"
}


@app.route("/", methods=["GET"])
def home():
    return render_template("index.html")


@app.route("/api/status", methods=["GET"])
def api_status():
    return jsonify({
        "message": "Smart Hygiene Risk Prediction API",
        "status": "running"
    })


@app.route("/predict", methods=["POST"])
def predict():

    data = request.get_json()

    if not data:
        return jsonify({
            "error": "No JSON data received"
        }), 400

    required_features = [
        "cleanliness_score",
        "odor_score",
        "waste_level",
        "water_availability",
        "footfall",
        "complaints",
        "hours_since_cleaning",
        "inspection_year",
        "inspection_month",
        "inspection_day",
        "location_Semi-Urban",
        "location_Urban"
    ]

    missing_features = [
        feature
        for feature in required_features
        if feature not in data
    ]

    if missing_features:
        return jsonify({
            "error": "Missing required features",
            "missing_features": missing_features
        }), 400

    input_data = pd.DataFrame([data])

    input_data = input_data.reindex(
        columns=model.feature_names_in_,
        fill_value=0
    )

    prediction = model.predict(input_data)[0]

    return jsonify({
        "predicted_risk": risk_mapping[int(prediction)]
    })


if __name__ == "__main__":
    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True
    )