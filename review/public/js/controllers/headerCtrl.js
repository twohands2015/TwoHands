twohands.controller('headerCtrl', ['$scope', function($scope){
	$scope.header_items = [
		{url: '#sell', text: 'Sell'},
		{url: '#signup', text: 'Signup'},
		{url: '#login', text: 'Login'}
	];
}])