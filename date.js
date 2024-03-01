//dates in javascript

let mydate = new Date();

console.log(mydate);
console.log("Current Year",                       mydate.getFullYear()   );
console.log("Current Month",                      mydate.getMonth()      );
console.log("Current Day",                        mydate.getDay()        );     //today is wednesday so the result will be 3
console.log("Current Hour",                       mydate.getUTCHours()   );
console.log("Current Minutes",                    mydate.getMinutes()    );
console.log("Current Seconds",                    mydate.getSeconds()    );
console.log("Current MilliSecond",                mydate.getMilliseconds());
console.log("Current Time Zone Off set",          mydate.getTimezoneOffset());
console.log("Current Time In Seconds",            mydate.getTime()       );


//sunday will be on index 0, monday on 1, tuesday on 2 and wednesday on 3. an so on index 6 will be satuday.

