<?php

namespace App\Services;

use App\Models\CategoryItem;
use Illuminate\Support\Str;

class CategoryService
{
    public function findCategory(string $query): ?array
    {
        $item = CategoryItem::where('name', Str::lower($query))->first();

        if (!$item) {
            return null;
        }

        return [
            'item' => $item->name,
            'category' => $item->category,
        ];
    }
}