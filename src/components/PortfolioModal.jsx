import './PortfolioModal.css';
import { FaTimes } from 'react-icons/fa';

const PortfolioModal = ({ item, onClose }) => {
  return (
    <div className="portfolio-modal-overlay" onClick={onClose}>
      <div className="portfolio-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="portfolio-close-button" onClick={onClose}>
          <FaTimes />
        </button>
        <img src={item.img} alt={item.title} className="portfolio-modal-image" />
        <div className="portfolio-modal-body">
          <h2 className="portfolio-modal-title">{item.title}</h2>
          <p className="portfolio-modal-category">{item.category}</p>
          <p className="portfolio-modal-details">{item.description}</p>
          <h3>Technologies Used:</h3>
          <div className="portfolio-tech-tags">
            {item.technologies.map((tech, index) => (
              <span key={index} className="portfolio-tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioModal;