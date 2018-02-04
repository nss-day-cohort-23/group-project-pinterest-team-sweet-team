"use strict";

angular.module("SweetApp").controller("NavCtrl", function($scope, AuthFactory, $location) {
    //placeholder
    $scope.logo = "http://via.placeholder.com/45x45";

    $scope.navBar = [
        {
            name: "Login"

        },
        {
            name: "Logout"
            //placeholder function// 
        }
    ];    

        $scope.navAuth = (item) => {
            if (item === "Login") {
                AuthFactory.login()
                .then(user => {
                    console.log('User: ', user);
                    window.location = "/#!/boards";
                });
            } else {
                AuthFactory.logout();
            }
        }; 
});