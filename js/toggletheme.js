      // Select the theme preference from localStorage
      const currentTheme = localStorage.getItem("theme");

      // If the current theme in localStorage is "dark"...
      if (currentTheme == "light") {
        // ...then use the .dark-theme class
        document.body.classList.add("light");
      }

      // Listen for a click on the button 
     function changeTheme() {

        if (localStorage.getItem("theme") == "light") {
          document.getElementById('betterstack-badge').src = 'https://status.spacegamedev.com/badge?theme=dark';
          document.getElementById('betterstack-attribution').src = 'https://uptime.betterstack.com/assets/static_assets/badges/dark.png';
        }
        if (localStorage.getItem("theme") == "") {
          document.getElementById('betterstack-badge').src = 'https://status.spacegamedev.com/badge?theme=light';
          document.getElementById('betterstack-attribution').src = 'https://uptime.betterstack.com/assets/static_assets/badges/light.png';
        }

        // Toggle the .dark-theme class on each click
        document.body.classList.toggle("light");
        // Let's say the theme is equal to light
        let theme = "";
        // If the body contains the .dark-theme class...
        if (document.body.classList.contains("light")) {
          // ...then let's make the theme dark
          theme = "light";
        }
        // Then save the choice in localStorage
        localStorage.setItem("theme", theme);
      };