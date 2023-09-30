const btnDarkMode = document.querySelector(".dark-mode-btn");

function setTheme(theme) {
  if (theme === "dark") {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
  } else {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
  }
  localStorage.setItem("darkMode", theme);
}

// Check dark theme in local storage or system preference
let storedTheme = localStorage.getItem("darkMode");
if (storedTheme) {
  setTheme(storedTheme);
} else if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  setTheme("dark");
}

// If system theme changes, change page theme
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    const newColorScheme = event.matches ? "dark" : "light";
    setTheme(newColorScheme);
  });

// Toggle dark theme on button click
btnDarkMode.onclick = function () {
  const isDark = document.body.classList.toggle("dark");
  setTheme(isDark ? "dark" : "light");
};
