const form = document.querySelector("#eventForm");
const personType = document.querySelector("#personType");
const notesContainerStudent = document.querySelector("#notesContainerStudent");
const notesContainerGuest = document.querySelector("#notesContainerGuest");
const output = document.querySelector("#output");

function updateNotesField() {
  const value = personType.value;
  notesContainerStudent.hidden = value !== "student";
  notesContainerGuest.hidden = value !== "guest";
}

personType.addEventListener("change", updateNotesField);
updateNotesField();

function isPastDate(value) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const chosen = new Date(value);
  return chosen <= today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.personType.value;
  const availableDate = form.availableDate.value;

  const studentId = document.querySelector("#studentNotes").value.trim();
  const accessCode = document.querySelector("#guestNotes").value.trim();

  // Student
  if (type == "student" && studentId.length != 9) {
    output.textContent = "Please enter a 9 digit Student I#";
    return;
  }

  // Guest
  if (type == "guest" && accessCode != "EVENT131") {
    output.textContent = "Please enter the correct Access Code";
    return;
  }

  // Date
  if (isPastDate(availableDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${firstName} ${lastName}</p>
    <p>${type}</p>
    <p>${availableDate}</p>
  `;

  form.reset();
  updateNotesField();
});