function getFormvalue() {
    // Get the first name input element by its name
    const firstNameInput = document.getElementsByName("firstName")[0];
    
    // Get the last name input element by its name
    const lastNameInput = document.getElementsByName("lastName")[0];
    
    // Get the values of the input elements
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    
    // Display the values using alert
    alert("First Name: " + firstName + "\nLast Name: " + lastName);
}
