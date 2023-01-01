// Create a button element
const button = document.createElement('button');

// Set the button text
button.innerHTML = 'Click me';

// Set the button's background color and border radius
button.style.backgroundColor = 'red';
button.style.borderRadius = '50px';

// Add an event listener for the click event
button.addEventListener('click', () => {
    window.alert("sometext");
});

// Append the button to the body
document.body.appendChild(button);
