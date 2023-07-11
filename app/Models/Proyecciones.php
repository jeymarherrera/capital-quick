<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proyecciones extends Model
{
    use HasFactory;

    protected $table = 'proyeccion_financiera';

    protected $fillable = [
        'cantidadTiempo', 'capitalMensual', 'interesMensual', 'totalPagar', 'totalPagarMensual', 'anexar'
    ];
}
