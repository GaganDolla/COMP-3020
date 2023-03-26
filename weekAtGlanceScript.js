// Retrieve registeredCourse from session storage
const registeredCourses = JSON.parse(sessionStorage.getItem('registeredCourses'));

// Check if registeredCourse is null or not in session storage
if (registeredCourses === null) {
  // Display message if no registered courses
  document.getElementById('monday-task').innerHTML = 'No registered courses yet';
} else {
  // Loop through registeredCourse to display courses for each day
  registeredCourses.forEach(course => {
    const days = course.days;
    const nameAndTime = `${course.time} - ${course.name} <br /><br />`;
    for (let i = 0; i < days.length; i++) {
      const day = days.charAt(i);
      switch (day) {
        case 'M':
          document.getElementById('monday-task').innerHTML += nameAndTime;
          break;
        case 'T':
          document.getElementById('tuesday-task').innerHTML += nameAndTime;
          break;
        case 'W':
          document.getElementById('wednesday-task').innerHTML += nameAndTime;
          break;
        case 'r':
          document.getElementById('thursday-task').innerHTML += nameAndTime;
          break;
        case 'F':
          document.getElementById('friday-task').innerHTML += nameAndTime;
          break;
      }
    }
  });
}