import "./Sidebar.scss";

const Sidebar = ({
  isSidebarOpen,
  chosenTemplate,
  setChosenTemplate,
  view,
}) => {
  const selected = chosenTemplate[view - 1];

  const Component = selected?.settingsComponent;
  return (
    <aside className={`Sidebar ${isSidebarOpen}`}>
      <h2>{selected.name}</h2>

      {Component && (
        <Component
          chosenTemplate={chosenTemplate}
          setChosenTemplate={setChosenTemplate}
        />
      )}
    </aside>
  );
};

export default Sidebar;
