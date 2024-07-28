<h1>
<span style="background-color:rgb(243, 225, 79);padding:23px 5px 0 18px;margin-right:5px">JS</span><span> Tutorial</span>
</h1>

## Chapter 1 - Fundamentals
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

## Chapter 2 - Object Basics
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

## Chapter 3 - Data Types
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
- `for..of` - iterate over characters in a string
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

#### Map
The map stores values as key/value pairs. These are some of the most used map functions:
- `new Map()` – creates the map.
- `map.set(key, value)` – stores the value by the key.
- `map.get(key)` – returns the value by the key, undefined if key doesn’t exist in map.
- `map.has(key)` – returns true if the key exists, false otherwise.
- `map.delete(key)` – removes the element (the key/value pair) by the key.
- `map.clear()` – removes everything from the map.
- `map.size` – returns the current element count.

Maps, unlike simple objects, can use objects as keys.

- `map.keys()` – returns an iterable for the keys of the map.
- `map.values()` - returns an iterable for the values of the map.
- `map.entries()` - returns an iterable for the pairs `[key, value]` of the map. By default, `for..of` uses this iterable.

Map also has a forEach method.

There are various ways of initializing a map.
1. An array of key/value pairs. `new Map(array_of_pairs);`
2. An object; use the function `Object.entries(obj)`. `new Map(Object.entries(obj));`

`Object.entries` creates an array of key/value pairs from objects. The function `object.fromEntries` does the reverse; it takes an array of key/value pairs and returns an object constructed form the pairs. Utilizing this, we can construct a object from a map; `Object.fromEntries(map);`

#### Set
A set is a collection which contains a set of values which can only occur once. The following are few of the most common methods:
- `new Set([iterable])` – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
`set.add(value)` – adds a value, returns the set itself.
`set.delete(value)` – removes the value, returns true if value existed at the moment of the call, otherwise false.
`set.has(value)` – returns true if the value exists in the set, otherwise false.
`set.clear()` – removes everything from the set.
`set.size` – is the elements count.

If you call `set.add` to an already existing value, nothing happens.
Iteration over a set is possible with the `for..of` loop or the `forEach` method. Note: The `forEach` method for sets look like this: `set.forEach((value, valueAgain, set) => {});`. valueAgain exists for compatibility with `Map` whose functions have 3 legitamate arguments.
`set.keys()`, `set.values()`, `set.entries()`, all exist for compatibility with `Map` as well.

#### Iterating over Objects
- `Object.keys(obj)` - returns an array of keys
- `Object.values(obj)` - returns an array of values
- `Object.entries(obj)` - returns an array of key/value pairs.

These methods return actual arrays, not just iterables.
So, when you want to transform objects(for example, use `filter`, which objects do not support), you can do so by using `Object.entires`, then use the array methods, then use `Object.fromEntries` to transform the array back into an object.

#### Destructuring Assignments

There are situations where you might want to unpack arrays or objecs into variables. This is where a destructuring assignment, a syntax which does just that, is used.

##### Array Destructuring
Array destructuring is done by the following syntax:
```javascript
    let arr = [1, 2, 3];
    let [a, b, c] = arr; // a, b, c are each assigned 1, 2, 3
```
- by adding commas, you can 'throw away' unwanted elements. For example: `[a, , c]`
- This syntax actually works with any iterable, not just arrays.

When there are more elements than variables, the 'leftovers' are ommited from assignment. By putting a `...` in front of the last variable of the destructuring assignment, the 'leftovers' will be collected and assigned as an array to the variable with the `...`

When there are more variables than elements, the variables with no assignements will be assigned `undefined` on default. You can specify the default value(the value to take when no assignment is done) of each variable by using the `=` operator as normal.

##### Object Destructuring

The object destructuring syntax is similar to that used by the array. One thing to note is that the variable names should match the property names of the object. The order of the variables do not matter.

```javascript
let obj = {
    a: 10,
    b: "abc",
    c: True,
};

let {b, c, a} = obj; // The order doesn't matter
```

