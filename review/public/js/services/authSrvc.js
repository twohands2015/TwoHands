twohands.factory('Login', function($http){
	return{
		auth:function(loginData){
			var authUser = $http({method:'POST',url:'api/login/auth',params:loginData});
			return authUser;
		}
	}
})