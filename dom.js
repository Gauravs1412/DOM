// // examine the document object
// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype)
// // console.log(document.head)
// // console.log(document.all);
// console.log(document.forms)
// console.log(document.links)

//getelementbyId

// console.log(document.getElementById('header-title'));
let headertitle = document.getElementById('header-title')
let header = document.getElementById("main-header")
// console.log(headertitle.textContent = "hello");
// console.log(headertitle.innerText = "bybye")
// console.log(headertitle.textContent)
// console.log(headertitle.innerText);

header.style.borderBottom = "solid 3px #000";

var items = document.getElementsByClassName("list-group-item");
console.log(items);

items[2].style.backgroundColor = "green";

//gives an error need to loop through the list
//items.style.fontWeight = "bold";

for(let i=1; i<items.length; i++){
    items[i].style.fontWeight = "bold";
}


