function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function onLogoutSubmit(event) {
  event.preventDefault();
  localStorage.removeItem(USERNAME_KEY);
  logoutForm.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.add(HIDDEN_CLASSNAME);
  toDoList.classList.add("hidden");
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginInput.value = "";
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  logoutForm.classList.remove(HIDDEN_CLASSNAME);
  logoutForm.addEventListener("submit", onLogoutSubmit);
  toDoList.classList.remove("hidden");
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
