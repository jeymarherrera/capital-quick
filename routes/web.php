<?php

use Illuminate\Http\Response;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\RedirectResponse;

use App\Http\Controllers\AppController;
use App\Http\Controllers\VentasController;
use App\Http\Controllers\ComprasController;
use App\Http\Controllers\ProyeccionesController;

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InstitutoController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\DireccionController;
use App\Http\Controllers\ProyectoController;
use App\Http\Controllers\DocumentoController;
use App\Models\Proyecciones;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//Rutas de SEGURIDAD

Route::get('/ventas/{eid}', [VentasController::class, 'GetAllVentas']);

Route::get('/balance/{eid}', [ComprasController::class, 'GetAllbalanceid']);
Route::get('/resultado', [ProyeccionesController::class, 'GetLastProyeccion']);


Route::get('/compras/all/{eid}', [ComprasController::class, 'GetAllCompras']);
Route::get('/costos/all/{eid}', [ComprasController::class, 'GetAllCostos']);


Route::get('/balances', [ComprasController::class, 'GetAllbalance']);



Route::post('/finanzag', [ComprasController::class, 'GuardarFinanza']);
Route::post('/GastoOpe', [ComprasController::class, 'GuardarGasto']);
Route::post('/proyeccion', [ProyeccionesController::class, 'GuardarProyecciones']);


Route::get('/flujocaja/all/{eid}', [ComprasController::class, 'GetAllCaja']);
Route::get('/Valores/mensual/{eid}', [ComprasController::class, 'TotalesMensuales']);
Route::get('/Compra/mensual/{eid}', [ComprasController::class, 'TotalesCompras']);
Route::get('/Gastos/mensual/{eid}', [ComprasController::class, 'TotalesGastos']);
Route::get('/razones/fina', [ComprasController::class, 'GetAllRazones']);


Route::post('/flujo/balance', [ComprasController::class, 'Guardarflujo']);



Route::get('/{any}', [AppController::class, 'index'])->where('any', '.*');


//Route::get('/', function () {
   // return Redirect::to('/login')->header('Cache-Control', 'no-cache, no-store, must-revalidate');
//});
