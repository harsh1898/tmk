import './Content.css';
const Content = () => {

  const features = [
    "Auto ON/OFF Operation",
    "Manual and Auto Modes",
    "LED Indicators",
    "Elegant Design",
    "Corrosion-free Sensors",
    "Easy Installation"
  ];

  const benefits = [
    {
      title: "💧 Save Water",
      description: "Efficient water management prevents water wastage."
    },
    {
      title: "⚡ Save Electricity",
      description: "Reduces unnecessary pump operation, saving energy."
    },
    {
      title: "⏰ Save Time",
      description: "Automated operation day and night without manual support."
    },
    {
      title: "🛠️ Save Motor Life",
      description: "Dry-run protection ensures longer service life of the motor."
    },
    {
      title: "💸 Save Money",
      description: "Compatible with all types of water motor control panels."
    }
  ];
    return (
        <>
         <div className="container py-5">
   <div className="text-center mb-5">
     <h2 data-aos="fade-up">Why Choose Our Controller?</h2>
     <p data-aos="fade-up" data-aos-delay="100">Built for convenience, compatibility, and efficiency.</p>
   </div>

   <div className="row text-center">
     <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="200">
       <i className="bi bi-cpu fs-1 text-primary"></i>
       <h5 className="mt-3">Fully Automatic</h5>
       <p>Zero manual effort. Just plug and play.</p>
     </div>

     <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="400">
       <i className="bi bi-speedometer2 fs-1 text-success"></i>
       <h5 className="mt-3">Real-time Monitoring</h5>
       <p>Track water levels and motor health instantly.</p>
     </div>

     <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="600">
       <i className="bi bi-house-check fs-1 text-warning"></i>
       <h5 className="mt-3">Versatile Use</h5>
       <p>Works for homes, buildings, and farms.</p>
     </div>
   </div>
 </div>

 <section className="features-section">
  <h2 className="features-title" data-aos="fade-up">Key Features</h2>
  <div className="features-grid">
    {features.map((feature, index) => (
      <div
        key={index}
        className="feature-card"
        data-aos="zoom-in"
        data-aos-delay={100 * index}
      >
        <span className="feature-icon">✅</span>
        <p>{feature}</p>
      </div>
    ))}
  </div>
</section>


<section className="benefits-section">
  <h2 className="benefits-title" data-aos="fade-up">Smart Benefits</h2>
  <div className="benefits-grid">
    {benefits.map((benefit, index) => (
      <div
        className="benefit-card"
        key={index}
        data-aos="zoom-in"
        data-aos-delay={100 * index}
      >
        <h3>{benefit.title}</h3>
        <p>{benefit.description}</p>
      </div>
    ))}
  </div>
</section>

</>
);
}

export default Content;