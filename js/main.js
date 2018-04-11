// Variables to get html form elements

let nameField = $('#name');
let otherJob = $('#other-title');

// Setting focus to first form field on pageLoad

nameField.focus();

// Hide the Other Job Role Html option until user clicks other
// add user input to a text field that already exists in HTML file

function jobTitle() {
  otherJob.hide();
  if($('#title').val("other")){
    otherJob.show();
  }
}
jobTitle();
// function that hides the color option select menu until design option is chosen
// and only displays T-shirt color options to matched design options


// function that disables or activates conflicting scheduled event checkboxes
// as they are matched


// function that displays a running total of checked events.


// function that only displays corresponding payment method
// CC is first by default
