<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Facility extends Model
{
    protected $fillable = [
        'name',
        'location',
        'cleanliness_score',
        'odor_score',
        'waste_level',
        'water_availability',
        'footfall',
    ];

    protected $casts = [
        'water_availability' => 'boolean',
        'cleanliness_score' => 'float',
        'odor_score' => 'float',
        'waste_level' => 'float',
    ];

    public function inspections(): HasMany
    {
        return $this->hasMany(Inspection::class);
    }

    public function complaints(): HasMany
    {
        return $this->hasMany(Complaint::class);
    }
}
