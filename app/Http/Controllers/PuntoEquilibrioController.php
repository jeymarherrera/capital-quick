<?php

namespace App\Http\Controllers;

use App\Models\Costos;
use App\Models\Productos;
use Illuminate\Http\Request;

class PuntoEquilibrioController extends Controller
{
    public function calcularPuntoEquilibrio()
    {
        $costosFijos = Costos::sum('costo');
        $productos = Productos::all(['precio_venta', 'costo_unitario']);

        $cantidadEquilibrio = $costosFijos / ($productos->sum('precio_venta') - $productos->sum('costo_unitario'));

        $ingresosEquilibrio = $productos->sum('precio_venta') * $cantidadEquilibrio;

        $cantidadEquilibrio = round($cantidadEquilibrio, 2);
        $ingresosEquilibrio = round($ingresosEquilibrio, 2);


        return [
            'cantidadEquilibrio' => $cantidadEquilibrio,
            'ingresosEquilibrio' => $ingresosEquilibrio,
        ];
    }
}
