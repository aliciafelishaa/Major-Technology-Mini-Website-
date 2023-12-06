import { db, storeData } from "./db.js";

// SIGN UP

const emailInputSignup = document.querySelector(".signup_input_email");
const passwordInputSignup = document.querySelector(".signup_input_password");
const repeatPasswordInputSignup = document.querySelector(
  ".signup_input_repeat-password"
);
const createAcountSignupButton = document.querySelector(
  ".signup_create-account"
);

export function handleCreateAccount(e) {
  e.preventDefault();

  const userEmailInput = emailInputSignup.value;
  const userPasswordInput = passwordInputSignup.value;
  const userRepeatPasswordInput = repeatPasswordInputSignup.value;

  const emailAlreadyExist = db.some((data) => {
    return data.email === userEmailInput;
  });

  if (!userEmailInput || !userPasswordInput || !userRepeatPasswordInput) {
    alert("Input cannot be empty");
    return;
  }

  if (emailAlreadyExist) {
    alert("Email already exist");
    return;
  }

  if (userPasswordInput !== userRepeatPasswordInput) {
    alert("Password does not match");
    return;
  }
  const newUser = {
    email: userEmailInput,
    password: userPasswordInput,
  };

  storeData(newUser);

  window.location.href = "SIGNIN.html";
}

createAcountSignupButton.addEventListener("click", handleCreateAccount);
