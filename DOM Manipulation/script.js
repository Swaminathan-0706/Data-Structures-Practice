//Examine Document Object

//console.dir(document)

//console.log(document.body);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);

// Gives all collection/Array of html document
// console.log(document.all);
// console.log(document.all[10]);

// document.all[10].textContent="hello";

// console.log(document.forms);
// console.log(document.links);
// Selectors
// Get element by ID

//console.log(document.getElementById('header-title'));

var headertitle=document.getElementById('header-title');
var header=document.getElementById('main-header');
//headertitle.textContent="Hello";
//headertitle.innerText="Hi";

//Textcontent=Omits style
// innertext=Takes style also in consideration
// Innerhtml-adds htmltags insideparent


// headertitle.innerHTML='<h3>Hello</h3>';
// console.log(headertitle);


//Adding styles

header.style.borderBottom="solid 3px #000";


// Get elements by Class name//-Gives Collection

// var listItems=document.getElementsByClassName('list-group-item');
// console.log(listItems);

// listItems[1].textContent="Hello 2";
// listItems[1].style.fontWeight='bold';
// listItems[1].style.backgroundColor='yellow';


// //Iterate collection thru For Loop
// for (let index = 0; index < listItems.length; index++) {
//     listItems[index].style.backgroundColor='gray';
    
// }


// Get element by Tag name:-gives Collection

// var listItems=document.getElementsByTagName('li');
// console.log(listItems);

// listItems[1].textContent="Hello 2";
// listItems[1].style.fontWeight='bold';
// listItems[1].style.backgroundColor='yellow';


// //Iterate collection thru For Loop
// for (let index = 0; index < listItems.length; index++) {
//     listItems[index].style.backgroundColor='gray';
    
// }

// Query Selector-one time work like jquery
// Query Selector all -all items

var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #ccc';

var input=document.querySelector('input');
input.value='hello world';

var submit=document.querySelector('input[type="submit"]');
submit.value="send";


var item=document.querySelector('.list-group-item');
item.style.color='red';

var lastitem=document.querySelector('.list-group-item:last-child');
lastitem.style.color='blue';

var seconditem=document.querySelector('.list-group-item:nth-child(2)')

seconditem.style.color='coral';

// Query Selector will give Nodelist similart to Arrays use Array methods
var titles=document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent='Hello';
var odd=document.querySelectorAll('li:nth-child(odd');
var even=document.querySelectorAll('li:nth-child(even');

for (let index = 0; index < odd.length; index++) {
    odd[index].style.backgroundColor='#f4f4f4';
    even[index].style.backgroundColor='#ccc';
    
}


