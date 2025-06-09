<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to your application's "home" route.
     *
     * Typically, users are redirected here after authentication.
     *
     * @var string
     */
    public const HOME = '/home';

    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Define your route model bindings, pattern filters, and other route configuration.
     */
    public function boot(): void
    {
        parent::boot();

        // Register API routes
        Route::middleware('api')
            ->prefix('api')
            ->group(base_path('routes/api.php'));

        // Register web routes
        Route::middleware('web')
            ->group(base_path('routes/web.php'));
    }
}
