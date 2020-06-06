<?php

namespace AppBundle\Controller;

use DateTime;
use AppBundle\Entity\Names;
use AppBundle\Service\StaticNames;
use AppBundle\Repository\NamesRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints\Date;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Encoder\JsonDecode;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    /**
     * @Route("/home", name="home")
     */
    public function home(Request $request)
    {

        $names = $this->getDoctrine()->getRepository(Names::class)->findAll();

        return $this->render('default/home.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.project_dir')) . DIRECTORY_SEPARATOR,
            'names' => $names,
        ]);
    }

    /**
     * @Route("/ajaxhome", name="ajaxhome")
     */
    public function ajaxHome(Request $request)
    {

        if ($request->isXmlHttpRequest()) {
            $entitymanager = $this->getDoctrine()->getManager();
            $namesRepo = $this->getDoctrine()->getRepository(Names::class);
            $prenom = $namesRepo->findOneById($request->get('dataJs')['id']);

            $prenom->setPrenom($request->get('dataJs')['prenom']);
            $entitymanager->persist($prenom);
            $entitymanager->flush();

            return new JsonResponse(true);
        }
        return new JsonResponse(false);
    }

    /**
     * @Route("/index", name="index")
     */
    public function index(Request $request)
    {
        $date = new DateTime();
        dump($request);
        $revenues = [
            0 => [
                'date' => (new DateTime("01-04-2020"))->getTimestamp(),
                'amount' => 1000,
            ],
            1 => [
                'date' => (new DateTime("01-12-2019"))->getTimestamp(),
                'amount' => 950,
            ]
        ];

        return $this->render('default/index.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.project_dir')) . DIRECTORY_SEPARATOR,
            "mainRevenue" => $revenues,

        ]);
    }
}
