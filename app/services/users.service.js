(function() {
    "use strict";

    angular.module("photoTry")
        .factory("UsersService", UsersService);

    UsersService.$inject = ["$http"];
    function UsersService($http) {

        function _getUsers() {
            return $http({
                method: "GET",
                url: "http://jsonplaceholder.typicode.com/users"
            });
        }

        return {
            getUsers: _getUsers
        };
    }
})();
