import './Testimonials.css';
const testimonialsData = [
  {
    quote: "Creative Studio transformed our brand identity completely. Their attention to detail and creative vision exceeded our expectations. The team was professional, responsive, and delivered exceptional results.",
    name: "Sarah Johnson",
    title: "Marketing Director, TechStart Inc.",
  },
  {
    quote: "Working with Creative Studio was an absolute pleasure. They took our vision and brought it to life in ways we never imagined. The website they created has significantly improved our online presence.",
    name: "Michael Chen",
    title: "CEO, Innovation Labs",
  },
  {
    quote: "The photography work done by Creative Studio is simply outstanding. They captured the essence of our products perfectly, and the images have greatly enhanced our marketing campaigns.",
    name: "Emily Rodriguez",
    title: "Founder, EcoFriendly Co.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section testimonials-section">
      <h2 className="section-title">What Our Clients Say</h2>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p className="quote">"{testimonial.quote}"</p>
            <div className="client-info">
              <div>
                <p className="client-name">{testimonial.name}</p>
                <p className="client-title">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;