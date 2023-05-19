function handleSubmitForgotPass(event: Event) {
  event.preventDefault();
  const email = (document.getElementById("email") as HTMLInputElement).value;
  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    alert("Please enter a valid email");
    return;
  }
  alert(`Email sent to ${email}`);
  window.location.href = "home.html";
}
