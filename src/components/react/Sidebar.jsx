import '../../styles/sidebar.scss';

function Sidebar() {

  return (
      <>
        <div className="sidebar" id={"sidebar"}>
          <button className={"sidebarButton"}> Home </button>

          <button className={"sidebarButton"}> About </button>
        </div>
      </>
)

}

export default Sidebar;