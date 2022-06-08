![GitHub commit activity](https://img.shields.io/github/commit-activity/m/Svendolin/All-about-Javascript?style=for-the-badge) ![GitHub contributors](https://img.shields.io/github/contributors/svendolin/All-about-Javascript?style=for-the-badge) ![GitHub forks](https://img.shields.io/github/forks/Svendolin/All-about-Javascript?color=pink&style=for-the-badge) ![GitHub last commit](https://img.shields.io/github/last-commit/Svendolin/All-about-Javascript?style=for-the-badge) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Svendolin/All-about-Javascript?color=yellow&style=for-the-badge)

---

<img align="left" alt="JavaScript" width="35px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" />

# &nbsp;- ALL ABOUT JAVASCRIPT / VANILLA JAVASCRIPT - 🔅

This "All about JAVASCRIPT"-repository catches up its focus on all the Javascript I've learned, coded, commented and written through the years as a **SAE-Web Development** student with exercise lessons every week as well as tutorial videos on _Youtube_.  
Direct Link to the place where I'm studying are you going to find [HERE](https://www.sae.edu/che/de?utm_source=PS01&gclid=Cj0KCQjw-4SLBhCVARIsACrhWLVIaD_aUt7y4brT7tqMW9o7tskgb1vjQqJFkzQwkwdN_40_Ls7MgAEaAtXxEALw_wcB)

What is Javascript:

- JavaScript (JS for short) is a scripting language originally developed by Netscape in 1995 for dynamic HTML in web browsers to evaluate user interactions, modify, reload or generate content, and thus extend the capabilities of HTML.

Why Javascript:

- Its after HTML (to define the content of web pages) and CSS (to specify the layout of web pages) one of the most important languages of all and here to program the behavior of web pages!

Javascript != Java:

- Both "Java" and "JavaScript" are trademarks and/or registered trademarks of Oracle in the USA or other countries. The two programming languages have very different syntax, semantics and usage.

About ES6:

- ECMAScript 6 or ES6 is the latest version of JavaScript and brings since 2016 great new features, such as variables, arrow functions, strings and arrays

<br />
<br />

---

## Folder Directory

---

- [00_Slides_and_notes](https://github.com/Svendolin/All-about-Javascript/tree/master/00_Slides_and_notes)
- [01_Basics](https://github.com/Svendolin/All-about-Javascript/tree/master/01_Basics)
- [02_Basics_Part2](https://github.com/Svendolin/All-about-Javascript/tree/master/02_Basics_Part2)
- [03_Basics_Part3](https://github.com/Svendolin/All-about-Javascript/tree/master/03_Basics_Part3)
- [04_Click_and_show](https://github.com/Svendolin/All-about-Javascript/tree/master/04_Click_and_show)
- [05_Calculator](https://github.com/Svendolin/All-about-Javascript/tree/master/05_Calculator)
- [06_Kitten_image_gallery](https://github.com/Svendolin/All-about-Javascript/tree/master/06_kitten_image_gallery)
- [07_FormValidation_with_JS]()

| Topic     | Content                                                                                                                                                                                                                                      |
| :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 00 Slides and Notes | Slides and notes which might be supportive for the whole project |
| 01 Basics | 01 `console.log()` // 02 `data types` of values like: (strings, numbers, arrays, boolean, objects) // 03 `operators` to control and manipulate varaibles (==, ===, !===, && and many more) // 04 `conditionals` are IF {} ELSE {} statements |
| 02 Basics II | 00 Exercises // 01 `loops for() and forEach()` // 02 `arrays` // 03 `objects` // 04 `strings`(string methods and template strings) // 05 `alert + confirm + prompt` // 06 `pop() push() shift() unshift()`|
| 03 Basics III | 01 `functions + arrow=>functions` // 02 `DOM Manipulation`| 
| 04 Click and Show | 01 Show Box by clicking a button // 02 Show RANDOM Box by clicking a circle |
| 05 Calculator | Functionable Calculator with Vanilla Javascript | 
| 06 Kitten Image Gallery | Clickable Kitten Images - the clicked image will be shown on a big screen |


<br />
<br />

## Important TERMS in Javascript: 📈

---

| Term (word):   | Explenation in German for a better personal understanding for myself:                                                                                                                                                                                            |
| :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **OBJECTS**    | "Sammlung von Datenwerten, Eigenschaften (Properties) z.B. = `const = Tasse {farbe: "blau", grösse: "mittel"}` etc                                                                                                                                               |
| **PROPERTIES** | Eigenschaft des Objektes: `Tasse.farbe` in dot-notation oder `Tasse["farbe"]` in bracket-notation welcher einen Wert (value) mitteilt                                                                                                                            |
| **VARIABLES**  | Behälter als "Speicherplatz" `const` mit unveränderlichem Namen, dazu Scope-Typ (const = konstant, unveränderlich, let = lokal wiederverwendbar, var = Gültigkeitsbereich auf allen Seiten) und genau einem Wert =>`let variable = 9`                            |
| **VALUES**     | Wert einer Eigenschaft: z.B. `"blau"` wie =>`let variable = "value"` / ("value" is a string)                                                                                                                                                                     |
| **METHODS**    | Methoden brauchen für ihren Aufruf immer ein zugehöriges Objekt und werden in einer Klasse definiert. Man kann sie somit gerne "Objektorientierte Funktionen mit Beziehung zur eingespeicherten Klasse" nennen... `public methode()` =>`getElementById()`        |
| **FUNCTIONS**  | "Eine Funktion ist eine Gruppe von Anweisungen, die durch einen Namen aufgerufen werden. Beim Aufruf der Funktion können Daten übergeben werden, um sie innerhalb der Funktion zu bearbeiten." WICHTIG: Funktion immer beim Namen aufrufen, um sie zu aktivieren |

<br>
<br>

---

## Basic Javascript-Stuff in a Nutshell 🥜

---

_**What are DATA TYPES ?**_

- Data types describe the different types or kinds of data that we’re gonna be working with and storing in variables.

```js
/* ---- Data Types ---- */

// 1) (Strings = Not mutable "Zeichenketten")
let person_name = "Victor";
    //Character Escaping:
    let myString1 = "He didn't do it"
    let myString2 = '"This is a quote"'
    // Character Escaping with \:
    let alternative1 = 'He didn\'t do it'
    let alternative2 = "\"This is a quote\""
    //Template Strings using ``:
    let text = `The quick brown fox jumps over
                the lazy dog`;
    //Interpolation (interpolate variables into strings) with ${...}:
    let firstName = "John";
    let lastName = "Doe";
    let text = `Welcome, ${firstName} ${lastName}!`; // Welcome, John Doe!

// 2) (Numbers = "Zahlen")
let person_age = 41;

// 3) (Boolean = Decision if true or false)
let person_alive = true;

// 4) (Array = List of Values)
let person_parents = ["Maria", "Peter", "Tom", "Dave", "Lisa", "Paul"];

// 5) (Objects = Container of a collection of Data)
let person = {
  name: "Victor",
  age: 41,
  alive: true,
  parents: ["Maria", "Peter"],
};

// 6) Undefined: Not defined (variable has been declared but no assigned value) => "let toiletpaperholder"

// 7) Null: No value (EMPTY AND NON-EXISTENT) => "let toiletpaperholder = null"
```

![alt text](https://i.stack.imgur.com/T9M2J.png)

<br />

_**What are OPERATORS?**_

- Operators in Javascript help us to control and manipulate variables in many ways

```js
/* ---- Operators ---- */
// (=) The assigment operator
let myNum = 24;

// (+) Addition operator
let myStr1 = "Hello";
let myStr2 = "World";
let separator = " ";
let conc = myStr1 + separator + myStr2;
console.log(conc);

// (-) and (*) and (/) (- Substraction operator) (* multiplication operator) (/ division operator)
let someNumber = 15;
console.log(myNum - someNumber); // -76 (Number)
console.log(myNum * someNumber); // 2400 (Number)
console.log(myNum / someNumber); // 0.24 (Number)
console.log(24 * 32 - 200 + 3 * 4); // 580 (Number)

// (>) or (<) Bigger than vs smaller than operator
console.log(3 > 1); // True
console.log("foo" > "fo"); // True (amount of letters)

// (==) Equal operator
console.log("100" == 100); // True

// (===) Strictly equal operator
console.log(someNumber === 100); // false

// (<=) and (=>)Bigger-or equal than vs smaller-or equal than
console.log(someNumber <= 100); // true
console.log(someNumber >= 100); // false

// (!=) and (!==) NOT operator (!)
console.log(someNumber != 100); // ==
console.log(someNumber !== 100); // ===

// (&&) AND Operator
console.log(100 > 80 && 100 < 200); // true
console.log(100 > 80 && 300 < 200); // false

// (||) OR Operator
console.log(100 > 80 || 100 < 200); // true
console.log(100 > 80 || 300 < 200); // true

// (%) Modulus Operator
console.log(6 / 2); // 3
console.log(7 / 2); // 3.5
```

<br />

_**What are CONDITIONALS ?**_

- Conditional statements are used to perform different actions based on different conditions.
- Conditional statements control behavior in JavaScript and determine whether or not pieces of code can run

```js
/* ---- Classic IF / ELSE - Statement ---- */

if (pluggedIn === true && isOn === true) {
  console.log("Items are being displayed");
  if (item) {
    if (item === "Coffee") {
      if (current_beans >= min_beans && current_water >= min_water) {
        console.log("Coffee TIME :D");
      } else {
        console.log("Not enough Water or Coffee");
      }
    } else {
      console.log("Your item is not available at the moment");
    }
  } else {
    console.log("Please select an item");
  }
} else {
  console.log("Turn me on pls");
}
```

<br />

_**ITERATION: FOR-LOOP or FOREACH-LOOP with an arrow-function?**_

- Up until now, we've been doing our iterating with for loops. These are great for one-off tasks.
- BUT: Every array in JavaScript comes with the .forEach() method. This method lets us iterate over every element of the array directly:

```js
/* ---- for() VS forEach() ---- */

const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

const array2 = ["1", "2", "3"];

for (let i = 0; i < array2.length; i++) {
  console.log(array2[i]);
}

// expected output: "1"
// expected output: "2"
// expected output: "3"

/* ---- Manipulate Arrays ["foo","bas"] ---- */
```
![alt text](https://i.stack.imgur.com/1pQk8.jpg)
<br />

_**FUNCTIONS and ARROW=>FUNCTIONS:**_

- A function in JavaScript is similar to a procedure, a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.
- A JavaScript function is a block of code designed to perform a particular task.
- A JavaScript function is executed when "something" invokes it (calls it).

```js
/* ---- Function declaration ---- */

// Function declarations are pushed to the top due to js hoisting:
console.log(square(4)) // 16
// Function was called above, parameter n was filled with a number. This here is the built up of the function:
function square ( n ) {
  return n * n
}

// in Arrow form ( Ab ES6 )
let squareArrow = n => console.log(n * n) // 25
// Initialisation ALWAYS after the arrow function:
 squareArrow(5) 
 
```



<br />

---

## Technologies ✅

---


<br />
<br />

---

## Collaboration ✅

---

> Feel free to contact me if you've seen something wrong, found some errors or struggled on some mistakes! Always happy to have a clean sheet here! :)

<br />
<br />

---

## FAQs ✅

---

0 Questions have been asked, 0 answers have been given, 0 changes have been made.

| Questions | Anwers | Changes |
| :-------- | :----: | ------: |
| 0         |   0    |       0 |
