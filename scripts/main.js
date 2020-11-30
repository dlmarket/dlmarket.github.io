const myHeading = document.querySelector('h1');
myHeading.textContent = "Deer Lake Market";


// let myButton = document.querySelector('button');
let myButton = document.getElementById('userBtn');
let myWelcomeHeading = document.querySelector('h2');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myWelcomeHeading.innerHTML = 'Welcome to Deer Lake Market, ' + myName + '!';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myWelcomeHeading.innerHTML = 'Welcome to Deer Lake Market, ' + storedName + '!';
}

myButton.onclick = function() {
  console.log("Hey I clicked the button");
  setUserName();
}
