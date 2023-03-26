// Active Registration 

const courses = [
    {
      name: 'Introduction to Agribusiness Management',
      section: 'A01',
      term: 'Winter 2023',
      credits: 3,
      crn: 11094,
      instructor: 'Farhan Islam (P)',
      days: 'TR',
      time: '02:30 pm-03:45 pm',
      campus: 'Main (Fort Garry & Bannatyne)'
    },
    {
      name: 'Introduction to Environmental Economics',
      section: 'A01',
      term: 'Winter 2023',
      credits: 3,
      crn: 80971,
      instructor: 'Bibhuti Sarker (P)',
      days: 'MWF',
      time: '09:30 am-10:20 am',
      campus: 'Main (Fort Garry & Bannatyne)'
    },
    {
      name: 'Economics of Food Policy',
      section: 'A01',
      term: 'Winter 2023',
      credits: 3,
      crn: 14058,
      instructor: 'Ryan T. Cardwell (P)',
      days: 'TR',
      time: '10:00 am-11:15 am',
      campus: 'Main (Fort Garry & Bannatyne)'
    },
    {
      name: 'Intermediate Econometrics',
      section: 'A01',
      term: 'Winter 2023',
      credits: 3,
      crn: 62219,
      instructor: 'Farhan Islam (P)',
      days: 'MWF',
      time: '11:30 am-12:20 pm',
      campus: 'Main (Fort Garry & Bannatyne)'
    },
    {
      name: 'Food: Facts and Fallacies', 
      section: 'A01',
      term: 'Winter 2023',
      credits: 3,
      crn: 73794,
      instructor: 'Chamila Nimalaratne (P)',
      days: 'MWF',
      time: '11:30 am-12:20 pm',
      campus: 'Main (Fort Garry & Bannatyne)'
    },
    {
      name: "Basic Principles of Human Nutrition",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 73795,
      instructor: "Harold M. Aukema (P)",
      days: "TR",
      time: "01:00 pm-02:15 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Vitamins and Minerals in Human Health",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 73796,
      instructor: "Aayushi Kadam (P)",
      days: "TR",
      time: "10:00 am-11:15 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Current Issues in Food and Human Nutrition",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 73797,
      instructor: "Natalie D. Riediger (P)",
      days: "MW",
      time: "08:30 am-09:45 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "An Introduction to Modern World History: 1800-Present",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 59662,
      instructor: "Jorge A. Nallim (P)",
      days: "MWF",
      time: "09:30 am-10:20 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Modern Canada (C)",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 61010,
      instructor: "Esyllt Jones (P)",
      days: "TR",
      time: "11:30 am-12:45 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Residential Schools in Canada (C)",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 62276,
      instructor: "Sean Carleton (P)",
      days: "TR",
      time: "01:00 pm-02:15 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Thirty Years' Crisis (M)",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 62277,
      instructor: "Mark A. Gabbert (P)",
      days: "T",
      time: "02:30 pm-05:15 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Introduction to Research Methods in Psychology",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 50329,
      instructor: "Wan Wang (P)",
      days: "MWF",
      time: "09:30 am-10:20 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Psychology of Gender",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 57129,
      instructor: "Jessica J. Cameron (P)",
      days: "TR",
      time: "10:00 am-11:15 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Perception and Attention",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 62208,
      instructor: "Nicholaus P. Brosowsky (P)",
      days: "MWF",
      time: "09:30 am-10:20 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Developmental Social Cognition",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 62493,
      instructor: "Shaylene Nancekivell (P)",
      days: "W",
      time: "08:30 am-11:15 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Critical Thinking",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 52785,
      instructor: "Elena Rabinoff (P)",
      days: "MWF",
      time: "11:30 am-12:20 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Fundamentals of the Philosophy of Language",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 62162,
      instructor: "Christopher Tillman (P)",
      days: "MWF",
      time: "01:30 pm-02:20 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Plato",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 62164,
      instructor: "Dimitrios Dentsoras (P)",
      days: "MWF",
      time: "11:30 am-12:20 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Contemporary Metaphysics",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 62169,
      instructor: "Adam R. Murray (P)",
      days: "T",
      time: "02:30 pm-05:15 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Introductory Computer Science 1",
      section: 'A01',
      term: "winter 2023",
      credits: 3,
      crn: 50102,
      instructor: "Patrick M. Dubois (P)",
      days: "tr",
      time: "12:30 pm-1:20 pm",
      campus: "main (fort garry & bannatyne)"
    },
    {
      name: "Data Structures and Algorithms",
      section: 'A01',
      term: "winter 2023",
      credits: 3,
      crn: 50140,
      instructor: "Phil Pitura (P)",
      days: "mwf",
      time: "09:30 am-10:20 am",
      campus: "main (fort garry & bannatyne)"
    },
    {
      name: "Object Orientation",
      section: 'A01',
      term: "winter 2023",
      credits: 3,
      crn: 12345,
      instructor: "John Doe",
      days: "mwf",
      time: "12:30 pm - 1:45 pm",
      campus: "main (fort garry & bannatyne)"
    },
    {
      name: "Object Orientation",
      section: 'A02',
      term: "winter 2023",
      credits: 3,
      crn: 67891,
      instructor: "John Doe",
      days: "mwf",
      time: "12:30 pm - 1:45 pm",
      campus: "main (fort garry & bannatyne)"
    },
    {
      name: "Human-Computer Interaction 1",
      section: 'A01',
      term: "winter 2023",
      credits: 3,
      crn: 61857,
      instructor: "Karel Kahula (P)",
      days: "tr",
      time: "01:00 pm-02:15 pm",
      campus: "main (fort garry & bannatyne)"
    },
    {
      name: "Database Implementation",
      section: 'A01',
      term: "winter 2023",
      credits: 3,
      crn: 59519,
      instructor: "Adam Pazdor (P)",
      days: "tr",
      time: "02:30 pm-03:45 pm",
      campus: "main (fort garry & bannatyne)"
    },  
    {
      name: "Elementary Discrete Mathematics",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 53270,
      instructor: "Robert Craigen (P)",
      days: "MWF",
      time: "12:30 pm-01:20 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Algebra 1",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 53275,
      instructor: "Michelle P. Davidson",
      days: "MWF",
      time: "10:30 am-11:20 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Complex Analysis 1",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 53285,
      instructor: "Nina Zorboska (P)",
      days: "TR",
      time: "01:00 pm-02:15 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Basic Functional Analysis",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 53309,
      instructor: "Robert Martin (P)",
      days: "MW",
      time: "02:30 pm-03:45 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Life in the Universe",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 61976,
      instructor: "Prem B. Basnet (P)",
      days: "TR",
      time: "11:30 am-12:45 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Classical Mechanics 1",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 50353,
      instructor: "Peter G. Blunden (P)",
      days: "TR",
      time: "02:30 pm-03:45 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Quantum Mechanics 2",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 57057,
      instructor: "Andreas Shalchi (P)",
      days: "MWF",
      time: "09:30 am-10:20 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Computational Physics",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 50359,
      instructor: "Savino Longo (P)",
      days: "MWF",
      time: "11:30 am-12:20 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Basic Statistical Analysis 1",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 50080,
      instructor: "Zenaida Mateo (P)",
      days: "MWF",
      time: "10:30 am-11:20 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Basic Statistical Analysis 2",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 50085,
      instructor: "Carrie B. Madden (P)",
      days: "MWF",
      time: "09:30 am-10:20 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Introduction to Stochastic Processes",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 59790,
      instructor: "Aerambamoorthy Thavaneswaran (P)",
      days: "MWF",
      time: "10:30 am-11:20 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Applied Statistical Modelling",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 60914,
      instructor: "Jenna G. Tichon (P)",
      days: "MWF",
      time: "10:30 am-11:20 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Introductory Financial Accounting",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 50048,
      instructor: "Noha Ghattas (P)",
      days: "MWF",
      time: "11:30 am - 12:45 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Intermediate Accounting - Assets",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 92556,
      instructor: "Mingzhi Liu (P)",
      days: "TR",
      time: "10:00 am - 11:15 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Data Analytics in Accounting",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 62565,
      instructor: "Zheng Liu (P)",
      days: "MW",
      time: "10:00 am - 11:15 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Auditing",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 34903,
      instructor: "David Yu (P)",
      days: "MW",
      time: "10:00 am - 11:15 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Business and Society",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 11648,
      instructor: "Yifan Wei (P)",
      days: "MW",
      time: "10:00 am - 11:15 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Business Communications",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 03055,
      instructor: "Rakesh C. Mittoo (P)",
      days: "MW",
      time: "10:00 am - 11:15 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Commercial Law",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 36193,
      instructor: "Ian A. Restall (P)",
      days: "MW",
      time: "08:30 am - 09:45 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Administrative Policy",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 01641,
      instructor: "Jie Yang (P)",
      days: "MW",
      time: "10:00 am - 11:15 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Fundamentals of Marketing",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 68304,
      instructor: "Kivalina E. Grove (P)",
      days: "MW",
      time: "11:30 am - 12:45 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Marketing Research",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 53028,
      instructor: "Nicholas Borodenko (P)",
      days: "MW",
      time: "01:00 pm - 02:15 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Marketing Management",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 58507,
      instructor: "Kiran K. Pedada (P)",
      days: "MW",
      time: "11:30 am - 12:45 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Supply Chain and Operations Management",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 21412,
      instructor: "Alok Dua (P)",
      days: "MW",
      time: "10:00 am - 11:15 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Transportation Principles",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 48698,
      instructor: "Narendra D. Malalgoda (P)",
      days: "MW",
      time: "10:00 am - 11:15 am",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Supply Chain Sustainability",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 50334,
      instructor: "Paul Larson (P)",
      days: "MW",
      time: "11:30 am - 12:45 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
   {
      name: "Advanced Supply Chain Managementg",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 71598,
      instructor: "Srimantoorao S. Appadoo (P)",
      days: "W",
      time: "06:15 pm - 09:30 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    },
    {
      name: "Introductory Financial Accounting",
      section: 'A01',
      term: "Winter 2023",
      credits: 3,
      crn: 62019,
      instructor: "Noha Ghattas (P)",
      days: "MW",
      time: "11:30 am - 12:45 pm",
      campus: "Main (Fort Garry & Bannatyne)"
    }
    
  ];
// Initialize registeredCourses from sessionStorage or as an array of length 5 with null values
let registeredCourses = JSON.parse(sessionStorage.getItem('registeredCourses')) || Array(5).fill(null);

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
  for (let i = 0; i < registeredCourses.length; i++) {
    if (registeredCourses[i] === null || registeredCourses[i] === undefined) {
      return i;
    }
  }
  return null;
}

function searchByCRN(crn) {
  crn = parseInt(crn);
  for (const course of Object.values(courses)) {
    if (course.crn === crn) {
      if (registeredCourses.some(registeredCourse => registeredCourse && registeredCourse.crn == crn)) {
        alert("You have already registered for this course.");
        return;
      }
      let courseID = getAvailableCourseID();
      if (courseID !== null) {
        registeredCourses[courseID] = course;
        sessionStorage.setItem('registeredCourses', JSON.stringify(registeredCourses)); // Store the updated registeredCourses array in sessionStorage
        displayCourses();
      }
      if(getAvailableCourseID() >= 5){
        alert("You have already registered for the maximum number of courses.");
      }
      return;
    }
  }
}

  
  function displayCourses() {
    const registeredCoursesContainer = document.getElementById("courses-container");
  
    // Check if registeredCourses array is empty
    if (registeredCourses.every(course => course === null)) {
      // Show message that there are no registered courses
      registeredCoursesContainer.innerHTML = `
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
  
    // Loop through registeredCourses array and generate HTML for each course
    for (const course of registeredCourses) {
      if(course){
        const courseHtml = `
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-1">
                  <div class="form-check text-center">
                    <label class="form-check-label" for="${course.crn}">Select:</label>
                    <br />
                    <input class="form-check-input text-center" type="checkbox" name="${course.title}" value="${course.crn}">
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
                <div class="col-md-2" id="label">
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
            
            <!-- Padding -->
            <div class="p-2"></div>
          `;
        coursesHtml += courseHtml;
      }
    }
    registeredCoursesContainer.innerHTML = coursesHtml;
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
        const courseIndex = registeredCourses.findIndex(course => course.crn == courseId);
        
        // If the course is found, remove it from the registeredCourses array
        if (courseIndex !== -1) {
          const originalLength = registeredCourses.length;
          registeredCourses.splice(courseIndex, 1);

          const newLength = registeredCourses.length;
          for (let i = newLength; i < originalLength; i++) {
            registeredCourses[i] = null;
          }
        }
        
        // Update the registeredCourses array in session storage
        sessionStorage.setItem("registeredCourses", JSON.stringify(registeredCourses));
        
        // Update the list of courses displayed on the page
        displayCourses();
      }
    });
  }
  

  

  const dropButton = document.querySelector('#dropButton');
  dropButton.addEventListener('click', dropCourse);
