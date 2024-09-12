// const btn = document.querySelector('button');
// const inp = document.querySelector('input');

// let API_KEY = "http://universities.hipolabs.com/search?name=";

// async function getData(){
//     try{
//         let data = await fetch(API_KEY);
//         let res = await data.json();
//         console.log(res);
        
//     }catch(err){
//         console.log(err);
//     }
// }
// getData();


// console.log(process.argv);

const readline = require('readline');

const ak = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ak.question('what is your name:',(ans)=>{
    console.log(`my name is ${ans}`);

    ak.question('what is your age:',(age)=>{
        console.log(`my age is ${age}`);
        ak.close();
    });
})



