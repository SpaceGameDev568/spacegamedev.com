import {useState} from "react";

function SidebarToggleButton() {

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
          <button className={"material-symbols-rounded aspect-square h-[calc(100%-0.5rem)] mt-1 ml-1 text-4xl hover:bg-blue-500 duration-300 rounded-lg text-white bg-transparent"} id={"material-icon"} onClick={toggleSidebar}>

            menu

          </button>
      </>
  )

}

export default SidebarToggleButton;