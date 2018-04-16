// Variables to get html elements
const $nameField = $('#name');
const $otherJob = $('#other-title');
const $jobSelectMenu = $('#title');
const $colorSelectMenu = $('#color');
const $themeSelectMenu = $('#design');
const $activities = $('.activities');
const $activityBox = $('.activities :checkbox');
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
function colorOptionNone () {
  $('#color option').each(function(index){
        $(this).remove();
      });
}
function colorOption1 () {
  $colorSelectMenu.append('<option value="cornflowerblue">Cornflower Blue</option>');
  $colorSelectMenu.append('<option value="darkslategrey">Dark Slate Grey</option>');
  $colorSelectMenu.append('<option value="gold">Gold</option>');
}
function colorOption2 () {
  $colorSelectMenu.append('<option value="tomato">Tomato</option>');
  $colorSelectMenu.append('<option value="steelblue">Steel Blue</option>');
  $colorSelectMenu.append('<option value="dimgrey">Dim Grey</option>');
}
$('#colors-js-puns').hide();
$themeSelectMenu.change(function(){
  colorOptionNone();
   $('#colors-js-puns').show(500);
  let $selectedTheme = $('#design option:selected').text();
  const $punsThemes = $('#design option[value="js puns"]').text();
  const $heartThemes = $('#design option[value="heart js"]').text();
  const $selectTheme = $('#design option[value="Select Theme"]').text();
  if ($selectedTheme == $punsThemes) {
    colorOption1();
  } else if ($selectedTheme == $heartThemes) {
    colorOption2();
  } else {
     $('#colors-js-puns').hide(500);
  }
});
// function that disables or activates conflicting scheduled event checkboxes
// as they are matched
$activityBox.change(function(){
  const $js_frameworksBox = $('.activities input:eq(1)');
  const $js_frameworksLabel = $('.activities label:eq(1)');
  const $js_libsBox = $('.activities input:eq(2)');
  const $js_libsLabel = $('.activities label:eq(2)');
  const $expressBox = $('.activities input:eq(3)');
  const $expressLabel = $('.activities label:eq(3)');
  const $nodeBox = $('.activities input:eq(4)');
  const $nodeLabel = $('.activities label:eq(4)');

  if ($js_frameworksBox.is(':checked')) {
    $expressBox.prop('disabled', true);
    $expressLabel.css("color", "grey");
  } else {
      $expressBox.prop('disabled', false);
      $expressLabel.css("color", "");
    }
  if ($expressBox.is(':checked')) {
    $js_frameworksBox.prop('disabled', true);
    $js_frameworksLabel.css("color", "grey");
  } else {
      $js_frameworksBox.prop('disabled', false);
      $js_frameworksLabel.css("color", "");
    }
  if ($js_libsBox.is(':checked')) {
    $nodeBox.prop('disabled', true);
    $nodeLabel.css("color", "grey");
  } else {
      $nodeBox.prop('disabled', false);
      $nodeLabel.css("color", "");
      }
  if ($nodeBox.is(':checked')) {
    $js_libsBox.prop('disabled', true);
    $js_libsLabel.css("color", "grey");
  } else {
      $js_libsBox.prop('disabled', false);
      $js_libsLabel.css("color", "");
      }
});

// function that displays a running total of checked events.

// $activityBox.change(function(){
//   let runningTotal = 0;
//   if ($('.activities input:eq(0)').is(':checked')) {
//     runningTotal += 200;
//     $activities.last().append(`<h4>Total: $${runningTotal} </h4>`);
//   }
// });
// `<h4>Total: $${runningTotal} </h4>`
//
// $activityBox.change(function(){
//   let runningTotal = 0;
//   const $isChecked = $(this).is(':checked');
  $('.activities label').each(function(){
  const $text =  $(this).text();
  const $index = $text.indexOf("$");
  const $price = $text.slice($index);
    console.log($price);
  });
  // if ($isChecked){

// }
// });

// function that only displays corresponding payment method
// CC is first by default
