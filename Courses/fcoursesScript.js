// Register for courses enable/disable register button based on checkbox selection 

  // Get the register button and all the checkboxes
  const registerBtn = document.getElementById('register');
  const checkboxes = document.querySelectorAll('input[type=checkbox]');
  
  // Add a click event listener to each checkbox
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
      // Check if any checkboxes are selected
      const selected = Array.from(checkboxes).some(checkbox => checkbox.checked);
      
      // Enable/disable the register button based on checkbox selection
      if (selected) {
        registerBtn.disabled = false;
      } else {
        registerBtn.disabled = true;
      }
    });
  });
  
  // Add a click event listener to the register button
  registerBtn.addEventListener('click', () => {
    // Find the selected checkbox and get its value
    const selectedCheckbox = Array.from(checkboxes).find(checkbox => checkbox.checked);
    const crn = selectedCheckbox.value;
    
    // Navigate to the other page with the CRN parameter in the URL
    window.location.href = '../../../../Academic Records/f_activeRegistration.html?crn=' + crn;
  });