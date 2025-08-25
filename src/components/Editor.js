import { useState } from "react";
import "./Editor.scss";
import AboutUs from "./Sections/AboutUs";
import Hero from "./Sections/Hero";
import Sidebar from "./Sidebar";

const Editor = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [view, setView] = useState(1);
  const sections = [
    {
      id: 1,
      type: "hero",
      title: "The new product in town",
      subheading: "Hero Subheading",
      style: {
        alignItems: "left",
      },
    },

    {
      id: 2,
      type: "aboutUs",
      title: "About us",
      text: "We are a great company",
    },
  ];

  const registry = { hero: Hero, aboutUs: AboutUs };
  return (
    <div className="Editor">
      <div className="editor-left">
        <p onClick={() => setIsSidebarOpen(!isSidebarOpen)}>sidebar</p>
        <div className="screen-width">
          {sections.map((section) => {
            const Component = registry[section.type];

            return <Component {...section} />;
          })}
        </div>
      </div>
      <Sidebar isSidebarOpen={isSidebarOpen ? "open" : "closed"} />
    </div>
  );
};

export default Editor;
