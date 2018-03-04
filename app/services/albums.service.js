(function() {
    "use strict";

    angular.module("photoTry")
        .factory("AlbumsService", AlbumsService);

    AlbumsService.$inject = ["$http"];
    function AlbumsService($http) {

        function _getAlbums(id) {
            var _url = (id === 0) ? "http://jsonplaceholder.typicode.com/albums" : "http://jsonplaceholder.typicode.com/albums?userId=" + id;

            return $http({
                method: "GET",
                url: _url
            });
        }

        return{
            getAlbums: _getAlbums
        };
    }
})();
