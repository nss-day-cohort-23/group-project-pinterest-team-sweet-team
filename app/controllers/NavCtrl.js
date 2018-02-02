"use strict";

angular.module("SweetApp").controller("NavCtrl", function($scope, AuthFactory) {
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
                });
            } else {
                console.log('which one?', item );                
            }
        }; 
});