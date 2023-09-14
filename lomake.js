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

function validateForm() {
  const userIDInput = document.getElementById("ID");
  const salasanaInput = document.getElementById("salasana");
  const nimiInput = document.getElementById("nimi");
  const osoiteInput = document.getElementById("osoite");
  const maaInput = document.getElementById("maa");
  const postinumeroInput = document.getElementById("postinumero");
  const emailInput = document.getElementById("email");

  if (userIDInput.value === "" || salasanaInput.value === "" || nimiInput.value === "" || osoiteInput.value === "" || maaInput.value === "" || postinumeroInput.value === "" || emailInput.value === "") {
    alert("Täytä kaikki kentät ennen lomakkeen lähettämistä.");
    return false; // Estä lomakkeen lähettäminen
  }

  return true; // Salli lomakkeen lähettäminen
}
function validateForm() {
  const userIDInput = document.getElementById("ID");
  const salasanaInput = document.getElementById("salasana");
  const nimiInput = document.getElementById("nimi");
  const osoiteInput = document.getElementById("osoite");
  const sukupuoliInputs = document.querySelectorAll('input[name="sukupuoli"]:checked');
  const maaInput = document.getElementById("maa");
  const postinumeroInput = document.getElementById("postinumero");
  const emailInput = document.getElementById("email");
  const kieliInputs = document.querySelectorAll('input[name="kieli"]:checked');
  const genderError = document.getElementById("sukupuoli-error");
  const userIDError = document.getElementById("IDError");
  const nimiError = document.getElementById("nimi-error");
  const postinumeroError = document.getElementById("postinumero-error");
  const emailError = document.getElementById("email-error");

  if (
    userIDInput.value === "" || 
    salasanaInput.value === "" || 
    nimiInput.value === "" ||
    sukupuoliInputs.length !== 1 || // Tarkista sukupuolien määrä
    kieliInputs.length === 0 || // Tarkista kieli-valinnat
    osoiteInput.value === "" || 
    maaInput.value === "valitse" || 
    postinumeroInput.value === "" || 
    emailInput.value === ""
  ) {
    alert("Täytä kaikki kentät ennen lomakkeen lähettämistä.");
    return false; // Estä lomakkeen lähettäminen
  }

  // Tarkista ID:n pituus
  if (userIDInput.value.length < 5) {
    userIDError.textContent = "Käyttäjä ID:n pituus tulee olla vähintään 5 merkkiä.";
    return false; // Estä lomakkeen lähettäminen
  } else {
    userIDError.textContent = ""; // Tyhjennä virheilmoitus
  }

  // Tarkista nimen muoto
  const nimiPattern = /^[A-Za-zÄÖÅäöå\s]+$/;
  if (!nimiPattern.test(nimiInput.value)) {
    nimiError.textContent = "Nimi voi sisältää vain kirjaimia ja välilyöntejä.";
    return false; // Estä lomakkeen lähettäminen
  } else {
    nimiError.textContent = ""; // Tyhjennä virheilmoitus
  }

  // Tarkista postinumeron pituus ja numerot
  if (!/^\d{5}$/.test(postinumeroInput.value)) {
    postinumeroError.textContent = "Syötä kelvollinen 5-numeroinen postinumero.";
    return false; // Estä lomakkeen lähettäminen
  } else {
    postinumeroError.textContent = ""; // Tyhjennä virheilmoitus
  }

  // Tarkista sähköpostin muoto
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = 'Syötä kelvollinen sähköpostiosoite.';
    return false; // Estä lomakkeen lähettäminen
  } else {
    emailError.textContent = ""; // Tyhjennä virheilmoitus
  }

  // Tyhjennä sukupuoli-error-div, jos sukupuoli valittu oikein
  genderError.textContent = "";
  
  return true; // Salli lomakkeen lähettäminen
}
