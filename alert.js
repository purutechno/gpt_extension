// Create a div element to hold the alert
const alertContainer = document.createElement('div');
alertContainer.style.position = 'fixed';
alertContainer.style.top = '0';
alertContainer.style.left = '0';
alertContainer.style.right = '0';
alertContainer.style.bottom = '0';
alertContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
alertContainer.style.display = 'flex';
alertContainer.style.alignItems = 'center';
alertContainer.style.justifyContent = 'center';
document.body.appendChild(alertContainer);

// Create a form element for the alert
const form = document.createElement('form');
form.style.backgroundColor = 'white';
form.style.borderRadius = '4px';
form.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
form.style.padding = '20px';
form.style.width = '400px';
form.style.display = 'flex';
form.style.flexDirection = 'column';
alertContainer.appendChild(form);

// Create the form fields and submit button
form.innerHTML = `
  <label for="userEmail">Email:</label>
  <input type="email" id="userEmail" name="userEmail" required>
  <label for="userQuestion">Question:</label>
  <input type="text" id="userQuestion" name="userQuestion" required>
  <label for="answer">Answer:</label>
  <input type="text" id="answer" name="answer" required>
  <button type="submit" style="align-self: flex-end; margin-top: 20px;">Submit</button>
`;

// Add an event listener for the submit event
form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert(`Email: ${userEmail.value}\nQuestion: ${userQuestion.value}\nAnswer: ${answer.value}`);
});