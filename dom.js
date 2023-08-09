//EXAMINE THE DOCUMENT OBJECT//

//console.dir(document);
//console.log(document.title);
//console.log(document.URL);
//console.log(document.domain);
//console.log(document);
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent='HELLo';
//console.log(document.forms);
//console.log(document.links);

//GETELEMENTBYID

//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.textContent="HELLO";
//headerTitle.innerText="ITS HELL";

//GETELELMENTSBYCLASSNAME

//var items= document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent= 'TROLL';
//items[1].style.fontWeight= 'bold';
//items[2].style.backgroundColor='green';


//for(var i=0;i<items.length;i++){
  //  items[i].style.fontWeight= 'bold';
//} 


//GETELEMENTSBYTAGNAME

//var li= document.getElementsByTagName('list-group-item');
//console.log(li);
//console.log(li[1]);
//li[1].textContent= 'TROLL';
//li[1].style.fontWeight= 'bold';
//li[2].style.backgroundColor='green';


//for(var i=0;i<li.length;i++){
  //  li[i].style.fontWeight= 'bold';
//} 

//QUERYSELECTOR
var header =document.querySelector('#main-header');
header.style.borderBottom ='solid 4px #ccc';

var input=document.querySelector('input');
input.value="WHAT DO YOU WANT"

var submit=document.querySelector('input[type="submit"]');
submit.value="LAUNCH"

var item=document.querySelector('.list-group-item');
item.style.color='red';

var secondItem=document.querySelector
('.list-group-item:nth-child(2)');
secondItem.style.color='blue'; 


//QUERYSELECTORALL
var titles=document.querySelectorAll('.title');
console.log(titles);

titles[0].textContent='MORNING STAR';

var odd=document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}


//TRAVERSING THE DOM //

var itemList=document.querySelector('#items');
//parentnode

console.log(itemList.parentNode);
itemList.parentNode.style.backgrorundColor='grey';
console.log(itemList.parentNode.parentNode.parentNode);

//parentELEMENT 
console.log(itemList.parentElement);
itemList.parentElement.style.backgrorundColor='grey';
console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
//console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgrorundColor= 'yellow';

//firstChild
console.log(itemList.firstChild);

//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Wooh';

//lastChild
console.log(itemList.lastChild);

//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Woosh';


//nextSibling
console.log(itemList.nextSibling);

//nextElementSibling
console.log(itemList.nextElementSibling);

//previousElementSibling
console.log(itemList.previousElementSibling);

//previousSibling
console.log(itemList.previousSibling);

//createElement

//create a div
var newDiv=document.createElement('div');

newDiv.className='Hello';

//Add id
newDiv.id='hello1';

//add atr
newDiv.setAttribute('title' ,'Hello div');

//create text node
var newDivText=document.createTextNode('Hello World');

//Add text to div
newDiv.appendChild(newDivText)

console.log('newDiv');

