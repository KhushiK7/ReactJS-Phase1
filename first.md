# FIRST ASSIGNMENT
---
### Q2.What is the difference between interpreted and compiled language? Give examples for each.

#### Compiled Languages
1. Compiled languages are converted directly into machine code that the processor can execute.
1. They are faster and more efficient to execute than interpreted languages. 
1. They also give the developer more control over hardware aspects, like memory management and CPU usage.

1. Compiled languages need a “build” step - they need to be manually compiled first. You need to “rebuild” the program every time you need to make a change.
1. Platform dependence of the generated binary code.

1. Examples of  compiled languages are C,Java.
#### Advantages of Compiled language
1. They are faster as the program is converted into the language that machine understands.

#### Interpreted Language
1. Interpreters will run through a program line by line and execute each command.
1. Interpreted languages are slower than compiled languages.
1. An Interpreted language gives implementations some additional flexibility over compiled implementations. Because interpreters execute the source program code themselves, the code itself is platform independent (Java’s byte code, for example)
1. Examples of Interpreted Language : Javascript,Python.

### Q3.What are the different ways of defining a variable? Explain with examples. What is the disadvantage of using var?

 We dont write the datatype name in front of variable name in javascript as in C we used to write eg.int a =1 this indicates a is an integer ,but in javascript variables are declared in three types 
1. let 
2. const
3. var 
 let and const are the new ways used to define a variable ,they are used in ES6.String are javascript are given under '' , " ".

 let values can be changed anytime.

 ### Disadvantages of using var .

 var has scope constraints

 variables are assigned using let,const ,are only accessible in particular scope.

 var is not good because if we change the value of var then also it prints that first value only.

Use let when we have to  change the value of the variable.
Use const when we are sure that variable won't change
Using both let and const will keep  variables in the right scope and make code easier to manage.
 
 ## Examples

 1. ```const x = 20; ```

* for using const a value must be initialized otherwise it will throw an error.
* const can also be chained with commas separating each variable

   ``` const a=20,const b=30```
* changing the value of const is not allowed.
2. let 
* let shares a lot of similarities with var but unlike var has scope constraints. let is constrained to whichever scope it is declared in. Its declaration and assignment are similar to var. 

### Q4.What are the different types of Scopes in Javascript? Explain with examples each in detail.

The different types of scopes that exist in javascript are :
1. Global scope 

* Variables declared outside of any function become global variables. Global variables can be accessed and modified from any function.
* Variables inside the Global scope can be accessed and altered in any other scope.
 ```
  var name= 'Khushi';
  console.log(name);
  //prints khushi
  funtion pname(){
      concole.log(name);
  }
pname();//prints Khushi
```
* This is the example showing global scope the variables declared in the global scope can be accesed anywhere in the code.
2. Local Scope 
* Variables defined inside a function are in the local scope. And they have a different scope for every call of that function.
 *  variables having the same name can be used in different functions. This is because those variables are bound to their respective functions, each having different scopes, and are not accessible in other functions.
 ``` 
 function khush(){
//Local scope #1
 }
 function a(){
     //local scope #3
 } 
 ```

 3. Block scope 

 *  A block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block.

 * n ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block.

 ---
 ____







