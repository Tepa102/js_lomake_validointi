function checkUserIDLength() {
  const userIDInput = document.getElementById("ID");
  const userIDError = document.getElementById("IDError");
  const minLength = 5; // vähimmäispituus

  if (userIDInput.value.length < minLength) {
    userIDError.textContent = "Käyttäjä ID:n pituus tulee olla vähintään " + minLength + " merkkiä.";
  } else {
    userIDError.textContent = "";
  }
}

function validateNimi() {
  const nimiInput = document.getElementById("nimi");
  const nimiError = document.getElementById("nimi-error");
  const nimiPattern = /^[A-Za-zÄÖÅäöå\s]+$/;

  if (!nimiPattern.test(nimiInput.value)) {
    nimiError.textContent = "Nimi voi sisältää vain kirjaimia ja välilyöntejä.";
  } else {
    nimiError.textContent = "";
  }
}

function validatePostinumero() {
  const postinumeroInput = document.getElementById("postinumero");
  const postinumeroError = document.getElementById("postinumero-error");
  const numericPattern = /^\d+$/; // Tarkistaa, että on vain numeroista

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

function validateForm() {
  const genderInputs = document.querySelectorAll('input[name="sukupuoli"]:checked');
  const genderError = document.getElementById("sukupuoli-error");

  if (genderInputs.length !== 1) {
    genderError.textContent = "Valitse tarkalleen yksi sukupuoli.";
    return false; // Estää  lähettämisen
  } else {
    genderError.textContent = "";
    return true; // Sallii lähettämisen
  }
}

