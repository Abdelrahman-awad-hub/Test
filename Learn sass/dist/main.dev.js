"use strict";

// // // // // let Arrayy = ["Abdelrahman", "ahmed", "Osama", 1, 2, 8, 9, 10, 20, 50, "20"];
// // // // // // console.log(`hello ${Arrayy[0]}`);
// // // // // // console.log(`hello ${Arrayy[0][3]}`);
// // // // // // console.log(Array.isArray(Arrayy));
// // // // // // Arrayy.push("Abdo");
// // // // // // console.log(Arrayy);
// // // // // // Arrayy.shift();
// // // // // // console.log(Arrayy);
// // // // // // Arrayy.unshift("ABdooo");
// // // // // // console.log(Arrayy);
// // // // // // Arrayy.pop();
// // // // // // console.log(Arrayy);
// // // // // // console.log(Arrayy.includes("Osama"));
// // // // // // console.log(Arrayy);
// // // // // // console.log(Arrayy.sort().reverse());
// // // // // // console.log(Arrayy.slice(1, 5));
// // // // // // console.log(Arrayy);
// // // // // // console.log(Arrayy.splice(-1, 1, "Abdo"));
// // // // // // console.log(Arrayy);
// // // // // // let array2 = [1, 2, 3, 5];
// // // // // // console.log(Arrayy.concat(array2));
// // // // // // console.log(Arrayy.join(" * ").toUpperCase());
// // // // // // console.log(typeof Arrayy.join(" * ").toUpperCase());
// // // // // // let x = 0;
// // // // // // let y = (x++, 10);
// // // // // // console.log(x);
// // // // // // console.log(y);
// // // // // let zero = 0;
// // // // // let counter = 3;
// // // // // let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
// // // // // // let x = my.slice(2, 4).reverse();
// // // // // // let y = my.slice(0, 2).reverse();
// // // // // // my.splice(4, 2);
// // // // // // my.reverse();
// // // // // // console.log(my); //["Osama", "Elham", "Mazero", "Ahmed"];
// // // // // // console.log(my.slice(my.shift(), --counter).sort()); // ["Elham", "Mazero"]
// // // // // my.unshift("Elzero");
// // // // // console.log(my[zero]);
// // // // // console.log(my[zero].slice(++counter, my[zero].length));
// // // // // for (let i = 1; i < 11; i++) {
// // // // //     console.log(i);
// // // // // }
// // // // // let h = ["Abdelrahman", 10, "ahmed", "Osama", 1, 2, 8, 9, 10, 20, 50, "20"];
// // // // // // for (let index = 0; index < array.length; index++) {
// // // // // //     const element = array[index];
// // // // // // }
// // // // // let newA = [];
// // // // // for (let i = 0; i < h.length; i++) {
// // // // //     if (typeof h[i] === "string") {
// // // // //         newA.push(h[i]);
// // // // //     }
// // // // // }
// // // // // console.log(newA);
// // // // // // let products = ["Keyboard", "Mouse", "Pen", "pad", "monitor"];
// // // // // // let colors = ["red", "green", "black"];
// // // // // // let models = ["2010", "2021", "2022"];
// // // // // // for (let i = 0; i < products.length; i++) {
// // // // // //     console.log(`* ${products[i]}`);
// // // // // //     for (let j = 0; j < colors.length; j++) {
// // // // // //         console.log("  Colors: ");
// // // // // //         console.log(`   - ${colors[j]}`);
// // // // // //     }
// // // // // //     for (let K = 0; K < models.length; K++) {
// // // // // //         console.log("  Model: ");
// // // // // //         console.log(`   & ${models[K]}`);
// // // // // //     }
// // // // // // }
// // // // // let products = ["Keyboard", "Mouse", "Pen", "pad", "monitor"];
// // // // // let colors = ["Red", "Green", "Black"];
// // // // // let x = 5;
// // // // // document.write(`<h2>Show count ${x}</h2>`);
// // // // // for (let i = 0; i < x; i++) {
// // // // //     document.write(`<div>`);
// // // // //     document.write(`<h3>${products[i]}</h3>`);
// // // // //     for (let j = 0; j < colors.length; j++) {
// // // // //         document.write(`<P>${colors.join(" | ")}</P>`);
// // // // //     }
// // // // //     document.write(`</d>`);
// // // // // }
// // // // let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// // // // let myEmployees = [
// // // //     "Amgad",
// // // //     "Samah",
// // // //     "Ameer",
// // // //     "Omar",
// // // //     "Othman",
// // // //     "Amany",
// // // //     "Abdelrahman",
// // // //     "Samia",
// // // //     "Anwar",
// // // // ];
// // // // let x = 0;
// // // // for (let i = 0; i < myAdmins.length; i++) {
// // // //     if (myAdmins[i] === "Stop") x = i;
// // // // }
// // // // document.write(`
// // // //     <p>We Have " ${x} " Admins</p>
// // // //     <hr>
// // // // `);
// // // // for (let i = 0; i < x; i++) {
// // // //     document.write(`<div>`);
// // // //     document.write(`
// // // //             <p>The Admin for Team ${i + 1} is ${myAdmins[i]}</p>
// // // //             <h3>Team Member:</h3>
// // // //             `);
// // // //     for (let j = 0; j < myEmployees.length; j++) {
// // // //         if (myAdmins[i][0] === myEmployees[j][0])
// // // //             document.write(`
// // // //                     <ol>
// // // //                         <li>${myEmployees[j]}</li>
// // // //                     </ol>
// // // //             `);
// // // //     }
// // // //     document.write(`</div>`);
// // // //     document.write(`<hr>`);
// // // // }
// // // // function calc(...numbers) {
// // // //     let result = 0;
// // // //     for (let i = 0; i < numbers.length; i++) {
// // // //         result += numbers[i];
// // // //     }
// // // //     return result;
// // // // }
// // // // console.log(calc(10, 10, 20, 10, 50));
// // // // function sayHello(name = "Unknown", age = "Unknown") {
// // // //     console.log(`Hello ${name} Your age is ${age}`);
// // // // }
// // // // sayHello();
// // // // function userInfo(
// // // //     name = "Unknown",
// // // //     age = "Unknown",
// // // //     rate = 0,
// // // //     show = "Yes",
// // // //     ...skills
// // // // ) {
// // // //     document.write(`<div>`);
// // // //     document.write(`<h2>Welcome, ${name}</h2>`);
// // // //     document.write(`<p>Age ${age}</p>`);
// // // //     document.write(`<p>Hour Rate $${rate}</p>`);
// // // //     if (show === "Yes") {
// // // //         if (skills.length > 0) {
// // // //             document.write(
// // // //                 `<p><span style="font-weight:bold">Skills:</span> ${skills.join(
// // // //                     " | "
// // // //                 )}</p>`
// // // //             );
// // // //         } else document.write(`<p>No skills</p>`);
// // // //     } else {
// // // //         if (skills.length > 0) document.write(`<p>Skills is Hidden</p>`);
// // // //         else document.write(`<p>No skills</p>`);
// // // //     }
// // // //     document.write(`</div>`);
// // // // }
// // // // userInfo(
// // // //     "Abdelrahman",
// // // //     20,
// // // //     200,
// // // //     // "Yes",
// // // //     "HTML",
// // // //     "CSS",
// // // //     "SASS",
// // // //     "Bootstrap",
// // // //     "JS",
// // // //     "Github"
// // // // );
// // // // function showData(a, b, c) {
// // // //     let s, n, bool;
// // // //     typeof a === "string" ? (s = a) : typeof b === "string" ? (s = b) : (s = c);
// // // //     typeof a === "number" ? (n = a) : typeof b === "number" ? (n = b) : (n = c);
// // // //     typeof a === "boolean"
// // // //         ? (bool = a)
// // // //         : typeof b === "boolean"
// // // //         ? (bool = b)
// // // //         : (bool = c);
// // // //     document.write(
// // // //         `<h2>Hello ${s}, Your Age is ${n}, you Are Available For Hire</h2>`
// // // //     );
// // // // }
// // // // showData("Abdelrahman", 20, true);
// // // // showData(20, "Abdelrahman", true);
// // // // showData(true, 20, "Abdelrahman");
// // // // function mn(fName, lName) {
// // // //     let massage = "Hello";
// // // //     function concatMsg() {
// // // //         return `${massage} ${fName} ${lName}`;
// // // //     }
// // // //     return concatMsg();
// // // // }
// // // // console.log(mn("Abdelrahman", "Awad"));
// // // // let test = (num) => num + 1; // Arrow function syntax
// // // // console.log(test(20));
// // // // let v = 10;
// // // // if (true) {
// // // //     let v = 50;
// // // //     console.log(v); //from If condition scop
// // // // }
// // // // console.log(v); // from global
// // // // // let names = function (...name) {
// // // // //     return `String [${name.join("],[")}] => Done !`;
// // // // // };
// // // // //Question One
// // // // // using Arrow function print the output " String [Osama],[Mohamed],[Ali],[Ibrahim] => Done !"
// // // // function names(...inputs) {
// // // //     return `String [${inputs.join("],[")}] => Done !`;
// // // // }
// // // // console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// // // // // question Two
// // // // // return number 80 from function calc Just using the numbers of array myNumbers  in one statement of code
// // // // //
// // // // // let calc = (one, two, ...nums) => one * two + one * two;
// // // // // console.log(calc(10, myNumbers.length, myNumbers));
// // // let myNumbers = [20, 50, 10, 60];
// // // let newArray = myNumbers.map((element) => element + element);
// // // console.log(newArray);
// // // let arr = [1, -10, -20, 15, 100, -30];
// // // let aaa = arr.map((ele) => -ele);
// // // console.log(aaa);
// // // let a = "Abde7lra52hma88n";
// // // let st = a.split("").map((ele) => (isNaN(parseInt(ele)) ? ele : (ele = "")));
// // // console.log(st.join(""));
// // // let filterString = a.split("").filter((el) => isNaN(parseInt(el)));
// // // console.log(filterString.join(""));
// // // console.log(a.startsWith("A"));
// // // let removeChare = ["A", "@", "b", "d", "@", "o"];
// // // let f = removeChare
// // //     .filter((ele) => ele != "@")
// // //     .reduce((acc, current) => `${acc}${current}`);
// // // console.log(f);
// // let myString = "1,2,3,EE,l,z,e,r,o,_,w,e,b,_,S,c,h,o,o,l,2,0,z";
// // let solution = myString
// //     .split(",")
// //     .filter((ele) => isNaN(parseInt(ele)))
// //     .map((ele) => (ele === "_" ? (ele = " ") : ele[0]))
// //     .reduce((acc, current) => acc + current)
// // //     .slice(0, length - 1);
// // // console.log(solution);
// // let x = "country";
// // let user = {
// //     firstName: "Abdo",
// //     lastName: "Awad",
// //     country: "Egypt",
// //     skills: ["HTML", "CSS", "SASS", "JS"],
// //     address: {
// //         address1: "Cairo",
// //         address2: "Aswan",
// //     },
// //     available: false,
// //     checkAvailable: function () {
// //         if (this.available === true) return `Free to work`;
// //         else return `not free`;
// //     },
// // };
// // console.log(user.checkAvailable());
// // console.log(user.address.address1);
// // console.log(user.skills.join(" | "));
// // user.age = 20;
// // console.log(user.age);
// // let test = new Object({
// //     namex: "abdo",
// // });
// // test.age = 20;
// // console.log(test.age);
// // console.log(test.namex);
// // console.log();
// // let yy = Object.create(user);
// // console.log(yy);
// // let obj2 = {
// //     age: 20,
// //     collage: "Computer science ",
// // };
// // let z = Object.assign({}, user, obj2);
// // console.log(z);
// // var musicians = 1;
// // if (musicians === 0) {
// //     console.log("not a group");
// // } else if (musicians === 1) {
// //     console.log("solo");
// // } else if (musicians === 2) {
// //     console.log("duet");
// // } else if (musicians === 3) {
// //     console.log("trio");
// // } else if (musicians === 4) {
// //     console.log("quartet");
// // } else {
// //     console.log("this is a large group");
// // }
// // // change the values of `balance`, `checkBalance`, and `isActive` to test your code
// // var balance = 325.0;
// // var checkBalance = true;
// // var isActive = false;
// // if (checkBalance === true) {
// //     if (isActive == true && balance > 0) {
// //         console.log("Your balance is $" + balance.toFixed(2) + ".");
// //     } else if (isActive == false) {
// //         console.log("Your account is no longer active.");
// //     } else if (isActive == true && balance == 0) {
// //         console.log("Your account is empty.");
// //     } else {
// //         console.log("Your balance is negative please contact bank.");
// // //     }
// // // } else {
// // //     console.log("Thank you. Have a nice day!");
// // // }
// // // var education = "no high school diploma";
// // // switch (education) {
// // //     case "no high school diploma":
// // //         salary = 25,636;
// // //         break;
// // //     case "a high school diploma":
// // //         salary = 35,256;
// // //         break;
// // //     case "an Associate's degree":
// // //         salary = 41,496;
// // //         break;
// // //     case "a Bachelor's degree":
// // //         salary = 59,124;
// // //         break;
// // //     case "a Master's degree":
// // //         salary = 69,732;
// // //         break;
// // //     case "a Professional degree":
// // //         salary = 89,960;
// // //         break;
// // //     case "a Doctoral degree":
// // //         salary = 84396;
// // //         break;
// // // }
// // // for (var i = 0; i <= 25; i++) {
// // //     for (var j = 0; j <= 99; j++) {
// // //         console.log(i + "-" + j);
// // //     }
// // // }
// // let myIdElement = document.getElementById("teto");
// // let myTagElement = document.getElementsByTagName("p");
// // let myQ = document.querySelector("#teto");
// // console.log(myIdElement);
// // console.log(myTagElement[1]);
// // console.log(myQ);
// // console.log(document.body);
// // console.log((document.title = "JS"));
// // console.log(document.forms[0]);
// // let myElement = document.querySelector(".p");
// // console.log(myElement.innerHTML);
// // myElement.innerHTML = "learn Js from el <span>zero</span> web schools";
// // myElement.textContent = "learn Js from el zero web schools";
// // console.log(myElement.innerHTML);
// // console.log(myElement.textContent);
// // myElement.className = "test";
// // myElement.setAttribute("id", "7a7a");
// // myElement.setAttribute("class", "sa7sa7");
// // document.forms[0].getAttribute("name") === "fname"
// //     ? (document.forms[0].value = "7a7a")
// //     : document.forms[0].value;
// // let x = document.createElement("div");
// // let myAtt = document.createAttribute("data-custom");
// // let myText = document.createTextNode("product one");
// // let myCom = document.createComment("This is product one div");
// // x.className = "productOne";
// // x.setAttributeNode(myAtt);
// // x.setAttribute("data-test", "data");
// // x.appendChild(myCom);
// // x.appendChild(myText);
// // document.body.appendChild(x);
// // function sleep() {
// //     console.log("I'm sleepy!");
// //     return "zzz";
// //     return "snore";
// // }
// // console.log(sleep());
// // function makeLine(length) {
// //     var line = "";
// //     for (var j = 1; j <= length; j++) {
// //         line += "* ";
// //     }
// //     console.log(line + "\n");
// // }
// // function buildTriangle(width) {
// //     for (let length = 1; length <= width; length++) {
// //         makeLine(length);
// //     }
// // }
// // buildTriangle(10);
// // var numbers = [
// //     [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
// //     [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
// //     [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
// //     [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
// //     [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
// //     [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
// //     [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
// //     [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
// //     [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
// //     [76, 7, 9, 6, 3, 73, 77, 100, 56, 100],
// // ];
// // for (let r = 0; r < numbers.length; r++) {
// //     for (let c = 0; c < numbers.length; c++) {
// //         if (numbers[r][c] % 2 === 0) numbers[r][c] = "even";
// //         else numbers[r][c] = "odd";
// //     }
// // }
// // console.log(numbers);
// // let data = [
// //     {
// //         id: 1,
// //         header: "section one",
// //         p1: "Laborum irure adipisicing officia eiusmod quis occaecat do fugiat elit. Eu anim ea deserunt eu. Dolore sint officia nulla minim laborum laboris aute enim in velit.",
// //         p2: "Laborum irure adipisicing officia eiusmod quis occaecat do fugiat elit. Eu anim ea deserunt eu. Dolore sint officia nulla minim laborum laboris aute enim in velit.",
// //     },
// //     {
// //         id: 5,
// //         header: "section two",
// //         p1: "Laborum irure adipisicing officia eiusmod quis occaecat do fugiat elit. Eu anim ea deserunt eu. Dolore sint officia nulla minim laborum laboris aute enim in velit.",
// //         p2: "Laborum irure adipisicing officia eiusmod quis occaecat do fugiat elit. Eu anim ea deserunt eu. Dolore sint officia nulla minim laborum laboris aute enim in velit.",
// //     },
// //     {
// //         id: 2,
// //         header: "section three",
// //         p1: "Laborum irure adipisicing officia eiusmod quis occaecat do fugiat elit. Eu anim ea deserunt eu. Dolore sint officia nulla minim laborum laboris aute enim in velit.",
// //         p2: "Laborum irure adipisicing officia eiusmod quis occaecat do fugiat elit. Eu anim ea deserunt eu. Dolore sint officia nulla minim laborum laboris aute enim in velit.",
// //     },
// //     {
// //         id: 7,
// //         header: "section four",
// //         p1: "Laborum irure adipisicing officia eiusmod quis occaecat do fugiat elit. Eu anim ea deserunt eu. Dolore sint officia nulla minim laborum laboris aute enim in velit.",
// //         p2: "Laborum irure adipisicing officia eiusmod quis occaecat do fugiat elit. Eu anim ea deserunt eu. Dolore sint officia nulla minim laborum laboris aute enim in velit.",
// //     },
// // ];
// // data.forEach((Element, index) => {
// //     console.log(Element.header + " , " + index);
// // });
// // /*
// //  * Programming Quiz: Build an HTML Fragment (1-2)
// //  */
// /*
//  * Programming Quiz: Build an HTML Fragment (1-2)
//  */
// // const cheetah = {
// //     name: "Cheetah",
// //     scientificName: "Acinonyx jubatus",
// //     lifespan: "10-12 years",
// //     speed: "68-75 mph",
// //     diet: "carnivore",
// //     summary:
// //         "Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.",
// //     fact: "Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.",
// // };
// // // creates an animal trading card
// // function createAnimalTradingCardHTML(animal) {
// //     const cardHTML =
// //         '<div class="card">' +
// //         '<h3 class="name">' +
// //         animal.name +
// //         "</h3>" +
// //         '<img src="' +
// //         animal.name +
// //         '.jpg" alt="' +
// //         animal.name +
// //         '" class="picture">' +
// //         '<div class="description">' +
// //         '<p class="fact">' +
// //         animal.fact +
// //         "</p>" +
// //         '<ul class="details">' +
// //         '<li><span class="bold">Scientific Name</span>: ' +
// //         animal.scientificName +
// //         "</li>" +
// //         '<li><span class="bold">Average Lifespan</span>: ' +
// //         animal.lifespan +
// //         "</li>" +
// //         '<li><span class="bold">Average Speed</span>: ' +
// //         animal.speed +
// //         "</li>" +
// //         '<li><span class="bold">Diet</span>: ' +
// //         animal.diet +
// //         "</li>" +
// //         "</ul>" +
// //         '<p class="brief">' +
// //         animal.summary +
// //         "</p>" +
// //         "</div>" +
// //         "</div>";
// //     return cardHTML;
// // }
// // console.log(createAnimalTradingCardHTML(cheetah));
// // function solve(n) {
// //     // convert number to string
// //     n = n.toString();
// //     // reverse the string and remove leading zeros
// //     n = n.split("").reverse().join("").replace("0", "");
// //     // check if the reversed string is a palindrome
// //     if (n === n.split("").reverse().join("")) {
// //         console.log("YES");
// //     } else {
// //         console.log("NO");
// //     }
// // }
// // solve(1110);
// const allHeaders = document.querySelectorAll("header");
// for (let i = 0; i < allHeaders.length; i++) {
//     console.dir(allHeaders[i]);
// }
// let p = document.querySelector(".hah");
// let btn = document.querySelector(".p");
// btn.onclick = function () {
//     console.log("test");
// };
// const startingTime = performance.now();
// for (let i = 1; i <= 100; i++) {
//     for (let j = 1; j <= 100; j++) {
//         console.log("i and j are ", i, j);
//     }
// }
// const endingTime = performance.now();
// console.log("This code took " + (endingTime - startingTime) + " milliseconds.");
// setTimeout(function sayHi() {
//     console.log("Howdy");
// }, 1000);
// let count = 1;
// function generateParagraphs() {
//     const fragment = document.createDocumentFragment();
//     for (let i = 1; i <= 500; i++) {
//         const newElement = document.createElement("p");
//         newElement.textContent = "This is paragraph number " + count;
//         count = count + 1;
//         fragment.appendChild(newElement);
//     }
//     document.body.appendChild(fragment);
//     if (count < 20000) {
//         setTimeout(generateParagraphs, 0);
//     }
// }
// generateParagraphs();
// let mybtn = document.querySelector("button");
// mybtn.before("test");
// mybtn.after();
// console.log(mybtn.nextSibling);
// mybtn.previousSibling;
// console.log(mybtn.nextElementSibling);
// mybtn.previousElementSibling;
// mybtn.parentElement;
// alert("7a7a");
// let counter = setTimeout(msg, 3000);
// function msg() {
//     console.log("test");
// }
// let bl7 = document.querySelector(".btn");
// bl7.onclick = function () {
//     clearTimeout(counter);
// };
var number = document.querySelector("h2");
var count = 1;

function contUp() {
  number.innerText = ++count;
  if (number.innerText === "1000") clearInterval(counter);
}

var counter = setInterval(contUp, 1); // setTimeout(function () {
//     window.open(
//         "https://google.com",
//         "_blank",
//         "width=400,hight=400",
//         "left=500,top=500"
//     );
// }, 3000);
// history.forward();
// history.back();
// history.length();
// scrollTo({
//     left: 300,
//     top: 1000,
//     behavior: "smooth",
// });

var up = document.querySelector("button");

window.onscroll = function () {
  if (window.scrollY >= 300) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
};

up.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth"
  });
};