
const reviewTotalDisplay = document.querySelector('#reviews');
const returingUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user')
const propertyData = document.querySelector('.property');
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
]

// Solution
function showReviewTotal (value : number,reviewer:string) {
    let isLoyalty = false;
    reviews.forEach(review => {
        if(review.loyaltyUser){
            isLoyalty = true;
        }
    })
    const iconDisplay = isLoyalty ? '🌟':''
    if(reviewTotalDisplay){
        reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + ' last reviewed by '+reviewer+iconDisplay
    }
    // reviews.forEach(review => {
    //     if(review.loyaltyUser){
    //         review.name+=" *";
    //     }
    // })
    
   
}


var lastReviewer = reviews[reviews.length - 1].name;
showReviewTotal(reviews.length,lastReviewer,);

const you = {
    userName:"Yash",
    isReturning:true
}
function populateUser(isReturning:boolean,userName:string){
    if(isReturning){
        returingUserDisplay.innerHTML = 'Back '+userName;
    
    }else{
        userNameDisplay.innerHTML = userName
    }
}
populateUser(you.isReturning,you.userName)

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