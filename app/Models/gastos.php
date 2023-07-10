<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class gastos extends Model
{
    use HasFactory;

    protected $table = 'costos_operativos';

    protected $fillable = [
        'id_balance',
        'descripcion',
        'costo',

    ];
}
