// script.js
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the values from the form
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;

    // Display the values using the alert function
    alert("First Name: " + firstName + "\nLast Name: " + lastName);
});

