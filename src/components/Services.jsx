import { useState } from 'react'; // 1. Import useState
import './Services.css';
import { FaPaintBrush, FaTags, FaCamera } from 'react-icons/fa';
import ServiceModal from './ServiceModal'; // 2. Import the new modal component
import webDesignImg from '../assets/service-web-design.jpg'
import brandingImg from '../assets/service-branding.jpg';
import photographyImg from '../assets/service-photography.jpg';

// 3. Add more details to our data, including an image and technologies
const servicesData = [
  {
    icon: <FaPaintBrush />,
    title: 'Web Design',
    description: 'Creating stunning, user-friendly websites that convert visitors into customers.',
    image: webDesignImg,
    details: 'Our web design process focuses on creating a seamless user experience with a robust backend. We use modern technologies to build fast, responsive, and scalable websites that perfectly match your brand identity.',
    technologies: ['React', 'Node.js', 'Vite', 'MongoDB']
  },
  {
    icon: <FaTags />,
    title: 'Branding',
    description: 'Developing unique brand identities that resonate with your target audience.',
    image: brandingImg,
    details: 'We help you build a strong brand identity from the ground up, including logo design, color palettes, typography, and brand guidelines to ensure consistency across all platforms.',
    technologies: ['Figma', 'Adobe Illustrator', 'Canva']
  },
  {
    icon: <FaCamera />,
    title: 'Photography',
    description: 'Professional photography services for products, events, and portraits.',
    image: photographyImg,
    details: 'Our professional photographers capture high-quality images that tell your story. We specialize in product photography, corporate events, and professional headshots.',
    technologies: ['Adobe Lightroom', 'Photoshop', 'Capture One']
  },
];

const Services = () => {
  // 4. Add state to track which service is selected for the modal
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <section id="services" className="section">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              {/* 5. Update the button to open the modal onClick */}
              <button className="btn" onClick={() => openModal(service)}>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Conditionally render the modal if a service is selected */}
      {selectedService && (
        <ServiceModal service={selectedService} onClose={closeModal} />
      )}
    </>
  );
};

export default Services;