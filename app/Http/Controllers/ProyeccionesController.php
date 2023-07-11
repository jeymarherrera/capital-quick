<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateProyeccionRequest;
use App\Models\Proyecciones;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProyeccionesController extends Controller
{
    public function GetLastProyeccion()
    {
        $ultimoDato = Proyecciones::latest()->first();

        if ($ultimoDato) {
            return response()->json($ultimoDato, 200);
        } else {
            return response()->json(['message' => 'No se encontraron datos en la tabla'], 404);
        }
    }

    public function GuardarProyecciones(CreateProyeccionRequest $request)
    {
        $proyeccion = Proyecciones::create([
            'cantidadTiempo' => $request->cantidadTiempo,
            'capitalMensual' => $request->capitalMensual,
            'interesMensual' => $request->interesMensual,
            'totalPagar' => $request->totalPagar,
            'totalPagarMensual' => $request->totalPagarMensual,
            'anexar' => $request->anexar,
            
        ]);


        if ($proyeccion) {

            return response()->json(["title" => "Proyeccion Financiera 😁", "mensaje" => "¡Se ha Guardado !  ✅📆 "], 200);
        }
        return response()->json(["title" => "Aviso ❌", "mensaje" => "Lo siento, ha ocurrido un error. Por favor, verifique los campos e inténtelo de nuevo. ❌📝"], 400);
    }
}
