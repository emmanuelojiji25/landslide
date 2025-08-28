import "./Hero.scss";

const Hero = ({ title, subheading, style }) => {
  return (
    <section className="Hero section" style={style}>
      <div className="hero-content">
        <h1 type="text">{title}</h1>
        <p>{subheading}</p>
      </div>
    </section>
  );
};

export default Hero;

export const HeroSettings = ({ setChosenTemplate }) => {

  const handleUpdateStyle = (property, setting) => {
    setChosenTemplate((prev) =>
      prev.map((section) =>
        section.type === "hero"
          ? {
              ...section,
              style: {
                ...section.style,
                [property]: setting,
              },
            }
          : section
      )
    );
    console.log("clicked");
  };

  const handleUpdateText = () => {
    
  }

  const settings = {
    alignItems: [
      { setting: "start", label: "left" },
      { setting: "center", label: "center" },
      { setting: "end", label: "right" },
    ],
    textAlign: [
      { setting: "left", label: "left" },
      { setting: "center", label: "center" },
      { setting: "right", label: "right" },
    ],
  };
  return (
    <>
      {Object.entries(settings).map(([key, values]) => (
        <>
          <h2>{key}:</h2>
          {values.map((setting) => (
            <p
              key={setting.setting}
              onClick={() => handleUpdateStyle(key, setting.setting)}
            >
              {setting.label}
            </p>
          ))}
        </>
      ))}
    </>
  );
};
