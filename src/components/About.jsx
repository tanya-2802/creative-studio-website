import './About.css';
import AboutImg from '../assets/about-img.jpg'; // Comment this out if you don't have the image

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="about-container">
        <div className="about-image">
          {/* If you don't have the image, you can temporarily remove the <img> tag */}
          <img src={AboutImg} alt="Our team working" />
        </div>
        <div className="about-content">
          <h2>About Our Studio</h2>
          <p>
            Creative Studio is a team of passionate professionals dedicated to turning your visions into reality. We specialize in creating stunning and functional digital experiences that captivate your audience and elevate your brand.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;