
<h1 style="background-color:rgb(243, 225, 79);display:inline-block;padding:23px 5px 0 18px;margin-right:5px">JS</h1><h1 style="display:inline;"> Tutorial</h1>

## Chapter 1
####  Defining Variables
There are 3 types of variables:
1. `let` - can change
2. `const` - cannot change
3. `var` - don't use

#### Data Types
There are 8 data types in js.
1. Number - includes both integers and floats. Also includes Infinity, -Infinity, and NaN.
2. BigInt
3. String - there is no char type in js.
4. Boolean
5. null - when you want to assign an 'empty' value
6. undefined - when a variable's value is unassigned. Don't usually assign this value to a variable; use null instead.
7. Objets
8. Symbols

typeof operator: 
```javascript
typeof variable // returns type name (e.g. "string")

```

#### Type Conversion
```javascript
Typename(variable) // converts to type. E.g. Number("1239") => 1239
```

#### Type Comparison
Javascript compares variables of the same data type in the same way as other languages. However, when comparing varaibles which have different data types, javascript converts both to Number. When you want to avoid this automatic type conversion, use strict equality `===` instead. Concerning null and undefined, they are strictly unequal but when using non-strict equality, they are equal only to each other and themselves. 

#### Logical Operators
OR `||` and AND `&&` use short-circuit evaluation, i.e., they stop evaluation when they find the first truthy / falsey value.

#### Nullish Coalescing Operator
The nullish coalescing operator `??` is a binary operator which returns the first operand is it isn't null or undefined, and the second operand if it is. A typical example of a nullish coalescing operator being used is when you want to provide a default value for a variable; the expression `value ?? default_value` returns the default value if the value is unavailable.

#### Loops
You can use labels to label your loops. Then, you can target break or continue statments at a specific loop in your code.
```javascript
    outer: for(let i = 0; i < 10; i++) {
        inner: for(let j = 0; j < 10; j++) {
            if(some_expression == false) {
                break outer;
            }
        }
    }
```

#### Functions
In javascript, a function is a value which can be stored in a variable like any other value. 
default values for parmeters:
```javascript
function functionTest(a, b="default valuse") {
    // do something
}
```

## Chapter 2
#### Objects
Objects are a key-value pair.
```javascript
let object = {
    prop1: 10,
    prop2: "abc",
};
```
adding and removing properties:
```javascript
object.prop3 = null;
delete object.prop1;
```
For multiword properties, use quotes.
```javascript
object["long name prop"] = true;
```
We can compute property names when deifning a object literal:
```javascript
let object = {
    [propname]: 10,
}
```
To test if a property exists, use the 'in' operator.
```javascript
"key" in object
```
It is possible to loop over properties of an object using the for..in loop.
```javascript
for(let prop in object) {
    // do something
}
```
#### Object References and Copying
While primitive types are stored as values, objects are stored as references. Therefore, assigning a object's reference to another variable does not perform a copy. Rather, use Object.assign instead.
```javascript
let dest = { name: "dest" };
let obj1 = { prop1: 0 };
let obj2 = { prop2: "abc" };
Object.assign(dest, obj1, obj2); // this copies all the properties of obj1 and obj2 into dest. 

Object.assign({}, obj1); // this performs a simple shallow copy. 
```
Object.assign only performs a shallow copy. To perform a deep copy, use structuredClone instead.
```javascript
let clone = structuredClone(obj1);
```
#### Object Methods and 'this'
The `this` keyword is used in a method to access the object containing that method. In Javascript, `this` is not bound, and is evaluated at runtime.
#### Constructor Functions
When the need arises to create many similar objects, a constructor function is used. The convention is to capitalize the first letter of the function and use the 'new' keyword.
```javascript
function TestObject(prop1, prop2) {
    // this = {}; this is implicit.
    this.prop1 = prop1;
    this.prop2 = prop2;
    this.prop3 = "abc";
    // return this; this too is implicit.
}

const obj1 = new TestObject(10, true);
```
#### Optional Chaning
When programming in javascript, you oftnn run into a situation where the property of an object you are trying to access does not exist. Usually, this results in an error. However, optional chaining makes it possible to access properties safely without the need to worry about errors. When a property is undefined or null, optional chaining returns undefined and stops evaluation. 
```javascript
alert(object?.prop1?.prop2?.prop3);
```
For functions or property access with brackets, `.?()` and `.?[]` are used.
#### Symbols
symbols are primitive values which are always unique. The syntax to define them is as follows:
```javascript
let symbol = Symbol("description");
let symbol2 = Symbol("description");
console.log(symbol === symbol2); // false

```
Symbols are unique even if they have the same name. But when you want to define global symbols, use the following syntax:
```javascript
let symbol = Symbol.for("name");
let symobl2 = Symbol.for("name);
console.log(symbol === symbol2); // true
```
Use `Symbol.keyFor(symbol)` to access the name of a symbol by it's value.

