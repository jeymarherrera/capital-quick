<?php

namespace App\Http\Controllers;

use App\Models\Compras;
use App\Models\Inventarios;
use App\Models\Ventas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BalanceController extends Controller
{
    public function GetInventarioTotal()
    {
        try {
            $inventario = Inventarios::sum('inventario');

            if (!$inventario) {
                return response()->json(['error' => 'No se pudo obtener el valor del inventario'], 404);
            }
            return response()->json($inventario);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Ocurrió un error al obtener el valor del inventario'], 500);
        }
    }

    public function GetCuentasxCobrarTotal()
    {
        try {
            $ventas = Ventas::sum('cancelacion');
            
            if (!$ventas) {
                return response()->json(['error' => 'No se pudo obtener el valor de cuentas por cobrar'], 404);
            }
            
            return response()->json($ventas);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Ocurrió un error al obtener el valor de cuentas por cobrar'], 500);
        }
    }

    public function GetCuentasxPagarTotal()
    {
        try {
            $ventas = Compras::whereYear('fecha', 2022)->whereYear('fecha_cancelacion', 2023)->sum('cancelacion');
            
            if (!$ventas) {
                return response()->json(['error' => 'No se pudo obtener el valor de cuentas por pagar'], 404);
            }
            
            return response()->json($ventas);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Ocurrió un error al obtener el valor de cuentas por pagar'], 500);
        }
    }

    public function GetCostosProduccion()
    {
        return Inventarios::sum('costo_produccion');

    }


}
