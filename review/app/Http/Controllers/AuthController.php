<?php

namespace App\Http\Controllers;

use Auth;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function Login(Request $request){
        $email = $request->input('email');
        $password = $request->input('password');
        if (Auth::attempt(['school_email' => $email, 'password' => $password])) {
            return Auth::user();
        } else {
            return 'invalid';
        }
    }

    public function Logout(){
        Auth::logout();
        return 'logged out';
    }

    public function getUser(){
        if (Auth::check()) {
            $user = Auth::user();
            return $user;
        } else {
            return 'no user been auth';
        }
    }
}