// const DataOne = [1,2,3,4,5];
// for(let i=0;i<DataOne.length;i++){
//     var ans = 0
//     ans += DataOne[i]*DataOne[i];
// }
// console.log(ans);


// const input = prompt('Enter the number');
// let result = square(input);
// console.log(result);
// for(let i = 0;i<input.length;i++){
//     var ans = input[i]*input[i];
//     console.log(ans)
// }
// console.log(ans);


//reduce function
// let array1 = [1,2,3,4,5];
// const result = array1.reduce((x,y) => x + y);
// console.log(result);


//SUm of every positive number
// if(input.length > 0){
    //     let sum = input.filter(x => x > 0).reduce((sum,y) => sum + y);
    //     console.log(sum)
    // }
//     const input = [1,-4,12,0,-3,29,-150]
// let positiveNum = []
// let sum = 0
// for(let i = 0;i<input.length;i++){
//    if(input[i]>0){
//     positiveNum.push(input[i]);
//     sum += input[i]
//    }

// }
// console.log(sum)
// const words = ['hello','morning','dinner','walking','somewhere'];
// const res = words.filter((word) => word.length > 6);
// console.log(res)


//at
// const array1= [5,12,8,,130,44]
// console.log(array1.at(-1))

//concat()
// const array1 = [1,2,3];
// const array2 = [4,5,'hello']
// const res = array1.concat(array2);
// console.log(res)

//copyWithin
// const array1= ['a','b','c','d','e','f'];
// console.log(array1.copyWithin(0,2,4))


//entries()
// const array1 = ['a','b','c','d','e']
// let sum = array1.entries()
// console.log(sum.next().value) 
// for(const [index,element] of array1.entries()){
//     console.log(index,element)
// }
// for(let a of sum){
//     console.log(a)
// }   

//every
// const isThread = (current) => current > 10;
// const array1 =  [11,20,30,40];
// console.log(array1.every(isThread))


//fill
// const array1 = [1,2,3,4,5,6,7,8];
// const res = array1.fill('hello',1,5)
// console.log(res)


//find
// const array = [1,2,3,4,5]
// var res = array.find((x) => x > 21)
// console.log(res)

//findIndex
// const array = [10,20,30,40,50];
// const res = array.findIndex((x) => x > 200)
// console.log(res)

//findLast
// const array = [1,2,3,70,55,10];
// const res = array.findLast((ele) => ele > 56)
// console.log(res)

//findLastIndex
// const array1 = [5, 12, 50, 130, 44];

// const isLargeNumber = (element) => element > 100;

// console.log(array1.findLastIndex(isLargeNumber));


//flat
// const array = [10,20,30,[40,50]]
// console.log(array.flat());

//flatmap
// const array = [1,2,3,4,5]
// let res = array.map((x) => [x*2]);
// console.log(res)

// let res1 = array.flatMap((x) => [[x*2]]);
// console.log(res1)

// const arr = [1,2,1]
// const result = arr.flatMap((num) => (num == 2 ? [2,2]:1));
// console.log(result)
// const arr = [1,2,3,4];
// arr.flatMap((x) => x*2);
// const n = arr.length;
// const acc = new Array(n);
// for(let i=0;i<n;i++){
//     const x = arr[i];
//     console.log(x)
//     acc[i * 2] = x;
    
//     acc[i * 2 + 1] = x * 3; 
//     console.log(acc)
// }
// console.log(acc)

//reduceRight
// const array = [
//     [0,1],
//     [2,3],
//     [4,5]
// ]
// const res = array.reduceRight((x,y) => x.concat(y));
// console.log(res)


//slice
// const arr = [1,2,3,4,5,6,7]
// const res = arr.slice(2,-2)
// console.log(res)

//some
// const arr = [1,2,3,4,5];
// let even = (ele) => ele % 2 === 0;
// console.log(arr.some(even));

// function big(ele){
//     return ele >= 10;
// }
// let res = [22,30,42,44,22].every(big);
// console.log(res)

// let res1 = [1,1,3,4,2].some(big);
// console.log(res1)


//sort
// const arr = [1,30,4,21,1000];
// console.log(arr.sort());
// arr.sort((a,b) => a - b);
// console.log(arr)

//splice
// const arr =  [1,2,3,4,5,6,7];
// arr.splice(2,1,'hello')
// console.log(arr)

//Symbol iterator

// let res = [1,20,10,2,1000,4];
// let data =res.sort();
// let data1 = res.toSorted()
// console.log(data1)
// console.log(data)

// const arr = [1,2,3,4,'a','b','c'];
// const iterate = arr.values();
// arr.push('data');
// arr.pop()
// arr.shift()
// arr.unshift('data');
// console.log(arr)
// arr.values();
// console.log(arr.values())
// for(let val of iterate){
//     console.log(val)
// }

// const arr1 = ["a", "b", "c", "d", "e"];
// const iterator = arr1.values();

// for (const letter of iterator) {
//   console.log(letter);
// }
// const arr = [1,2,3];
// const res = arr.with(2,'jj');//index,value
// console.log(res) 
// console.log(arr)

// const array = [1,2,3,4,5];
// let initialValue = 0
// let res = array.reduce((x,y) => x + y,initialValue);
// console.log(res)

// const input = [1,-4,12,0,-3,29,-150];
// const output = input.filter((x) => x > 0).reduce((x,y) => x + y);
// console.log(output)


// function difference(a,b){
//     return Math.abs(a - b);
// }
// console.log(difference(1,5))
// console.log(difference(5,3))


// const input = [12,46,32,64];
// const mean = input.reduce((x,y) => x + y)/input.length;
// console.log(mean)
// const sortedInput = [...input].sort((a,b) => a - b);
// console.log(sortedInput);
// let median;
// if(sortedInput.length % 2 === 0){
//     median = (sortedInput[sortedInput.length / 2 - 1] + sortedInput[sortedInput.length / 2])/2  
// }else{
//     median = sortedInput[Math.floor(sortedInput.length / 2)]
// }

// const res = {mean:mean,median:median};
// console.log(res)

const input = 'George Raymond Richard Martin';
const res = input.split(' ').map((x) => x[0]).join('');
console.log(res)

