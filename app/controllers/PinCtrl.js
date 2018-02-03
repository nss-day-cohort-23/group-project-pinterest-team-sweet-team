'use strict';

angular.module("SweetApp").controller("PinCtrl", function($scope, FbFactory, $routeParams, $location, _) {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
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

    FbFactory.getBoards() //cb get board names to match to boardId on pins
    .then((data) =>{
        console.log("board data in pinCtrl", data); //CB
        $scope.pinBoards = data;
        console.log("pinBoards",$scope.pinBoards); //CB
    }
);
//cb
} else {
    console.log("not logged in");
}

});
//cb
});