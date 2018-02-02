"use strict";

angular.module("SweetApp", ["ngRoute"])
    .config($routeProvider => {
        $routeProvider
        .when("/login",{
            templateUrl: "nav-view.html",
            controller: "AuthCtrl"
        })
        .otherwise("/");
    }

    );