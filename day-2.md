### Q5. What are the different types of function? Explain each in detail with example. Explain the working of this in each type.

* A function allows you to define a block of code, give it a name and then execute it as many times as you want.
* A JavaScript function can be defined using function keyword.
```
//defining a function
function abc()
{
    // code to be executed
};

//calling a function
abc();
```
* A function can have one or more parameters, which will be supplied by the calling code and can be used inside a function. JavaScript is a dynamic type scripting language, so a function parameter can have value of any data type.
* example:

```
function add(a,b){
return a+b;
}
console.log(add(2,3))//prints 5
```
2. Anonymous Funtion 
* JavaScript allows us to define a function without any name. This unnamed function is called anonymous function.
* Anonymous function must be assigned to a variable.
* Example:
```
let a= getsum(a,b)
{
return a+b;
}
console.log(getsum(2,3))//prints 5
```
3. Arrow Function 
* Syntax for arrow functions:
```
let a=() =>{
}
a();//calling the function
```
* the context inside arrow functions is lexically or statically defined.


### Q6.What is NodeJS? Explain the event loop with example.

* Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.

* Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.
 
 #### Features of node js
 *  Asynchronous and Event Driven − All APIs of Node.js library are asynchronous, that is, non-blocking. It essentially means a Node.js based server never waits for an API to return data. The server moves to the next API after calling it and a notification mechanism of Events of Node.js helps the server to get a response from the previous API call.

* Very Fast − Being built on Google Chrome's V8 JavaScript Engine, Node.js library is very fast in code execution.

* Single Threaded but Highly Scalable − Node.js uses a single threaded model with event looping. 

* No Buffering − Node.js applications never buffer any data. These applications simply output the data in chunks.

#### Event Loop

* Javascript is a singlethreaded language.
* JavaScript has a single call stack in which it keeps track of what function we’re currently executing and what function is to be executed after that.

* When you’re about to execute a function it is added on the call stack.
* setTimeout() and setInterval() occurs in async.
* Example:
```
console.log("a")
setTimeout( ()=>{
console.log("b");
};3000);
console.log("c");
```
* A request comes in, and JS engine starts executing the code above step by step. The first call is sync call. But when it comes to setTimeout method, it becomes an async execution. But JS immediately returns from it and continue executing, which is called Non-Blocking or Async. And it continues working on other etc.
* The result of the above example is .
``` 
acb
```
* Async takes place in the background .for a good user experience we have async and event loop.
* JS Engine keeps executing this and unless it finishes the first request, it won't go to second one. But the good thing is that it won't wait for blocking operations like setTimeout to resolve so it will be faster because it accepts the new incoming requests.
* The Event Loop is a queue of callback functions. When an async function executes, the callback function is pushed into the queue. The JavaScript engine doesn't start processing the event loop until the code after an async function has executed.

### Q7. What is Promise? How do you create a promise? Explain with an example.

* A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. 
* This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.
 * Syntax for  Promise
 ``` 
 let a= new promise((resolve,reject) =>{
 resolve("hi")
 });
 a.then(value)=>
 {
 console.log(value);}
 );
 ```
 * A Promise is in one of these states:

** pending: initial state, neither fulfilled nor rejected.
** fulfilled: meaning that the operation completed successfully.
** rejected: meaning that the operation failed.
 
 ---
