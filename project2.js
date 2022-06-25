

function saveData(event){
event.preventDefault() ;   
let name = event.target.username.value;
let Email = event.target.emailId.value;

// localStorage.setItem("name", name);
// localStorage.setItem("email", Email);

let myObj= {
    name,
    Email
}

localStorage.setItem(myObj.Email,JSON.stringify(myObj));

showUsersOnScreen(myObj);
}

function showUsersOnScreen(user){
    const parentNode = document.getElementById('users');
    const childHTML = `<li> ${user.name} - ${user.Email}`
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}


        
        






