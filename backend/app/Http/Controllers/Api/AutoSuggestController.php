<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\AutoSuggestRequest;
use App\Http\Resources\AutoSuggestResource;
use App\Services\CategoryService;
use Illuminate\Http\JsonResponse;
use App\Models\CategoryItem;

class AutoSuggestController extends Controller
{
    public function __construct(private CategoryService $categoryService)
    {
    }

    public function search(AutoSuggestRequest $request): JsonResponse
    {
        $query = $request->validated()['query'];
        
        $result = $this->categoryService->findCategory($query);

        if (!$result) {
            return response()->json([
                'error' => 'Not Found',
                'message' => 'No category found for "' . $query . '"',
            ], 404);
        }

        return (new AutoSuggestResource($result))
            ->response()
            ->setStatusCode(200);
    }
}