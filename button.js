// Create a button element
const button = document.createElement('button');

var text = '';

// Set the button text
button.innerHTML = 'Click me';
// Set the button's background color and border radius
button.style.backgroundColor = 'red';
button.style.borderRadius = '50px';

// Add an event listener for the click event
button.addEventListener('click', () => {


    var list= document.getElementsByClassName("ii");
    for (var i = 0; i < list.length; i++) {
        text = list[i].innerText;
        showForm(text);
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

function showForm(text) {
    formWindow.document.getElementById("name").value = text;
    let formWindow = window.open('', 'Form Window', 'height=400, width=600 ,toolbar=no, location=no', );
    formWindow.document.write('<html><body>');
    formWindow.document.write('<form>');
    formWindow.document.write('<label for="name">Enter your name:</label><br>');
    formWindow.document.write('<input type="text" id="name"><br>');
    formWindow.document.write('<input type="submit" value="Submit">');
    formWindow.document.write('</form>');
    formWindow.document.write('</body></html>');
  }

// Append the button to the body
document.body.appendChild(button);
