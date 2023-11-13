      // Select the button
      const btn = document.querySelector(".btn-toggle");
      // Select the theme preference from localStorage
      const currentTheme = localStorage.getItem("theme");

      // If the current theme in localStorage is "dark"...
      if (currentTheme == "light") {
        // ...then use the .dark-theme class
        document.body.classList.add("light");
      }

      // Listen for a click on the button 
      btn.addEventListener("click", function() {

        if (localStorage.getItem("theme") == "light") {
          document.getElementById('betterstack-badge').src = 'https://status.spacegamedev.com/badge?theme=dark';

        }
        if (localStorage.getItem("theme") == "") {
          document.getElementById('betterstack-badge').src = 'https://status.spacegamedev.com/badge?theme=light';
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
      });