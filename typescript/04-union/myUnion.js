// var score = 33;
// score = 32;
// score = "string";
// var allUser = { name: 'aa', id: 1 };
// allUser = { userName: 'bb', id: 2 };
// getDbId(3);
// getDbId("ds");
// function getDbId(id) {
//     if (typeof id == "string") {
//         id.toLowerCase();
//     }
// }
// var data = ['1'];
// var dataOne = [1];
// var mixData = [1, 2, 3];
// var mixesData = ["1", 1, true];
// var tuple;
// tuple = ['sd', 1, false];
// var newUser = [112, "sd"];
// newUser[1] = 'sola';
// newUser.push(2001);
// console.log(newUser);
// function AddUsersData(user) {
//     console.log(user.id);
//     console.log(user.name);
// }
// AddUsersData({ id: 1, name: "yash solanki" });




async function Hello(){
    // return "Hello"
    console.log('hello')
}
Hello().then(
    function(succ){Hello(succ);},
    function(err){Hello(err);}

)