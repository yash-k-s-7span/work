"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: ['1', '2'],
    name: "yash",
    email: 'yash@gmail.com',
    isActive: true
};
myUser.email = "abc@gmail.com";
function processDetail(card) {
    console.log('Card Number', card.cardNum);
    console.log('Card Date', card.cardDate);
    console.log('Card Cvv', card.cvv);
}
var UserData = {
    cardNum: '1622',
    cardDate: 2001,
    cvv: 302
};
processDetail(UserData);
