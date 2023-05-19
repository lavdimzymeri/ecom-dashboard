<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register' , [UserController::class , 'register']);
Route::post('login' , [UserController::class , 'login']);

Route::post('add' , [ProductController::class , 'addProduct']);
Route::get('list' , [ProductController::class , 'list']);
Route::get('getProduct/{id}' , [ProductController::class , 'getProduct']);
Route::delete('delete/{id}' , [ProductController::class , 'delete']);
Route::put('/update/{id}', [ProductController::class, 'update']);
Route::get('search/{key}' , [ProductController::class, 'search']); 
