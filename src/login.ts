function hasUpperCase(str: string) {
  for (const c of str) {
    if (c === c.toUpperCase()) {
      return true;
    }
  }
  return false;
}

function handleSubmitLogin(event: Event) {
  event.preventDefault();

  const email = (document.getElementById("email") as HTMLInputElement).value;
  const password = (document.getElementById("password") as HTMLInputElement)
    .value;

  // campos vazios
  if (!email || !password || email === "" || password === "") {
    alert("Please enter email and password");
    return;
  }

  // email invalido
  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    alert("Please enter a valid email");
    return;
  }

  // senha invalida
  if (password.length < 6 || !hasUpperCase(password)) {
    alert("Please enter a valid password");
    return;
  }

  window.location.href = "home.html";
}
