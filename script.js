const passwordInput = document.getElementById("password");
const showPasswordButton = document.getElementById("show-password-button");
const checkPasswordButton = document.getElementById("check-password-button");
const resultDiv = document.getElementById("result");

showPasswordButton.addEventListener("click", function() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showPasswordButton.textContent = "Esconder senha";
  } else {
    passwordInput.type = "password";
    showPasswordButton.textContent = "Mostrar senha";
  }
});

checkPasswordButton.addEventListener("click", checkPasswordStrength);

function checkPasswordStrength() {
  let message = "";
  let passwordStrength = "";

  const passwordLength = passwordInput.value.length;
  const hasNumber = /[0-9]/.test(passwordInput.value);
  const hasUppercase = /[A-Z]/.test(passwordInput.value);
  const hasLowercase = /[a-z]/.test(passwordInput.value);
  const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(passwordInput.value);

  resultDiv.classList.remove("very-weak", "weak", "moderate", "strong", "secure");

  if (!hasNumber) {
    message += "Adicione pelo menos um número. ";
    resultDiv.classList.add("very-weak");
    resultDiv.innerHTML = `<span class="result-message very-weak">${message}</span>`;
    return;
  }

  if (!hasUppercase) {
    message += "Adicione pelo menos uma letra maiúscula. ";
    resultDiv.classList.add("weak");
    resultDiv.innerHTML = `<span class="result-message weak">${message}</span>`;
    return;
  }

  if (!hasSymbol) {
    message += "Adicione pelo menos um símbolos. ";
    resultDiv.classList.add("moderate");
    resultDiv.innerHTML = `<span class="result-message moderate">${message}</span>`;
    return;
  }

  if (passwordLength < 6) {
    passwordStrength = "Muito fraca";
    message += "Acrescente mais caracteres.";
    resultDiv.classList.add("very-weak");
    resultDiv.innerHTML = `<span class="result-message very-weak">${passwordStrength}: ${message}</span>`;
  } else if (passwordLength < 8) {
    passwordStrength = "Fraca";
    message += "Você pode melhorar.";
    resultDiv.classList.add("weak");
    resultDiv.innerHTML = `<span class="result-message weak">${passwordStrength}: ${message}</span>`;
  } else if (passwordLength < 12) {
    passwordStrength = "Moderada";
    message += "Você está quase lá.";
    resultDiv.classList.add("moderate");
    resultDiv.innerHTML = `<span class="result-message moderate">${passwordStrength}: ${message}</span>`;
  } else {
    passwordStrength = "Forte";
    message += "Sua senha está ótima.";
    resultDiv.classList.add("strong");
    resultDiv.innerHTML = `<span class="result-message strong">${passwordStrength}: ${message}</span>`;
  }

  if (passwordLength >= 16) {
    passwordStrength = "Segura";
    message += "Excelente!";
    resultDiv.classList.add("secure");
    resultDiv.innerHTML = `<span class="result-message secure">${passwordStrength}: ${message}</span>`;
  }
}
