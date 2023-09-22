function validateForm() {
  const userIDInput = document.getElementById("ID");
  const salasanaInput = document.getElementById("salasana");
  const nimiInput = document.getElementById("nimi");
  const osoiteInput = document.getElementById("osoite");
  const sukupuoliInputs = document.querySelectorAll('input[name="sukupuoli"]:checked');
  const maaInputs = document.getElementById("maa");
  const postinumeroInput = document.getElementById("postinumero");
  const emailInput = document.getElementById("email");
  const kieliInputs = document.querySelectorAll('input[name="kieli"]:checked');
  const genderError = document.getElementById("sukupuoli-error");
  const userIDError = document.getElementById("IDError");
  const salasanaError = document.getElementById("salasana-error");
  const nimiError = document.getElementById("nimi-error");
  const postinumeroError = document.getElementById("postinumero-error");
  const emailError = document.getElementById("email-error");
  const kieliError = document.getElementById("kieli-error");
  const maaError = document.getElementById("maa-error");
  const errors = [];


  if (userIDInput.value.length < 5) {
    userIDError.textContent = "Käyttäjä ID:n pituus tulee olla vähintään 5 merkkiä.";
    errors.push("Käyttäjä ID:n pituus tulee olla vähintään 5 merkkiä.");
  } else {
    userIDError.textContent = "";
  }

  if (salasanaInput.value.length < 8 || !validatePassword(salasanaInput.value)) {
    salasanaError.textContent = "Salasanan pituuden tulee olla vähintään 8 merkkiä ja sisältää vähintään yksi iso kirjain, pieni kirjain, numero ja erikoismerkki.";
    errors.push("Salasanan pituuden tulee olla vähintään 8 merkkiä ja sisältää vähintään yksi iso kirjain, pieni kirjain, numero ja erikoismerkki.");
  } else {
    salasanaError.textContent = "";
  }

  const nimiPattern = /^[A-Za-zÄÖÅäöå\s]+$/;
  if (!nimiPattern.test(nimiInput.value)) {
    nimiError.textContent = "Nimi voi sisältää vain kirjaimia ja välilyöntejä.";
    errors.push("Nimi voi sisältää vain kirjaimia ja välilyöntejä.");
  } else {
    nimiError.textContent = "";
  }

  if (!/^\d{5}$/.test(postinumeroInput.value)) {
    postinumeroError.textContent = "Syötä kelvollinen 5-numeroinen postinumero.";
    errors.push("Syötä kelvollinen 5-numeroinen postinumero.");
  } else {
    postinumeroError.textContent = "";
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailInput.value.length === 0) {
    emailError.textContent = 'Syötä sähköpostiosoite.';
    errors.push("Syötä kelvollinen sähköpostiosoite.");
  } else if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = 'Syötä kelvollinen sähköpostiosoite.';
    errors.push("Syötä kelvollinen sähköpostiosoite.");
  } else {
    emailError.textContent = '';
  }

  if (sukupuoliInputs.length === 0) {
    genderError.textContent = "Valitse vähintään yksi sukupuoli.";
    errors.push("Valitse vähintään yksi sukupuoli.");
  } else {
    genderError.textContent = "";
  }

  if (kieliInputs.length === 0) {
    kieliError.textContent = "Valitse vähintään yksi kieli.";
    errors.push("Valitse vähintään yksi kieli.");
  } else {
    kieliError.textContent = "";
  }

  if (maaInputs.value === "valitse") {
    maaError.textContent = "Valitse vähintään yksi maa.";
    errors.push("Valitse vähintään yksi maa.");
  } else {
    maaError.textContent = "";
  }
  
  if (
    userIDInput.value === "" || 
    salasanaInput.value === "" || 
    nimiInput.value === "" ||
    sukupuoliInputs.length !== 1 || 
    kieliInputs.length === 0 || 
    osoiteInput.value === "" || 
    maaInputs.value === "valitse" || 
    postinumeroInput.value === ""
  ) {
    alert("Täytä kaikki kentät ennen lomakkeen lähettämistä.");
    return false;
  }

if (errors.length > 0) {
  // Näytä virheilmoitukset käyttäjälle
  showErrors(errors);
  return false;
}
genderError.textContent = "";
  return true

}