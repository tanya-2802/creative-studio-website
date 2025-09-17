import './ServiceModal.css';
import { FaTimes } from 'react-icons/fa';

const ServiceModal = ({ service, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        <img src={service.image} alt={service.title} className="modal-image" />
        <div className="modal-body">
          <h2 className="modal-title">{service.title}</h2>
          <p className="modal-details">{service.details}</p>
          <h3>Technologies Used:</h3>
          <div className="tech-tags">
            {service.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;