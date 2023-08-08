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
//var header =document.querySelector('#main-header');
//header.style.borderBottom ='solid 4px #ccc';

//var input=document.querySelector('input');
//input.value="WHAT DO YOU WANT"

//var submit=document.querySelector('input[type="submit"]');
//submit.value="LAUNCH"

//var item=document.querySelector('.list-group-item');
//item.style.color='red';

//var secondItem=document.querySelector
//('.list-group-item:nth-child(2)');
//secondItem.style.color='blue'; 


//QUERYSELECTORALL
var titles=document.querySelectorAll('.title');
console.log(titles);

titles[0].textContent='MORNING STAR';

var odd=document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}