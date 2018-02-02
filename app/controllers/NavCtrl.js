"use strict";

angular.module("SweetApp").controller("NavCtrl", function($scope) {
    //placeholder
    $scope.logo = "http://via.placeholder.com/45x45";

    $scope.navBar = [
        {
            name: "Logout",
            //placeholder function//
            userFunction: "loginUser()"
        },
        {
            name: "Logout",
            //placeholder function//
            userFunction: "logoutUser()" 
        }
    ]    
});