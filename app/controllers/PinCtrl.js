"use strict";

angular
  .module("SweetApp")
  .controller("PinCtrl", function(
    $scope,
    FbFactory,
    $routeParams,
    $location,
    _,
    $route,
    FilterFactory
  ) {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        $scope.newPin = {
          uid: "",
          name: "",
          url: ""
        };

        $scope.searchTerm = FilterFactory;

        FbFactory.getPins($routeParams.boardId).then(data => {
          console.log("pins data", data);
          $scope.pins = data;
        });

        $scope.savePin = () => {
          console.log("New Pin", $scope.newPin);
          // I think "$routeParams.id" will be the boards id?
          $scope.newPin.boardId = $routeParams.boardId;
          console.log("route id", $routeParams.id, "route", $routeParams);
          $scope.newPin.uid = firebase.auth().currentUser.uid;

          FbFactory.addPinBoardCover($scope.newPin.url, $routeParams.boardId)
            .then(data => {
              console.log("patched");
            })
            .catch(error => {
              console.log(error);
            }); //cb patch url to board
          FbFactory.addPin($scope.newPin)
            .then(data => {
              console.log("data in pin add pin", data);
              $route.reload(`pins/${$scope.newPin.boardId}`); // this was pins but that route doesnt exist -CB
            })
            .catch(error => {
              console.log(error);
            });

          // FbFactory.addBoardCover($scope.newPin)
          // .then((data)=>{
          //     $location.url(`/boards/`)
          // }) ///CBBBB
        };

        // $scope.getCoverForBoard = () => {
        //     FbFactory.addCoverToBoard($scope.newPin.url, $routeParams.boardId) ///cb trying to add img url to board
        //     .then((data) => {
        //     console.log("added",data);
        //     });
        // };
        //cb move addCoverToBoard out of save pin function

        $scope.getNameOfBoard = () => {
          console.log("get");
          FbFactory.getBoard($routeParams.boardId).then(data => {
            $scope.boardName = data.data.name;
            console.log("scope.boardName", $scope.boardName);
          });
        };

        $scope.getNameOfBoard();
        $scope.getCoverForBoard(); //cb calling add cover url function here

        //cb
      } else {
        console.log("not logged in");
      }
    });
    //cb

    $scope.backToBoards = () => {
      console.log("clicked");
      $location.url("/boards");
    };

    $scope.pinRemove = (pinId) => {
      FbFactory.deletePins(pinId)
      .then(() => {
        $route.reload("/pins/:boardId");
      });
    };
  });
