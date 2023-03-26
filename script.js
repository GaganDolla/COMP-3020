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
      url: '../../Winter2023/Faculty of Science/Comp Sci/w_sci_compsci_comp1010.html'
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
      CRN: 67891,
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
      url: './Courses/Winter2023/Faculty of Science/Statistics/w_sci_stat_stat4000.html'
    },
    {
      CRN: 59662,
      courseCode: 'HIST 1380',
      courseName: 'Introduction to Modern World History: 1800-Present (M)',
      url: './Courses/Winter2023/Faculty of Art/History/w_art_hist_hist1380.html'
    },
    {
      CRN: 61010,
      courseCode: 'HIST 2286',
      courseName: 'Modern Canada (C)',
      url: './Courses/Winter2023/Faculty of Art/History/w_art_hist_hist2286.html'
    },
    {
      CRN: 62276,
      courseCode: 'HIST 3780',
      courseName: 'Residential Schools in Canada (C)',
      url: './Courses/Winter2023/Faculty of Art/History/w_art_hist_hist3780.html'
    },
    {
      CRN: 62277,
      courseCode: 'HIST 4000',
      courseName: 'An Introduction to Modern World History: 1800-Present (M)',
      url: './Courses/Winter2023/Faculty of Art/History/w_art_hist_hist4000.html'
    },
    {
      CRN: 52785,
      courseCode: 'PHIL 1200',
      courseName: 'Critical Thinking',
      url: './Courses/Winter2023/Faculty of Art/Philosophy/w_art_phil_phil1200.html'
    },
    {
      CRN: 62169,
      courseCode: 'PHIL 2160',
      courseName: 'Fundamentals of the Philosophy of Language',
      url: './Courses/Winter2023/Faculty of Art/Philosophy/w_art_phil_phil2160.html'
    },
    {
      CRN: 62164,
      courseCode: 'PHIL 2650',
      courseName: 'Plato',
      url: './Courses/Winter2023/Faculty of Art/Philosophy/w_art_phil_phil2650.html'
    },
    {
      CRN: 62162,
      courseCode: 'PHIL 3650',
      courseName: 'Contemporary Metaphysics',
      url: './Courses/Winter2023/Faculty of Art/Philosophy/w_art_phil_phil3650.html'
    },
    {
      CRN: 50329,
      courseCode: 'PSYC 2260',
      courseName: 'Introduction to Research Methods in Psychology',
      url: './Courses/Winter2023/Faculty of Art/Psychology/w_art_psyc_psyc2260.html'
    },
    {
      CRN: 57129,
      courseCode: 'PSYC 2380',
      courseName: 'Psychology of Gender',
      url: './Courses/Winter2023/Faculty of Art/Psychology/w_art_psyc_psyc2380.html'
    },
    {
      CRN: 62208,
      courseCode: 'PSYC 3160',
      courseName: 'Perception and Attention',
      url: './Courses/Winter2023/Faculty of Art/Psychology/w_art_psyc_psyc3160.html'
    },
    {
      CRN: 62493,
      courseCode: 'PSYC 4600',
      courseName: 'Developmental Social Cognitio',
      url: './Courses/Winter2023/Faculty of Art/Psychology/w_art_psyc_psyc4600.html'
    },
    {
      CRN: 50048,
      courseCode: 'ACC 1100',
      courseName: 'Introductory Financial Accounting',
      url: './Courses/Winter2023/Asper School of Business/Accounting and Finance/w_SoB_AccaandFin_ACC1100.html'
    },
    {
      CRN: 92556,
      courseCode: 'ACC 2010',
      courseName: 'Intermediate Accounting - Assets',
      url: './Courses/Winter2023/Asper School of Business/Accounting and Finance/w_SoB_AccandFin_ACC2010.html'
    },
    {
      CRN: 62562,
      courseCode: 'ACC 3010',
      courseName: 'Data Analytics in Accounting',
      url: './Courses/Winter2023/Asper School of Business/Accounting and Finance/w_SoB_AccandFin_ACC3010.html'
    },
    {
      CRN: 34903,
      courseCode: 'ACC 4010',
      courseName: 'Auditing',
      url: './Courses/Winter2023/Asper School of Business/Accounting and Finance/w_SoB_AccandFin_ACC4010.html'
    },
    {
      CRN: 11648,
      courseCode: 'GMGT 1010',
      courseName: 'Business and Society',
      url: './Courses/Winter2023/Asper School of Business/General Management/w_SoB_GenMan_GMGT1010.html'
    },
    {
      CRN: 03055,
      courseCode: 'GMGT 2010',
      courseName: 'Business Communications',
      url: './Courses/Winter2023/Asper School of Business/General Management/w_SoB_GenMan_GMGT2010.html'
    },
    {
      CRN: 36193,
      courseCode: 'GMGT 3300',
      courseName: 'Commercial Law',
      url: './Courses/Winter2023/Asper School of Business/General Management/w_SoB_GenMan_GMGT3300.html'
    },
    {
      CRN: 01641,
      courseCode: 'GMGT 4010',
      courseName: 'Administrative Policy',
      url: './Courses/Winter2023/Asper School of Business/General Management/w_SoB_GenMan_GMGT4010.html'
    },
    {
      CRN: 68304,
      courseCode: 'MKT 2210',
      courseName: 'Fundamentals of Marketing',
      url: './Courses/Winter2023/Asper School of Business/Marketing/w_SoB_Mark_MKT2210.html'
    },
    {
      CRN: 53028,
      courseCode: 'MKT 3220',
      courseName: 'Marketing Research',
      url: './Courses/Winter2023/Asper School of Business/Marketing/w_SoB_Mark_MKT3220.html'
    },
    {
      CRN: 58507,
      courseCode: 'MKT 4210',
      courseName: 'Marketing Management',
      url: './Courses/Winter2023/Asper School of Business/Marketing/w_SoB_Mark_MKT4210.html'
    },
    {
      CRN: 21412,
      courseCode: 'SCM 2160',
      courseName: 'Supply Chain and Operations Management',
      url: './Courses/Winter2023/Asper School of Business/Supply Chain Management/w_SoB_SuppCM_SCM2160.html'
    },
    {
      CRN: 48698,
      courseCode: 'SCM 2210',
      courseName: 'Transportation Principles',
      url: './Courses/Winter2023/Asper School of Business/Supply Chain Management/w_SoB_SuppCM_SCM2210.html'
    },
    {
      CRN: 50334,
      courseCode: 'SCM 3260',
      courseName: 'Supply Chain Sustainability',
      url: './Courses/Winter2023/Asper School of Business/Supply Chain Management/w_SoB_SuppCM_SCM3260.html'
    },
    {
      CRN: 71598,
      courseCode: 'SCM 7048',
      courseName: 'Advanced Supply Chain Managementg',
      url: './Courses/Winter2023/Asper School of Business/Supply Chain Management/w_SoB_SuppCM_SCM7048.html'
    },
    {
      CRN: 11094,
      courseCode: 'ABIZ 1000',
      courseName: 'Introduction to Agribusiness Management',
      url: './Courses/Winter2023/Faculty of Agricultural and Food Science/Agribusiness And Agricultural Economics/w_AaFS_ABIZ1000.html'
    },
    {
      CRN: 80971,
      courseCode: 'ABIZ 2390',
      courseName: 'Introduction to Environmental Economics',
      url: './Courses/Winter2023/Faculty of Agricultural and Food Science/Agribusiness And Agricultural Economics/w_AaFS_ABIZ2000.html'
    },
    {
      CRN: 14058,
      courseCode: 'ABIZ 3510',
      courseName: 'Economics of Food Policy',
      url: './Courses/Winter2023/Faculty of Agricultural and Food Science/Agribusiness And Agricultural Economics/w_AaFS_ABIZ3510.html'
    },
    {
      CRN: 62219,
      courseCode: 'ABIZ 4120',
      courseName: 'Intermediate Econometrics',
      url: './Courses/Winter2023/Faculty of Agricultural and Food Science/Agribusiness And Agricultural Economics/w_AaFS_ABIZ4120.html'
    },
    {
      CRN: 73794,
      courseCode: 'HNSC 1200',
      courseName: 'Food: Facts and Fallacies',
      url: './Courses/Winter2023/Faculty of Agricultural and Food Science/Human Nutritional Sciences/w_AaFS_HNSC1200.html'
    },
    {
      CRN: 73795,
      courseCode: 'HNSC 2140',
      courseName: 'Basic Principles of Human Nutrition',
      url: './Courses/Winter2023/Faculty of Agricultural and Food Science/Human Nutritional Sciences/w_AaFS_HNSC2140.html'
    },
    {
      CRN: 73796,
      courseCode: 'HNSC 3300',
      courseName: 'Vitamins and Minerals in Human Health',
      url: './Courses/Winter2023/Faculty of Agricultural and Food Science/Human Nutritional Sciences/w_AaFS_HNSC3300.html'
    },
    {
      CRN: 73797,
      courseCode: 'HNSC 4100',
      courseName: 'Current Issues in Food and Human Nutrition',
      url: './Courses/Winter2023/Faculty of Agricultural and Food Science/Human Nutritional Sciences/w_AaFS_HNSC4100.html'
    }
  ];
  for (let i = 0; i < courses.length; i++) {
    const j = i+1;
    if(userInput == courses[i].courseCode || userInput == courses[i].courseName || userInput == courses[i].CRN.toString()){
      window.open(courses[i].url);
      break;
    }
    if(j == courses.length){
      // Display an error message telling the user to refine their search
      const errorMessage = document.createElement('div');
      errorMessage.classList.add('alert', 'alert-danger', 'alert-dismissible', 'fade', 'show', 'in');
      errorMessage.innerHTML = '<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span></button>Please use CNR, Course name and Course code for search.';
      searchResultsContainer.appendChild(errorMessage);
    }

  }
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