To assign the value of the properties of the object to different-named variables, use the colon to seperate the property name and the variable name. 

```javascript
let {a: var1, b: var2, c: var3} = obj;
```

Default value and the rest pattern `...` are used similarly to array destructuring.

Nested destructuring is also possible to destructure more complex arrays or objects which have arrays or objects as elements/properties.

When creating functions, by using objects as parameters and using destructuring to recieve parameters, you can provide default values for functions.

## Chapter 4 - Error Handling
#### Error Handling
##### The 'try...catch' syntax
The `try...catch` allows the code to do something reasonable rather than just 'die' when it encounters an error. 
```javascript
try {
    // code
} catch (err) {
    // handle error
}
```
This is the basic form of the `try...catch` syntax. The execution is as follows:
1. Excute the code in `try{...}`. 
2. If the code encounters an error, `try` execution is terminated and `catch(err)` will be executed.
3. If the code encounters no errors, `catch` is ignored and execution finishes normally after finishing execution of `try`.
##### Errors
When a script encounters an error, an error object is generated and passed to `catch`. The object has two main properties: `name`, which contains the name of the error, and `message`, which contains the details. Another property which is useful is the `stack` property which is a strint containing information about the stack of calls which led to the error.

You can throw your own errors by using `throw`:
```javascript
throw <error object>
```
There are many built-in constructors for errors such as `Error`, `SyntaxError`, `RefererError`, and `TypeError`. The syntax to construct an error using these constructors is:
```javascript
let error = new SyntaxError(errorMessage);
```

##### Rethrowing

Using the `throw` syntax, you can employ a technique called 'rethrowing' to handle errors more elegantly. In a simple `try...catch` statment, every error goes to `catch`. This might result in `catch` running the wrong code for an error which was intended to be executed when a different type of error was encountered. Therefore, `catch` should only process the errors it 'knows'. Rethrowing acheives this by checking the error type and 'rethrowing', i.e., using the `throw` syntax to throw the error if it isn't a error that it is meant to process.
```javascript
try {
    // code
} catch(err) {
    if(err instanceof SyntaxError) {
        // code
    }
    else {
        throw(err); //rethrow
    }
}
```
Now it is possible to have multiple 'layers' of `try...catch` statements to process errors elegantly:
```javascript
function func() {
    // code
    try {
        // code
    } catch(err) {
        if(err instanceof SyntaxError) {
            // code
        }
        else {
            throw err; //rethrow
        }
    }
}

try {
    func();
} catch(err) {
    // code; this catch statement processes the errors which the catch statement in func rethrows.
}
```

##### The 'finally' statement

Finally, there is a statment called `finally` which can come after the `catch` statement. `finally` is always executed regardless of wether the script encounters an error or not.
```javascript
try {
    // code
} catch (err) {
    // code; executes if try encounters an error.
} finally {
    // code; is guaranteed to execue.
}
```

#### Custom Errors
##### Extending Error
While technically anything can be used as an error object, it is better to inherit from the base `Error` object. The basic syntax is:
```javascript
class SomeError extends Error {
    constructor(message) {
        super(message);
        this.name = "SomeError";
    }
}
```
##### Wrapping Exceptions
A script may generate many different types of error. If you don't want to check every time for specific errors, but would like to just check for a general class of errors, you can employ a technique called 'wrapping exceptions' to achieve this. The idea is to first make a new error class that represents the general error class. Then, when the script encounters an error, it will throw an error of the general class instead. The general error class will have a reference to the original error.
```javascript
class GeneralError extends Error {
    constructor(message, cause) {
        super(message);
        this.name = "GeneralError";
        this.cause=cause;
    }
}


function func() {
    try {
        // code
    } catch (e) {
        if(e instanceof SyntaxError) {
            throw new GeneralError("SyntaxError", e);
        }
    }

    try {
        // code
    } catch (e) {
        if(e instanceof ReferenceError) {
            throw new GeneralError("ReferenceError", e);
        }
    }
}

try {
    func();
} catch (e) {
    if(e instanceof GeneralError) {
        // code
    }
    else {
        throw e;
    }
}
```
