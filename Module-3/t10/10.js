'use strict';
const form = document.getElementById('source');
const fname = document.querySelector('input[name=firstname]');
const lname = document.querySelector('input[name=lastname]');
const p = document.querySelector('p');
form.addEventListener("submit", function(event){
  event.preventDefault()
  p.innerText = `Your name is ${fname.value} ${lname.value}`;
});