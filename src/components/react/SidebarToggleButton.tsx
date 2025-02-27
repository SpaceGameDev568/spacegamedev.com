import {useState} from "react";
import '../../styles/global.css'

function SidebarToggleButton() {

  const [state, setState] = useState("Collapsed");

  const sidebarButton = document.getElementById('material-icon') as HTMLButtonElement;
  const sidebar = document.getElementById('sidebar') as HTMLSpanElement;

  function toggleSidebar() {

    if(state === "Collapsed") {
      expandSidebar()
    } else {
      collapseSidebar()
    }
  }

  function expandSidebar() {
    setState("Expanded");
    sidebar.style.left = '0px';
    sidebar.style.transition = '800ms cubic-bezier(0.34, 1.56, 0.64, 1)';
    sidebarButton.innerHTML = 'close';
  }

  function collapseSidebar() {
    setState("Collapsed");
    sidebar.style.left = sidebar.style.width;
    sidebar.style.transition = '800ms cubic-bezier(0.36, 0, 0.66, -0.56)';
    sidebarButton.innerHTML = 'menu';
  }

  document.addEventListener('astro:after-swap', event => {
    if (state === "Expanded") {
      collapseSidebar();
    }
  });

  return (
      <>
          <button className={"material-symbols-rounded text-base p-2 text-white mt-1 ml-1 hover:bg-blue-500 duration-300 rounded-lg bg-transparent select-none hover:ring-4 hover:ring-blue-500/50 cursor-pointer border-[1px] border-white/10"} title={"Toggle Sidebar"} onClick={toggleSidebar} id={"material-icon"}>menu</button>
      </>
  )

}

export default SidebarToggleButton;