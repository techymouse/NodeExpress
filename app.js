/*
let passwordGenerator = require('password-generator');
let password  = passwordGenerator(20, false, '', 'nice-pass-');
console.log(password);

*/


/*
let joke = require('one-liner-joke');
console.log(joke.getRandomJoke());

let repeat = require('repeat-string');
console.log(repeat('Hello',3));
*/


/*

let express = require('express');

let app = express();

app.get('/shop/:categoty',function(request,response){
    response.send(`<h1>Homepage</h1>`);
})

app.get('/About',function(request,response){
    response.send('<h1>This is first site in express</h1>');

})

app.get('/Contact',function(request,response){
    response.send('<h1>+91-7678194647</h1>');
})

app.get('*',function(request,response){
    response.send('<h1>400 Not Found</h1>');
})

app.listen(3000,function(){
    console.log('Listening Port 3000 ....');
})

*/


/*
let express = require('express');

let app = express();

//arrow function declaration

app.get('/shop/:cat',(req,resp)=>{
        resp.send(`<h4>category : ${req.params.cat}</h4>`);
})

app.listen(3000, ()=>{
    console.log('Listening on Port:3000 ....');
})
*/

/*
let express = require('express');

let app = express();

app.get('/tvs',(req,resp)=>{
    resp.send(`<h1>Welcome to TVS</h1><h3> Page ${req.query.page}</h3>`);
})

app.listen(3000,()=>{console.log('listening on port 3000 ....')})

*/

/*
let express = require('express');

let app = express();

app.get('/tvs',(req,resp)=>{

    let page;
    if(req.query.page===undefined){
        page=1;
    }else{
        page=req.query.page
    }
    resp.send(`<h1>Welcome to TVS</h1><h3> Page ${page}</h3>`);
})

app.listen(3000,()=>{console.log('listening on port 3000 ....')})

*/

/*
let express = require('express');

let app = express();

app.get('/:cat',(req,resp)=>{

    let page;
    if(req.query.page===undefined){
        page=1;
    }else{
        page=req.query.page
    }
    resp.send(`<h1> ${req.params.cat}</h1><h3> Page ${page}</h3>`);
})

app.listen(3000,()=>{console.log('listening on port 3000 ....')})
*/

/*
let express = require('express');

let app = express();

app.get('/:cat',(req,resp)=>{

    let page;
    if(req.query.page===undefined || req.query.number){
        page=1;

    }else{
        page=req.query.page
    }
    resp.send(`<h1> ${req.params.cat}</h1><h3> Page ${page}</h3><h4>${req.query.number}</h4>`);
})

app.listen(3000,()=>{console.log('listening on port 3000 ....')})
*/




let joke = require('one-liner-joke');

let availableTags = ['attitude','IT','love','sport'];

let express = require('express');

let app = express();

app.get('/joke/:number', (req, resp) => {
    let num = req.params.number;
    let result = '';
    for(let i = 0; i < num; i++) {
        result += `<h4>${joke.getRandomJoke().body}</h4>***`; 
    }
    resp.send(result);
})



app.get('/joke/:tag/:number',(req,resp)=>{

    let tag = req.params.tag;
    let num = req.params.number;
    let result = '';
    
    if(availableTags.includes(tag))
    {
        for(let i=0; i<num; i++){
            result+=`<h4>${joke.getRandomJokeWithTag(tag).body}</h4>`;
        }
    }
    else{
        result = `No Joke for ${tag}`;
        }
    

    resp.send(result); }) 

    app.get('*',(req,resp)=>{
        resp.send(`404- it'\s is not funny!`);
    })



app.listen(3000,()=>{console.log('Listening 3000 .....')})


/*

let math = require('./math');
console.log(math.PI);
console.log(math.sum([math.PI,10,8]));
console.log(math.findMax([math.PI,10,8]));
console.log(math.findMin([math.PI,10,8]));

*/




//Call Back Functions


// TO GET A Random Number
/*
function getRandomNumber(min, max){
    let random = Math.floor(Math.random()*(max-min+1)+min);
    return random;
}

function printNum(num){
    console.log(num);
}

let randomNumber = getRandomNumber(1,10);
printNum(randomNumber);
*/


// Let's make it Combination of SYNCHRONOUS and ASYNCHRONOUS code


/*function getRandomNumber(min, max){
    setTimeout(()=>{
    let random = Math.floor(Math.random()*(max-min+1)+min);
    return random;
},2000);
}


function printNum(num){
    console.log(num);
}

let randomNumber = getRandomNumber(1,10);
printNum(randomNumber);
*/


//TO FIX it

/*
function getRandomNumber(min, max, next){
    setTimeout(()=>{
    let random = Math.floor(Math.random()*(max-min+1)+min);
    next(random);
},2000);
}


function printNum(num){
    console.log(num);
}

getRandomNumber(1,10,printNum);
*/