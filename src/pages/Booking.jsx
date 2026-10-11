import React, { useState } from "react";

function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
async function handleSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const data = new FormData(form);

  const booking = {
    customerName: data.get("fullName"),
    phone: data.get("phone"),
    email: data.get("email"),
    service: data.get("service"),
    artist: data.get("artist") || "Any available artist",
    appointmentDate: data.get("date"),
    appointmentTime: data.get("time"),
    notes: data.get("notes"),
    status: "Pending"
  };

  try {
    const response = await fetch("http://localhost:8080/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(booking)
    });

    if (!response.ok) {
      throw new Error("Could not save booking");
    }

    setSubmitted(true);
    form.reset();
  } catch (error) {
    alert("Booking could not be saved. Please check the backend.");
    console.error(error);
  }
}

return (
  <div className="booking-page">
    <section className="booking-section">
      <div className="booking-heading">
        <p className="eyebrow">BEAUTY · STYLE · CONFIDENCE</p>
        <h1>Book Your <span>Makeover</span></h1>
        <p>
          Choose your preferred service, artist, date and time.
          We look forward to making you feel beautiful!
        </p>
      </div>

    {submitted ? (
      <div className="booking-success">
        <h2>Thank you for your booking request! ✨</h2>
        <p>
          Your form has been submitted successfully.
          Please contact the salon to confirm your appointment.
        </p>
        <button
          type="button"
          className="primary-button"
          onClick={() => setSubmitted(false)}
        >
          Book Another Appointment
        </button>
      </div>
    ) : (
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="service">Select Service</label>
          <select id="service" name="service" defaultValue="" required>
            <option value="" disabled>Choose a service</option>
            <option value="makeup">Professional Makeup</option>
            <option value="hair">Hair Styling</option>
            <option value="nails">Nail Care</option>
            <option value="bridal">Bridal Makeover</option>
            <option value="skincare">Skincare</option>
            <option value="package">Complete Makeover Package</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="artist">Preferred Artist</label>
          <select id="artist" name="artist" defaultValue="">
            <option value="">Any available artist</option>
            <option value="ananya">Ananya Sharma</option>
            <option value="priya">Priya Verma</option>
            <option value="meera">Meera Patel</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="date">Preferred Date</label>
          <input
            id="date"
            name="date"
            type="date"
            min={new Date().toISOString().split("T")[0]}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Preferred Time</label>
          <select id="time" name="time" defaultValue="" required>
            <option value="" disabled>Choose a time</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="12:00">12:00 PM</option>
            <option value="13:00">1:00 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="15:00">3:00 PM</option>
            <option value="16:00">4:00 PM</option>
            <option value="17:00">5:00 PM</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="notes">Additional Notes (Optional)</label>
          <textarea
            id="notes"
            name="notes"
            rows="4"
            placeholder="Tell us about your preferred look or occasion"
          />
        </div>
        <button type="submit" className="primary-button" disabled={saving}>
  {saving ? "Saving Booking..." : "Submit Booking Request"}
</button>
{error && <p className="booking-error">{error}</p>}
      </form>
    )}
  </section>
</div>

);
}

export default Booking;