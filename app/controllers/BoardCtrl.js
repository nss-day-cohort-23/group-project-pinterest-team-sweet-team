'use strict';

angular.module("SweetApp").controller("BoardCtrl", function($scope, FbFactory, $routeParams, $location) {

    // New board object
    $scope.newBoard = {
        uid: "",
        name: ""
    };

    // This promise gets all the logged in user's boards from the factory then assigns the boards to "boards".
    FbFactory.getBoards()
    .then( (boards) => {
        console.log("getBoards", boards);
        $scope.boards = boards.data;
    })
    .catch( (error) => {
        console.log("getBoards didn't work", error);
    });

    // This function saves the new board object when the user clicks "Create"
    $scope.saveBoard = () => {
        console.log("New board object", $scope.newBoard);
        $scope.newBoard.uid = firebase.auth().currentUser.id;
        FbFactory.addBoard($scope.newBoard)
        .then( (board) => {
            $location.url("/boards");
        });
    };

    // I THINK THIS NEEDS TO BE IN THE PIN CONTROLLER
    // This promise gets all the logged in user's pins for the particular board.
    FbFactory.getPins($routeParams.id)
    .then( (pins) => {
        console.log("getPins", pins);
        $scope.pins = pins.data;
    })
    .catch( (error) => {
        console.log("getPins didn't work", error);
    });


});