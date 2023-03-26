// Active Registration 

const courses = [
  {
      name: 'Introduction to Agribusiness Management',
      section: 'A01',
      term: 'Fall 2023',
      credits: 3,
      crn: 50812,
      instructor: 'Farhan Islam (P)',
      days: 'TR',
      time: '02:30 pm-03:45 pm',
      campus: 'Main (Fort Garry & Bannatyne)'
    },
    {
      name: 'Introduction to Environmental Economics',
      section: 'A01',
      term: 'Fall 2023',
      credits: 3,
      crn: 50813,
      instructor: 'Bibhuti Sarker (P)',
      days: 'MWF',
      time: '09:30 am-10:20 am',
      campus: 'Main (Fort Garry & Bannatyne)'
    },
    {
      name: 'Economics of Food Policy',
      section: 'A01',
      term: 'Fall 2023',
      credits: 3,
      crn: 52473,
      instructor: 'Ryan T. Cardwell (P)',
      days: 'TR',
      time: '10:00 am-11:15 am',
      campus: 'Main (Fort Garry & Bannatyne)'
    },
    {
      name: 'Intermediate Econometrics',
      section: 'A01',
      term: 'Fall 2023',
      credits: 3,
      crn: 61360,
      instructor: 'Farhan Islam (P)',
      days: 'MWF',
      time: '11:30 am-12:20 pm',
      campus: 'Main (Fort Garry & Bannatyne)'
    },
    {
      name: 'Food: Facts and Fallacies', 
      section: 'A01',
      term: 'Fall 2023',
      credits: 3,
      crn: 50681,
      instructor: 'Chamila Nimalaratne (P)',
      days: 'MWF',
      time: '11:30 am-12:20 pm',
      campus: 'Main (Fort Garry & Bannatyne)'
    },
    {
      name: "Basic Principles of Human Nutrition",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 52473,
      instructor: "Harold M. Aukema (P)",
      days: "TR",
      time: "01:00 pm-02:15 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Vitamins and Minerals in Human Health",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 50736,
      instructor: "Aayushi Kadam (P)",
      days: "TR",
      time: "10:00 am-11:15 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Current Issues in Food and Human Nutrition",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 60260,
      instructor: "Natalie D. Riediger (P)",
      days: "MW",
      time: "08:30 am-09:45 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "An Introduction to Modern World History: 1800-Present",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 59663,
      instructor: "Jorge A. Nallim (P)",
      days: "MWF",
      time: "09:30 am-10:20 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Modern Canada (C)",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 19861,
      instructor: "Esyllt Jones (P)",
      days: "TR",
      time: "11:30 am-12:45 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Residential Schools in Canada (C)",
      section: 'T05',
      term: "Fall 2023",
      credits: 3,
      crn: 25146,
      instructor: "Sean Carleton (P)",
      days: "MWF",
      time: "01:00 pm-02:15 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "An Introduction to Modern World History: 1800-Present (M)",
      section: 'T32',
      term: "Fall 2023",
      credits: 3,
      crn: 68995,
      instructor: "Mark A. Gabbert (P)",
      days: "T",
      time: "02:30 pm-05:15 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Introduction to Research Methods in Psychology",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 92279,
      instructor: "Wan Wang (P)",
      days: "MWF",
      time: "09:30 am-10:20 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Psychology of Gender",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 69179,
      instructor: "Jessica J. Cameron (P)",
      days: "TR",
      time: "10:00 am-11:15 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Perception and Attention",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 48375,
      instructor: "Nicholaus P. Brosowsky (P)",
      days: "MWF",
      time: "09:30 am-10:20 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Developmental Social Cognition",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 70079,
      instructor: "Wan Wang (P)",
      days: "W",
      time: "08:30 am-11:15 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Critical Thinking",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 27986,
      instructor: "Elena Rabinoff (P)",
      days: "MWF",
      time: "11:30 am-12:20 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Fundamentals of the Philosophy of Language",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 35715,
      instructor: "Christopher Tillman (P)",
      days: "MWF",
      time: "01:30 pm-02:20 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Plato",
      section: 'A05',
      term: "Fall 2023",
      credits: 3,
      crn: 35716,
      instructor: "Dimitrios Dentsoras (P)",
      days: "MWF",
      time: "11:30 am-12:20 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Contemporary Metaphysics",
      section: 'T01',
      term: "Fall 2023",
      credits: 3,
      crn: 09545,
      instructor: "Adam R. Murray (P)",
      days: "MWF",
      time: "02:30 pm-05:15 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Introductory Computer Science 1",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 74712,
      instructor: "Patrick M. Dubois (P)",
      days: "TR",
      time: "12:30 pm-1:20 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Data Structures and Algorithms",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 36188,
      instructor: "Phil Pitura (P)",
      days: "MWF",
      time: "09:30 am-10:20 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Object Orientation",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 24932,
      instructor: "John Doe",
      days: "MWF",
      time: "12:30 pm - 1:45 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Object Orientation",
      section: 'A02',
      term: "Fall 2023",
      credits: 3,
      crn: 41333,
      instructor: "John Doe",
      days: "TR",
      time: "12:30 pm - 1:45 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Human-Computer Interaction 1",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 90535,
      instructor: "Karel Kahula (P)",
      days: "TR",
      time: "01:00 pm-02:15 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Introduction to Artificial Intelligence",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 04352,
      instructor: "John E. Anderson (P)",
      days: "MWF",
      time: "09:30 am-10:20 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Database Implementation",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 00350,
      instructor: "Adam Pazdor (P)",
      days: "TR",
      time: "02:30 pm-03:45 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },  
    {
      name: "Elementary Discrete Mathematics",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 57629,
      instructor: "Robert Craigen (P)",
      days: "MWF",
      time: "12:30 pm-01:20 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Algebra 1",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 58010,
      instructor: "Michelle P. Davidson",
      days: "MWF",
      time: "10:30 am-11:20 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Complex Analysis 1",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 37950,
      instructor: "Nina Zorboska (P)",
      days: "TR",
      time: "01:00 pm-02:15 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Basic Functional Analysis",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 69346,
      instructor: "Robert Martin (P)",
      days: "MW",
      time: "02:30 pm-03:45 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Life in the Universe",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 30337,
      instructor: "Prem B. Basnet (P)",
      days: "TR",
      time: "11:30 am-12:45 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Classical Mechanics 1",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 98101,
      instructor: "Peter G. Blunden (P)",
      days: "TR",
      time: "02:30 pm-03:45 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Quantum Mechanics 2",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 87400,
      instructor: "Andreas Shalchi (P)",
      days: "MWF",
      time: "09:30 am-10:20 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Computational Physics",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 69806,
      instructor: "Savino Longo (P)",
      days: "MWF",
      time: "11:30 am-12:20 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Basic Statistical Analysis 1",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 11223,
      instructor: "Zenaida Mateo (P)",
      days: "MWF",
      time: "10:30 am-11:20 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Basic Statistical Analysis 2",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 99990,
      instructor: "Carrie B. Madden (P)",
      days: "MWF",
      time: "09:30 am-10:20 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Introduction to Stochastic Processes",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 25566,
      instructor: "Aerambamoorthy Thavaneswaran (P)",
      days: "MWF",
      time: "10:30 am-11:20 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Applied Statistical Modelling",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 18265,
      instructor: "Jenna G. Tichon (P)",
      days: "MWF",
      time: "10:30 am-11:20 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Introductory Financial Accounting",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 50042,
      instructor: "Noha Ghattas (P)",
      days: "MWF",
      time: "11:30 am - 12:45 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Intermediate Accounting Assets",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 50085,
      instructor: "Carrie B. Madden (P)",
      days: "MWF",
      time: "09:30 am-10:20 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Data Analytics in Accounting",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 62562,
      instructor: "Zheng Liu (P)",
      days: "MW",
      time: "10:00 am - 11:15 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Auditing",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 60914,
      instructor: "Jenna G. Tichon (P)",
      days: "MWF",
      time: "10:30 am-11:20 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Business and Society",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 52053,
      instructor: "Yifan Wei (P)",
      days: "MW",
      time: "10:00 am - 11:15 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Business Communications",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 51732,
      instructor: "Rakesh C. Mittoo (P)",
      days: "MW",
      time: "10:00 am - 11:15 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Commercial Law",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 50025,
      instructor: "Ian A. Restall (P)",
      days: "MW",
      time: "08:30 am - 09:45 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Administrative Policy",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 58400,
      instructor: "Jie Yang (P)",
      days: "MW",
      time: "10:00 am - 11:15 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Fundamentals of Marketing",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 50001,
      instructor: "Kivalina E. Grove (P)",
      days: "MW",
      time: "11:30 am - 12:45 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Marketing Research",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 50002,
      instructor: "Nicholas Borodenko (P)",
      days: "MW",
      time: "01:00 pm - 02:15 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Marketing Management",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 50020,
      instructor: "Kiran K. Pedada (P)",
      days: "MW",
      time: "11:30 am - 12:45 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Supply Chain and Operations Management",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 53189,
      instructor: "Alok Dua (P)",
      days: "MW",
      time: "10:00 am - 11:15 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Transportation Principles",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 51286,
      instructor: "Narendra D. Malalgoda (P)",
      days: "MW",
      time: "10:00 am - 11:15 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Supply Chain Sustainability",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 60262,
      instructor: "Paul Larson (P)",
      days: "MW",
      time: "11:30 am - 12:45 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Advanced Supply Chain Managementg",
      section: 'A01',
      term: "Fall 2023",
      credits: 3,
      crn: 62730,
      instructor: "Srimantoorao S. Appadoo (P)",
      days: "W",
      time: "06:15 pm - 09:30 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    }  
];


// Initialize fregisteredCourses from sessionStorage or as an array of length 5 with null values
let fregisteredCourses = JSON.parse(sessionStorage.getItem('fregisteredCourses')) || Array(5).fill(null);

// get the query string from the URL
const queryString = window.location.search;

// extract the cnr value from the query string
const urlParams = new URLSearchParams(queryString);
const crn = urlParams.get('crn');


document.addEventListener('DOMContentLoaded', () => {
searchByCRN(crn);
displayCourses();
});


function getAvailableCourseID() {
for (let i = 0; i < fregisteredCourses.length; i++) {
  if (fregisteredCourses[i] === null || fregisteredCourses[i] === undefined) {
    return i;
  }
}
return null;
}

function searchByCRN(crn) {
crn = parseInt(crn);
for (const course of Object.values(courses)) {
  if (course.crn === crn) {
    if (fregisteredCourses.some(registeredCourse => registeredCourse && registeredCourse.crn === crn)) {
      alert("You have already registered for this course.");
      return;
    }
    let courseID = getAvailableCourseID();
    if (courseID !== null) {
      fregisteredCourses[courseID] = course;
      sessionStorage.setItem('fregisteredCourses', JSON.stringify(fregisteredCourses)); // Store the updated fregisteredCourses array in sessionStorage
      displayCourses();
    } else {
      alert("You have already registered for the maximum number of courses.");
    }
    return;
  }
}
}


function displayCourses() {
  const fregisteredCoursesContainer = document.getElementById("courses-container");

  // Check if fregisteredCourses array is empty
  if (fregisteredCourses.every(course => course === null)) {
    // Show message that there are no registered courses
    fregisteredCoursesContainer.innerHTML = `
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-md-12 text-center">
            <p>No registered courses</p>
          </div>
        </div>
      </div>
    </div>

    `;
    return;
  }

  let coursesHtml = "";

  // Loop through fregisteredCourses array and generate HTML for each course
  for (const course of fregisteredCourses) {
    if(course){
      const courseHtml = `
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-md-1">
                <div class="form-check text-center">
                  <label class="form-check-label" for="${course.crn}">Select:</label>
                  <br />
                  <input class="form-check-input text-center" type="checkbox" value="${course.crn}">
                  <label class="form-check-label text-center" for="${course.crn}"></label>
                </div>
              </div>
              <div class="col-md-1 text-auto">
                CRN: <br />
                <a id="CRN">${course.crn}</a>
              </div>
              <div class="col-md-1">
                Sec: <br />
                ${course.section}
              </div>
              <div class="col-md-1">
                Cred: <br />
                ${course.credits}
              </div>
              <div class="col-md-2">
                Title: <br />
                ${course.name}
              </div>
              <div class="col-md-1">
                Days: <br />
                ${course.days}
              </div>
              <div class="col-md-1">
                Time: <br />
                ${course.time}
              </div>
              <div class="col-md-1">
                Instructor: <br />
                ${course.instructor}
              </div>
              <div class="col-md-1">
                Term: <br />
                ${course.term}
              </div>
              <div class="col-md-1">
                Campus: <br />
                ${course.campus}
              </div>
            </div>
          </div>
        </div>
        `;
      coursesHtml += courseHtml;
    }
  }
  fregisteredCoursesContainer.innerHTML = coursesHtml;
}

function dropCourse() {

  // Get a reference to the courses container
  const coursesContainer = document.getElementById("courses-container");
  
  // Get a list of all the checkboxes inside the courses container
  const checkboxes = coursesContainer.querySelectorAll("input[type='checkbox']");
  
  // Loop through each checkbox to find the one that is checked
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      // Get the course ID from the value of the checkbox
      const courseId = checkbox.value;
      
      // Find the index of the course in the registeredCourses array
      const courseIndex = fregisteredCourses.findIndex(course => course.crn == courseId);
      
      // If the course is found, remove it from the registeredCourses array
      if (courseIndex !== -1) {
        const originalLength = fregisteredCourses.length;
          fregisteredCourses.splice(courseIndex, 1);

          const newLength = fregisteredCourses.length;
          for (let i = newLength; i < originalLength; i++) {
            fregisteredCourses[i] = null;
          }
      }
      
      // Update the registeredCourses array in session storage
      sessionStorage.setItem("fregisteredCourses", JSON.stringify(fregisteredCourses));
      
      // Update the list of courses displayed on the page
      displayCourses();
    }
  });
}




const dropButton = document.querySelector('#dropButton');
dropButton.addEventListener('click', dropCourse);