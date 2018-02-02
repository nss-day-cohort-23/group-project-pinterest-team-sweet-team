"use strict";

angular.module("SweetApp", ["ngRoute"])
    .config($routeProvider => {
        $routeProvider
        .when("/login",{
            templateUrl: "partials/nav-view.html",
            controller: "NavCtrl"
        })
        .otherwise("/");
    }

    );