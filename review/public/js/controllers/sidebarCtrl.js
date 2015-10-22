twohands.controller('sidebarCtrl', ['$scope' , '$location', function($scope, $location){
	var typeItems=[];
	var typeItemsNumSum=0;
	//Get Product Type
	var dataProductType=[
	{'id':1, 'text': 'Book', 'num':5},
	{'id':2, 'text': 'Sport', 'num':15},
	];

	dataProductType.forEach(function(element){
		typeItems.push({'text':element.text, 'num': element.num});
		typeItemsNumSum += element.num;
	});
	typeItems.unshift({'text': 'All', 'num': typeItemsNumSum});
	$scope.typeItems=typeItems;

	$scope.isActive = function(viewLoaction){
		return viewLoaction === $location.path();
	};
}])