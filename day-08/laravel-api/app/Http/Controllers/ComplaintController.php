<?php

namespace App\Http\Controllers;

use App\Models\Complaint;
use Illuminate\Http\Request;

class ComplaintController extends Controller
{
    public function index()
    {
        return Complaint::with('facility')->latest()->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'facility_id' => 'required|exists:facilities,id',
            'user_id' => 'nullable|exists:users,id',
            'complaint_text' => 'required|string',
            'status' => 'required|in:Open,In Progress,Resolved',
        ]);

        return response()->json(Complaint::create($validated), 201);
    }

    public function show(Complaint $complaint)
    {
        return $complaint->load('facility');
    }

    public function update(Request $request, Complaint $complaint)
    {
        $validated = $request->validate([
            'facility_id' => 'sometimes|exists:facilities,id',
            'user_id' => 'nullable|exists:users,id',
            'complaint_text' => 'sometimes|required|string',
            'status' => 'sometimes|in:Open,In Progress,Resolved',
        ]);

        $complaint->update($validated);
        return $complaint->fresh()->load('facility');
    }

    public function destroy(Complaint $complaint)
    {
        $complaint->delete();
        return response()->json(['message' => 'Complaint deleted successfully']);
    }
}
