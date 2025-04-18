document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.createElement("button");
  toggleBtn.innerText = "🌙 Dark Mode";
  toggleBtn.style.position = "fixed";
  toggleBtn.style.top = "20px";
  toggleBtn.style.right = "20px";
  toggleBtn.style.padding = "10px 15px";
  toggleBtn.style.backgroundColor = "#203040";
  toggleBtn.style.color = "#fff";
  toggleBtn.style.border = "none";
  toggleBtn.style.borderRadius = "8px";
  toggleBtn.style.cursor = "pointer";
  toggleBtn.style.zIndex = "1000";

  document.body.appendChild(toggleBtn);

  let darkMode = false;

  toggleBtn.addEventListener("click", () => {
    darkMode = !darkMode;
    document.body.classList.toggle("dark-mode");
    toggleBtn.innerText = darkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
  });
});
