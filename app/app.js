"use strict";

angular.module("SweetApp", ["ngRoute"])
    .constant('_')
    .config($routeProvider => {
        $routeProvider
        .when("/", {
            templateUrl:"partials/home-view.html", //CB home view
            controller:"HomeCtrl" //cb
        })
        .when("/login", {
            templateUrl: "partials/nav-view.html",
            controller: "AuthCtrl"
        })
        .when("/boards", {
            templateUrl: "partials/board-view.html",
            controller: "BoardCtrl"
        })
        .when("/pins/:boardId", {
            templateUrl: "partials/pin-view.html",
            controller: "PinCtrl"
        })
        .otherwise("/");
    })
.run(FBcreds => {
        let creds = FBcreds;
        let authConfig = {
            apiKey: creds.apiKey,
            authDomain: creds.authDomain
        };
        firebase.initializeApp(authConfig);
    });


