<?php

use Illuminate\Http\Response;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\RedirectResponse;

use App\Http\Controllers\AppController;
use App\Http\Controllers\VentasController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InstitutoController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\DireccionController;
use App\Http\Controllers\ProyectoController;
use App\Http\Controllers\DocumentoController;

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

Route::post("/registrar", [RegisterController::class, 'Registro']);

Route::post("/login", [AuthController::class, 'Authenticate'])->name('login');



route::post("/recuperar", [AuthController::class, 'RecuperarCuenta']);
Route::post('/logout', [AuthController::class, 'logout']);
Route::get("/auth/confirm/{email}", [RegisterController::class, 'VerificarCuenta']);


Route::get('/ventas/all', [VentasController::class, 'GetAllEventos']);

Route::get('/{any}', [AppController::class, 'index'])->where('any', '.*');


//Route::get('/', function () {
   // return Redirect::to('/login')->header('Cache-Control', 'no-cache, no-store, must-revalidate');
//});
