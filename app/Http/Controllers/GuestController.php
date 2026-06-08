<?php

namespace App\Http\Controllers;


class GuestController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    public function interviewAssessment()
    {
        $title = "Form Builder";
        return view('form', compact('title'));
    }
}
