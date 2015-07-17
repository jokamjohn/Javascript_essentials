var mainTitle = document.getElementById("mainTitle");

console.log("The node is: ", mainTitle.nodeType);
console.log("The inner html: ", mainTitle.innerHTML);
console.log("The child node: ", mainTitle.childNodes.length);

var links = document.getElementsByTagName("a");
console.log("My links: ", links);
console.log("My links: ", links.length);

// changing the attribute of an element ..div
var textDiv = document.getElementById("mainContent");
textDiv.setAttribute("align", "right");

var sideBar = document.getElementById("sidebar");
console.log("Inner content of the div: ", sideBar.innerHTML);

//creating and adding elements dynamically to the document
var heading = document.createElement("h1");
var paragraghy = document.createElement("p");

//adding text to the created tags.....not a good way
//heading.innerHTML = "Did you know?";
//paragraghy.innerHTML = "My name is kagga john";

//better way of adding text is using the text node
var headingText = document.createTextNode("Did you know ?");
var paragrahyText = document.createTextNode("My name is John Kagga");

//adding the text to the elements
heading.appendChild(headingText);
paragraghy.appendChild(paragrahyText);

//attaching the tags to the document
var trivia = document.getElementById("trivia");
trivia.appendChild(heading);
trivia.appendChild(paragraghy);

//look at insertbefore function to create an element before the other
