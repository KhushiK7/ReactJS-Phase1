let a=[0,1,2,3,4,5,6,7,8,9];
console.log("Display 5th element element of the array")
let b=a[4];
console.log(b);
let c=a.push(10,11,12,13,14,15,16,17,18,19);
console.log("Add 10 elements")
console.log(a);
let d=a.pop(a);
console.log("last element deleted")
console.log(a);
console.log("last element that got  deleted")
console.log(d);
let e=a.shift(a[0]);
console.log("first element deleted");
console.log(a);
let f=a.unshift("khushi");
console.log(a);
let f1=a.indexOf("17");
console.log(f1);
let g=a.splice(11,1);
console.log("deleting an element at index 11")
console.log(a);
let h=a.splice(4,5);
console.log(h);
console.log("5 elements deleted from index 4 ");
console.log(a);
let i=a.map((value,i)=>
{
    return value*(i+1);
});
console.log(i);
let j=a.slice(7,8,9,10);
console.log(a);
const b1=["a","b",20,12,32,43,12,65,34,24,64,24];
let c1=[...b1,...a,];
console.log(c1);






