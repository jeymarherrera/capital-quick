<?php

namespace App\Http\Controllers;

use App\Models\Compras;
use App\Models\Costos;
use App\Models\Balance;
use App\Models\flujo_caja;
use App\Models\razones;
use App\Models\gastos;


use App\Http\Requests\CreateBalanceRequest;
use App\Http\Requests\CreateTotalRequest;
use App\Http\Requests\CreatefinanzaRequest;
use App\Http\Requests\CreateGastoRequest;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ComprasController extends Controller
{


    public function GetAllCompras($eid)
    {
        return Compras::orderByDesc('id')
            ->join('productos', 'compras.id_producto', '=', 'productos.id')
            ->select('compras.*', 'productos.descripcion as nombre')
            ->where('compras.id_balance', $eid)
            ->get();
    }


    public function GetAllCostos($eid)
    {
        return Costos::orderBy('id', 'asc')->where('id_balance', $eid)->get();
    }


    public function GetCostosOperativos()
    {
        return Costos::whereBetween('id', [1, 7])->sum('costo');
    }
    //balance

    public function GetAllbalance()
    {


        return Balance::orderBy('id', 'asc')->get();
    }

    public function GetAllbalanceid($eid)
    {
        return Balance::where('id', $eid)->orderBy('id', 'asc')->get();
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

    public function GetAllCaja($eid)
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
            ->where('p.id_balance', '=', $eid)
            ->first();

        return response()->json($proyecto);
    }


    public function TotalesMensuales($eid)
    {
        $totalesAbono = [];
        $totalesCancelacion = [];
        $totalesMeses = [];

        for ($mes = 1; $mes <= 12; $mes++) {

            $totalMes = DB::table('ventas_anuales')
                ->whereYear('fecha_cancelacion', 2022)
                ->whereMonth('fecha_cancelacion', $mes)
                ->select(DB::raw('SUM(cancelacion) AS total_mes'))
                ->where('id_balance', '=', $eid)
                ->first();

            $totalMes2 = DB::table('ventas_anuales')
                ->whereYear('fecha', 2022)
                ->whereMonth('fecha', $mes)
                ->select(DB::raw('SUM(abono) AS total_abono'))
                ->where('id_balance', '=', $eid)
                ->first();

            $totalesAbono[$mes] = number_format($totalMes2->total_abono, 2);
            $totalesCancelacion[$mes] = number_format($totalMes->total_mes, 2);
            $totalesMeses[$mes] = number_format($totalMes2->total_abono + $totalMes->total_mes, 2);
        }

        return response()->json($totalesMeses);
    }


    public function TotalesCompras($eid)
    {
        $totalesAbono = [];
        $totalesCancelacion = [];
        $totalesMeses = [];

        for ($mes = 1; $mes <= 12; $mes++) {

            $totalMes = DB::table('compras')
                ->whereYear('fecha_cancelacion', 2022)
                ->whereMonth('fecha_cancelacion', $mes)
                ->select(DB::raw('SUM(cancelacion) AS total_mes'))
                ->where('id_balance', '=', $eid)
                ->first();

            $totalMes2 = DB::table('compras')
                ->whereYear('fecha', 2022)
                ->whereMonth('fecha', $mes)
                ->select(DB::raw('SUM(abono) AS total_abono'))
                ->where('id_balance', '=', $eid)
                ->first();

            $totalesAbono[$mes] = number_format($totalMes2->total_abono, 2);
            $totalesCancelacion[$mes] = number_format($totalMes->total_mes, 2);
            $totalesMeses[$mes] = number_format($totalMes2->total_abono + $totalMes->total_mes, 2);
        }

        return response()->json($totalesMeses);
    }

    public function TotalesGastos($eid)
    {
        $Gastomensual = [];
        for ($mes = 1; $mes <= 12; $mes++) {

            $totalGastos = DB::table('costos_operativos')
                ->select(DB::raw('ROUND(COALESCE(SUM(costo), 0), 2) AS total'))
                ->where('id_balance', '=', $eid)
                ->first();

            $Gastomensual[$mes] = number_format($totalGastos->total, 2);
        }
        return response()->json($Gastomensual);
    }


    public function GetAllRazones()
    {
        return razones::orderByDesc('id')
            ->select('Razones_Financieras.*')
            ->get();
    }

    public function GetProformaAB()
    {
        return DB::table('proforma_AB')
        ->orderBy('id', 'asc')
        ->get();
    }

    public function GetProformaPB()
    {
        return DB::table('proforma_PB')
        ->orderBy('id', 'asc')
            ->get();
    }
    public function GetProformaCB()
    {
        return DB::table('proforma_CB')
        ->orderBy('id', 'asc')
            ->get();
    }
    public function GetProformaAPE()
    {
        return DB::table('proforma_APE')
        ->orderBy('id', 'asc')
            ->get();
    }

    public function GuardarFinanza(CreatefinanzaRequest $request)
    {
        $razon = $request->nombre;
        $valor = $request->valor;
        $year = $request->year;

        $finanza = razones::where('razon', $razon)->first();

        if ($finanza) {
            $finanza->$year = $valor;
            $finanza->save();
        }

        if ($finanza) {

            return response()->json(["title" => "Razon Financiera 😁", "mensaje" => "¡Se ha Actualizado !  ✅📆 "], 200);
        }
        return response()->json(["title" => "Aviso ❌", "mensaje" => "Lo siento, ha ocurrido un error. Por favor, verifique los campos e inténtelo de nuevo. ❌📝"], 400);
    }


    public function GuardarGasto(CreateGastoRequest $request)
    {


        $finanza = gastos::create([
            'id_balance' => $request->id_balance,
            'descripcion' => $request->nombre,
            'costo' => $request->total,

        ]);


        if ($finanza) {

            return response()->json(["title" => "Costo Operativo 😁", "mensaje" => "¡Se ha creado nuevo costo !  ✅📆 "], 200);
        }
        return response()->json(["title" => "Aviso ❌", "mensaje" => "Lo siento, ha ocurrido un error. Por favor, verifique los campos e inténtelo de nuevo. ❌📝"], 400);
    }

    public function GuardarTotalflujo(CreateTotalRequest $request)
    {
        flujo_caja::where('id_balance', 1)
            ->update(['total_F' => $request->totalAnual]);
    }
}
