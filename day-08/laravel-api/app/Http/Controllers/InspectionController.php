<?php

namespace App\Http\Controllers;

use App\Models\Inspection;
use Illuminate\Http\Request;

class InspectionController extends Controller
{
    public function index()
    {
        return Inspection::with('facility')->latest('inspection_date')->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'facility_id' => 'required|exists:facilities,id',
            'inspector_id' => 'nullable|exists:users,id',
            'inspection_date' => 'required|date',
            'score' => 'nullable|numeric|min:0|max:100',
            'notes' => 'nullable|string',
        ]);

        return response()->json(Inspection::create($validated), 201);
    }

    public function show(Inspection $inspection)
    {
        return $inspection->load('facility');
    }

    public function update(Request $request, Inspection $inspection)
    {
        $validated = $request->validate([
            'facility_id' => 'sometimes|exists:facilities,id',
            'inspector_id' => 'nullable|exists:users,id',
            'inspection_date' => 'sometimes|date',
            'score' => 'nullable|numeric|min:0|max:100',
            'notes' => 'nullable|string',
        ]);

        $inspection->update($validated);
        return $inspection->fresh()->load('facility');
    }

    public function destroy(Inspection $inspection)
    {
        $inspection->delete();
        return response()->json(['message' => 'Inspection deleted successfully']);
    }
}
