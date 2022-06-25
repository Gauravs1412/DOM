

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

window.addEventListener("DOMContentLoaded", () =>{
    const localStorageObj = localStorage;
    const localStoragekeys = Object.keys(localStorageObj);

    for(let i=0; i<localStoragekeys.length; i++){
        const key = localStoragekeys[i];
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showUsersOnScreen(userDetailsObj);
    }

    
})

function showUsersOnScreen(user){
    const parentNode = document.getElementById('users');
    const childHTML = `<li id= ${user.Email}> ${user.name} - ${user.Email}
       
          <button onclick=deleteUser('${user.Email}')>Delete User </button>
          <button onclick= editUserDetails('${user.Email},'${user.name}')>edit User </button>
    </li>`
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}

//Edit user
function editUserDetails(emailId, name){
    document.getElementById('email').value = emailId;
    document.getElementById('name').value = name;
    
    deleteUser(emailId);
}

function deleteUser(emailId){
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);
}


function removeUserFromScreen(emailId){
    const parentNode = document.getElementById('users');
    const childNodeToBeDeleted = document.getElementById(emailId);

    parentNode.removeChild(childNodeToBeDeleted);


}


        
        






