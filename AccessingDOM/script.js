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

