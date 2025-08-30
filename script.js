function darklight() {
  const body = document.body;
  const btn = document.querySelector(".nav-buttons button");
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    btn.textContent = "Light Mode";
  } else {
    btn.textContent = "Dark Mode";
  }
}
