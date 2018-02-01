"use strict";

angular.module("SweetApp").factory("FbFactory", (FBUrl, $http, $q) => {

    function getBoards() {
        return $q( (resolve, reject) => {
            $http
            .get('')
            .then( (data) => {
                resolve(data);
            })
            .catch( (error) => {
                reject(error);
            });
        });
    }

    function deleteBoards() {
        return $q( (resolve, reject) => {
            $http
            .delete('')
            .then( (data) => {
                resolve(data);
            })
            .catch( (error) => {
                reject(error);
            });
        });
    }

    function deletePins() {
        return $q( (resolve, reject) => {
            $http
            .delete('')
            .then( (data) => {
                resolve(data);
            })
            .catch( (error) => {
                reject(error);
            });
        });
    }

    function addPin() {
        return $q( (resolve, reject) => {
            $http
            .put('')
            .then( (data) => {
                resolve(data);
            })
            .catch( (error) => {
                reject(error);
            });
        });
    }

    function addBoard() {
        return $q( (resolve, reject) => {
            $http
            .put('')
            .then( (data) => {
                resolve(data);
            })
            .catch( (error) => {
                reject(error);
            });
        });
    }

    function getPins() {
        return $q( (resolve, reject) => {
            $http
            .get('')
            .then( (data) => {
                resolve(data);
            })
            .catch( (error) => {
                reject(error);
            });
        });
    }

});