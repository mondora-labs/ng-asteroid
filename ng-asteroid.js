angular.module("asteroid", [])

.factory("$collection", function () {
	return function (collection, scope, varname, type) {
		var setRef = function () {
			if (type === "hash") {
				scope[varname] = JSON.parse(JSON.stringify(collection.db.itemsHash));
			} else {
				scope[varname] = JSON.parse(JSON.stringify(collection.db.itemsArray));
			}
		};
		collection.on("change", function () {
			scope.$apply(setRef);
		});
		setRef();
	};
});
