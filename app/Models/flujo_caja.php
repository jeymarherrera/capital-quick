<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class flujo_caja extends Model
{
    use HasFactory;

    protected $table = 'Flujo_Caja';

    protected $fillable = [
        'id_balance',
        'titulo_flujo',
        'flujo_A',
        'cuenta_a1', 'cuenta_a2', 'cuenta_a3',
        'total_Entrada',
        'flujo_P',
        'cuenta_p1', 'cuenta_p2', 'cuenta_p3',
        'total_Salida', 'total_E', 'total_S', 'total_F', 'control'
    ];
}
