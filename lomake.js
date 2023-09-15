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
    sukupuoliInputs.length !== 1 || 
    kieliInputs.length === 0 || 
    osoiteInput.value === "" || 
    maaInput.value === "valitse" || 
    postinumeroInput.value === ""
  ) {
    alert("Täytä kaikki kentät ennen lomakkeen lähettämistä.");
    return false;
  }

  if (userIDInput.value.length < 5) {
    userIDError.textContent = "Käyttäjä ID:n pituus tulee olla vähintään 5 merkkiä.";
    return false;
  } else {
    userIDError.textContent = "";
  }

  const nimiPattern = /^[A-Za-zÄÖÅäöå\s]+$/;
  if (!nimiPattern.test(nimiInput.value)) {
    nimiError.textContent = "Nimi voi sisältää vain kirjaimia ja välilyöntejä.";
    return false;
  } else {
    nimiError.textContent = "";
  }

  if (!/^\d{5}$/.test(postinumeroInput.value)) {
    postinumeroError.textContent = "Syötä kelvollinen 5-numeroinen postinumero.";
    return false;
  } else {
    postinumeroError.textContent = "";
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailInput.value.length === 0) {
    emailError.textContent = 'Syötä sähköpostiosoite.';
    return false;
  } else if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = 'Syötä kelvollinen sähköpostiosoite.';
    return false;
  } else {
    emailError.textContent = '';
  }

  genderError.textContent = "";
  
  return true;
}
