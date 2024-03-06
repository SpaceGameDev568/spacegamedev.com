const prefersLightScheme = window.matchMedia("(prefers-color-scheme: light)");


  const themeStuff = localStorage.getItem("theme");

  if (themeStuff === "light") {
  document.getElementById('betterstack-badge').src = 'https://status.spacegamedev.com/badge?theme=light';
  document.getElementById('betterstack-attribution').src = 'https://uptime.betterstack.com/assets/static_assets/badges/light.png';

} else {
  document.getElementById('betterstack-badge').src = 'https://status.spacegamedev.com/badge?theme=dark';
  document.getElementById('betterstack-attribution').src = 'https://uptime.betterstack.com/assets/static_assets/badges/dark.png';
}

if (prefersLightScheme.matches) {
  document.body.classList.add("light");
} else {
  document.body.classList.remove("light");
}