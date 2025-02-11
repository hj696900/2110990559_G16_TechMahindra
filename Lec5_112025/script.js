// function two() {
//     return 2;
// }
// function four() {
//     return 4;
// }

// console.log(1);
// console.log(two());
// setInterval(() => {
//     console.log(3);
// }, 3000)

// console.log(four());
// setInterval(() => {
//     console.log(3)
// }, 5000)
// console.log(6)


// for (var i = 1; i <= 6; i++) {
//     (function (num) {
//         setTimeout(() => {
//             console.log(num);
//         }, 1000);
//     })(i);
// }



// function x(){
//     var a=7;

//     function y(){
//         console.log(a);
//     }

//     return y;

// }

// var z = x();
// console.log(z);

// z();



var count = 0;
function increment() {
    count++;
}
increment();
increment();
increment();

console.log(count);