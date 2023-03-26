const searchForm = document.querySelector('form');
searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  performSearch();
});

function performSearch() {
  const userInput = document.getElementById('searchInput').value;
  const searchResultsContainer = document.getElementById('searchResults');

  const courses = [
//fall course

{
    CRN: 74712,
    courseCode: 'COMP 1010',
    courseName: 'Introductory Computer Science 1',
    url: '../../Faculty of Science/Comp Sci/f_sci_compsci_comp1010.html',
  },
  {
    CRN: 36188,
    courseCode: 'COMP 2140',
    courseName: 'Data Structures and Algorithms',
    url: '../../Faculty of Science/Comp Sci/f_sci_compsci_comp2140.html'
  },
  {
    CRN: 24932,
    courseCode: 'COMP 2150',
    courseName: 'Object Orientation',
    url: '../../Faculty of Science/Comp Sci/f_sci_compsci_comp2150.html'
  },
  {
    CRN: 41333,
    courseCode: 'COMP 2150',
    courseName: 'Object Orientation',
    url: '../../Faculty of Science/Comp Sci/f_sci_compsci_comp2150.html'
  },
  {
    CRN: 90535,
    courseCode: 'COMP 3020',
    courseName: 'Human-Computer Interaction 1',
    url: '../../Faculty of Science/Comp Sci/f_sci_compsci_comp3020.html'
  },
  {
    CRN: 04352,
    courseCode: 'COMP 3190',
    courseName: 'Introduction to Artificial Intelligence',
    url: '../../Faculty of Science/Comp Sci/f_sci_compsci_comp3190.html'
  },
  {
    CRN: 00350,
    courseCode: 'COMP 4380',
    courseName: 'Database Implementation',
    url: '../../Faculty of Science/Comp Sci/f_sci_compsci_comp4380.html'
  },
  {
    CRN: 57629,
    courseCode: 'MATH 1240',
    courseName: 'Elementary Discrete Mathematics',
    url: '../../Faculty of Science/Mathematics/f_sci_math_math1240.html'
  },
  {
    CRN: 58010,
    courseCode: 'MATH 2020',
    courseName: 'Algebra 1',
    url: '../../Faculty of Science/Mathematics/f_sci_math_math2020.html'
  },
  {
    CRN: 37950,
    courseCode: 'MATH 3340',
    courseName: 'Complex Analysis 1',
    url: '../../Faculty of Science/Mathematics/f_sci_math_math3340.html'
  },
  {
    CRN: 69346,
    courseCode: 'MATH 4280',
    courseName: 'Basic Functional Analysis',
    url: '../../Faculty of Science/Mathematics/f_sci_math_math4280.html'
  },
  {
    CRN: 30337,
    courseCode: 'ASTR 1830',
    courseName: 'Life in the Universe',
    url: '../../Faculty of Science/Physics and Astronomy/f_sci_astr_astr1830.html'
  },
  {
    CRN: 98101,
    courseCode: 'PHYS 2650',
    courseName: 'Classical Mechanics 1',
    url: '../../Faculty of Science/Physics and Astronomy/f_sci_phys_phys2650.html'
  },
  {
    CRN: 87400,
    courseCode: 'PHYS 3386',
    courseName: 'Quantum Mechanics 2',
    url: '../../Faculty of Science/Physics and Astronomy/f_sci_phys_phys3386.html'
  },
  {
    CRN: 69806,
    courseCode: 'PHYS 4250',
    courseName: 'Computational Physics',
    url: '../../Faculty of Science/Physics and Astronomy/f_sci_phys_phys4250.html'
  },
  {
    CRN: 50880,
    courseCode: 'STAT 1000',
    courseName: 'Basic Statistical Analysis',
    url: '../../Faculty of Science/Statistics/f_sci_stat_stat1000.html'
  },
  {
    CRN: 50889,
    courseCode: 'STAT 2000',
    courseName: 'Basic Statistical Analysis 2',
    url: '../../Faculty of Science/Statistics/f_sci_stat_stat2000.html'
  },
  {
    CRN: 25566,
    courseCode: 'STAT 3030',
    courseName: 'Introduction to Stochastic Processes',
    url: '../../Faculty of Science/Statistics/f_sci_stat_stat3030.html'
  },
  {
    CRN: 18265,
    courseCode: 'STAT 4000',
    courseName: 'Applied Statistical Modelling',
    url: '../../Faculty of Science/Statistics/f_sci_stat_stat4000.html'
  },
  {
    CRN: 59663,
    courseCode: 'HIST 1380',
    courseName: 'Introduction to Modern World History: 1800-Present (M)',
    url: '../../Faculty of Art/History/f_art_hist_hist1380.html'
  },
  {
    CRN: 19861,
    courseCode: 'HIST 2286',
    courseName: 'Modern Canada (C)',
    url: '../../Faculty of Art/History/f_art_hist_hist2283.html'
  },
  {
    CRN: 25146,
    courseCode: 'HIST 3780',
    courseName: 'Residential Schools in Canada (C)',
    url: '../../Faculty of Art/History/f_art_hist_hist3780.html'
  },
  {
    CRN: 68995,
    courseCode: 'HIST 4000',
    courseName: 'An Introduction to Modern World History: 1800-Present (M)',
    url: '../../Faculty of Art/History/f_art_hist_hist4000.html'
  },
  {
    CRN: 27986,
    courseCode: 'PHIL 1200',
    courseName: 'Critical Thinking',
    url: '../../Faculty of Art/Philosophy/f_art_phil_phil1200.html'
  },
  {
    CRN: 35715,
    courseCode: 'PHIL 2160',
    courseName: 'Fundamentals of the Philosophy of Language',
    url: '../../Faculty of Art/Philosophy/f_art_phil_phil2160.html'
  },
  {
    CRN: 35716,
    courseCode: 'PHIL 2650',
    courseName: 'Plato',
    url: '../../Faculty of Art/Philosophy/f_art_phil_phil2650.html'
  },
  {
    CRN: 09545,
    courseCode: 'PHIL 3650',
    courseName: 'Contemporary Metaphysics',
    url: '../../Faculty of Art/Philosophy/f_art_phil_phi3650.html'
  },
  {
    CRN: 92279,
    courseCode: 'PSYC 2260',
    courseName: 'Introduction to Research Methods in Psychology',
    url: '../../Faculty of Art/Psychology/f_art_psyc_psyc2260.html'
  },
  {
    CRN: 69179,
    courseCode: 'PSYC 2380',
    courseName: 'Psychology of Gender',
    url: '../../Faculty of Art/Psychology/f_art_psyc_psyc2380.html'
  },
  {
    CRN: 48375,
    courseCode: 'PSYC 3160',
    courseName: 'Perception and Attention',
    url: '../../Faculty of Art/Psychology/f_art_psyc_psyc3160.html'
  },
  {
    CRN: 70079,
    courseCode: 'PSYC 4600',
    courseName: 'Developmental Social Cognitio',
    url: '../../Faculty of Art/Psychology/f_art_psyc_psyc4600.html'
  },
  {
    CRN: 50042,
    courseCode: 'ACC 1100',
    courseName: 'Introductory Financial Accounting',
    url: '../../Asper School of Business/Accounting and Finance/f_SoB_AccaandFin_ACC1100.html'
  },
  {
    CRN: 50085,
    courseCode: 'ACC 2010',
    courseName: 'Intermediate Accounting - Assets',
    url: '../../Asper School of Business/Accounting and Finance/f_SoB_AccandFin_ACC2010.html'
  },
  {
    CRN: 62562,
    courseCode: 'ACC 3010',
    courseName: 'Data Analytics in Accounting',
    url: '../../Asper School of Business/Accounting and Finance/f_SoB_AccandFin_ACC3010.html'
  },
  {
    CRN: 60914,
    courseCode: 'ACC 4010',
    courseName: 'Auditing',
    url: '../../Asper School of Business/Accounting and Finance/f_SoB_AccandFin_ACC4010.html'
  },
  {
    CRN: 52053,
    courseCode: 'GMGT 1010',
    courseName: 'Business and Society',
    url: '../../Asper School of Business/General Management/f_SoB_GenMan_GMGT1010.html'
  },
  {
    CRN: 51732,
    courseCode: 'GMGT 2010',
    courseName: 'Business Communications',
    url: '../../Asper School of Business/General Management/f_SoB_GenMan_GMGT2010.html'
  },
  {
    CRN: 50025,
    courseCode: 'GMGT 3300',
    courseName: 'Commercial Law',
    url: '../../Asper School of Business/General Management/f_SoB_GenMan_GMGT3300.html'
  },
  {
    CRN: 58400,
    courseCode: 'GMGT 4010',
    courseName: 'Administrative Policy',
    url: '../../Asper School of Business/General Management/f_SoB_GenMan_GMGT4010.html'
  },
  {
    CRN: 50001,
    courseCode: 'MKT 2210',
    courseName: 'Fundamentals of Marketing',
    url: '../../Asper School of Business/Marketing/f_SoB_Mark_MKT2210.html'
  },
  {
    CRN: 50002,
    courseCode: 'MKT 3220',
    courseName: 'Marketing Research',
    url: '../../Asper School of Business/Marketing/f_SoB_Mark_MKT3220.html'
  },
  {
    CRN: 50020,
    courseCode: 'MKT 4210',
    courseName: 'Marketing Management',
    url: '../../Asper School of Business/Marketing/f_SoB_Mark_MKT4210.html'
  },
  {
    CRN: 53189,
    courseCode: 'SCM 2160',
    courseName: 'Supply Chain and Operations Management',
    url: '../../Asper School of Business/Supply Chain Management/f_SoB_SuppCM_SCM2160.html'
  },
  {
    CRN: 51286,
    courseCode: 'SCM 2210',
    courseName: 'Transportation Principles',
    url: '../../Asper School of Business/Supply Chain Management/f_SoB_SuppCM_SCM2210.html'
  },
  {
    CRN: 60262,
    courseCode: 'SCM 3260',
    courseName: 'Supply Chain Sustainability',
    url: '../../Asper School of Business/Supply Chain Management/f_SoB_SuppCM_SCM3260.html'
  },
  {
    CRN: 62730,
    courseCode: 'SCM 7048',
    courseName: 'Advanced Supply Chain Managementg',
    url: '../../Asper School of Business/Supply Chain Management/f_SoB_SuppCM_SCM7048.html'
  },
  {
    CRN: 50812,
    courseCode: 'ABIZ 1000',
    courseName: 'Introduction to Agribusiness Management',
    url: '../../Faculty of Agricultural and Food Science/Agribusiness And Agricultural Economics/f_AaFS_ABIZ1000.html'
  },
  {
    CRN: 50813,
    courseCode: 'ABIZ 2390',
    courseName: 'Introduction to Environmental Economics',
    url: '../../Faculty of Agricultural and Food Science/Agribusiness And Agricultural Economics/f_AaFS_ABIZ2390.html'
  },
  {
    CRN: 52473,
    courseCode: 'ABIZ 3510',
    courseName: 'Economics of Food Policy',
    url: '../../Faculty of Agricultural and Food Science/Agribusiness And Agricultural Economics/f_AaFS_ABIZ3510.html'
  },
  {
    CRN: 61360,
    courseCode: 'ABIZ 4120',
    courseName: 'Intermediate Econometrics',
    url: '../../Faculty of Agricultural and Food Science/Agribusiness And Agricultural Economics/f_AaFS_ABIZ4120.html'
  },
  {
    CRN: 50681,
    courseCode: 'HNSC 1200',
    courseName: 'Food: Facts and Fallacies',
    url: '../../Faculty of Agricultural and Food Science/Human Nutritional Sciences/f_AaFS_HNSC1200.html'
  },
  {
    CRN: 52473,
    courseCode: 'HNSC 2140',
    courseName: 'Basic Principles of Human Nutrition',
    url: '../../Faculty of Agricultural and Food Science/Human Nutritional Sciences/f_AaFS_HNSC2140.html'
  },
  {
    CRN: 50736,
    courseCode: 'HNSC 3300',
    courseName: 'Vitamins and Minerals in Human Health',
    url: '../../Faculty of Agricultural and Food Science/Human Nutritional Sciences/f_AaFS_HNSC3300.html'
  },
  {
    CRN: 60260,
    courseCode: 'HNSC 4100',
    courseName: 'Current Issues in Food and Human Nutrition',
    url: '../../Faculty of Agricultural and Food Science/Human Nutritional Sciences/f_AaFS_HNSC4100.html'
  }
  ];
  let errorMessage = document.querySelector('.alert-danger');

  if (userInput.length > 0) {
    if (errorMessage) {
      errorMessage.remove();
    }
    for (let i = 0; i < courses.length; i++) {
      if (userInput.replace(/\s/g, '').toLowerCase() === courses[i].courseCode.replace(/\s/g, '').toLowerCase() || 
        userInput.replace(/\s/g, '').toLowerCase() === courses[i].courseName.replace(/\s/g, '').toLowerCase() || 
        userInput.replace(/\s/g, '').toLowerCase() === courses[i].CRN.toString().replace(/\s/g, '').toLowerCase()){
        window.location.href = courses[i].url;
        return;
      }
    }
    const errorMessageHTML = '<div class="alert alert-danger alert-dismissible fade show text-right" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>Please use CNR, Course name and Course code for search.</div>';
    searchResultsContainer.insertAdjacentHTML('beforeend', errorMessageHTML);
  } else {
    if (errorMessage) {
      return;
    }
    const errorMessageHTML = '<div class="alert alert-danger alert-dismissible fade show text-right" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>Please use CNR, Course name and Course code for search.</div>';
    searchResultsContainer.insertAdjacentHTML('beforeend', errorMessageHTML);
  }
  
  const closeBtn = document.querySelector('.alert-danger button.close');
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      const errorMessage = document.querySelector('.alert-danger');
      if (errorMessage) {
        errorMessage.remove();
      }
    });
  }
}