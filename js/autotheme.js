const prefersLightScheme = window.matchMedia("(prefers-color-scheme: light)");


  const themeStuff = localStorage.getItem("theme");

  if (themeStuff == "light") {
  document.getElementById('betterstack-badge').src = 'https://status.spacegamedev.com/badge?theme=light';
} else {
  document.getElementById('betterstack-badge').src = 'https://status.spacegamedev.com/badge?theme=dark';
}

if (prefersLightScheme.matches) {
  document.body.classList.add("light");
} else {
  document.body.classList.remove("light");
}