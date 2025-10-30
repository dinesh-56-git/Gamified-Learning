function goToHome(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  localStorage.setItem("username", name);
  window.location.href = "home.html";
}
function goToHome(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const loader = document.getElementById("loader");

  if (name === "") {
    alert("Please enter your name");
    return false;
  }

  // Show loader
  loader.style.display = "block";

  // Save user and redirect after 2 seconds
  localStorage.setItem("username", name);
  setTimeout(() => {
    window.location.href = "home.html";
  }, 2000);
}
