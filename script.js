const searchForm = document.querySelector('form');
searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  performSearch();
});

function performSearch() {
  const searchQuery = document.getElementById('searchInput').value;
  const searchResults = [];

  // An array of URLs to search
  const urls = 
  ['./Courses/Fall 2023/Faculty of Agricultural and Food Science/Agribusiness And Agricultural Economics/f_AaFS_ABIZ1000.html',
   './Courses/Fall 2023/Faculty of Agricultural and Food Science/Agribusiness And Agricultural Economics/f_AaFS_ABIZ2390.html',
    './Courses/Fall 2023/Faculty of Agricultural and Food Science/Agribusiness And Agricultural Economics/f_AaFS_ABIZ3510.html',
    './Courses/Fall 2023/Faculty of Agricultural and Food Science/Agribusiness And Agricultural Economics/f_AaFS_ABIZ4120.html',
    './Courses/Fall 2023/Faculty of Agricultural and Food Science/Human Nutritional Sciences/f_AaFS_HNSC1200.html',
    './Courses/Fall 2023/Faculty of Agricultural and Food Science/Human Nutritional Sciences/f_AaFS_HNSC2140.html',
    './Courses/Fall 2023/Faculty of Agricultural and Food Science/Human Nutritional Sciences/f_AaFS_HNSC3300.html',
    './Courses/Fall 2023/Faculty of Agricultural and Food Science/Human Nutritional Sciences/f_AaFS_HNSC4100.html',
    './Courses/Fall 2023/Faculty of Art/History/f_art_hist_hist1380.html',
    './Courses/Fall 2023/Faculty of Art/History/f_art_hist_hist2286.html',
    './Courses/Fall 2023/Faculty of Art/History/f_art_hist_hist3780.html',
    './Courses/Fall 2023/Faculty of Art/History/f_art_hist_hist4000.html',
    './Courses/Fall 2023/Faculty of Art/Philosophy/f_art_phil_phil1200.html',
    './Courses/Fall 2023/Faculty of Art/Philosophy/f_art_phil_phil2160.html',
    './Courses/Fall 2023/Faculty of Art/Philosophy/f_art_phil_phil2650.html',
    './Courses/Fall 2023/Faculty of Art/Philosophy/f_art_phil_phil3650.html',
    './Courses/Fall 2023/Faculty of Art/Psychology/f_art_psyc_psyc2260.html',
    './Courses/Fall 2023/Faculty of Art/Psychology/f_art_psyc_psyc2380.html',
    './Courses/Fall 2023/Faculty of Art/Psychology/f_art_psyc_psyc3160.html',
    './Courses/Fall 2023/Faculty of Art/Psychology/f_art_psyc_psyc4600.html',
    './Courses/Fall 2023/Faculty of Science/Comp Sci/f_sci_compsci_comp1010.html',
    './Courses/Fall 2023/Faculty of Science/Comp Sci/f_sci_compsci_comp2140.html',
    './Courses/Fall 2023/Faculty of Science/Comp Sci/f_sci_compsci_comp2150.html',
    './Courses/Fall 2023/Faculty of Science/Comp Sci/f_sci_compsci_comp3020.html',
    './Courses/Fall 2023/Faculty of Science/Comp Sci/f_sci_compsci_comp3190.html',
    './Courses/Fall 2023/Faculty of Science/Comp Sci/f_sci_compsci_comp4380.html',
    './Courses/Winter2023/Faculty of Science/Mathematics/f_sci_math_math1240.html',
    './Courses/Winter2023/Faculty of Science/Mathematics/f_sci_math_math2020.html',
    './Courses/Winter2023/Faculty of Science/Mathematics/f_sci_math_math3340.html',
    './Courses/Winter2023/Faculty of Science/Mathematics/f_sci_math_math4280.html',
    './Courses/Winter2023/Faculty of Science/Physics and Astronomy/f_sci_astr_astr1830.html',
    './Courses/Winter2023/Faculty of Science/Physics and Astronomy/f_sci_phys_phys2650.html',
    './Courses/Winter2023/Faculty of Science/Physics and Astronomy/f_sci_phys_phys3386.html',
    './Courses/Winter2023/Faculty of Science/Physics and Astronomy/f_sci_phys_phys4250.html',
    './Courses/Fall 2023/Faculty of Science/Statistics/f_sci_stat_stat1000.html',
    './Courses/Fall 2023/Faculty of Science/Statistics/f_sci_stat_stat2000.html',
    './Courses/Fall 2023/Faculty of Science/Statistics/f_sci_stat_stat3030.html',
    './Courses/Fall 2023/Faculty of Science/Statistics/f_sci_stat_stat4000.html',
    './Courses/Winter 2023/Faculty of Agricultural and Food Science/Agribusiness And Agricultural Economics/w_AaFS_ABIZ1000.html',
   './Courses/Winter 2023/Faculty of Agricultural and Food Science/Agribusiness And Agricultural Economics/w_AaFS_ABIZ2390.html',
    './Courses/Winter 2023/Faculty of Agricultural and Food Science/Agribusiness And Agricultural Economics/w_AaFS_ABIZ3510.html',
    './Courses/Winter 2023/Faculty of Agricultural and Food Science/Agribusiness And Agricultural Economics/w_AaFS_ABIZ4120.html',
    './Courses/Winter 2023/Faculty of Agricultural and Food Science/Human Nutritional Sciences/w_AaFS_HNSC1200.html',
    './Courses/Winter 2023/Faculty of Agricultural and Food Science/Human Nutritional Sciences/w_AaFS_HNSC2140.html',
    './Courses/Winter 2023/Faculty of Agricultural and Food Science/Human Nutritional Sciences/w_AaFS_HNSC3300.html',
    './Courses/Winter 2023/Faculty of Agricultural and Food Science/Human Nutritional Sciences/w_AaFS_HNSC4100.html',
    './Courses/Winter 2023/Faculty of Art/History/w_art_hist_hist1380.html',
    './Courses/Winter 2023/Faculty of Art/History/w_art_hist_hist2286.html',
    './Courses/Winter 2023/Faculty of Art/History/w_art_hist_hist3780.html',
    './Courses/Winter 2023/Faculty of Art/History/w_art_hist_hist4000.html',
    './Courses/Winter 2023/Faculty of Art/Philosophy/w_art_phil_phil1200.html',
    './Courses/Winter 2023/Faculty of Art/Philosophy/w_art_phil_phil2160.html',
    './Courses/Winter 2023/Faculty of Art/Philosophy/w_art_phil_phil2650.html',
    './Courses/Winter 2023/Faculty of Art/Philosophy/w_art_phil_phil3650.html',
    './Courses/Winter 2023/Faculty of Art/Psychology/w_art_psyc_psyc2260.html',
    './Courses/Winter 2023/Faculty of Art/Psychology/w_art_psyc_psyc2380.html',
    './Courses/Winter 2023/Faculty of Art/Psychology/w_art_psyc_psyc3160.html',
    './Courses/Winter 2023/Faculty of Art/Psychology/w_art_psyc_psyc4600.html',
    './Courses/Winter 2023/Faculty of Science/Comp Sci/w_sci_compsci_comp1010.html',
    './Courses/Winter 2023/Faculty of Science/Comp Sci/w_sci_compsci_comp2140.html',
    './Courses/Winter 2023/Faculty of Science/Comp Sci/w_sci_compsci_comp2150.html',
    './Courses/Winter 2023/Faculty of Science/Comp Sci/w_sci_compsci_comp3020.html',
    './Courses/Winter 2023/Faculty of Science/Comp Sci/w_sci_compsci_comp3190.html',
    './Courses/Winter 2023/Faculty of Science/Comp Sci/w_sci_compsci_comp4380.html',
    './Courses/Winter2023/Faculty of Science/Mathematics/w_sci_math_math1240.html',
    './Courses/Winter2023/Faculty of Science/Mathematics/w_sci_math_math2020.html',
    './Courses/Winter2023/Faculty of Science/Mathematics/w_sci_math_math3340.html',
    './Courses/Winter2023/Faculty of Science/Mathematics/w_sci_math_math4280.html',
    './Courses/Winter2023/Faculty of Science/Physics and Astronomy/w_sci_astr_astr1830.html',
    './Courses/Winter2023/Faculty of Science/Physics and Astronomy/w_sci_phys_phys2650.html',
    './Courses/Winter2023/Faculty of Science/Physics and Astronomy/w_sci_phys_phys3386.html',
    './Courses/Winter2023/Faculty of Science/Physics and Astronomy/w_sci_phys_phys4250.html',
    './Courses/Winter 2023/Faculty of Science/Statistics/w_sci_stat_stat1000.html',
    './Courses/Winter 2023/Faculty of Science/Statistics/w_sci_stat_stat2000.html',
    './Courses/Winter 2023/Faculty of Science/Statistics/w_sci_stat_stat3030.html',
    './Courses/Winter 2023/Faculty of Science/Statistics/w_sci_stat_stat4000.html'
  ];

  // Loop through each URL in the array
  for (let i = 0; i < urls.length; i++) {
    fetch(urls[i])
      .then(response => response.text())
      .then(data => {
        // Search for the query within the page content
        if (data.includes(searchQuery)) {
          // Add the URL to the search results array
          searchResults.push(urls[i]);
        }
        // Check if this is the last URL to search
        if (i === urls.length - 1) {
          displaySearchResults(searchResults);
        }
      })
      .catch(error => console.error(error));
  }
}

function displaySearchResults(results) {
  const searchResultsContainer = document.getElementById('searchResults');

  // Remove any existing search results
  while (searchResultsContainer.firstChild) {
    searchResultsContainer.removeChild(searchResultsContainer.firstChild);
  }

  // Check the length of the search results array
  if (results.length === 0) {
    // Display a message saying no results were found
    const noResultsMessage = document.createElement('div');
    noResultsMessage.textContent = 'No results found.';
    searchResultsContainer.appendChild(noResultsMessage);
  } else if (results.length === 1) {
    // Redirect the user to the single search result
    window.location.href = results[0];
  } else {
    // Display an error message telling the user to refine their search
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('alert', 'alert-danger', 'alert-dismissible', 'fade', 'show', 'in');
    errorMessage.innerHTML = '<button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span></button>Please use CNR, Course name and Course code for search.';
    searchResultsContainer.appendChild(errorMessage);
  }
}

