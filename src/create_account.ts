function handleSubmitCreateAccount(event: Event) {
  event.preventDefault();
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const password = (document.getElementById("password") as HTMLInputElement)
    .value;
  const confirmPassword = (
    document.getElementById("confirm-password") as HTMLInputElement
  ).value;

  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    alert("Please enter a valid email");
    return;
  }
  if (password.length < 6) {
    alert("Please enter a valid password");
    return;
  }
  if (password !== confirmPassword) {
    alert("Passwords don't match");
    return;
  }

  alert(`Email sent to ${email}`);
  window.location.href = "home.html";
}
