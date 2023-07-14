<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateProyeccionRequest;
use App\Models\Empresa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EmpresasController extends Controller
{
    public function GetEmpresaById($eid)
    {
        try {
            $empresa = Empresa::where('id', $eid)->first();

            if (!$empresa) {
                return response()->json(['error' => 'No se encontró la empresa'], 404);
            }
            return response()->json($empresa);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Ocurrió un error al obtener la empresa'], 500);
        }
    }

    public function GuardarImpuesto(Request $request, $eid)
    {
        $empresa = Empresa::find($eid);
        dd($empresa);
        $empresa->impuesto = $request->impuesto;

        $empresa->save();
        if ($empresa) {
            return response()->json(["title" => "Impuesto Actualizado 😁", "mensaje" => "¡Se ha Guardado !  ✅📆 "], 200);
        }

        return response()->json(["title" => "Aviso ❌", "mensaje" => "Lo siento, ha ocurrido un error. Por favor, verifique los campos e inténtelo de nuevo. ❌📝"], 400);
    }
}
