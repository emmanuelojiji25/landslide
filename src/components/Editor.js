import { useEffect, useState } from "react";
import "./Editor.scss";
import AboutUs from "./Sections/AboutUs";
import Hero from "./Sections/Hero";
import Sidebar from "./Sidebar";
import { landingPageSections } from "./templates/landingPage";
import { story } from "./templates/story";

const Editor = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [view, setView] = useState(1);

  const templates = {
    landingPage: landingPageSections,
    story: story,
  };

  const [chosenTemplate, setChosenTemplate] = useState(templates.landingPage);

  const sections = { hero: Hero, aboutUs: AboutUs };

  const handleScroll = (direction) => {
    if (direction === "previous") {
      if (view > 0) {
        setView(view - 1);
      }
    }

    if (direction === "next") {
      if (view < chosenTemplate.length) {
        setView(view + 1);
      }
    }
    console.log(view);
  };

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
          {chosenTemplate.map((section) => {
            const Component = sections[section.type];

            return <Component {...section} />;
          })}
        </div>
      </div>
      <Sidebar
        isSidebarOpen={isSidebarOpen ? "open" : "closed"}
        chosenTemplate={chosenTemplate}
        setChosenTemplate={setChosenTemplate}
        view={view}
      />
    </div>
  );
};

export default Editor;
