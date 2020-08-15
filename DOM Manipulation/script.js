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

// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';

// var input=document.querySelector('input');
// input.value='hello world';

// var submit=document.querySelector('input[type="submit"]');
// submit.value="send";


// var item=document.querySelector('.list-group-item');
// item.style.color='red';

// var lastitem=document.querySelector('.list-group-item:last-child');
// lastitem.style.color='blue';

// var seconditem=document.querySelector('.list-group-item:nth-child(2)')

// seconditem.style.color='coral';

// // Query Selector will give Nodelist similart to Arrays use Array methods
// var titles=document.querySelectorAll('.title');
// //console.log(titles);
// titles[0].textContent='Hello';
// var odd=document.querySelectorAll('li:nth-child(odd');
// var even=document.querySelectorAll('li:nth-child(even');

// for (let index = 0; index < odd.length; index++) {
//     odd[index].style.backgroundColor='#f4f4f4';
//     even[index].style.backgroundColor='#ccc';
    
// }

// // Traversing the Dom //

// var itemList=document.querySelector('#items');
// //Parent Node
// //console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundColor='#f4f4f4';
// // console.log(itemList.parentNode.parentNode);
// // console.log(itemList.parentNode.parentNode.parentNode);

// //Child Node-Will takeline break-Nodelist
// //console.log(itemList.childNodes);
// //console.log(itemList.children);//Gives Collection

// itemList.children[0].style.backgroundColor='yellow';

// //First child

// //console.log(itemList.firstChild);//Gives Line break
// //console.log(itemList.firstElementChild);//Gives first child
// // first child and last child
// itemList.firstElementChild.textContent="Hello 1";

// itemList.lastElementChild.textContent='Hello 4';

// // Siblings
// //Next sibling:
// console.log(itemList.nextElementSibling);

// // Previous Sibling:
// //console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color="Red";
// //console.log(itemList.previousElementSibling.previousElementSibling);

// // Create New html elements
// var newDiv=document.createElement('div');


// //add Class,id,property

// newDiv.className="Hello";
// newDiv.id="HelId";
// newDiv.setAttribute('title','hello div')

// //console.log(newDiv);
// // Add Text Node

// var newDivText=document.createTextNode("Hello World");
// // Link text node to previous
// newDiv.appendChild(newDivText);
// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1');

// newDiv.style.fontSize='30px';
// // Insert element into dom
// container.insertBefore(newDiv,h1);

// ------------------------------------------------------------------------//
// Events Listener

//Button CLick
// var button=document.getElementById('button').addEventListener('click',buttonClick)
//function buttonClick(e){
    //console.log(e.target);
    //console.log(e.target.className);
    //console.log(e.target.classList);
    //console.log(e.target.id);
    //console.log(e.target.value);
    //console.log('hi');
    //document.getElementById('header-title').textContent="changed";
    //document.querySelector('#main').style.backgroundColor='#f4f4f4';
    // var output=document.getElementById('output');
    // output.innerHTML='<h3>'+e.target.id+'</h3>';
    // console.log(e.type);
    // console.log(e.clientY);
    // console.log(e.offsetX);
    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);

//}
// var button=document.getElementById('button');
// var box=document.getElementById('box');
// var output=document.getElementById('output');
// var select=document.querySelector('select');
// var form =document.querySelector('form');
// // button.addEventListener('click',runEvent);
// // button.addEventListener('dblclick',runEvent);
// // button.addEventListener('mousedown',runEvent);
// // button.addEventListener('mouseup',runEvent);

// // box.addEventListener('mouseenter',runEvent);
// // box.addEventListener('mouseleave',runEvent);

// // box.addEventListener('mouseover',runEvent);
// // box.addEventListener('mouseout',runEvent);
// //box.addEventListener('mousemove',runEvent);

// var itemInput=document.querySelector('input[type="text"]');
// //itemInput.addEventListener('keydown',runEvent);
// //itemInput.addEventListener('keyup',runEvent);
// //itemInput.addEventListener('keypress',runEvent);

// // itemInput.addEventListener('focus',runEvent);
// // itemInput.addEventListener('blur',runEvent);

// // itemInput.addEventListener('cut',runEvent);
// // itemInput.addEventListener('paste',runEvent);

// itemInput.addEventListener('input',runEvent);

// select.addEventListener('change',runEvent);
// select.addEventListener('input',runEvent);

// form.addEventListener('submit',runEvent);
// function runEvent(e){
//     e.preventDefault();
//      console.log('Event type:'+e.type);
//     //  console.log(e.target.value);
//     // output.innerHTML='<h3>MouseX:'+e.offsetX+'<h3>MouseY:'+e.offsetY;
//     //output.innerHTML='<h3>'+e.target.value+'</h3>';
//     // document.body.style.backgroundColor='rgb('+e.offsetX+','+e.offsetY+',40)'
//     // document.body.style.display='none';
// }


// Final Project

var form=document.getElementById('addform');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');
// Form Submit
form.addEventListener('submit',addItem);
// Delete item
itemList.addEventListener('click',deleteItem);
// filter item
filter.addEventListener('keyup',filterItems);

function filterItems(e){
    // convert to lower case
    var text=e.target.value.toLowerCase();
    var items=itemList.getElementsByTagName('li');
    // convert collection to array
    Array.from(items).forEach((item)=>{
        var itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    })
}


function deleteItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);

        }
    }

}

function addItem(e){
    e.preventDefault();
    
    // Get input li
    var newItem=document.getElementById('input').value;


    // Create new element
    var li=document.createElement('li');

    // Add class
    li.className='list-group-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create delete button elemtnt
    var delbtn=document.createElement('button');

    // Add class
    delbtn.className='btn btn-danger btn-sm float-right delete';

    // Append Text Node
    delbtn.appendChild(document.createTextNode('X'));

    // Add button plus li
    li.appendChild(delbtn);

    // Append li to list
    itemList.appendChild(li);

}