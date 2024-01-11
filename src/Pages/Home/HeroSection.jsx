
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Andy Reyes</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Student</span> <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I am currently a Junior at University of Arizona
            <br /> pursuing a BS in Computer Science.
          </p>
        </div>
          <Link to={`https://www.linkedin.com/in/andrew-reyes-158307290`}>
          <button className="btn btn-primary">Get In Touch</button>
          </Link>
        </div>
      <div className="hero--section--img">
        <img src="./img/hero_section_resize.png" alt="Hero Section" />
      </div>
    </section>
  );
}
