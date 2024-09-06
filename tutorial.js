// console.log('Hello Word')
console.log("Hello Word")


// Java Script Variables
// Assignment operator
let x=4; 
console.log('The value of x is ' +x); // single quotation
console.log(`The value of x is ${x}`); // backtick

var y=5;
var y=6;
console.log(y);


let z=7;
// let z=8
console.log(z);

const a = 12;
console.log(a);

const full_Sname = ' Bishakha Datta';
console.log(full_Sname);


//------------------Day2----------------

// Javascript operators

let xa=5;
console.log(xa);

//Addition operator

let ab=6;
let bc=7;
let c=ab+bc;
console.log('The result will be ' + c)

// Sunstraction operator

let g=6;
let h=7;
let i=h-g;
console.log('The result will be ' + i)

// Multiplication operator

let d=6;
let e=7;
let f=d*e;
console.log('The result will be ' + f)


// Division operator

  // normal

  let j=20;
  let k=6;
  let u=j/k;
  let intergerquotient = parseInt(j /k);
  console.log('The result will be ' + u)
  console.log('The result will be ' + intergerquotient )


  //Modulas operator
    //reminder
  let m=20;
  let o=6;
  let xs=j%k;
  console.log('The result will be ' + xs)

  //Increment operator

  let p = 8;
  p++;
  p++;

  console.log('Increment result ' + p);

  //Decrement operator
  let q = 18;
  q--;
  q--;
  console.log('Decrement result ' + q);

  // Javascript Assignment operators
  // Addition assignment opertor

  let ar= 14;
  ar += 4; //a= a+4;
  console.log(ar);


//same for other assignment operators - * / %

//Comparison operator
//1. Equal to operator
let dc = 5;
let ec = 6;
console.log(dc==ec);

//2. not equal to operator

console.log(dc!=ec);

//3.greater than operator

console.log(dc>ec);

//4.less than operator

console.log(dc<ec);

//5. Greater than equal to
console.log(dc>=ec);

//6. less than equal to

console.log(dc<=ec);

 //7. Strich equal to operator

 let n = 5;
 let nm = '6';
 console.log(typeof(n));
 console.log(typeof(nm));
 console.log(n === nm);

 //8. Strict not eqaul to operator
 let ty='hello';
 let yt='world';
 console.log(typeof(ty));
 console.log(typeof(yt));
 console.log(ty !== yt);
 

// functions

function testFunction()
{
  console.log('hello world');
}
testFunction();


//return statement

function testFunc(x, y) {
 return x + y;
}
console.log(testFunc(4,8));



function testFunc1() {
  let y = 5;
  let r = 6;
  console.log(y * r)
}
testFunc1();

//Function with parameters

function testFunc2(x, y)
{
  console.log(x+y);
}
testFunc2(5, 6);

// local variable in function

function testFunc3() {
  let c = 5;
  let d = 6;
  console.log(c+d);
}
testFunc3();

// global varible in function

let en = 5;
let er = 9;

function testFunc4() {
  console.log(en+er);
}
testFunc4();
console.log (en +2);

// Arrow function

let arrowFunc = (x,y) => {
  console.log(x+y);
}
arrowFunc(2,3);

// Logical operator

//1. AND operator

let tf = 6;
let yn = 8;
let wf = 9;

if ( tf <yn && yn < wf) {
  console.log('hello');
}
else
{console.log('world')

}

//OR operator

if ( tf > yn || yn > wf) {
  console.log('hello');
}
else
{console.log('world')

}

