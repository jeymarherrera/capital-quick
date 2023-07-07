<?php

namespace App\Http\Controllers;

use App\Models\Ventas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class VentasController extends Controller
{
    public function GetAllEventos()
    {
        return Ventas::orderByDesc('id')->get();
    }
}
