<?php

namespace App\Http\Controllers;

use App\Models\Ventas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class VentasController extends Controller
{
    public function GetAllVentas($eid)
    {
        return Ventas::orderByDesc('id')
            ->join('productos', 'ventas_anuales.id_producto', '=', 'productos.id')
            ->select('ventas_anuales.*', 'productos.descripcion as nombre')
            ->where('ventas_anuales.id_balance', $eid)
            ->get();
    }
}
