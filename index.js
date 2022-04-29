// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let myDiv = document.getElementById('myDiv');
myDiv.querySelectorAll(':scope > li').forEach((el) => {
  console.log(el.getAttribute('data-label-simple'));
});

var array1 = [1, 2, 3],
  array2 = [1, 2, 4],
  missing = array1.filter(
    (
      (i) => (a) =>
        a !== array2[i] || !++i
    )(0)
  );

console.log(missing);

let arr = [1, 2, 3];
//console.log(arr.slice());
arr.slice().reverse().forEach(x => console.log(x))
console.log(arr.reverse());