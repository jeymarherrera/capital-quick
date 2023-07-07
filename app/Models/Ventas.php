<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ventas extends Model
{
    use HasFactory;

    protected $table = 'ventas_anuales';

    protected $fillable = [
        'fecha', 'id_producto', 'cantidad', 'precio', 'monto', 'otorga_credito', 'abono', 'fecha_cancelacion', 'cancelacion'
    ];
}
