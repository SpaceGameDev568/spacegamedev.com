      /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
      function openNav() {
        document.getElementById("websidebar").style.width = "250px";
        // Disabled as it caused an error but does not appear to be needed:  document.getElementById("main").style.marginLeft = "250px";
      }

      /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
      function closeNav() {
        document.getElementById("websidebar").style.width = "0";
        // Disabled as it caused an error but does not appear to be needed:  document.getElementById("main").style.marginLeft = "0";
      }