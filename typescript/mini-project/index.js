var reviewTotalDisplay = document.querySelector('#reviews');
var returingUserDisplay = document.querySelector('#returning-user');
var userNameDisplay = document.querySelector('#user');
var reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: false,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
];
// Solution
function showReviewTotal(value, reviewer) {
    var isLoyalty = false;
    reviews.forEach(function (review) {
        if (review.loyaltyUser) {
            isLoyalty = true;
        }
    });
    var iconDisplay = isLoyalty ? '🌟' : '';
    if (reviewTotalDisplay) {
        reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + ' last reviewed by ' + reviewer + iconDisplay;
    }
    // reviews.forEach(review => {
    //     if(review.loyaltyUser){
    //         review.name+=" *";
    //     }
    // })
}
var lastReviewer = reviews[reviews.length - 1].name;
showReviewTotal(reviews.length, lastReviewer);
var you = {
    userName: "Yash",
    isReturning: true
};
function populateUser(isReturning, userName) {
    if (isReturning) {
        returingUserDisplay.innerHTML = 'Back ' + userName;
    }
    else {
        userNameDisplay.innerHTML = userName;
    }
}
populateUser(you.isReturning, you.userName);
// const you = {
//     userName: 'Bobby',
//     isReturning: true,
// }
// function populateUser(isReturning : boolean, userName : string ) {
//     if (isReturning){
//         returningUserDisplay.innerHTML = 'back'
//     }
//     userNameDisplay.innerHTML = userName
// }
// populateUser(you.isReturning, you.userName)
