<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Compras extends Model
{
    use HasFactory;

    protected $table = 'compras';

    protected $fillable = [
        'fecha', 'id_producto', 'cantidad', 'total', 'costo_unitario', 'abono', 'fecha_cancelacion', 'cancelacion'
    ];
}
