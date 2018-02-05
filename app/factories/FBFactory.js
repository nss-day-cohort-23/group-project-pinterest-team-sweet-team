"use strict";

angular.module("SweetApp").factory("FbFactory", ($http, $q) => {

    function getBoards() {
        return $q((resolve, reject) => {
            $http
                .get(`https://unpinterested-7fd33.firebaseio.com/boards.json?orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                .then((boards) => {
                    let keys = Object.keys(boards.data);
                    keys.forEach(key => {
                        boards.data[key].boardId = key;
                    });
                    let boardsDataArr = Object.values(boards.data);
                    resolve(boardsDataArr);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    function deleteBoards(FbId) {
        return $q((resolve, reject) => {
            $http
                .delete(`https://unpinterested-7fd33.firebaseio.com/boards/${FbId}.json`)
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    function deletePins(pinId) {
        return $q((resolve, reject) => {
            $http
                .delete(`https://unpinterested-7fd33.firebaseio.com/pins/${pinId}.json`)
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    function addPin(newPin) {
        return $q((resolve, reject) => {
            $http
                .post(`https://unpinterested-7fd33.firebaseio.com/pins.json`, JSON.stringify(newPin))
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
    //cb 
    function addPinBoardCover(newPinUrl, boardId) {
        return $q((resolve, reject) => {
            $http
                .patch(`https://unpinterested-7fd33.firebaseio.com/boards/${boardId}.json`, JSON.stringify({
                    url: `${newPinUrl}`
                }))
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    console.log("ERRRORRRR");
                    reject(error);
                });
        });
    }
    //cb function

    // function addCoverToBoard(newPinUrl, boardId) {
    //     return $q( (resolve, reject) => {
    //         $http
    //         .patch(`https://unpinterested-7fd33.firebaseio.com/boards.json/${boardId}`, JSON.stringify(newPinUrl))
    //         .then( (data) => {
    //             resolve(data);
    //         })
    //         .catch( (error) => {
    //             reject(error);
    //         });
    //     });
    // }
    

    function addBoard(newBoard) {
        return $q((resolve, reject) => {
            $http
                .post(`https://unpinterested-7fd33.firebaseio.com/boards.json`, JSON.stringify(newBoard))
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    function getPins(boardId) {
        return $q((resolve, reject) => {
            $http
                .get(`https://unpinterested-7fd33.firebaseio.com/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
                .then((data) => {
                    let keys = Object.keys(data.data);
                    keys.forEach(key => {
                        data.data[key].pinId = key;
                    });
                    let pinArr = Object.values(data.data);
                    resolve(pinArr);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    function getBoard(boardId) {
        return $q((resolve, reject) => {
            $http
                .get(`https://unpinterested-7fd33.firebaseio.com/boards/${boardId}.json`)
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                    console.log("errro");
                });
        });
    }

    return {
        addBoard,
        getPins,
        addPin,
        deletePins,
        getBoards,
        getBoard,
        addPinBoardCover,
        deleteBoards
    };

});