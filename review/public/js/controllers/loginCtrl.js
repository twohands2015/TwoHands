twohands.controller('loginCtrl', ['$scope', 'authSrvc', 'sessionSrvc', function($scope, authSrvc, sessionSrvc) {
    $scope.loginSubmit = function() {
        if ($scope.email == undefined || $scope.password == undefined) {
            $scope.errorMsg = 'Please type your e-mail or password';
            $scope.showError = true;
        } else {
            $scope.showError = false;
            LoginData = {
                'email': $scope.email,
                'password': $scope.password
            }
            var auth = authSrvc.auth(LoginData);
            auth.success(function(response) {
                if (typeof response == 'object') {
                    sessionSrvc.set('auth', true);
                    console.log(response);
                } else {
                    $scope.errorMsg = 'Could not verify your login';
                    $scope.showError = true;
                };
            })
        };
    }
}])
