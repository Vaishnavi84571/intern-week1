# Smart Hygiene Risk Prediction System

## Project Overview
An AI/ML project for predicting hygiene risk for facilities using hygiene, usage, complaint, and cleaning-related features.

## Problem Statement
The system predicts facility hygiene risk from structured hygiene-related data and supports analysis, model evaluation, prediction, and visualization.

## AI/ML Workflow
Dataset → Data Cleaning → EDA → Feature Engineering → Feature Selection → Train/Test Split → Model Training → Model Evaluation → Prediction → Visualization

## Example Features
- cleanliness_score
- odor_score
- waste_level
- complaints
- footfall
- hours_since_cleaning

## Project Structure
- `dataset/` – raw and processed data
- `preprocessing/` – cleaning and feature engineering
- `eda/` – exploratory data analysis
- `feature_selection/` – feature selection
- `models/` – model training and saved models
- `evaluation/` – evaluation metrics
- `predictions/` – prediction scripts
- `visualizations/` – generated charts
- `app/` – optional Flask API
- `requirements.txt` – Python dependencies

## Technology Stack
Python, Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, Joblib, Flask.

## Status
Starter structure for the Day 10 implementation.
