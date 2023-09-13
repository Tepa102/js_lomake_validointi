function checkUserIDLength() {
  var userIDInput = document.getElementById("ID");
  var userIDError = document.getElementById("IDError");
  var minLength = 5; // vähimmäispituus

  if (userIDInput.value.length < minLength) {
    userIDError.textContent = "Käyttäjä ID:n pituus tulee olla vähintään " + minLength + " merkkiä.";
  } else {
    userIDError.textContent = "";
  }
}

function validateNimi() {
  var nimiInput = document.getElementById("nimi");
  var nimiError = document.getElementById("nimi-error");
  var nimiPattern = /^[A-Za-zÄÖÅäöå\s]+$/;

  if (!nimiPattern.test(nimiInput.value)) {
    nimiError.textContent = "Nimi voi sisältää vain kirjaimia ja välilyöntejä.";
  } else {
    nimiError.textContent = "";
  }
}

function validatePostinumero() {
  var postinumeroInput = document.getElementById("postinumero");
  var postinumeroError = document.getElementById("postinumero-error");
  var numericPattern = /^\d+$/; // Tarkistaa, että syöte koostuu vain numeroista

  if (!numericPattern.test(postinumeroInput.value)) {
    postinumeroError.textContent = "Syötä kelvollinen postinumero.";
  } else {
    postinumeroError.textContent = "";
  }
}


function validateEmail() {
  const emailInput = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
  if (emailPattern.test(emailInput.value)) {
    emailError.textContent = ''; // Tyhjentää virheilmoituksen
  } else {
    emailError.textContent = 'Syötä kelvollinen sähköpostiosoite.';
  }
}


