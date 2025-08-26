import "./Hero.scss";

const Hero = ({ title, subheading, style }) => {
  return (
    <section className="Hero section" style={style}>
      <h1 type="text">Title</h1>
      <p>{subheading}</p>
    </section>
  );
};

export default Hero;
