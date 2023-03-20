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
    CRN: 59662,
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
    CRN: 61010,
    instructor: "Esyllt Jones (P)",
    days: "TR",
    time: "11:30 am-12:45 pm",
    campus: "Main (Fort Garry & Bannatyne)"
  },
  {
    name: "Residential Schools in Canada (C)",
    section: 'A01',
    term: "Fall 2023",
    credits: 3,
    CRN: 62276,
    instructor: "Sean Carleton (P)",
    days: "TR",
    time: "01:00 pm-02:15 pm",
    campus: "Main (Fort Garry & Bannatyne)"
  },
  {
    name: "Thirty Years' Crisis (M)",
    section: 'A01',
    term: "Fall 2023",
    credits: 3,
    CRN: 62277,
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
    CRN: 50329,
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
    CRN: 57129,
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
    CRN: 62208,
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
    CRN: 62493,
    instructor: "Shaylene Nancekivell (P)",
    days: "W",
    time: "08:30 am-11:15 am",
    campus: "Main (Fort Garry & Bannatyne)"
  },
  {
    name: "Critical Thinking",
    section: 'A01',
    term: "Fall 2023",
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
    term: "Fall 2023",
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
    term: "Fall 2023",
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
    term: "Fall 2023",
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
    term: "Fall 2023",
    credits: 3,
    crn: 74712,
    instructor: "Patrick M. Dubois (P)",
    days: "tr",
    time: "12:30 pm-1:20 pm",
    campus: "main (fort garry & bannatyne)"
  },
  {
    name: "Data Structures and Algorithms",
    section: 'A01',
    term: "Fall 2023",
    credits: 3,
    crn: 36188,
    instructor: "Phil Pitura (P)",
    days: "mwf",
    time: "09:30 am-10:20 am",
    campus: "main (fort garry & bannatyne)"
  },
  {
    name: "Human-Computer Interaction 1",
    section: 'A01',
    term: "Fall 2023",
    credits: 3,
    crn: 90535,
    instructor: "Karel Kahula (P)",
    days: "tr",
    time: "01:00 pm-02:15 pm",
    campus: "main (fort garry & bannatyne)"
  },
  {
    name: "Data Structures and Algorithms",
    section: 'A01',
    term: "Fall 2023",
    credits: 3,
    crn: 59525,
    instructor: "John E. Anderson (P)",
    days: "mwf",
    time: "09:30 am-10:20 am",
    campus: "main (fort garry & bannatyne)"
  },
  {
    name: "Database Implementation",
    section: 'A01',
    term: "Fall 2023",
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
    term: "Fall 2023",
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
    term: "Fall 2023",
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
    term: "Fall 2023",
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
    term: "Fall 2023",
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
    term: "Fall 2023",
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
    term: "Fall 2023",
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
    term: "Fall 2023",
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
    term: "Fall 2023",
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
    term: "Fall 2023",
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
    term: "Fall 2023",
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
    term: "Fall 2023",
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
    term: "Fall 2023",
    credits: 3,
    crn: 60914,
    instructor: "Jenna G. Tichon (P)",
    days: "MWF",
    time: "10:30 am-11:20 am",
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
alert(`No course was found with CRN ${crn}.`);
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
          <div class="col-md-1">
            <div class="form-check text-center">
              <p>No registered courses</p>
            </div>
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
                  <input class="form-check-input text-center" type="checkbox" id="${course.crn}" name="${course.title}" value="${course.crn}">
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