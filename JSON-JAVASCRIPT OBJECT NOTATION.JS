//javascript object notation

//JSON is used in JavaScript on the internet as an alternative to XML for organizing data. JSON is language-independent and can be combined with C++, Java, Python and many other languages. Unlike XML, which is a full markup language, JSON is simply a way to represent data structures.

//JSON stands for Javascript Object Notation. JSON is a text-based data format that is used to store and transfer data. For example, // JSON syntax { "name": "John", "age": 22, "gender": "male", } In JSON, the data are in key/value pairs separated by a comma

//What is JSON is used for?
// JavaScript Object Notation (JSON) is a standard text-based format for representing structured data based on JavaScript object syntax. It is commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, so it can be displayed on a web page, or vice versa)


obj = {name:"valen", college : "SIOM", tel: "7517770046", hobbies : ["riding", "eating", "playing"]}

jso =JSON.stringify(obj);  //used to convert the object into string
console.log(jso)
console.log( typeof jso)


parsed = JSON.parse(`{"name":"valen","college":"SIOM","tel":"7517770046","hobbies":["riding","eating","playing"]}`)  //used to convert string into object

console.log(parsed)
console.log(typeof parsed)
