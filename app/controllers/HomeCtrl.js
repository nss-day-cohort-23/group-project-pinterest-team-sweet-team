
"use strict";

angular.module("SweetApp").controller("HomeCtrl", function($scope, FbFactory, $routeParams, $location, $route, $window, FilterFactory) {
    
    FbFactory.getBoardsForHomeView()
    .then( (homeBoards) => {
        $scope.homeBoards = homeBoards;
        console.log("getBoards", $scope.homeBoards);
    })
    .catch( (error) => {
        console.log("getBoards didn't work", error);
    });

    


});