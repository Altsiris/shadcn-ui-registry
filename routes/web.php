<?php

use App\Http\Controllers\MdxController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('{slug}', MdxController::class)->where('slug', '[A-Za-z0-9-_]+')->name('mdx');
