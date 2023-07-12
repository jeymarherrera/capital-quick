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
    

}
