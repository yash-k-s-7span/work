
let stayedAt:string[];

const you:{
    firstName:string;
    lastName:string;
    age:number;
    stayedAt:string[];
} = {
    firstName:'Yash',
    lastName:'Solanki',
    age:24,
    stayedAt:['Murlidhar','Dr House Pg']
}


type User = {
    name:string;
    stars:number;
    LoyaltyUser:boolean;
    Date:string;
}
const reviews: User[] = [
    {
        name: 'Sheia',
        stars: 5,
        LoyaltyUser: false,
        Date: '01-04-2021'
    }
];
const reviewss:{
    name:string;
    stars:number;
    LoyaltyUser:boolean;
    Date:string;
}[] = [
    {
        name: 'Sheia',
        stars: 5,
        LoyaltyUser: false,
        Date: '01-04-2021'
    }
];

const Properties : {
    Image:string;
    Title:string;
    CouchPrice:number;
    location:{
        Address:string;
        City:string;
        ZipCode:number;
        Country:string;
    }
    ContactDetails:number;
    AvailableToRent:boolean;
}[] = [
    {
        Image:'image.png',
        Title:'Whats new',
        CouchPrice:100,  ContactDetails:8141040917,
        AvailableToRent:true,
        location:{
            Address:'Gujarat',
            City:'Ahmedabas',
            ZipCode:360002,
            Country:'India',
        },
    },
]