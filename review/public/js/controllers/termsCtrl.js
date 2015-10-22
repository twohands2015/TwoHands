twohands.controller('termsCtrl', ['$scope', function($scope, $http){
	$.get('data/terms').success(function(data, status, headers, config) {
        $scope.terms = data;
    });
}])