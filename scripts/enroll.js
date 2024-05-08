function formatBirthday(input) {
  var value = input.value;

  // Remove any non-numeric characters
  value = value.replace(/[^0-9]/g, '');

  // Limit to 8 characters (MMDDYYYY)
  value = value.slice(0, 8);

  // Auto-format with slashes
  var parts = [];
  parts.push(value.slice(0, 2));
  if (value.length > 2) {
    parts.push(value.slice(2, 4));
  }
  if (value.length > 4) {
    parts.push(value.slice(4));
  }

  input.value = parts.join('/');
}


function validateQuantity(input) {
  var value = input.value;

  // Remove any non-numeric characters
  value = value.replace(/[^0-9.-]/g, ''); // Allow negative numbers and decimals (optional)

  // Limit to 11
  value = value.slice(0, 11);

  input.value = value;
}

// Add event listener to the input field
document.getElementById("phone-number").addEventListener("keyup", function() {
  validateQuantity(this);
});


function validateNumberInput(className) {
  var inputs = document.getElementsByClassName(className);

  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    var value = input.value;

    // Remove non-numeric characters
    value = value.replace(/[^0-9.-]/g, '');

    // Limit to 2 digits
    value = value.slice(0, 2);

    input.value = value;
  }
}

// Add event listener to trigger validation on every input with class "number-input"
var numberInputs = document.getElementsByClassName("number-input");
for (var i = 0; i < numberInputs.length; i++) {
  numberInputs[i].addEventListener("keyup", function() {
    validateNumberInput("number-input");
  });
}


// Sets the time delay for the popup
window.addEventListener("load", function(){
  setTimeout(
    function open(event){
      document.querySelector(".popup-container").style.display = "block";
    },
    1800
  )
});

document.querySelector("#close-btn").addEventListener("click", function(){
  document.querySelector(".popup-container").style.display = "none";
});