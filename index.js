// Create a new div element
const element = document.createElement("div");

// Set some attributes or styles if needed
element.textContent = "Hello, I'm a new div!";

// Append the new div element to an existing element (in this case, #main)
document.getElementById("main").appendChild(element);
// Remove the <main> element with id 'main'
const mainElement = document.getElementById('main');
mainElement.parentNode.removeChild(mainElement);
// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set the id attribute
newHeader.id = 'victory';

// Set the text content
const yourName = 'John Doe'; // Replace with your actual name
newHeader.textContent = `${yourName} is the champion`;

// Append the new <h1> element to the document body or another existing element
document.body.appendChild(newHeader);
