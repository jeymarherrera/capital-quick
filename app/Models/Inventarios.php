<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventarios extends Model
{
    use HasFactory;

    protected $table = 'inventarios';

    protected $fillable = [
        'id_balance', 'fecha', 'id_producto', 'inventario_inicial', 'compra', 'venta', 'inventario', 'costo_unitario', 'costo_produccion'
    ];
}
