(function() {
    "use strict";


    angular.module("photoTry")
        .controller("UsersCtrl", UserController);

    UserController.$inject = ["UsersService", "AlbumsService", "PhotosService"];
    function UserController(UsersService, AlbumsService, PhotosService) {
        var vm = this;
        vm.appUsers = {};
        vm.userAlbums = {};
        vm.albumToggle = false;
        vm.openAlbums = _openAlbums;

        (function populateUsers() {

            UsersService.getUsers()
                .then(function(response) {
                    vm.appUsers = response.data.filter(function(user) {
                        if (user.id < 3) {
                            return user;
                        }
                    });

                }).catch(function (response) {
                    console.log(response.data);
            });
        })();

        function _openAlbums(userId) {
            _populateAlbums(userId);
        }

        function _populateAlbums(userId) {

            AlbumsService.getAlbums(userId)
                .then(function (response) {
                    _applyPhotosToAlbums(response.data);

                }).catch(function (response) {
                console.log(response.data);
            });
        }

        function _applyPhotosToAlbums(userAlbums) {
            var _userAlbumsWithPhotos = {};
            PhotosService.getAlbumPhotos(userAlbums)
                .then(function (datas) {
                    _userAlbumsWithPhotos = datas.map(function (album) {
                        return album;
                    });
                    vm.userAlbums = _userAlbumsWithPhotos;
                });
        }

    }
})();