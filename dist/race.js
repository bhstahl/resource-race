"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var race = function race(endpoints) {
    var promises = endpoints.map(function (endpoint) {
        return fetch(endpoint);
    });
    return Promise.race(promises).then(function (response) {
        return response.url;
    })["catch"](function (e) {
        return Promise.reject(e);
    });
};

exports["default"] = race;
module.exports = exports["default"];