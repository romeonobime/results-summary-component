<?php

namespace App\Twig\Components;

use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;
use App\Repository\CategoryRepository;

#[AsTwigComponent]
class TheResultsSummary
{
    private CategoryRepository $categoryRepository;

    public function __construct(CategoryRepository $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }

    public function getCategories(): array
    {
        return $this->categoryRepository->findAll();  
    }

    public function getResult(): int
    {
        $scores = [];
        $categories = $this->categoryRepository->findAll();
        foreach($categories as $category) {
            array_push($scores, $category->getScore());
        }
        return (int)(array_sum($scores) / count($scores));
    }
}