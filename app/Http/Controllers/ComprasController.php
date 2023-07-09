<?php

namespace App\Http\Controllers;

use App\Models\Compras;
use App\Models\Costos;
use App\Models\Balance;
use App\Models\flujo_caja;

use App\Http\Requests\CreateBalanceRequest;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ComprasController extends Controller
{


    public function GetAllCompras()
    {
        return Compras::orderByDesc('id')
            ->join('productos', 'compras.id_producto', '=', 'productos.id')
            ->select('compras.*', 'productos.descripcion as nombre')
            ->where('compras.id_balance', 1)
            ->get();
    }


    public function GetAllCostos()
    {
        return Costos::orderBy('id', 'asc')->where('id_balance', 1)->get();
    }

    //balance

    public function GetAllbalance()
    {
        return Balance::orderBy('id', 'asc')->get();
    }

    public function Guardarflujo(CreateBalanceRequest $request)
    {


        $opcionesSeleccionadasA = $request->input('CajaA');
        $opcionesSeleccionadasB = $request->input('CajaP');

        $flujo = flujo_caja::create([
            'id_balance' => $request->id_balance,
            'titulo_flujo' => $request->titulo_flujo,
            'flujo_A' => $request->flujo_A,
            'total_Entrada' => $request->total_Entrada,
            'flujo_P' => $request->flujo_P,
            'total_Salida' => $request->totalSalidas,
            'cuenta_a1' => isset($opcionesSeleccionadasA[0]) ? $opcionesSeleccionadasA[0] : null,
            'cuenta_a2' => isset($opcionesSeleccionadasA[1]) ? $opcionesSeleccionadasA[1] : null,
            'cuenta_a3' => isset($opcionesSeleccionadasA[2]) ? $opcionesSeleccionadasA[2] : null,
            'cuenta_p1' => isset($opcionesSeleccionadasB[0]) ? $opcionesSeleccionadasB[0] : null,
            'cuenta_p2' => isset($opcionesSeleccionadasB[1]) ? $opcionesSeleccionadasB[1] : null,
            'cuenta_p3' => isset($opcionesSeleccionadasB[2]) ? $opcionesSeleccionadasB[2] : null,
        ]);

        if ($flujo) {

            $balanceAnual = Balance::find($request->id_balance);
            if ($balanceAnual) {
                $balanceAnual->update(['flujo_bala' => $request->flujo_bala]);
            }

            return response()->json(["title" => "Flujo de caja Anual", "mensaje" => "¡Se ha creado satisfactoriamente el Flujo de caja!  ✅📆 "], 200);
        }
        return response()->json(["title" => "Aviso ❌", "mensaje" => "Lo siento, ha ocurrido un error. Por favor, verifique los campos e inténtelo de nuevo. ❌📝"], 400);
    }


    //caja

    public function GetAllCaja()
    {
        $proyecto = DB::table('Flujo_Caja as p')
            ->select(
                'p.id',
                'p.id_balance',
                'p.titulo_flujo',
                'p.flujo_A',
                'p.cuenta_a1',
                'p.cuenta_a2',
                'p.cuenta_a3',
                'p.total_Entrada',
                'p.flujo_P',
                'p.cuenta_p1',
                'p.cuenta_p2',
                'p.cuenta_p3',
                'p.total_Salida',
            )
            ->where('p.id_balance', '=', 1)
            ->first();

        return response()->json($proyecto);
    }


    public function TotalesMensuales()
    {
        $totalesAbono = [];
        $totalesCancelacion = [];
        $totalesMeses = [];

        for ($mes = 1; $mes <= 12; $mes++) {

            $totalMes = DB::table('ventas_anuales')
                ->whereYear('fecha_cancelacion', 2022)
                ->whereMonth('fecha_cancelacion', $mes)
                ->select(DB::raw('SUM(cancelacion) AS total_mes'))
                ->first();

            $totalMes2 = DB::table('ventas_anuales')
                ->whereYear('fecha', 2022)
                ->whereMonth('fecha', $mes)
                ->select(DB::raw('SUM(abono) AS total_abono'))
                ->first();

            $totalesAbono[$mes] = number_format($totalMes2->total_abono, 2);
            $totalesCancelacion[$mes] = number_format($totalMes->total_mes, 2);
            $totalesMeses[$mes] = number_format($totalMes2->total_abono + $totalMes->total_mes, 2);
        }

        return response()->json($totalesMeses);
    }


    public function TotalesCompras()
    {
        $totalesAbono = [];
        $totalesCancelacion = [];
        $totalesMeses = [];

        for ($mes = 1; $mes <= 12; $mes++) {

            $totalMes = DB::table('compras')
                ->whereYear('fecha_cancelacion', 2022)
                ->whereMonth('fecha_cancelacion', $mes)
                ->select(DB::raw('SUM(cancelacion) AS total_mes'))
                ->first();

            $totalMes2 = DB::table('compras')
                ->whereYear('fecha', 2022)
                ->whereMonth('fecha', $mes)
                ->select(DB::raw('SUM(abono) AS total_abono'))
                ->first();

            $totalesAbono[$mes] = number_format($totalMes2->total_abono, 2);
            $totalesCancelacion[$mes] = number_format($totalMes->total_mes, 2);
            $totalesMeses[$mes] = number_format($totalMes2->total_abono + $totalMes->total_mes, 2);
        }

        return response()->json($totalesMeses);
    }

    public function TotalesGastos()
    {
        $totalCostos = DB::table('costos_operativos')
            ->select(DB::raw('ROUND(COALESCE(SUM(costo), 0), 2) AS total'))
            ->first();
        return response()->json($totalCostos);
    }
}
