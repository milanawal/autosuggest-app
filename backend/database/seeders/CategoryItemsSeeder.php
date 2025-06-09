<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoryItemsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $items = [
            ['name' => 'apple', 'category' => 'fruit'],
            ['name' => 'banana', 'category' => 'fruit'],
            ['name' => 'carrot', 'category' => 'vegetable'],
            ['name' => 'beef', 'category' => 'meat'],
            // Add more items
        ];
    
        foreach ($items as $item) {
            \App\Models\CategoryItem::updateOrCreate(
                ['name' => $item['name']],
                $item
            );
        }
    }
}
