import "./Sidebar.scss";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <aside className={`Sidebar ${isSidebarOpen}`}>
      <h1>aside</h1>
      <h3>Text Align</h3>
      <span onClick={null}>left</span>
      <span>center</span>
      <span>right</span>
    </aside>
  );
};

export default Sidebar;
