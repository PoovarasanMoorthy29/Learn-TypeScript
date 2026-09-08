"use strict";
var directions;
(function (directions) {
    directions[directions["UP"] = 0] = "UP";
    directions[directions["DOWN"] = 1] = "DOWN";
    directions[directions["RIHGT"] = 2] = "RIHGT";
    directions[directions["LEFT"] = 3] = "LEFT";
})(directions || (directions = {}));
const drStatus = directions.DOWN;
console.log(drStatus);
