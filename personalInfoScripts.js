// Check if initialized
if (!sessionStorage.getItem("initialized")) {
  // Initialize session storage with DUMMY values for the form fields
  sessionStorage.setItem("name", "Sherlock Holmes");
  sessionStorage.setItem("address", "221B Baker Street");
  sessionStorage.setItem("email", "sherlockholmes@myumanitoba.ca");
  const bday = new Date("January 6, 1854");
  sessionStorage.setItem("birthdate", bday.toISOString());
  sessionStorage.setItem("major", "Computer Science");
  sessionStorage.setItem("student-number", "7654321");

  sessionStorage.setItem("initialized", "true");
}

var form = document.querySelector("#profile-form");
var saveButton = document.querySelector("#save_button");

saveButton.addEventListener("click", function (event) {
  // event.preventDefault();

  var name = document.querySelector("#name-input").value;
  var address = document.querySelector("#address-input").value;
  var email = document.querySelector("#email-input").value;
  var birthdate = document.querySelector("#birthdate-input").value;
  var major = document.querySelector("#major-input").value;
  var studentNumber = document.querySelector("#student-number-input").value;

  sessionStorage.setItem("name", name);
  sessionStorage.setItem("address", address);
  sessionStorage.setItem("email", email);
  sessionStorage.setItem("birthdate", birthdate);
  sessionStorage.setItem("major", major);
  sessionStorage.setItem("student-number", studentNumber);

  alert("Personal Information updated");
});

//Fill fields for revisit
document.querySelector("#name-input").value =
  sessionStorage.getItem("name") || "Sherlock Holmes";
document.querySelector("#address-input").value =
  sessionStorage.getItem("address") || "221B Baker Street";
document.querySelector("#email-input").value =
  sessionStorage.getItem("email") || "sherlockholmes@myumanitoba.ca";
document.querySelector("#birthdate-input").value =
  sessionStorage.getItem("birthdate") || bday.toISOString();
document.querySelector("#major-input").value =
  sessionStorage.getItem("major") || "Computer Science";
document.querySelector("#student-number-input").value =
  sessionStorage.getItem("student-number") || "7654321";
