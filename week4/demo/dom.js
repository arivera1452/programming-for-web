// what is DOM?
// Document Object Model
// 1. accessing exsisting element and changing them
// 2. adding new elements to exsisting elements
console.log(window.document.body.children[1]);

// helpers to "find" html element

// getElementByTagName
// console.log(document.getElementsByTagName("div"))

// getElementById
// console.log(document.getElementsById("target"))

// getElementsByClassName
// console.log(document.getElementsByClassName("andrew"))

const target = document.getElementById("target");
console.log(target);
target.classList.add("red");
target.style.width = "300px";
target.style.height = "300px";
target.style.color = "white";
target.style.fontSize = "18px";
target.innerHTML = "DOM Scripting for the win";

const colors = ["orange", "green", "blue", "indigo", "violet"]
for(let loopVar = 0; loopVar < colors.length; loopVar++) {
    // creating new element with DOM
    const newDiv1 = document.createElement("div");
    newDiv1.style.width = "50px";
    newDiv1.style.height = "50px";
    newDiv1.style.backgroundColor = colors[loopVar];
    // inserting new element into existing
    target.appendChild(newDiv1);
}

// MDN Web Docs (Look up DOM scripting methods)

// Events and event handlers
target.addEventListener("click", () => {
    console.log("I've been clicked")
    const newHeading = document.createElement("h1");
    target.style.color = "black";
    newHeading.innerHTML = "Howdy";
    target.appendChild(newHeading);
});
// set time out -- occurs once
setTimeout(() => {
    target.style.backgroundColor ="blue";
}, 5000);
// set interval occurs until stopped
const myInterval = setInterval(() => {
    console.log(new Date());
}, 5000);
// clear interval
setTimeout(() => {
    clearInterval(myInterval)
    console.log("hopefully this has been cleared");
}, 15000);






