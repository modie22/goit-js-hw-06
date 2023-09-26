const formEl = document.querySelector(".login-form");

const onFormSubmit = (events) => {
  events.preventDefault();
  const {
    elements: { email, password },
  } = events.currentTarget;

  if (email.value === "" || password.value === "")
    return alert("Всі поля повинні бути заповнені!");
  
  const user = { email: email.value, password: password.value };
  console.log(user);
  events.currentTarget.reset();

};

formEl.addEventListener("submit", onFormSubmit);
