"use strict";

angular.module("SweetApp", ["ngRoute"])
    .config($routeProvider => {
        $routeProvider
        // .when("/login",{
        //     templateUrl: "partials/nav-view.html",
        //     controller: "NavCtrl"
        // })
        .when("/boards", {
            templateUrl: "partials/board-view.html",
            controller: "BoardCtrl"
        })
        .when("/pins", {
            templateUrl: "partials/pin-view.html",
            controller: "PinCtrl"
        })
        .otherwise("/");
    }
)
.run(FBCreds => {
    let creds = FBCreds;
    let authConfig = {
        apiKey: creds.apiKey,
        authDomain: creds.authDomain
    };
    firebase.initializeApp(authConfig);
});