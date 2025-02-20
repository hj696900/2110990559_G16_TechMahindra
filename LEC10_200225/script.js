// promise.all
// promise.allSettled    (not show rejections)
// prmise.race       ()
// promise.any


// Promise api

const myPromiseFromNetflix=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Fetched Data from Netflix");
    },1000)
});

const myPromiseFromTwitter=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Fetched Data from Twitter");
    },2000)
});


const myPromiseFromGitHub=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Fetched Data from Github");
    },3000)
});


const myPromiseFromHotstar=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("Fetched Data from HotStar");
    },4000)
});



// const dataFromAll=Promise.all([myPromiseFromNetflix,myPromiseFromTwitter,myPromiseFromGitHub,myPromiseFromHotstar])

// console.log(dataFromAll)

const dataRace=Promise.race([myPromiseFromNetflix,myPromiseFromTwitter,myPromiseFromGitHub,myPromiseFromHotstar]);
console.log(dataRace);