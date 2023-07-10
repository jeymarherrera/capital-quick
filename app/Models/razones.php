<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class razones extends Model
{
    use HasFactory;

    protected $table = 'Razones_Financieras';

    protected $fillable = [
        'id',
        'id_balance',
        'razon',
        'year_1',
        'year_1',
        'year_3',
        'year_4',

    ];
}
