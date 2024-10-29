import '../../../styles/components/sidebar-toggle.scss';

import {useState} from "react";

function SidebarToggle() {

  const [state, setState] = useState("Collapsed");

  const buttonElement = document.getElementById('material-icon');


  function toggleSidebar() {
    if(state === "Collapsed") {
      setState("Expanded");
      const sidebar = document.getElementById('sidebar');
      sidebar.style.left = '0px';
      sidebar.style.transition = '800ms cubic-bezier(0.34, 1.56, 0.64, 1)';
      buttonElement.innerHTML = 'close';
    } else {
      setState("Collapsed");
      const sidebar = document.getElementById('sidebar');
      sidebar.style.left = sidebar.style.width;
      sidebar.style.transition = '800ms cubic-bezier(0.36, 0, 0.66, -0.56)';
      buttonElement.innerHTML = 'menu';
    }

  }

  return (
      <>
        <div className="button-container">

          <button className={"sidebar-button-toggle"} onClick={toggleSidebar}>

            <span className="material-symbols-rounded icon-large" id={"material-icon"}> menu </span>

          </button>

        </div>
      </>
  )

}

export default SidebarToggle;