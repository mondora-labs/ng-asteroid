var options = {
	host: "http://localhost:3000",
	do_not_autocreate_collections: true
};
options.ddpOptions = {
	endpoint: "ws://localhost:3000/websocket",
	SocketConstructor: WebSocket,
	debug: true
};

var Rocket = new Asteroid(options);
Rocket.on("connected", function () {
	Rocket.subscribe("items");
});
Rocket.collections["items"] = new Asteroid.Collection("items", Rocket, Asteroid.DumbDb);

angular.module("astdemo", ["asteroid"])

.controller("MainController", function ($scope, $collection, $timeout) {
	Items = Rocket.collections["items"];
	$scope.items = $collection(Items, "array");
});
