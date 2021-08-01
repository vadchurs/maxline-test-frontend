const close = document.getElementsByClassName('close')[0];
const button = document.getElementsByClassName('button')[0];
const bg = document.getElementsByClassName('bg')[0];
const modal = document.getElementsByClassName('modal')[0];

close.onclick = function() {
    modal.style.display = "none"; 
    bg.style.display = "none"; 
}

button.onclick = function() {
    modal.style.display = "block"; 
    bg.style.display = "block"; 
}