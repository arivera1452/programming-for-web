// select empty div and assign to a variable
const myEmptyDiv = document.querySelector("#myEmptyDiv");
// put an h1 inside of it
// create a new element
const heading1 = document.createElement("h1");
heading1.innerHTML = "Llamas are cute";
// h2
const heading2 = document.createElement("h2");
heading2.innerHTML = "Llamas are cool";
// h3
const heading3 = document.createElement("h3");
heading3.innerHTML = "Llamas are soft";
// h4
const heading4 = document.createElement("h4");
heading4.innerHTML = "Llamas live in Peru ";
// h5
const heading5 = document.createElement("h5");
heading5.innerHTML = "We should call it llamaCase instead of camelCase";
// hover for h1
heading1.style.cursor = "pointer"
heading1.addEventListener("click", handleHeadingClick)
// append
myEmptyDiv.appendChild(heading1);
myEmptyDiv.appendChild(heading2);
myEmptyDiv.appendChild(heading3);
myEmptyDiv.appendChild(heading4);
myEmptyDiv.appendChild(heading5);
function handleHeadingClick() {
    document.body.style.backgroundColor = "magenta";
}
