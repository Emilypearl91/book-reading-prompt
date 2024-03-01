//create random number variable with a whole number
let randomNumber = 0;
// randomize value of randomNumber as a whole number using Math.random and Math.floor methods
randomNumber = Math.floor(Math.random() * 10);
// create prompt variable to put generated prompts into 
let prompt = '';

//create if else statement that changes value of prompt element based on the value of randomNumber variable
if (randomNumber === 0) {
  prompt = 'a book with a star on the cover';
} else if (randomNumber === 1) {
  prompt = 'a book that has been on your shelf the longest';
} else if (randomNumber === 2) {
  prompt = 'a classic retelling';
} else if (randomNumber === 3) {
  prompt = 'a debut novel';
} else if (randomNumber === 4) {
  prompt =  'a book with a green cover';
} else if (randomNumber === 5) {
  prompt =  'a book signed by the author';
} else if (randomNumber === 6) {
  prompt =  'a book recommended to you';
} else if (randomNumber === 7) {
  prompt =  'a book that was released in the last six months';
} else if (randomNumber === 8) {
  prompt =  'a book set in the current season';
} else if (randomNumber === 9) {
  prompt =  'a book you highly recommend';
}

console.log(prompt);
//pass if else statement to html and render on the page
document.getElementById('generator').innerHTML = prompt;
