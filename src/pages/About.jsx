function About() {
  return (
    <main className="about-page">
      <section className="page-heading">
        <p className="eyebrow">BEAUTY · STYLE · CONFIDENCE</p>
        <h1>About <span>Makeover Magic</span></h1>
        <p>
          Helping everyone feel beautiful and confident through
          personalized beauty services.
        </p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <div className="about-icon">💖</div>
          <h2>Our Mission</h2>
          <p>
            Our mission is to help every client feel confident,
            beautiful, and comfortable through personalized beauty
            services tailored to their unique style.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">✨</div>
          <h2>Why Choose Us?</h2>
          <p>
            We focus on professional service, attention to detail,
            quality products, and a welcoming salon experience.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">💄</div>
          <h2>Our Expertise</h2>
          <p>
            From bridal and party makeup to hairstyling and nail care,
            we help you find the right look for every occasion.
          </p>
        </div>
      </section>

      <section className="home-cta">
        <h2>Let's Create Your Perfect Look</h2>
        <p>Your beauty, your style, your confidence.</p>
        <a href="/booking" className="primary-button">
          Book Now
        </a>
      </section>
    </main>
  );
}

export default About;