twohands.controller('loginCtrl', ['$scope', 'Login', function($scope, Login) {
    $scope.loginSubmit = function() {
        if ($scope.email == undefined || $scope.password == undefined) {
        	$scope.errorMsg = 'Please type your e-mail or password'
        	$scope.showError=true;
        } else {
        	$scope.showError=false;
            LoginData = {
                'email': $scope.email,
                'password': $scope.password
            }
            console.dir(LoginData);

            var auth = Login.auth(LoginData);
            auth.success(function(response) {
                console.log(response);
            });
        };
    }
}])
