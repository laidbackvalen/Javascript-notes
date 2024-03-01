// OPERATORS IN JS

// ARITHMETIC OPERATOR

var num1 = 25;
var num2 = 35;

console.log("the value of num1 + num2 is ",num1+num2);
console.log("the value of num1 - num2 is ",num1-num2);
console.log("the value of num1 * num2 is ",num1*num2);
console.log("the value of num1 / num2 is ",num1/num2);



//ASSIGNMENT OPERATOR

var b = 100;

var c = b;    //c=b=100 c becomes 100 

c+=2;         //c+=2 means c+2 that is 100+2 = 102    //c = c+2
console.log(c) //102 will be printed here

c-=2            //c is 102 - 2 = 100
console.log(c)  //100 will be printed

c*=2           //c is 100 multiplies with 2 becomes 200
console.log(c) // 200 will be printed

c/=2           //c is 200 divided by 2 becomes 100
console.log(c) // 100 will be printed



//COMPARISON OPERATOR
var x = 20;
var y = 30;

console.log(x==y);   //checks the result and returns boolean "true or false"

console.log(x>=y);
console.log(x<=y);
console.log(x<y);
console.log(x>y);



//LOGICAL OPERATOR


//LOGICAL AND

//in and logical operator - both conditions should be true
//if any condition is not true tha it will return false

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


//LOGICAL OR

//in or operator one of the condition should be true to return true

console.log(true || true);         
console.log(true || false);
console.log(false || true);
console.log(false || false);


//LOGICAL NOT

//it makes true false and false true
//what is not true becomes false and what is false becomes true

console.log(!false)
console.log(!true)