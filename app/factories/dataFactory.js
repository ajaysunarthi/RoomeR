// The localstorage data will be accessed by using this factory inside the controllers //

angular.module('roomerApp').
factory('dataFactory', dataFactory );

dataFactory.$inject = ['$window'];

function dataFactory ($window) {

	if ($window.localStorage.roomer) {

		return JSON.parse($window.localStorage.roomer);

	}
/* if no data is inside the local storage then return empty array
   our controllers are intelligent enough to fill it up  */
	else{

		return []

	}

}



