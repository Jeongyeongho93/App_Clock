//html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="page.css"/>
    <title>Momentum app</title>
  </head>
  <body>
  <form class="hidden" id="login-form">
    <input 
    required maxlength="15" 
    type="text" 
    placeholder="what is your name" />
    <button>Log In</button>
  </form>
  <h2 id="clock">00:00</h2>
  <h1 id="greeting" class="hidden"></h1>
  <script src="page.js"></script>
  <script src="pageclock.js"></script>
  </body>
</html>


//html-js
const clock = document.querySelector("#clock");

function sayHello() {
    console.log("Hello");
}

setInterval(sayHello, 5000); //setInterval : Create interval by specific time ex)This function is execute by each 5sec

//The function of sayHello() console is called console.log("Hello") that print out automatically hello in console

-----------------------------------------------------------------------------------
  
//Only call the function once a time call but after certain minute or hour

const clock = document.querySelector("#clock");

function sayHello() {
    console.log("Hello");
}

setTimeout(sayHello, 5000);

----> /use 'setTimeout'
-----------------------------------------------------------------------------------
  
//Mission : Show a time and minute on the page
//For example fisrt
  new Date().getHours()
  new Date().getMinutes()
  new Date().getSeconds()
  new Date().getSeconds()
  new Date().getSeconds()
  new Date().getSeconds()
  new Date().getSeconds()
//We would like to the function getting over and over again by forever!
//Conclusion : use setInterval

const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

setInterval(getClock, 1000);

//Pull the trigger then could get proper value what you exactly want it.

---------------------------------------------------------------------------------------------------------------
1. //However we may have one a problem which the console.log does not print a second as double. That mean is a '00' but '0' or '1'
2. //From now on, we will fix the code. 
3. //As soon as load the webpage would load and it would execute getClock() also work every second, in other words, the page going to reset automatically by function.

//HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="page.css"/>
    <title>Momentum app</title>
  </head>
  <body>
  <form class="hidden" id="login-form">
    <input 
    required maxlength="15" 
    type="text" 
    placeholder="what is your name" />
    <button>Log In</button>
  </form>
  <h2 id="clock">00:00:00</h2>
  <h1 id="greeting" class="hidden"></h1>
  <script src="page.js"></script>
  <script src="pageclock.js"></script>
  </body>
</html>

//Js
const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock()
setInterval(getClock, 1000);  
  
//Solved 2 and 3 but still remain 1//
---------------------------------------------------------------------------------------------------------------
  
  
  
  
  
  
  
  
  
  
