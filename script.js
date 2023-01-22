let counter = document.querySelector('h1');
let count = 0;
function minus() {
    count--
    counter.textContent = count;
}


function plus() {
    count++
    counter.textContent = count;
}