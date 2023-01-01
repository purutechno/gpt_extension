import axios from "axios";

const OPENAI_API_KEY = "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";
const endPoint = "https://api.openai.com/v1/completions";


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
    
        text = list[0].innerText;
        showForm(text);
    

    // const gmaildata = gmail.get.visible_emails()

    // const container1 = document.getElementsByClassName('a3s aiL');
    // const idValue = container1[0]["id"]
    // const container = document.getElementById(idValue);
    // window.alert(container1[0].innerHTML);
    // console.log(gmaildata);
    // window.alert(container.textContent);
    // window.alert(container.innerText);
    
});


function showForm(arg1, callback) {
    let formWindow = window.open('', 'Form Window', 'height=600, width=600 ,toolbar=no, location=no', );
    formWindow.document.write('<html><body>');
    formWindow.document.write('<form>');
    formWindow.document.write('<label for="name">Enter your name:</label><br>');
    formWindow.document.write('<input type="text" id="name" value ="'+ arg1 + '" ><br>');
    formWindow.document.write('<label for="question">Enter your question:</label><br>');
    formWindow.document.write('<input type="text" id="question"><br>');
    formWindow.document.write('<input type="submit" value="Submit">');
    formWindow.document.write('</form>');
    formWindow.document.write('</body></html>');


    formWindow.document.forms[0].addEventListener('submit', function(event) {
        event.preventDefault();
       
        let userQuestion = formWindow.document.getElementById('question').value;
        let question = arg1.concat('\n', userQuestion);
        callOpenApi(question);
        /// Hit API 
        console.log(question);
        formWindow.close();
      });
  }


/// Call API
function callOpenApi(question){
    const headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + OPENAI_API_KEY,};


        const body = {
            "model": "text-davinci-003",
            "prompt": question,
            "temperature": 0.7,
            "max_tokens": 256,
            "top_p": 1,
            "frequency_penalty": 0,
            "presence_penalty": 0
          };

    axios.post(endPoint, {
        data: body,
      }, {
        headers: headers,
      }, {
        withCredentials: true,
      })
.then(function (response) {
  // handle success
  console.log(response);
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});
}


// Append the button to the body
document.body.appendChild(button);