## Chapter 3
#### Methods of primitives
Primitives, unlike objects, do not have methods. However, one can still use primitives' 'methods'. This is possible because of 'object wrappers' which created when accessing the method and destroyed afterwards.
#### Numbers
The following are some of the most common methods for numbers.
- `toString(base)` - converts a number to a string representation of the number in the base given.
- `Math.floor(value)`
- `Math.ceil(value)`
- `Math.round(value)`
- `Math.trunc(value)`
- `toFixed(n)` - rounds the number to n digits after the decimal point and returns the result as a string.
- `isNaN(value)` - converts the value to number, then tests if the number is NaN.
- `isFinite(value)` - converts the value to number, then tests if the number is not NaN/Infinity/-Infinity.
- `Number.isNan(value)`, `Number.isInfinite(value)` - stricter, in the sense that it does not autoconvert to number.
- `parseInt(value)`, `parseFloat(value)` - the unary plus `+` and `Number()` are strict; they do not work if the value contains values other than digits. ParseInt/Float, however, processes the value until it can't and then returns the result. Thus, It can process values like 100px.
- `Math.random()`
- `Math.max(a, b, c, ...)`
- `Math.min(a, b, c, ...)`
- `Math.pow(n, power)`
#### Strings
The following are some of the most common methods for strings.
- `str.at(pos)` - allows negative indexing too.
- `str.for..of` - iterate over characters in a string
- `str.toLowerCase()`
- `str.toUpperCase()`
- `str.indexOf(substr, pos)` - returns the starting position of the first occurrence of substr. Optional second parameter allows search to start from that position.
- `str.includes(substr, pos)` - returns true/false based on the occurrence of substr.
- `str.slice(start, end)`, `str.substring(start, end)` - basically the same
- `str.substr(start, length)`
- string comparisons - just use >, ==, <
- `str.trim()` - removes spaces from the beginning and end of the string
- `str.repeat(n)` - repeats the string n times.
#### Arrays
Declaration: 
```javascript
let arr = new Array();
let arr = [];
```
Accessing elements: use `arr.at(i)`
push, pop works as you would expect.
shift, unshift are pop/push but applied to the front of the array.
You can push/unshift multiple elements at once.
When looping over arrays, you can use the `for...of` loop. This only allows access to the value of the element, though.
#### Array Methods
- `arr.splice(start, deletecount, el1, el2, ...)` - deletes deletcount elements from the array starting form start, and inserts el1, el2, ... into the array. Returns an array containing the deleted elements.
- `arr.slice(start, end)` - creates a coppy of the array beginning and ending at start and end(end non inclusive).
- `arr.concat(arg1, arg2, ...)` - creates an array which concatenates arg1, arg2, ... to arr.
- `arr.forEach(function(item, index, array) {})` - runs the function for each item of the array
- `arr.indexOf(item, from)`, `arr.lastIndexOf(item, from)`, `inlcudes(item, from)` - works as expected. indexOf uses strict equality.
- `arr.find(function(item, index, array) {})` - returns item if the function returns true. `arr.findIndex` and `arr.findLastIndex` behaves as expected. 
- `arr.filter(func(item, index, array) {})` - returns an array of items for which func returns true.
- `arr.map(func(item, index, array) {})` - applies the function to each item in the array and returns the resulting array.
- `arr.sort(sortfunc())` - sorts the array. Items are sorted as strings by default. Takes optional function argument which compares two elements to decide sorting order. A positive return value means first element is larger than second, and other values follow.
- `arr.reverse()` - reverses `arr`.
- `str.split(delim)` - splits the string into an array by the given delimiter `delim`. 
- `arr.join(glue)` - reverse of `split`. Joins the items of `arr` with `glue` between them.
- `arr.reduce(function(accumulator, item, index, array) {}, inital)` - runs the function for every item in the array, and accumulates the result. The initial value of the `accumulator` is `initial`. `arr.reduceRight` behaves similarly, but starts from the right.
- `Array.isArray(arr)` - checks if arr is an array.
#### Iterables
Iterables can be thought of as a generalization of the array. A more rigorous definition is that they are objects which implement the Symbol.iterator method. Examples of iterables include arrays and strings. Iterables are able to be looped over by the `for..of` loop.

The `for..of` of a iterable works in the following process(we look at `for..of` loops here but this process can be easily generalized for any other loop which iterates over an iterable):
1. The `for..of` loop calls a method of the iterable called `Symbol.iterator`. This symbol is reserved just for this purpose.
2. The method `Symbol.iterator` must return an *iterator* - an object which must have a method `next`. The method `next` must return an object of the form `{done:.., value:..,}`. Value is the value passed to `for..of`, and `done` is a boolean value indicating whether the iteration is finished or not.
3. The `for..of` loop calls `next` repeatedly. If the value of `done` is true, the loop ends. Otherwise, `value` is the next value of the loop.

For example, the following is an implementation of a iterable `range`, which when used with a `for..of` loop results in a iteration over numbers from `from` to `to`.
```javascript
let range = {
    from: 0,
    to: 5,
}

range[Symbol.iterator] = function() {
    return { //the iterator object
        cur: this.from,
        to: this.to,
        next: function() {
            if(this.cur >= this.to) return {done: true};
            else return {done: false, value: this.cur++};
        }
    }
}

for (let val of range) {
    console.log(val); //results in 01234
}
```

Besides the `for..of` loop there are other ways to use iterables:
1. Looping manually over iterables without `for..of`. This allows you to have more control over the iteration process.
2. `Array.from(iterable, mapfunc)` - iterates over an iterable and returns an array of the results. An optional `mapfunc` can be provided, and when provided will apply the function to all the values before constructing the array.




