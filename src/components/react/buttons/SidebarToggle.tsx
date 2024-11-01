import '../../../styles/components/sidebar-toggle.scss';

import {useState} from "react";

function SidebarToggle() {

  const [state, setState] = useState("Collapsed");

  function toggleSidebar() {
    const sidebarButton = document.getElementById('material-icon') as HTMLButtonElement;
    const sidebar = document.getElementById('sidebar') as HTMLSpanElement;

    if(state === "Collapsed") {
      setState("Expanded");
      sidebar.style.left = '0px';
      sidebar.style.transition = '800ms cubic-bezier(0.34, 1.56, 0.64, 1)';
      sidebarButton.innerHTML = 'close';
    } else {
      setState("Collapsed");
      sidebar.style.left = sidebar.style.width;
      sidebar.style.transition = '800ms cubic-bezier(0.36, 0, 0.66, -0.56)';
      sidebarButton.innerHTML = 'menu';
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