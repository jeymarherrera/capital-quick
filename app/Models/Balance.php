<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Balance extends Model
{
    use HasFactory;

    protected $table = 'Balance_Anual';

    protected $fillable = [
        'Nombre_empresa', 'titulo_balance', 'fecha_inicio', 'fecha_cierre', 'flujo_bala'
    ];
}
