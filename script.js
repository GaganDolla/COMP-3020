const searchForm = document.querySelector('form');
searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  performSearch();
});

function performSearch() {
  const userInput = document.getElementById('searchInput').value;
  const searchResultsContainer = document.getElementById('searchResults');

  const courses = [
    {
      CRN: 50102,
      courseCode: 'COMP 1010',
      courseName: 'Introductory Computer Science 1',
      url: './Courses/Winter2023/Faculty of Science/Comp Sci/w_sci_compsci_comp1010.html',
    },
    {
      CRN: 50140,
      courseCode: 'COMP 2140',
      courseName: 'Data Structures and Algorithms',
      url: './Courses/Winter2023/Faculty of Science/Comp Sci/w_sci_compsci_comp2140.html'
    },
    {
      CRN: 12345,
      courseCode: 'COMP 2150',
      courseName: 'Object Orientation',
      url: './Courses/Winter2023/Faculty of Science/Comp Sci/w_sci_compsci_comp2150.html'
    },
    {
      CRN: 61857,
      courseCode: 'COMP 3020',
      courseName: 'Human-Computer Interaction 1',
      url: './Courses/Winter2023/Faculty of Science/Comp Sci/w_sci_compsci_comp3020.html'
    },
    {
      CRN: 59525,
      courseCode: 'COMP 3190',
      courseName: 'Introduction to Artificial Intelligence',
      url: './Courses/Winter2023/Faculty of Science/Comp Sci/w_sci_compsci_comp3190.html'
    },
    {
      CRN: 59519,
      courseCode: 'COMP 4380',
      courseName: 'Database Implementation',
      url:'./Courses/Winter2023/Faculty of Science/Comp Sci/w_sci_compsci_comp4380.html'
    },
    {
      CRN: 53270,
      courseCode: 'MATH 1240',
      courseName: 'Elementary Discrete Mathematics',
      url: './Courses/Winter2023/Faculty of Science/Mathematics/w_sci_math_math1240.html'
    },
    {
      CRN: 53309,
      courseCode: 'MATH 2020',
      courseName: 'Algebra 1',
      url: './Courses/Winter2023/Faculty of Science/Mathematics/w_sci_math_math2020.html'
    },
    {
      CRN: 53285,
      courseCode: 'MATH 3340',
      courseName: 'Complex Analysis 1',
      url: './Courses/Winter2023/Faculty of Science/Mathematics/w_sci_math_math3340.html'
    },
    {
      CRN: 53275,
      courseCode: 'MATH 4280',
      courseName: 'Basic Functional Analysis',
      url: './Courses/Winter2023/Faculty of Science/Mathematics/w_sci_math_math4280.html'
    },
    {
      CRN: 61976,
      courseCode: 'ASTR 1830',
      courseName: 'Life in the Universe',
      url: './Courses/Winter2023/Faculty of Science/Physics and Astronomy/w_sci_astr_astr1830.html'
    },
    {
      CRN: 50353,
      courseCode: 'PHYS 2650',
      courseName: 'Classical Mechanics 1',
      url: './Courses/Winter2023/Faculty of Science/Physics and Astronomy/w_sci_phys_phys2650.html'
    },
    {
      CRN: 57057,
      courseCode: 'PHYS 3386',
      courseName: 'Quantum Mechanics 2',
      url: './Courses/Winter2023/Faculty of Science/Physics and Astronomy/w_sci_phys_phys3386.html'
    },
    {
      CRN: 50359,
      courseCode: 'PHYS 4250',
      courseName: 'Computational Physics',
      url: './Courses/Winter2023/Faculty of Science/Physics and Astronomy/w_sci_phys_phys4250.html'
    },
    {
      CRN: 50080,
      courseCode: 'STAT 1000',
      courseName: 'Basic Statistical Analysis',
      url: './Courses/Winter2023/Faculty of Science/Statistics/w_sci_stat_stat1000.html'
    },
    {
      CRN: 50085,
      courseCode: 'STAT 2000',
      courseName: 'Basic Statistical Analysis 2',
      url: './Courses/Winter2023/Faculty of Science/Statistics/w_sci_stat_stat2000.html'
    },
    {
      CRN: 59790,
      courseCode: 'STAT 3030',
      courseName: 'Introduction to Stochastic Processes',
      url: './Courses/Winter2023/Faculty of Science/Statistics/w_sci_stat_stat3030.html'
    },
    {
      CRN: 60914,
      courseCode: 'STAT 4000',
      courseName: 'Applied Statistical Modelling',
      url: './Courses/Winter2023/Faculty of Science/Statistics/w_sci_stat_stat000.html'
    }
  ];
  for (let i = 0; i < courses.length; i++) {
    if(userInput == courses[i].courseCode || userInput == courses[i].courseName || userInput == courses[i].CRN.toString()){
      window.open(courses[i].url);
      break;
    }

  }
  // Display an error message telling the user to refine their search
  const errorMessage = document.createElement('div');
  errorMessage.classList.add('alert', 'alert-danger', 'alert-dismissible', 'fade', 'show', 'in');
  errorMessage.innerHTML = '<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span></button>Please use CNR, Course name and Course code for search.';
  searchResultsContainer.appendChild(errorMessage);
}
// function displaySearchResults(results) {
//   const searchResultsContainer = document.getElementById('searchResults');

//   // Remove any existing search results
//   while (searchResultsContainer.firstChild) {
//     searchResultsContainer.removeChild(searchResultsContainer.firstChild);
//   }

//   // Check the length of the search results array
//   if (results.length === 0) {
//     // Display a message saying no results were found
//     const noResultsMessage = document.createElement('div');
//     noResultsMessage.textContent = 'No results found.';
//     searchResultsContainer.appendChild(noResultsMessage);
//   } else if (results.length === 1) {
//     // Redirect the user to the single search result
//     window.location.href = results[0];
//   } else {
//     // Display an error message telling the user to refine their search
//     const errorMessage = document.createElement('div');
//     errorMessage.classList.add('alert', 'alert-danger', 'alert-dismissible', 'fade', 'show', 'in');
//     errorMessage.innerHTML = '<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span></button>Please use CNR, Course name and Course code for search.';
//     searchResultsContainer.appendChild(errorMessage);
//   }
// }



// for (let i = 0; i < urls.length; i++) {
//     fetch(urls[i])
//       .then(response => response.text())
//       .then(data => {
//         // Search for the query within the page content
//         if (data.includes(searchQuery)) {
//           // Add the URL to the search results array
//           searchResults.push(urls[i]);
//         }
//         // Check if this is the last URL to search
//         if (i === urls.length - 1) {
//           displaySearchResults(searchResults);
//         }
//       })
//       .catch(error => console.error(error));
//   }
