import { initialData } from "./db.js";

const db = [
  ...initialData,
  ...JSON.parse(sessionStorage.getItem("data") || "[]"),
];

console.log(db);

function updateSessionStorage(newData) {
  sessionStorage.setItem("data", JSON.stringify(newData));
}

// SIGN UP
console.log(db);

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

  db.push(newUser);
  updateSessionStorage(db);

  window.location.href = "SIGNIN.html";
}

createAcountSignupButton.addEventListener("click", handleCreateAccount);
