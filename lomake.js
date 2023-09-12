function checkUserIDLength() {
  var userIDInput = document.getElementById("userID");
  var userIDError = document.getElementById("userIDError");
  var minLength = 6; // vähimmäispituus

  if (userIDInput.value.length <= minLength) {
    userIDError.textContent = "Käyttäjä ID:n pituus tulee olla vähintään " + minLength + " merkkiä.";
  } else {
    userIDError.textContent = "";
  }
}
function validateEmail() {
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('email-error');
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
  if (emailPattern.test(emailInput.value)) {
    emailError.textContent = ''; // Tyhjentää virheilmoituksen
  } else {
    emailError.textContent = 'Syötä kelvollinen sähköpostiosoite.';
  }
  
}

