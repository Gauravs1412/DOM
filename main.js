var form = document.getElementById('addForm');
var itemlist = document.getElementById('items')

// console.log(itemlist);

//form submit event
form.addEventListener('submit', additem);

//Delete event
itemlist.addEventListener('click', removeitem);

//Add item
function additem(e) {
    e.preventDefault();

    var newitem = document.getElementById('item').value;

    //create new li element

    var li = document.createElement('li');

    //add classname

    li.className = 'list-group-item';
    // console.log(li)

    //Add text node with input value

    li.appendChild(document.createTextNode(newitem));

    //create del button element
    
    var deletebtn = document.createElement('button');

    // Add classes to deletebtn element
    deletebtn.className = "btn btn-danger btn-sm float-right delete";

    //append textnode

    deletebtn.appendChild(document.createTextNode("X"));

    //append button to li  
    li.appendChild(deletebtn);


    //append li to list
    itemlist.appendChild(li);

}


//remove item

function removeitem(e){

    if(e.target.classList.contains('delete')){
        if(confirm('are you sure?')){
            var li = e.target.parentElement;
            itemlist.removeChild(li);
        }
    }

}

//create editbutton


