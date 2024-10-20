import '../../styles/header.scss';
import Sidebar from "./Sidebar.jsx";
import {useState} from "react";

function Header() {

  const [state, setState] = useState("Collapsed");

  function toggleSidebar() {
    if(state === "Collapsed") {
      setState("Expanded");
      const sidebar = document.getElementById('sidebar');
      sidebar.style.left = '0px';
    } else {
      setState("Collapsed");
      const sidebar = document.getElementById('sidebar');
      sidebar.style.left = sidebar.style.width;
    }

  }

  return (
      <>

        <div className="header">

          <button className={"sidebar-button-toggle"} onClick={toggleSidebar}>
            <span className="material-symbols-outlined"> menu </span>
          </button>

        </div>

        <div className="top-spacer"/>

        <Sidebar />

      </>
  )

}

export default Header;