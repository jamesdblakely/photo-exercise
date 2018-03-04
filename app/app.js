(function() {
    "use strict";

    angular.module("photoTry", [
        "ngRoute"
    ]).config(["$locationProvider", "$routeProvider", function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix("!");

        $routeProvider.when("/users", {
            templateUrl: "users/users.html",
            controller: "UsersCtrl"
        }).otherwise({redirectTo: "/users"});
    }]);
})();