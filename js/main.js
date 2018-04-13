// Variables to get html elements

const $nameField = $('#name');
const $otherJob = $('#other-title');
const $jobSelectMenu = $('#title');

const $colorSelectMenu = $('#color');
const $themeSelectMenu = $('#design');

// Setting focus to first form field on pageLoad

$nameField.focus();

// Hide the Other Job Role Html option until user clicks other
// add user input to a text field that already exists in HTML file
$otherJob.hide();
$jobSelectMenu.change(function(){
  let $selectJobOpt = $('#title option:selected').text();
    if($selectJobOpt == "Other") {
      $otherJob.show();
    } else {
      $otherJob.hide();
    }
});


// function that hides the color option select menu until design option is chosen
// and only displays T-shirt color options to matched design options


    $('#color option').each(function(index){
      $(this).hide();
        if(index <= 2) {
          $(this).show();
        } else {
          $(this).hide();
        }
    });

// function that disables or activates conflicting scheduled event checkboxes
// as they are matched


// function that displays a running total of checked events.


// function that only displays corresponding payment method
// CC is first by default
