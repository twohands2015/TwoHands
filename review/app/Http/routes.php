<?php
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
Route::get('/', function () {
	return view('index');
});

Route::group(['prefix' => 'api'], function(){
	Route::match(['get', 'post'], 'apitest', function () {
   		return Response::json(['status' => 200, 'msg' => 'api connected success.']);
	});
	Route::post('auth/auth','AuthController@Login');
	Route::get('auth/destroy','AuthController@Logout');
	Route::get('auth/user','AuthController@getUser');
});