const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");

const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
// Get references to the form and tbody
const form = document.getElementById('employee-form');
const employeeList = document.getElementById('employee-list').querySelector('tbody');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const name = document.getElementById('employee-name').value;
    const email = document.getElementById('employee-email').value;
    const jobTitle = document.getElementById('employee-job').value;
    const salary = document.getElementById('employee-salary').value;
    const idNumber = document.getElementById('employee-id-number').value;

    // Create a new row and cells
    const newRow = employeeList.insertRow();
    
    newRow.insertCell(0).textContent = name;
    newRow.insertCell(1).textContent = email;
    newRow.insertCell(2).textContent = jobTitle;
    newRow.insertCell(3).textContent = salary;
    newRow.insertCell(4).textContent = idNumber;

    // Clear the form fields
    form.reset();
});