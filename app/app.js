"use strict";

angular.module("SweetApp", ["ngRoute"])
    .config($routeProvider => {
        $routeProvider
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

