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
const $emailField = $('#mail');
const $emailLabel = $('label[for="mail"]')
const $jobSelectLabel = $('label[for="title"]');
const $creditField = $('#cc-num');
const $creditLabel = $('label[for="cc-num"]');
const $zipField = $('#zip');
const $zipLabel = $('label[for="zip"]');
const $cvvField = $('#cvv');
const $cvvLabel =  $('label[for="cvv"]');
const submit = $('button');

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



//============================ name field function
function validName(){
  let isValid = true;
  let userName = $('#name').val();
  let nameRX = /^[a-zA-Z]+$/;
  $nameField.css("border-color", "");
  $('.error').remove();
    if (userName.length == 0 || !userName.match(nameRX)) {
      isValid = false;
      $nameField.css("border-color", "red");
      $nameLabel.after('<div id="name" class="error" style="color:red;">Please enter your name!</div>');
    }
  else {
      $nameField.css("border-color", "");
      $('.error').remove();
    }
  return isValid;
}
$('#name').change(function(){
  validName();
});
// ===========================email field function
function validEmail(){
  let isValid = true;
  let userEmail = $emailField.val();
  let emailRX =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  $emailField.css("border-color", "")
  $('.error').remove();
  if (userEmail == ""){
    isValid = false;
$emailField.css("border-color", "red");
$emailLabel.after('<div class="error" style="color:red;">Please enter your email address!</div>');
} else if (!userEmail.match(emailRX)){
  isValid = false;
$emailLabel.after('<div class="error" style="color:red;">Please use this email format: name@mail.com!</div>');
$emailField.css("border-color", "red");
}
return isValid;
}
$emailField.change(function(){
  validEmail();
});
//=========================== job select menu function
function validJob(){
let isValid = true;
let userOtherJob = $('#title option:selected')[5];
if (userOtherJob && $('#other-title').val().length  == 0) {
  isValid = false;
$otherJob.css("border-color", "red");
$jobSelectMenu.after('<div class="error" style="color:red;">Please enter your Job Title!</div>');
} else {
  $otherJob.css("border-color", "");
  $('.error').remove();
}
return isValid;
}
$jobSelectMenu.change(function(){
  validJob();
});
// ===========================t-shirt field function

function validTshirt (){
  let isValid = true;
  let noDesign = $('#design option:selected').text();
  $('.error').remove();
  if(noDesign == "Select Theme") {
  isValid = false;
$('label[for="design"]').after('<div class="error" style="color:red;">Please choose a T-shirt design!</div>');
} else {
  $('.error').remove();
}
  return isValid;
}
$('#design').change(function(){
validTshirt();
});
// ===========================activities field function

function validActivity(){
  $('.error').remove();
  let isValid = true;
  let anyBox = $('input:checked').length;
  if (anyBox == 0) {
    isValid = false;
$activities.after('<div class="error" style="color:red;">Please choose at least one activity!</div>');
}
else {
  $('.error').remove();
}
return isValid;
}
$activityBox.change(function(){
  validActivity();
});
// ===========================credit card number validations function
function validCreditCard (){
  $('.error').remove();
  let isValid = true;
  let $userCCNum = $('#cc-num').val();
  let zipRX = /^[0-9]+$/;
  let cvvRX = /^[0-9]+$/;
  let $userZip = $('#zip').val();
  let $userCVV = $('#cvv').val();
  if($userCCNum.length == 0 ) {
    isValid = false;
    $creditField.css("border-color", "red");
    $creditLabel.after('<div class="error" style="color:red;">Please enter your card number!</div>');
  } if ( ($userCCNum.length > 16 || $userCVV.length < 13) || isNaN($userCCNum) ) {
    isValid = false;
    $creditField.css("border-color", "red");
    $creditLabel.after('<div class="error" style="color:red;">Please use a number between 13-16 digits!</div>');
  } if ( ($userZip.length != 5 || $userZip.length == 0) && !$userZip.match(zipRX)) {
    isValid = false;
    $zipField.css("border-color", "red");
    $zipLabel.after('<div class="error" style="color:red;">Please enter zip!</div>');
  } if ( ($userCVV.length == 0 || $userCVV.length != 3) && !$userCVV.match(cvvRX) ) {
    isValid = false;
    $cvvField.css("border-color", "red");
    $cvvLabel.after('<div class="error" style="color:red;">Please enter CVV!</div>');
  }
  if (isValid != true) {
    $('.error').remove();
    $creditField.css("border-color", "");
    $zipField.css("border-color", "");
    $cvvField.css("border-color", "");
  } else {
    $('.error').remove();
  }
  return isValid;
}

//===========================validation function to qualify errors
function validForm(event){
  validName();
  validEmail()
  validJob()
  validTshirt()
  validActivity()

   if ($('#payment option:selected')[1]) {
   validCreditCard()
   }
}

//===========================submission event handler that calls error functions.

$('form').on('submit', function(event) {
let userError = validForm();
if (userError) {
event.preventDefault();
}
});
