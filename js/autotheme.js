const prefersLightScheme = window.matchMedia("(prefers-color-scheme: light)");

if (prefersLightScheme.matches) {
  document.body.classList.add("light");
} else {
  document.body.classList.remove("light");
}