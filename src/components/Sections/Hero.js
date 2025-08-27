import "./Hero.scss";

const Hero = ({ title, subheading, style }) => {
  return (
    <section className="Hero section" style={style}>
      <h1 type="text">{title}</h1>
      <p>{subheading}</p>
    </section>
  );
};

export default Hero;

export const HeroSettings = ({ setChosenTemplate }) => {
  const handleTextAlign = (direction) => {
    setChosenTemplate((prev) =>
      prev.map((section) =>
        section.type === "hero"
          ? {
              ...section,
              style: {
                ...section.style,
                alignItems: direction,
              },
            }
          : section
      )
    );
  };
  return (
    <>
      <h2>Text Align:</h2>
      <p>Left</p>
      <p onClick={() => handleTextAlign("center")}>Center</p>
      <p>Right</p>
      <h2>Background color:</h2>
    </>
  );
};
