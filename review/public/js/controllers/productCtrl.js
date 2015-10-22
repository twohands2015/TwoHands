twohands.controller('productCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
  	var mySwiper = new Swiper ('.swiper-container', {
		pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
		loop: true
    });

	$scope.productId = $routeParams.productId;
	//Get Product from view table 
	$scope.productData = {
		'id': 1,
		'title': 'Here is title for test',
		'bi': 'This is bi for test'
	}
}]);