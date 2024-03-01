//function
function addition(a,b){
    return a+b;

}

//arrow function
additionn = (a,b)=>{
    return a+b;
}



//setTimeout and SetInterval 
//set timeout is used to sechedule
logkaro = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b>set timeout fired  </b>"
    console.log("i am your log")
}
logkaro2 = ()=>{
    document.querySelectorAll('.container')[1].innerHTML = "<b> set timeout fired here we go </b>"
    console.log("i am your log")
}

//setTimeout(logkaro, 6000);  //first argument is a function and 2nd is time in milisecond

setInterval(logkaro2, 2000);  

setInterval(logkaro,4000); //when you want a function to keep running after some interval

// clr = setTimeout(logkaro, 6000);
// use clearInterval/clearTimeout to cancel setInterval/setTimeout

clickkaro = ()=>{
    document.getElementById('mycheck').click();
    console.log("checkbox is checked")

}

setInterval(clickkaro,1000);