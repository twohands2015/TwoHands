<!DOCTYPE html>
<html lang="en" ng-app="twohandsApp">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!-- AngularJs-->
	<script type="text/javascript" src="bower_components/angular/angular.min.js"></script>
	<script type="text/javascript" src="bower_components/angular-route/angular-route.js"></script>
	<script type="text/javascript" src="bower_components/angular-resource/angular-resource.js"></script>
	<!-- Jquery -->
	<script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>
	<!-- bootstrap -->
	<script type="text/javascript" src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
	<link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
	<!-- bootstrap-fileinput plugin -->
	<script type="text/javascript" src="bower_components/bootstrap-fileinput/js/fileinput.min.js"></script>
	<link rel="stylesheet" type="text/css" href="bower_components/bootstrap-fileinput/css/fileinput.min.css">
	<!-- Swiper Slider plugin -->
	<script type="text/javascript" src="bower_components/Swiper/dist/js/swiper.jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="bower_components/Swiper/dist/css/swiper.min.css">
	
	<title>TwoHands</title>
</head>

<body>
	<script type="text/javascript" src="js/twohandsApp.js"></script>

	<script type="text/javascript" src="js/services/authSrvc.js"></script>
	<script type="text/javascript" src="js/services/sessionSrvc.js"></script>

	<script type="text/javascript" src="js/controllers/headerCtrl.js" ></script>
	<script type="text/javascript" src="js/controllers/sidebarCtrl.js" ></script>
	<script type="text/javascript" src="js/controllers/productlistCtrl.js" ></script>
	<script type="text/javascript" src="js/controllers/footerCtrl.js"></script>
	<script type="text/javascript" src="js/controllers/homeCtrl.js"></script>
	<script type="text/javascript" src="js/controllers/userspaceCtrl.js"></script>
	<script type="text/javascript" src="js/controllers/productCtrl.js"></script>
	<script type="text/javascript" src="js/controllers/marketCtrl.js"></script>
	<script type="text/javascript" src="js/controllers/sellCrtl.js"></script>
	<script type="text/javascript" src="js/controllers/signupCtrl.js"></script>
	<script type="text/javascript" src="js/controllers/loginCtrl.js"></script>
	<script type="text/javascript" src="js/controllers/termsCtrl.js"></script>
	<div ng-view></div>
</body>
</html>

<!-- Color Style
.color-primary-0 { color: #6276C8 }
.color-primary-1 { color: #B7C2F0 }
.color-primary-2 { color: #8899DE }
.color-primary-3 { color: #4359B0 }
.color-primary-4 { color: #29409F }
 -->

<style type="text/css">
	.navbar-inverse {
		background-color: #337ab7;
		border-color: #337ab7;
		border-radius: 0;
	}
	.navbar-inverse .navbar-brand{
		color: #fff;
	}
	.navbar-inverse .navbar-nav>li>a{
		color: #fff;
	}
	.navbar-inverse .navbar-collapse, .navbar-inverse .navbar-form{
		border-color: #337ab7;
	}
	.navbar-inverse .navbar-toggle{
		border-color: #fff;
	}
	.glyphicon {
		color: #fff;
	}
	.navbar-inverse .navbar-toggle:focus, .navbar-inverse .navbar-toggle:hover {
		background-color: #024782;
	}
	.nav>li:hover {
		background-color: #024782;
	}
	a:focus, a:hover {
		color: #fff;
	}
	.text-muted {
		color: #fff
	}
	body {
		background-color: #eee;
	}
</style>