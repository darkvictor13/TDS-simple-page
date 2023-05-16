function handleSubmit(event: any) {
  event.preventDefault();
  window.location.href = "/home.html";
}

const loginForm = document.getElementById("login-form") as HTMLFormElement;
loginForm.addEventListener("submit", handleSubmit);
