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

    $scope.getNameOfBoard = () =>{
        console.log("get");
        FbFactory.getBoard($routeParams.boardId)
        .then((data)=>{
            $scope.boardName = data.data.name;
            console.log("scope.boardName", $scope.boardName);
        });
    };

    $scope.getNameOfBoard();

//cb
} else {
    console.log("not logged in");
}

});
//cb
});