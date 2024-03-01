//LOOPS IN JAVASCRIPT

//FOR LOOP

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/*
for(i=0;i<arr.length; i++){
    console.log(arr[i]);
}
*/
console.log("yaha se for loop print krenge")

arr.forEach(function (element) {
    console.log(element);
})


//let num3 = 50; //this is a block level variable

//const bc = 23; //const is used when you don't want to change the variable values again andf again

//WHILE LOOP
console.log("yaha se while loop print krenge")

let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}

console.log("yaha se do while loop print krenge")

//DO WHILE LOOP

do{
    console.log(arr[j]);
    j++;
}while (j < arr.length);



//BREAK
console.log("break statement using for loop")

for(i=0;i<arr.length; i++){
    if(i==3){
        break;
    }
    console.log(arr[i]);
}

//CONTINUE
console.log("continue statement using for loop")

for(i=0; i<arr.length; i++){
    if(i==3){
        continue;
    }
    console.log(arr[i]);
}
