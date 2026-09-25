<?php

namespace App\Http\Controllers;

use App\Models\Facility;
use Illuminate\Http\Request;

class FacilityController extends Controller
{
    public function index()
    {
        return Facility::with(['inspections', 'complaints'])->latest()->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:150',
            'location' => 'required|string|max:200',
            'cleanliness_score' => 'nullable|numeric|min:0|max:100',
            'odor_score' => 'nullable|numeric|min:0|max:100',
            'waste_level' => 'nullable|numeric|min:0|max:100',
            'water_availability' => 'required|boolean',
            'footfall' => 'required|integer|min:0',
        ]);

        return response()->json(Facility::create($validated), 201);
    }

    public function show(Facility $facility)
    {
        return $facility->load(['inspections', 'complaints']);
    }

    public function update(Request $request, Facility $facility)
    {
        $validated = $request->validate([
            'name' => 'sometimes|required|string|max:150',
            'location' => 'sometimes|required|string|max:200',
            'cleanliness_score' => 'nullable|numeric|min:0|max:100',
            'odor_score' => 'nullable|numeric|min:0|max:100',
            'waste_level' => 'nullable|numeric|min:0|max:100',
            'water_availability' => 'sometimes|boolean',
            'footfall' => 'sometimes|integer|min:0',
        ]);

        $facility->update($validated);
        return $facility->fresh();
    }

    public function destroy(Facility $facility)
    {
        $facility->delete();
        return response()->json(['message' => 'Facility deleted successfully']);
    }
}
