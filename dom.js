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
// let headertitle = document.getElementById('header-title')
// let header = document.getElementById("main-header")
// console.log(headertitle.textContent = "hello");
// console.log(headertitle.innerText = "bybye")
// console.log(headertitle.textContent)
// console.log(headertitle.innerText);

// header.style.borderBottom = "solid 3px #000";

// var items = document.getElementsByClassName("list-group-item");
// console.log(items);

// items[2].style.backgroundColor = "green";

// //gives an error need to loop through the list
// //items.style.fontWeight = "bold";

// for(let i=1; i<items.length; i++){
//     items[i].style.fontWeight = "bold";
// }



//getElementbytagName

// 


//queryselsector

// var header = document.querySelector("#main-header")
// header.style.borderBottom = 'solid 4px red';

// var input = document.querySelector("input")
// input.value = "hello world"

// var submit = document.querySelector("input[type = 'submit']");

// submit.value = "changed";

//it can only pick one element at a time so be careful
// var item = document.querySelector(".list-group-item")
// console.log(item);
// item.style.color = "green";

// var seconditem = document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.backgroundColor = "green";

// var thirditem = document.querySelector('.list-group-item:nth-child(3)')
// thirditem.style.visibility = "hidden";

//queryselectorAll

// var titles = document.querySelectorAll('.title');
// console.log(titles);

// titles[1].style.color = "blue";

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(let i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor = "green"
// }



// //parentNode
// var itemlist = document.querySelector('#items')
// // console.log(itemlist.parentNode);
// // itemlist.parentNode.style.backgroundColor = '#f4f4f4';
// // console.log(itemlist.parentNode.parentNode.parentNode);

// //parentelement is same as parentNode


// //childNodes
// // console.log(itemlist.childNodes);
// //it has a downside that it shows all the spaces between li tags as text.so we oftenly use children property


// //children
// console.log(itemlist.children);
// itemlist.children[1].style.backgroundColor = "yellow";

// //firstChild is also give you all the spaces so it could be of no use to us.

// console.log(itemlist.firstChild);

// //firstelementChild

// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = "Hello 1";

// //same goes for lastchild and lastElementChild


// //nextSibling it works same as firstchild

// console.log(itemlist.nextSibling);

// //nextElementSibling

// console.log(itemlist.nextElementSibling);

// //previousSibling same gives us text.
// console.log(itemlist.previousSibling);
// //previousElementSibling
// console.log(itemlist.previousElementSibling);


//create Element

var newDiv = document.createElement('div');

//add class

newDiv.className = "Hello";

//add id

newDiv.id = "Hello 1";

//set attribute

newDiv.setAttribute('title', 'Hello World');

//create textNode

var newDivtext = document.createTextNode('Hello World');

newDiv.appendChild(newDivtext);

var container = document.querySelector('header .container')
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv,h1);

// inserting newElement
var newli = document.createElement('li');
console.log(newli);

var newlitext = document.createTextNode('Hello World');

newli.appendChild(newlitext);

var parentnode = document.getElementById('items') 

// console.log(parentnode);

console.log(parentnode.innerhtml);







