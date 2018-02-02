"use strict";

angular.module("SweetApp").factory("FbFactory", ($http, $q) => {

    function getBoards() {
        return $q( (resolve, reject) => {
            $http
            .get(`https://unpinterested-7fd33.firebaseio.com/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
            .then( (boards) => {
                let keys =Object.keys(boards.data);
                keys.forEach(key => {
                    boards.data[key].boardId = key;
                });
                console.log("get boards data", boards);
                let boardsDataArr = Object.values(boards.data);
                resolve(boardsDataArr);
            })
            .catch( (error) => {
                reject(error);
            });
        });
    }

    function deleteBoards(FbId) {
        return $q( (resolve, reject) => {
            console.log("yo dog",FbId);
            $http
            .delete(`https://unpinterested-7fd33.firebaseio.com/boards/${FbId}.json`)
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

    return { addBoard, getPins, addPin, deletePins, getBoards, deleteBoards };

});