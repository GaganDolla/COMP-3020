// Get the form and save button elements
var form = document.querySelector("#profile-form");
var saveButton = document.querySelector("#save_button");

// Add an event listener to the save button
saveButton.addEventListener("click", function (event) {
  event.preventDefault();

  // Get the form data
  var formData = new FormData(form);

  // Save the form data to local storage
  for (var pair of formData.entries()) {
    localStorage.setItem(pair[0], pair[1]);
  }

  alert("Personal Information updated");
});

// Fill in the form fields with data from local storage
if (localStorage.getItem("name")) {
  document.querySelector("#name-input").value = localStorage.getItem("name");
}
if (localStorage.getItem("address")) {
  document.querySelector("#address-input").value =
    localStorage.getItem("address");
}
if (localStorage.getItem("email")) {
  document.querySelector("#email-input").value = localStorage.getItem("email");
}
if (localStorage.getItem("birthdate")) {
  document.querySelector("#birthdate-input").value =
    localStorage.getItem("birthdate");
}
if (localStorage.getItem("major")) {
  document.querySelector("#major-input").value = localStorage.getItem("major");
}
if (localStorage.getItem("student-number")) {
  document.querySelector("#student-number-input").value =
    localStorage.getItem("student-number");
}
