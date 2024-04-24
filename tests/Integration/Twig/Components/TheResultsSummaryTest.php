<?php

namespace App\Tests\Integration\Twig\Components;

use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\UX\TwigComponent\Test\InteractsWithTwigComponents;

class TheResultsSummaryTest extends KernelTestCase
{
    use InteractsWithTwigComponents;

    public function testComponentRenders(): void
    {
        $rendered = $this->renderTwigComponent(
            name: 'TheResultsSummary',
        );

        $this->assertCount(4, $rendered->crawler()->filter('ul li'));
    }
}
