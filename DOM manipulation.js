//DOM manipulation

let myid = document.getElementById('click');
console.log(myid);

let myclass = document.getElementsByClassName('container');
console.log(myclass);

// myclass[0].style.background = "yellow"
myclass[1].style.background = "orange"

myclass[0].classList.add("bg-primary");
myclass[0].classList.add("text-success");

myclass[1].classList.add("text-success"); //the class text-success with css property will be applied with this class

myclass[1].classList.remove("text-success");  //the class text-success with css property will be removed


myclass[0].innerHTML //these two will be run on the console only
myclass[0].innerText


console.log(myclass[0].innerText) 



let tag2 = document.getElementsByTagName("button")
console.log(tag2);

let tag = document.getElementsByTagName("div")
console.log(tag);


createdelement = document.createElement('p');
createdelement.innerText = "This is a created element paragraph";
myclass[0].appendChild(createdelement);
// or
// tag[0].appendChild(createdelement);

createdelemenT = document.createElement('b');
createdelemenT.innerText = "This is a Created Bold Element"
tag[1].classList.add("txt-decor")


tag[0].replaceChild(createdelemenT, createdelement);  // comment out one at a time. this line or the next line to better know what it is doing

tag[1].appendChild(createdelemenT);

//tag[1].remove();



//selecting using queries

sel = document.querySelector('.container')
console.log(sel)

sel = document.querySelectorAll('container')
console.log(sel)
