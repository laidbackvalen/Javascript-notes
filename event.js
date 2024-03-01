// EVENTS IN JAVASCRPT
 
function clicked(){
    console.log('the button was clicked')
}


// firstcontainer.addEventListener('click', function(){
//     console.log("Clicked On Container")
// })

// firstcontainer.addEventListener('mouseover', function(){
//     console.log("mouse on container")
// })

// firstcontainer.addEventListener('mouseout', function(){
// console.log("mouse out of the container")})

let previoushtml = document.querySelectorAll('.container')[1].innerHTML;  //this is not neccessary i guess


firstcontainer.addEventListener('mouseup', function(){
console.log("mouse up")})

firstcontainer.addEventListener('mousedown', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b> we have clcked </b>"
console.log("mouse down")})