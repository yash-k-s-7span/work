"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["First"] = 2] = "First";
    SeatChoice[SeatChoice["Second"] = 3] = "Second";
    SeatChoice[SeatChoice["Third"] = 4] = "Third";
    SeatChoice["Fourth"] = "s";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.First;
console.log(typeof (hcSeat));
