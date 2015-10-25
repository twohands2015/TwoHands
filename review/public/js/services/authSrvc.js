twohands.factory('authSrvc', function($http){
	return{
		auth:function(loginData){
			var authUser = $http({method:'POST',url:'api/auth/auth',params:loginData});
			return authUser;
		}
	}
})