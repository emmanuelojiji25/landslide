import "./Sidebar.scss";

// Sidebar.jsx
const Sidebar = ({
  isSidebarOpen,
  chosenTemplate,
  setChosenTemplate,
  view,
}) => {
  const index = view - 1;
  const selected = chosenTemplate[index];
  const Settings = selected?.settingsComponent;

  const updateSelected = (patch) => {
    setChosenTemplate((prev) =>
      prev.map((sec, i) =>
        i === index
          ? {
              ...sec,
              ...patch,
              // merge nested style if present
              style: { ...(sec.style || {}), ...(patch.style || {}) },
            }
          : sec
      )
    );
  };

  return (
    <aside className={`Sidebar ${isSidebarOpen}`}>
      <h2>{selected?.name ?? "—"}</h2>
      {Settings ? (
        <Settings selected={selected} updateSelected={updateSelected} />
      ) : (
        <p>No settings for this section.</p>
      )}
    </aside>
  );
};

export default Sidebar;
