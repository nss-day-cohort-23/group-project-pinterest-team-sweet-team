"use strict";

angular.module("SweetApp").factory("FbFactory", ($http, $q) => {

    function getBoards() {
        return $q( (resolve, reject) => {
            $http
            .get(``)
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
            .delete(``)
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
            .delete(``)
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
            .put(`https://unpinterested-7fd33.firebaseio.com/pins.json`)
            .then( (data) => {
                resolve(data);
            })
            .catch( (error) => {
                reject(error);
            });
        });
    }

    function addBoard(newBoard) {
        return $q( (resolve, reject) => {
            $http
            .post(`https://unpinterested-7fd33.firebaseio.com/boards.json`, JSON.stringify(newBoard))
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
            .get(``)
            .then( (data) => {
                resolve(data);
            })
            .catch( (error) => {
                reject(error);
            });
        });
    }

    return { addBoard, getPins, addPin, deletePins, getBoards };

});