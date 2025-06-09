<?php

use App\Http\Controllers\Api\AutoSuggestController;
use Illuminate\Support\Facades\Route;

Route::get('/autosuggest', [AutoSuggestController::class, 'search'])
    ->name('api.autosuggest');