function Services() {
  const services = [
    {
      icon: "💄",
      title: "Professional Makeup",
      description:
        "Professional makeup for parties, weddings, photoshoots, and special occasions.",
      price: "Starting at ₹1,500",
    },
    {
      icon: "💇‍♀️",
      title: "Hair Styling",
      description:
        "Beautiful hairstyles designed to match your outfit and personality.",
      price: "Starting at ₹800",
    },
    {
      icon: "💅",
      title: "Nail Care",
      description:
        "Elegant manicure and nail services to complete your look.",
      price: "Starting at ₹500",
    },
    {
      icon: "👰",
      title: "Bridal Makeup",
      description:
        "A stunning bridal look for your special day.",
      price: "Starting at ₹5,000",
    },
    {
      icon: "✨",
      title: "Skincare",
      description:
        "Relaxing skincare and facial services for a refreshed look.",
      price: "Starting at ₹1,000",
    },
    {
      icon: "💆‍♀️",
      title: "Salon Packages",
      description:
        "Personalized beauty packages for your complete makeover.",
      price: "Contact us for pricing",
    },
  ];

  return (
    <main className="services-page">
      <section className="page-heading">
        <p className="eyebrow">BEAUTY · STYLE · CONFIDENCE</p>
        <h1>Our <span>Services</span></h1>
        <p>
          Discover professional beauty services designed to make
          you look and feel your absolute best.
        </p>
      </section>

      <section className="services-section">
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <p className="service-price">{service.price}</p>
              <a href="/booking" className="primary-button">
                Book Now
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Services;