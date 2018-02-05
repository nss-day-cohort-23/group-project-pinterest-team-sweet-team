'use strict';

angular.module("SweetApp").controller("BoardCtrl", function ($scope, FbFactory, $routeParams, $location, $route, $window, FilterFactory) {

    $scope.searchTerm = FilterFactory;


    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // New board object
            $scope.newBoard = {
                name: ""
            };

            // This promise gets all the logged in user's boards from the factory then assigns the boards to "boards".
            FbFactory.getBoards()
                .then((boards) => {
                    $scope.boards = boards;
                })
                .catch((error) => {
                    console.log("getBoards didn't work", error);
                });



            // This function saves the new board object when the user clicks "Create"
            $scope.saveBoard = () => {
                $scope.newBoard.uid = firebase.auth().currentUser.uid;
                FbFactory.addBoard($scope.newBoard)
                    .then((board) => {
                        // $location.url("/boards");
                        $route.reload("/boards");

                    });
            };

            // I THINK THIS NEEDS TO BE IN THE PIN CONTROLLER
            // This promise gets all the logged in user's pins for the particular board.
            //cb this function isnt returning anything because on this view there is no route param because this url ends in /boards

            FbFactory.getPins($routeParams.id)
                .then((pins) => {
                    $scope.pins = pins.data;
                })
                .catch((error) => {
                    console.log("getPins didn't work", error);
                });
        } else {
            console.log("not logged in");
        }


        $scope.boardDestroy = (boardId) => {
            FbFactory.deleteBoards(boardId)
                .then((data) => {
                    FbFactory.getPins(boardId)
                        .then((data) => {
                            data.forEach((board) => {
                                FbFactory.deletePins(board.pinId)
                                    .then(() => {
                                        $route.reload("/board");
                                    });
                            });
                        });
                });
        };
    });
});