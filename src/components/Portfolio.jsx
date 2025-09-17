import { useState } from 'react'; // 1. Import useState
import './Portfolio.css';
import PortfolioModal from './PortfolioModal'; // 2. Import the new modal component

// Import your portfolio images
import portfolio1 from '../assets/portfolio-1.jpg';
import portfolio2 from '../assets/portfolio-2.jpg';
import portfolio3 from '../assets/portfolio-3.jpg';
import portfolio4 from '../assets/portfolio-4.jpg';
import portfolio5 from '../assets/portfolio-5.jpg';
import portfolio6 from '../assets/portfolio-6.jpg';

// 3. Expand the portfolio data with details for the modal
const portfolioItems = [
  {
    img: portfolio1,
    title: 'E-commerce Platform',
    category: 'Web Design',
    description: 'A modern e-commerce platform with seamless user experience and robust backend functionality.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    img: portfolio2,
    title: 'Brand Identity Guide',
    category: 'Branding',
    description: 'A comprehensive brand identity guide including logo, color palette, and typography for a new startup.',
    technologies: ['Figma', 'Illustrator']
  },
  {
    img: portfolio3,
    title: 'Vintage Camera Product Shoot',
    category: 'Photography',
    description: 'High-quality product photography for a marketing campaign, focusing on a clean, minimalist aesthetic.',
    technologies: ['Photoshop', 'Lightroom']
  },
  {
    img: portfolio4,
    title: 'Social Media Mobile App',
    category: 'Web Design',
    description: 'UI/UX design and development for a new social media application on iOS and Android.',
    technologies: ['React Native', 'Firebase']
  },
  {
    img: portfolio5,
    title: 'Data Analytics Dashboard',
    category: 'Web Design',
    description: 'A web-based dashboard for visualizing and analyzing complex business intelligence data.',
    technologies: ['Vue.js', 'D3.js', 'PostgreSQL']
  },
  {
    img: portfolio6,
    title: 'Corporate Event Coverage',
    category: 'Photography',
    description: 'Full-day event photography coverage for a major corporate conference and awards ceremony.',
    technologies: ['Capture One', 'Final Cut Pro']
  },
];

const Portfolio = () => {
  // 4. Add state to track the selected portfolio item
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <section id="portfolio" className="section">
        <h2 className="section-title">Our Portfolio</h2>
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            // 5. Add onClick to open the modal for the clicked item
            <div className="portfolio-item" key={index} onClick={() => openModal(item)}>
              <img src={item.img} alt={item.title} />
              <div className="portfolio-overlay">
                <p>View Project</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Conditionally render the modal if an item is selected */}
      {selectedItem && (
        <PortfolioModal item={selectedItem} onClose={closeModal} />
      )}
    </>
  );
};

export default Portfolio;