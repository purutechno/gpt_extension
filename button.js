// Create a button element
const button = document.createElement('button');

// Set the button text
button.innerHTML = 'Click me';
// Set the button's background color and border radius
button.style.backgroundColor = 'red';
button.style.borderRadius = '50px';

// Add an event listener for the click event
button.addEventListener('click', () => {


    var list= document.getElementsByClassName("ii");
    for (var i = 0; i < list.length; i++) {
        window.alert(list[i].innerText);
    }

    // const gmaildata = gmail.get.visible_emails()

    // const container1 = document.getElementsByClassName('a3s aiL');
    // const idValue = container1[0]["id"]
    // const container = document.getElementById(idValue);
    // window.alert(container1[0].innerHTML);
    // console.log(gmaildata);
    // window.alert(container.textContent);
    // window.alert(container.innerText);
    
});

// Append the button to the body
document.body.appendChild(button);
