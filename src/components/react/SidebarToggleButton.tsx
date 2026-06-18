import {useState} from "react";
import '@styles/global.css'

function SidebarToggleButton() {

  const [state, setState] = useState('menu');
  const sidebar = document.getElementById('sidebar') as HTMLSpanElement;

  function toggleSidebar() {

    if(state === 'menu') {
      expandSidebar()
    } else {
      collapseSidebar()
    }
  }

  function expandSidebar() {
    setState(state === 'menu' ? 'close' : 'menu');
    sidebar.style.left = '0px';
    sidebar.style.transition = '800ms cubic-bezier(0.34, 1.56, 0.64, 1)';
  }

  function collapseSidebar() {
    setState(state === 'menu' ? 'close' : 'menu');
    sidebar.style.left = sidebar.style.width;
    sidebar.style.transition = '800ms cubic-bezier(0.36, 0, 0.66, -0.56)';
  }

  document.addEventListener('astro:after-swap', event => {
      collapseSidebar();
  });

  return (
      <>
        <button className={"material-symbols-rounded w-auto h-full aspect-square text-white hover:bg-spacegamedev-primary duration-300 bg-transparent select-none hover:ring-4 hover:ring-spacegamedev-primary/50 cursor-pointer border-r border-white/10"} title={"Toggle Sidebar"} onClick={toggleSidebar} id={"material-icon"}>{state}</button>
      </>
  )

}

export default SidebarToggleButton;