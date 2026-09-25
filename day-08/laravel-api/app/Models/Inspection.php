<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Inspection extends Model
{
    protected $fillable = [
        'facility_id',
        'inspector_id',
        'inspection_date',
        'score',
        'notes',
    ];

    protected $casts = [
        'inspection_date' => 'date',
        'score' => 'float',
    ];

    public function facility(): BelongsTo
    {
        return $this->belongsTo(Facility::class);
    }
}
