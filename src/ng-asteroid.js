angular.module("asteroid", [])

.factory("$collection", function ($timeout) {
	return function (asteroidCollection, type) {
		var angularCollection = {};
		var clone = function (obj) {
			return JSON.parse(JSON.stringify(obj));
		};
		var updateAngularCollection = function () {
			angularCollection.array = clone(asteroidCollection.db.itemsArray);
			angularCollection.hash = clone(asteroidCollection.db.itemsHash);
		};
		asteroidCollection.on("change", function () {
			$timeout(updateAngularCollection, 0);
		});
		updateAngularCollection();
		return angularCollection;
	};
});
