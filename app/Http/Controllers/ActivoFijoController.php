<?php

namespace App\Http\Controllers;

use App\Models\activosFijos;
use Illuminate\Http\Request;

class ActivoFijoController extends Controller
{
    function obtenerActivos()
    {
        $this->calcularActivosFijos();

        return activosFijos::all();
    }

    function calcularActivosFijos()
    {
        $activos = ActivosFijos::all();

        $activosFijosNetos = [];

        foreach ($activos as $activo) {
            $valorInicial = $activo->valor_inicial;
            $vidaUtil = $activo->vida_util;
            $aniosTranscurridos = $activo->anios_transcurridos;


            $depreciacionAnual = $valorInicial / $vidaUtil;


            $depreciacionAcumulada = $depreciacionAnual * $aniosTranscurridos;

            $activoFijoNeto = $valorInicial - $depreciacionAcumulada;

            $activoFijoNetoItem = [
                'activo' => $activo->nombre,
                'valorInicial' => $valorInicial,
                'depreciacionAcumulada' => $depreciacionAcumulada,
                'activoFijoNeto' => $activoFijoNeto
            ];

            $activosFijosNetos[] = $activoFijoNetoItem;

            $registroExistente = activosFijos::find($activo->id);

            $registroExistente->nombre = $activo->nombre;
            $registroExistente->valor_inicial = $valorInicial;
            $registroExistente->depreciacion_acumulada = $depreciacionAcumulada;
            $registroExistente->valor_neto = $activoFijoNeto;
            $registroExistente->save();
        }
    }
}
