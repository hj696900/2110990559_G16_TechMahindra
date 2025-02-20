// Higher Order Function

data = [2,4,6,8,10];

// const calculateDoubleData = function(data){
//     const output = [];
//     for(let i=0;i<=data.length;i++){
//         output.push(data[i]*2);
//     }
//     return output;
// }



// const calculateHalfData = function(data){
//     var output=[];
//     for(let i=0;i<data.length;i++){
//         output.push(data[i]/2);
//     }
//     return output;
// }


// const calculateAddTen = function(data){
//     var output=[];
//     for(let i=0;i<data.length;i++){
//         output.push(data[i]+10);
//     }
//     return output;
// }



// console.log(calculateDoubleData(data)); // [4, 8, 12, 16, 20]
// console.log(calculateHalfData(data));   // [1, 2, 3, 4, 5]
// console.log(calculateAddTen(data));     // [12, 14, 16, 18, 20]




//MODERN PROGRAMMING CODING PRACTICE

var insideData = 10;

function doubleData(insideData){
    var ans = insideData*2;
    return ans;
}


function halfData(insideData){
    var ans = insideData/2;
    return ans;
}


function addTen(insideData){
    var ans = insideData+10;
    return ans;
}


const calculateData = function(data, callback){
    console.log("We are inside calculateData");
    var output= [];
    for(let i =0;i < data.length; i++){
        output.push(callback(data[i]));
    }
    return output;
}

console.log(calculateData(data, doubleData));
console.log(calculateData(data, halfData));
console.log(calculateData(data, addTen));


//Benefits of Using HOF : Readabilty, Scalabilty, Optmization




//Polyfill of Map Feature of Js;
//By using Prototype

Array.prototype.mapp = function(logic){
    var output=[];
    for(let i =0; i<this.length; i++){
        output.push(this[i]);
    }

    return output;
}

console.log(data.mapp(doubleData));









QUES:3
const users=[
    {firstName:"Pratiyush", lastName:"Ray", age:25},
    {firstName:"Piyush", lastName:"Saini", age:22},
    {firstName:"Sahil", lastName:"Aggarwal", age:20},
    {firstName:"Ayush", lastName:"Jawa", age:28},
    {firstName:"Daksh", lastName:"Singh", age:40},
]

//Lets combine First Name and Last Name

const FullName = users.map((user)=>{ user.firstName+ "" + user.lastName});

//Lets Filter out age above 24, there full name: