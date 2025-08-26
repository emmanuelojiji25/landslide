import { useEffect, useState } from "react";
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

  const handleScroll = (direction) => {
    if (direction === "previous") {
      if (view > 0) {
        setView(view - 1);
      }
    }

    if (direction === "next") {
      if (view < sections.length) {
        setView(view + 1);
      }
    }
    console.log(view);
  };

  useEffect(() => {
    console.log(sections.length);
  });

  const registry = { hero: Hero, aboutUs: AboutUs };

  return (
    <div className="Editor">
      <div className="editor-left">
        <div className="controls">
          <p onClick={() => handleScroll("previous")}>up</p>
          <p onClick={() => handleScroll("next")}>down</p>
          <p onClick={() => setIsSidebarOpen(!isSidebarOpen)}>sidebar</p>
        </div>
        <div
          className="carousel"
          style={{ transform: `translateY(-${view * 100 - 100}%)` }}
        >
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
