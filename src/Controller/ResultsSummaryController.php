<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ResultsSummaryController extends AbstractController
{
    #[Route('/results-summary', name: 'app_results_summary')]
    public function index(): Response
    {
        return $this->render('results_summary/index.html.twig');
    }
}
