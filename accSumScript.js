const charges = [
    { name: 'Endowment Fee', amount: 84.00 },
    { name: 'Library Fee', amount: 25.49 },
    { name: 'Registration Fee', amount: 25.49 },
    { name: 'Sport & Recreation Fee', amount: 96.76 },
    { name: 'Student Organization Fees', amount: 138.05 },
    { name: 'Student Services Fee', amount: 25.49 },
    { name: 'Tech Fee', amount: 86.88 },
    { name: 'U-PASS fee', amount: 212.00 },
  ];
    let total = 0;
  
    // Get registered courses from session storage
    const registeredCourses = JSON.parse(sessionStorage.getItem('registeredCourses'));
  
    // If registered courses exist, loop through and add to total
    if (registeredCourses && registeredCourses.length) {
      registeredCourses.forEach((course) => {
        if(course != null){
        // Generate a random charge for the course between $100 and $300
        const charge = Math.floor(Math.random() * (300 - 100 + 1) + 100);
  
        // Add the charge to the total
        total += charge;
        
        // Add a row to the charges table for the course and its charge
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = course.name;
        row.appendChild(nameCell);
        const chargeCell = document.createElement('td');
        chargeCell.textContent = `$${charge.toFixed(2)}`;
        row.appendChild(chargeCell);
        document.querySelector('#charges-table tbody').appendChild(row);
        }
      });

       // Add the fixed charges to the total
    charges.forEach((charge) => {
      total += charge.amount;
      
      // Add a row to the charges table for the charge
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      nameCell.textContent = charge.name;
      row.appendChild(nameCell);
      const chargeCell = document.createElement('td');
      chargeCell.textContent = `$${charge.amount.toFixed(2)}`;
      row.appendChild(chargeCell);
      document.querySelector('#charges-table tbody').appendChild(row);
    });
  
    // Set the total charge in the table footer
    document.querySelector('#total-charge').textContent = `$${total.toFixed(2)}`;
    } else {
      // If no registered courses, show message in table
      const row = document.createElement('tr');
      const messageCell = document.createElement('td');
      messageCell.setAttribute('colspan', '2');
      messageCell.textContent = 'No registered courses yet';
      row.appendChild(messageCell);
      document.querySelector('#charges-table tbody').appendChild(row);
    }

  