//The Goal : Prefer that the clock inner text is printed 00:00:00, not to printed single number we've been expected but no matter what it should print double looks.
//Like a "01" not "1"
//function : padStart, padEnd -> same and could use number or character
//"1".padStart(2,"0") -> this string should be two character long, if it isn't then would add padding to string
//"01"
// -> The function is padStart that it could add padding to it as surround string with Double quotes.

//Html
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
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock()
setInterval(getClock, 1000);
