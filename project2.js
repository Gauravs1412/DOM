

function saveData(){
let name = document.getElementById('name').value;
let Email = document.getElementById('email').value;

localStorage.setItem("name", name);
localStorage.setItem("email", Email);
}


