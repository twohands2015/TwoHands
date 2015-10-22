twohands.controller('sellCtrl', ['$scope', function($scope){
	    $("#input-pic-updoader").fileinput({
	    	previewFileType: "image",
        	browseClass: "btn btn-success",
        	browseLabel: "Pick Image",
	    	browseIcon: "<i class=\"glyphicon glyphicon-picture\"></i> ",
	        removeClass: "btn btn-danger",
	        removeLabel: "Delete",
	        removeIcon: "<i class=\"glyphicon glyphicon-trash\"></i> ",
	        uploadClass: "btn btn-info",
	        uploadLabel: "Upload",
	        uploadIcon: "<i class=\"glyphicon glyphicon-upload\"></i> ",
	        maxFileCount: 10,
        	allowedFileTypes: ["image"],
	        allowedFileExtensions: ["jpg", "jpeg", "png"],
	    	maxFileSize: 100,
	    	initialCaption: "Upload Picture"
	    });
}])