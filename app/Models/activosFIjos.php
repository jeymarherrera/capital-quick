<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class activosFijos extends Model
{
    use HasFactory;

    protected $table = 'activos_fijos';

    protected $fillable = [
        'nombre', 'valor_inicial', 'depreciacion_anual', 'depreciacion_acumulada', '','valor_neto'
    ];

}
