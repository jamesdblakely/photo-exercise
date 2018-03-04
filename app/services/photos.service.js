(function() {
    "use strict";

    angular.module("photoTry")
        .factory("PhotosService", PhotosService);

    PhotosService.$inject = ["$http", "$q"];
    function PhotosService($http, $q) {

        function _getPhotos(id) {

            var _url = (id === 0) ? "http://jsonplaceholder.typicode.com/photos" : "http://jsonplaceholder.typicode.com/photos?albumId=" + id;

            return $http({
                method: "GET",
                url: _url
            });
        }

        function _getAlbumPhotos(albums) {

            var promises = albums.map(function(album) {
                return $http({
                    method: "GET",
                    url: "http://jsonplaceholder.typicode.com/photos?albumId=" + album.id
                });
            });

            return $q.all(promises);

        }

        return {
            getPhotos: _getPhotos,
            getAlbumPhotos: _getAlbumPhotos
        };
    }
})();