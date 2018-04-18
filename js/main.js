// Variables to get html elements
const $nameField = $('#name');
const $otherJob = $('#other-title');
const $jobSelectMenu = $('#title');
const $colorSelectMenu = $('#color');
const $themeSelectMenu = $('#design');
const $activities = $('.activities');
const $activityBox = $('.activities :checkbox');
const $paymentOpts = $('#payment');
const $creditcardForm = $('#credit-card');
const $paypalInfo = $('p:contains("PayPal")');
const $bitcoinInfo = $('p:contains("Bitcoin")');
const $nameLabel = $('label[for="name"]');


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
  let runningTotal = 0;
function ConfPrice (currentEvent) {

  const $isChecked = currentEvent.is(':checked');
  const $label = currentEvent.parent();
  const $text = $label.text();
  const $index = $text.indexOf('$') + 1;
  const $price = $text.slice($index);

  if ($isChecked) {
    runningTotal += parseInt($price);
  } else {
    runningTotal -= parseInt($price);
  }
  $('#total_price').remove();
  if (runningTotal > 0) {
    $activities.append(`<h4 id="total_price">Total: $${runningTotal} </h4>`)
  }
}
$activityBox.change(function(){
  ConfPrice($(this));
});

// function that only displays corresponding payment method
// CC is first by default
$paypalInfo.hide();
$bitcoinInfo.hide();
$paymentOpts.val("credit card").attr("selected", true);
$paymentOpts.change(function(){

  if ($(this).val() == "credit card") {
    $creditcardForm.show(500);
    $bitcoinInfo.hide(500);
    $paypalInfo.hide(500);
  } else if ($(this).val() == "paypal") {
      $paypalInfo.show(500);
      $bitcoinInfo.hide(500);
      $creditcardForm.hide(500);
  } else if ($(this).val() == "bitcoin") {
      $bitcoinInfo.show(500);
      $paypalInfo.hide(500);
      $creditcardForm.hide(500);
  } else if ($(this).val() == "select_method") {
      $paypalInfo.hide(1000);
      $bitcoinInfo.hide(1000);
      $creditcardForm.hide(1000);
  }
});

/*==============================Form Validation==============================*/

// Selecting HTML elements to validate and storing in Variables

// name field function

$nameField.css("border-color", "red");
$nameLabel.after('<div id="error">Please enter your name!<div>');
$('#error').css("color", "red");

// email field function




// checkbox field function

// credit card number field function

// credit card date function

// credit card CVV function

//submission event handler that calls error functions.
