function Contact() {
  return (
    <main className="contact-page">
      <section className="page-heading">
        <p className="eyebrow">WE'RE HERE FOR YOU</p>
        <h1>Contact <span>Us</span></h1>
        <p>
          Have questions or need help choosing a beauty service?
          We'd love to hear from you.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-card">
          <div className="contact-icon">📍</div>
          <h2>Visit Us</h2>
          <p>Visit our salon for your beauty and makeover needs.</p>
          <p>Please contact us for our salon address.</p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">📞</div>
          <h2>Call Us</h2>
          <p>Contact our team to ask about services and appointments.</p>
          <p>Please add your salon phone number here.</p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">✉️</div>
          <h2>Email Us</h2>
          <p>Send us your questions and appointment enquiries.</p>
          <p>Please add your salon email address here.</p>
        </div>
      </section>

      <section className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault();
            alert("Thank you! Your message form is ready to be connected.");
          }}
        >
          <label htmlFor="contact-name">Your Name</label>
          <input
            id="contact-name"
            type="text"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="contact-email">Your Email</label>
          <input
            id="contact-email"
            type="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="contact-message">Your Message</label>
          <textarea
            id="contact-message"
            placeholder="How can we help you?"
            rows="5"
            required
          />

          <button type="submit" className="primary-button">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;