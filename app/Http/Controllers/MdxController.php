<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Inertia\Inertia;

class MdxController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(string $slug)
    {
        $path = resource_path("js/pages/mdx/{$slug}.mdx");

        if (! file_exists($path)) {
            abort(404);
        }

        return Inertia::render('mdx', [
            'slug' => $slug,
            'slugHeadline' => Str::headline($slug),
        ]);
    }
}
