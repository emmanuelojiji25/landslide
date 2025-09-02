import { useEffect, useState } from "react";
import "./Hero.scss";

const Hero = ({ title, subheading, style }) => {
  return (
    <section className="Hero section" style={style}>
      <div className="hero-content">
        <h1 type="text">{title || "Your heading"}</h1>
        <p>{subheading}</p>
      </div>
    </section>
  );
};

export default Hero;

export const HeroSettings = ({ selected, updateSelected }) => {
  const settings = {
    alignItems: [
      { setting: "start", label: "top/left" },
      { setting: "center", label: "center" },
      { setting: "end", label: "bottom/right" },
    ],
    textAlign: [
      { setting: "left", label: "left" },
      { setting: "center", label: "center" },
      { setting: "right", label: "right" },
    ],
  };

  return (
    <>
      <h3>Heading</h3>
      <input
        type="text"
        value={selected.title || ""}
        onChange={(e) => updateSelected({ title: e.target.value })}
      />

      <h3>Subheading</h3>
      <textarea
        value={selected.subheading || ""}
        onChange={(e) => updateSelected({ subheading: e.target.value })}
      />

      {Object.entries(settings).map(([key, options]) => (
        <div key={key}>
          <h3>{key}</h3>
          {options.map((opt) => (
            <button
              key={opt.setting}
              onClick={() => updateSelected({ style: { [key]: opt.setting } })}
            >
              {opt.label}
            </button>
          ))}
        </div>
      ))}
    </>
  );
};
