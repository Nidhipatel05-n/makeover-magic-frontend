function Home() {
  return (
    <main>
      <section className="hero-section">
        <p className="eyebrow">BEAUTY · STYLE · CONFIDENCE</p>
        <h1>
          Our <span>Magic.</span>
        </h1>
        <p>
          Discover talented makeup artists and professional salon
          services designed to make you look and feel your absolute best.
        </p>
        <a href="/booking" className="primary-button">
          Book Your Makeover
        </a>
        <a href="/services" className="secondary-button">
          Explore Services
        </a>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <div className="service-grid">
          <article className="service-card">
            <div className="service-icon">💄</div>
            <h3>Professional Makeup</h3>
            <p>Beautiful makeup for parties, weddings and special occasions.</p>
          </article>

          <article className="service-card">
            <div className="service-icon">💇‍♀️</div>
            <h3>Hair Styling</h3>
            <p>Beautiful hairstyles to match your outfit and personality.</p>
          </article>

          <article className="service-card">
            <div className="service-icon">💅</div>
            <h3>Nail Care</h3>
            <p>Elegant nail services to complete your look.</p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Home;