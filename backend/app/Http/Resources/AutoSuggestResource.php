<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AutoSuggestResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'item' => $this['item'],
            'category' => $this['category'],
            'message' => ucfirst($this['item']) . ' is a ' . $this['category'],
        ];
    }

    public function with($request)
    {
        return [
            'meta' => [
                'version' => '1.0',
                'api_version' => 'v1',
            ],
        ];
    }
}