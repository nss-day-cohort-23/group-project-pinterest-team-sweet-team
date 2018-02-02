'use strict';

angular.module("SweetApp").controller("PinCtrl", function($scope, FbFactory, $routeParams, $location) {

    $scope.newPin = {
        uid: "",
        name: "",
        url: ""
    };

    FbFactory.getPins($routeParams.boardId)
    .then( (data) => {
        console.log("pins data", data);
        $scope.pins = data.data;
    });

    $scope.savePin = () => {
        console.log("New Pin", $scope.newPin);
        // I think "$routeParams.id" will be the boards id?
        $scope.newPin.boardId = $routeParams.boardId;
        console.log("route id", $routeParams.id, "route", $routeParams);
        $scope.newPin.uid = firebase.auth().currentUser.uid;
        FbFactory.addPin($scope.newPin)
        .then( (data) => {
            $location.url(`/pins`);
        });
    };

});