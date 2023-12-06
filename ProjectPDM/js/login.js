import { db } from "./db.js";

// =======================
// SIGN IN

const passwordInput = document.querySelector(".password__input");
const emailInput = document.querySelector(".email__input");
const signInButton = document.querySelector(".sign__in");

export function handleClick(e) {
  e.preventDefault();

  console.log(db);

  const userEmailInput = emailInput.value;
  const userPasswordInput = passwordInput.value;

  const userData = db.find((data) => {
    return data.email === userEmailInput;
  });

  if (!userData) {
    alert("Email not registered");
    return;
  }

  if (userData.password !== userPasswordInput) {
    alert("Invalid Password");
    return;
  }

  window.location.href = "BIODATA_FINAL.html";
}

signInButton.addEventListener("click", handleClick);

// =================================

// createAcountSignupButton.addEventListener("click", handleCreateAccount);
