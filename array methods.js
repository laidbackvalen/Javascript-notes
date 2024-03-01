//ARRAY METHODS
console.log("array methods")
console.log("printing array length")


let MyArr = ['valen' , "kavisha's phone" , 7517770046, null, true]

console.log(MyArr.length)

//pop()
console.log("this will pop out or delet the last element from array")

MyArr.pop()

console.log(MyArr)


//push()
console.log("this will push or add an element in an array")

MyArr.push("tainsa")  //tainsa will be added to the array

console.log(MyArr)



//shift()
console.log("this will delete the first element in an array")

MyArr.shift()  //valen will be deleted from and array

console.log(MyArr)



//unshift
console.log("this will add a new element as a the first element in an array")

//MyArr.unshift("patel we are")  // patel we are will be added in the first place in array

console.log(MyArr)



//this will return the new length of an array
console.log("new length after unshift function applied")
//console.log(MyArr.unshift("patel we are"))



const new_leng_myarr = MyArr.unshift("patel we are")
console.log(new_leng_myarr);
console.log(MyArr);



//MyArr.toString()   //METHOD
//MyArr.sort()       //METHOD
console.log(MyArr.toString())  //if you directly want to run this on browser console than only use MyArr.toString() 
console.log(MyArr.sort())

//FOR MORE ARRAY METHOD REFERENCE : https://www.w3schools.com/jsref/jsref_obj_array.asp