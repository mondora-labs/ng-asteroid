var ddpOptions1 = {
	endpoint: "ws://localhost:3000/websocket",
	SocketConstructor: WebSocket
};
var Rocket1 = new Asteroid();
var Items = new Collection("items", Rocket1, DB);
var Users = new Collection("users", Rocket1, DB);
Rocket1.init(ddpOptions1);

/*
var ddpOptions2 = {
	endpoint: "ws://localhost:4000/websocket",
	SocketConstructor: WebSocket
};

var Rocket2 = new Asteroid();
*/

angular.module("astdemo", ["asteroid"])

.controller("MainController", function ($scope, $collection) {
	_.clone($collection(Items, $scope, "items"));
});
